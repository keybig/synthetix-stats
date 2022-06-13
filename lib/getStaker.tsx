import { getFeePeriods, getLatestRateById, getSNXHolders, getSynthetixById, getSynths } from "../subgraph-ovm";

// staking, apy, inflation

export const staking = async () => {
    const mainnet_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/mainnet-main"
    const optimism_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main"

    const snxAll = await getSynthetixById(
        optimism_url,
        {
            id:"1"
        }, {
            issuers:true,
            snxHolders:true
        }
    );

    const issuers = snxAll.issuers.toNumber()
    const snxHolders = snxAll.snxHolders.toNumber()

    const snxHolderTotal = await getSNXHolders(
        optimism_url,
        {
            orderBy: 'balanceOf',
            orderDirection: 'desc',
            first: snxHolders,
        }, {
            id: true,
            balanceOf: true,
        }
    );

    const totalSupply = snxHolderTotal.reduce((sum:number,cur:any)=>{
        return sum + cur.balanceOf.toNumber()
      },0)

    console.log(`the total supply: ${totalSupply}`)

    const snxStakerTotal = await getSNXHolders(
        optimism_url,
        {
            orderBy: 'collateral',
            orderDirection: 'desc',
            first:issuers,
            where:{initialDebtOwnership_not:0}
        }, {
            id: true,
            collateral: true,
        }
    );

    const totalStake = snxStakerTotal.reduce((sum:number,cur:any)=>{
        return sum + cur.collateral.toNumber()
      },0)


console.log(snxStakerTotal.length)
console.log(totalStake)


  const percentStaked = totalStake / totalSupply


  const snxRateCall = await getLatestRateById(
    optimism_url,
    { id: "SNX" },
    { rate: true }
  );

  const snxRate = snxRateCall.rate.toNumber()
  console.log(snxRate)

  //const APYcalc = (fee / (snxRate * totalCollateral) * 52 + (reward / totalCollateral) * 52)

  const currentFeePeriods = await getFeePeriods(
      optimism_url,
    { orderBy: "startTime", orderDirection: "desc", first: 1000 },
    {
      feesClaimed: true,
      feesToDistribute: true,
      startTime: true,
      rewardsClaimed: true,
      rewardsToDistribute: true,
    }
  );

  // Inflation

  const reward = currentFeePeriods[0].rewardsToDistribute.toNumber();

  const rewardsAmount = currentFeePeriods.reduce((sum: number, current) => {
    return sum + current.rewardsToDistribute.toNumber();
  }, 0);



  const inflationData = currentFeePeriods.slice(0,7).map((item) => {
      return { snx_rewards: item.rewardsToDistribute.toNumber() };
    }).reverse();


  // APY
  const fee = currentFeePeriods[0].feesToDistribute.toNumber();

  const apy = (fee / (snxRate * totalStake) * 52 + (reward / totalStake) * 52)
  console.log(apy)



  return {
      percentStaked: percentStaked,
      snxRate: snxRate,
      snxStaked: totalStake,
      reward: reward,
      apy: apy,
      rewardsAmt: rewardsAmount,
      inflationData:inflationData
  }

}



