import useSynthetixQueries from "@synthetixio/queries";
import useGetGlobalStake from "./useGetGlobalStake";
import useGetSNXrate from "./useGetSNXrate";
import { formatNumber, formatPercent } from "../constants/format";

// APY and Inflation

const useGetAPY = () => {
  const { totalCollateral } = useGetGlobalStake();
  const { subgraph } = useSynthetixQueries();
  const { snxRate } = useGetSNXrate();

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

  const startTime = currentFeePeriods.isSuccess
    ? currentFeePeriods.data[0].startTime.toNumber()
    : 0;
  const reward = currentFeePeriods.isSuccess
    ? currentFeePeriods.data[0].rewardsToDistribute.toNumber()
    : 0;
  const fee = currentFeePeriods.isSuccess
    ? currentFeePeriods.data[0].feesToDistribute.toNumber()
    : 0;

  const rewardsAmount = currentFeePeriods.data?.reduce(
    (sum: any, current: any) => {
      return sum + current.rewardsToDistribute.toNumber();
    },
    0
  );

  const stakeAPYAmt =
    (fee / (snxRate * totalCollateral)) * 52 + (reward / totalCollateral) * 52;

  const allTimeInflation = formatNumber.format(rewardsAmount);

  const currentReward = formatNumber.format(reward);

  const APY = formatPercent.format(stakeAPYAmt);

  const inflationData = currentFeePeriods.data
    ?.map((item) => {
      return { snx_rewards: item.rewardsToDistribute.toNumber() };
    })
    .reverse();

  return {
    APY,
    currentReward,
    allTimeInflation,
    startTime,
    inflationData,
  };
};

export default useGetAPY;
