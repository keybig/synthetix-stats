import useSynthetixQueries from "@synthetixio/queries";
import useGetSNXrate from "./useGetSNXrate";
import { formatNumber, formatMoney } from "../constants/format";

const useGetGlobalStake = () => {
  const { subgraph } = useSynthetixQueries();
  const { snxRate } = useGetSNXrate();

  const totalofSNX = subgraph.useGetSynthetixById(
    { id: "1" },
    { issuers: true, snxHolders: true }
  );

  const totalHolder = totalofSNX.isSuccess
    ? totalofSNX.data.snxHolders.toNumber()
    : 0;

  const totalSnxSupplyQuery = subgraph.useGetSynths(
    { where: { symbol: "SNX" } },
    { totalSupply: true }
  );

  const totalSnxSupply = totalSnxSupplyQuery.isSuccess
    ? totalSnxSupplyQuery.data[0].totalSupply.toNumber()
    : 0;

  const totalSnxHolders = subgraph.useGetSNXHolders(
    {
      orderBy: "collateral",
      orderDirection: "desc",
      where: { initialDebtOwnership_not: 0 },
      first: totalHolder,
    },
    { collateral: true, transferable: true },
    { enabled: Boolean(totalHolder) }
  );

  const totalCollateral = totalSnxHolders.isSuccess
    ? totalSnxHolders.data?.reduce((sum: any, cur: any) => {
        return sum + cur.collateral.toNumber();
      }, 0)
    : 0;

  const stakeAmount = formatNumber.format(totalCollateral);
  const stakedVal = formatMoney.format(totalCollateral * snxRate);
  const percentStaked = `${(totalCollateral / totalSnxSupply)
    .toFixed(2)
    .substring(2)}%`;

  return {
    stakeAmount,
    stakedVal,
    percentStaked,
    totalCollateral
  };
};

export default useGetGlobalStake;
