import { getFeePeriods, getLatestRateById, getSNXHolders, getSynthetixById, getSynths } from "../subgraph-ovm";

// staking, apy, inflation

export const stakit = async () => {
    const mainnet_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/mainnet-main"
    const optimism_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main"

    const snxRateCall = await getLatestRateById(
        optimism_url,
        { id: "SNX" },
        { rate: true }
    );

    const snxRate = snxRateCall.rate.toNumber()

    const fetchSnxInfo = async (network: string) => {
        const snxAll = await getSynthetixById(
            network,
            {
                id: "1",
            },
            {
                issuers: true,
                snxHolders: true
            },
        )

        const issuers = snxAll.issuers.toNumber()
        const snxHolders = snxAll.issuers.toNumber()

        return {
            issuers,
            snxHolders
        }
    }

    const snxOvm = await fetchSnxInfo(optimism_url)
    const issuersOvm = snxOvm.issuers
    const holdersOvm = snxOvm.snxHolders
    console.log(issuersOvm)

    const snxMain = await fetchSnxInfo(mainnet_url)
    const issuersMain = snxMain.issuers
    const holdersMain = snxMain.snxHolders
    console.log(issuersMain)

    const snxHolderTotal = async (network: string, holders: number) => {
        const snxHolderTotal = await getSNXHolders(
            network,
            {
                orderBy: 'balanceOf',
                orderDirection: 'desc',
                first: holders,
            }, {
            id: true,
            balanceOf: true,
        }
        );

        const totalSupply = snxHolderTotal.reduce((sum: number, cur: any) => {
            return sum + cur.balanceOf.toNumber()
        }, 0)

        return totalSupply

    }

    const totalSupplyOvm = await snxHolderTotal(optimism_url, holdersOvm)
    const totalSupplyMain = await snxHolderTotal(mainnet_url, holdersMain)

    const snxStakerCall = async (network: string, issuers: number) => {
        const snxStakerTotal = await getSNXHolders(
            network,
            {
                orderBy: 'collateral',
                orderDirection: 'desc',
                first: issuers,
                where: { initialDebtOwnership_not: 0 }

            }, {
            id: true,
            collateral: true,
        }
        );

        const totalStake = snxStakerTotal.reduce((sum: number, cur: any) => {
            return sum + cur.collateral.toNumber()
        }, 0)

        return totalStake

    }

    const totalStakeOvm = await snxStakerCall(optimism_url, issuersOvm)
    const totalStakeMain = await snxStakerCall(mainnet_url, issuersMain)
    const totalStakeAll = totalStakeMain + totalStakeOvm

    const stakeValueOvm = totalStakeOvm * snxRate
    const stakeValueMain = totalStakeMain * snxRate
    const stakeValueAll = totalStakeAll * snxRate





    const percentStakedMain = totalStakeMain / totalSupplyMain
    const percentStakedOvm = totalStakeOvm / totalSupplyOvm
    const percentStakedAll = (totalStakeMain + totalStakeOvm) / (totalSupplyMain + totalSupplyOvm)
    console.log(`percent all: ${percentStakedAll}`)






    //const APYcalc = (fee / (snxRate * totalCollateral) * 52 + (reward / totalCollateral) * 52)

    //inflation

    const snxFeePeriods = async (network: string) => {
        const currentFeePeriods = await getFeePeriods(
            network,
            { orderBy: "startTime", orderDirection: "desc", first: 1000 },
            {
                feesClaimed: true,
                feesToDistribute: true,
                startTime: true,
                rewardsClaimed: true,
                rewardsToDistribute: true,
            }
        );

        const reward = currentFeePeriods[0].rewardsToDistribute.toNumber();

        const rewardsAmount = currentFeePeriods.reduce((sum: number, current) => {
            return sum + current.rewardsToDistribute.toNumber();
        }, 0);



        const inflationData = currentFeePeriods.slice(0, 7).map((item) => {
            return { snx_rewards: item.rewardsToDistribute.toNumber() };
        }).reverse();


        // APY
        const fee = currentFeePeriods[0].feesToDistribute.toNumber();


        return {
            reward,
            rewardsAmount,
            inflationData,
            fee
        }

    }

    const ovmFeePeriod = await snxFeePeriods(optimism_url)
    const mainFeePeriod = await snxFeePeriods(mainnet_url)

    const rewardOvm = ovmFeePeriod.reward
    const rewardMain = mainFeePeriod.reward

    const rewardsAmountOvm = ovmFeePeriod.rewardsAmount
    const rewardsAmountMain = mainFeePeriod.rewardsAmount

    const inflationDataOvm = ovmFeePeriod.inflationData
    const inflationDataMain = mainFeePeriod.inflationData

    const feeOvm = ovmFeePeriod.fee
    const feeMain = mainFeePeriod.fee


    // Inflation



    const apyOvm = (feeOvm / (snxRate * totalStakeOvm) * 52 + (rewardOvm / totalStakeOvm) * 52)
    const apyMain = (feeOvm / (snxRate * totalStakeMain) * 52 + (rewardMain / totalStakeMain) * 52)
    const apyAvg = (apyMain + apyOvm) / 2




    return {
        percentStakedMain,
        percentStakedOvm,
        percentStakedAll,
        totalStakeAll,
        totalStakeOvm,
        totalStakeMain,
        stakeValueAll,
        stakeValueMain,
        stakeValueOvm,
        apyOvm,
        apyMain,
        apyAvg,
        rewardMain,
        rewardOvm,
        rewardsAmountMain,
        rewardsAmountOvm,
        inflationDataMain,
        inflationDataOvm

    }

}



