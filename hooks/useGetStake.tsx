import useSynthetixQueries from "@synthetixio/queries";
import useGetSNXrate from "./useGetSNXrate";
import { formatNumber, formatMoney, formatPercent } from "../constants/format";
import { useEffect, useState } from "react";


// staking, apy, inflation,

const useGetStake = () => {
  //staking
  const [stakeAmount, setStateAmount] = useState();
  const [stakedVal, setStakedVal] = useState<string>();
  const [percentStaked, setPercentStaked] = useState<string>();

  //apy
  const [percentAPY, setPercentAPY] = useState<string>();




  const [totalCollateral, setTotalCollateral] = useState<string>();
  const [totalSnxHolders, setTotalSnxHolders] = useState();
  const [issuers, setIssuers] = useState<number>();

  //inflation
  const [currentReward, setCurrentReward] = useState<string>();
  const [allTimeInflation, setAllTimeInflation] = useState<string>();
  const [inflationData, setInflationData] = useState<any[]>();
  const [startTime, setStartTime] = useState<number>(0);
  const [fee, setFee] = useState<number>();

  const { subgraph } = useSynthetixQueries();

  const snxRateCall = useSynthetixQueries().subgraph.useGetLatestRateById(
    { id: "SNX" },
    { rate: true }
  );

  const totalSnxCall = subgraph.useGetSynthetixById(
    { id: "1" },
    { issuers: true, snxHolders: true }
  );

  useEffect(() => {
    if (totalSnxCall.isSuccess) {
      const snxIssuers = totalSnxCall.data.issuers.toNumber();
      setIssuers(snxIssuers);
    }
  }, [totalSnxCall.isSuccess]);

  const totalSnxSupplyCall = subgraph.useGetSynths(
    { where: { symbol: "SNX" } },
    { totalSupply: true }
  );

  const totalSnxStakerCall = subgraph.useGetSNXHolders(
    {
      orderBy: "collateral",
      orderDirection: "desc",
      where: { initialDebtOwnership_not: 0 },
      first: issuers,
    },
    { collateral: true, transferable: true },
    { enabled: Boolean(issuers) }
  );

  const currentFeePeriods = subgraph.useGetFeePeriods(
    { orderBy: "startTime", orderDirection: "desc", first: 7 },
    {
      feesClaimed: true,
      feesToDistribute: true,
      startTime: true,
      rewardsClaimed: true,
      rewardsToDistribute: true,
    }
  );

  useEffect(() => {
    if (
      totalSnxCall.isSuccess &&
      totalSnxSupplyCall.isSuccess &&
      totalSnxStakerCall.isSuccess &&
      currentFeePeriods.isSuccess &&
      snxRateCall.isSuccess
    ) {

    const snxRate = snxRateCall.data.rate.toNumber();

    // snx staked box 

      const totalSnxSupply = totalSnxSupplyCall.data[0].totalSupply.toNumber();

      const totalCollateral = totalSnxStakerCall.data.reduce(
        (sum: number, cur: any) => {
          return sum + cur.collateral.toNumber();
        },
        0
      );

      const totalStaked = formatNumber.format(totalCollateral)

      const stakedVal = formatMoney.format(totalCollateral * snxRate);

      const percentStaked = `${(totalCollateral / totalSnxSupply)
        .toFixed(2)
        .substring(2)}%`;


      
      setTotalCollateral(totalStaked);
      setStakedVal(stakedVal);

      

      setPercentStaked(percentStaked)

    //// current period start time (imported to trade tables - look at instead importing the data call)

    const startTime = currentFeePeriods.data[0].startTime.toNumber();

      setStartTime(startTime);


    // inflation

      const reward = currentFeePeriods.data[0].rewardsToDistribute.toNumber();

      const fmtReward = formatNumber.format(reward)

      setCurrentReward(fmtReward);

      const fee = currentFeePeriods.data[0].feesToDistribute.toNumber();


      const rewardsAmount = currentFeePeriods.data.reduce((sum: any, current: any) => {
          return sum + current.rewardsToDistribute.toNumber();
        }, 0);

        const fmtRewardsAmt = formatNumber.format(rewardsAmount)

      setAllTimeInflation(fmtRewardsAmt);

      const inflationData =
        currentFeePeriods.isSuccess &&
        currentFeePeriods.data
          ?.map((item) => {
            return { snx_rewards: item.rewardsToDistribute.toNumber() };
          })
          .reverse();

      setInflationData(inflationData);

      // apy calc

      const APYcalc = (fee / (snxRate * totalCollateral) * 52 + (reward / totalCollateral) * 52)

      const APY = formatPercent.format(APYcalc)

      setPercentAPY(APY);

    }
  }, [totalSnxCall.data, totalSnxSupplyCall.data, totalSnxStakerCall.data, currentFeePeriods.data]);

  return {
    stakeAmount,
    stakedVal,
    percentStaked,
    totalCollateral,
    totalSnxHolders,
    percentAPY,
    currentReward,
    allTimeInflation,
    startTime,
    inflationData,
    currentFeePeriods
  };
};

export default useGetStake;
