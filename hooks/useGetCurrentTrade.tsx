import useSynthetixQueries from "@synthetixio/queries";
import useGetAPY from "./useGetAPY";
import { formatNumber, formatMoney } from "../constants/format";

const useGetCurrentTrade = () => {
  const { subgraph } = useSynthetixQueries();
  const { startTime } = useGetAPY();
  //@ts-ignore
  // const currentEpochTime = startTime + 604800

  // current trade info

  const currentEpochTradeData = subgraph.useGetDailyExchangePartners(
    {
      where: { timestamp_gt: startTime },
      orderBy: "timestamp",
      orderDirection: "desc",
    },
    {
      timestamp: true,
      trades: true,
      usdFees: true,
      usdVolume: true,
      partner: true,
    }
  );

  const currentTradeDataArr: any[] = [];

  currentEpochTradeData.data?.forEach((item) => {
    const obj = {
      col1: item.partner.toString(),
      col2: item.trades.toNumber(),
      col3: item.usdVolume.toNumber(),
    };
    currentTradeDataArr.push(obj);
  });

  const realResult = currentTradeDataArr.reduce((acc, cur) => {
    const { col1, col2, col3 } = cur;
    const item = acc.find((it: { col1: string }) => it.col1 === col1);
    if (item) {
      item.col2 += col2;
      item.col3 += col3;
    } else {
      acc.push({ col1, col2, col3 });
    }
    return acc;
  }, []);

  const totalTradesSum = currentEpochTradeData.isSuccess
    ? currentEpochTradeData.data?.reduce((sum, cur) => {
        return sum + cur.trades.toNumber();
      }, 0)
    : 0;

  const totalVolSum = currentEpochTradeData.isSuccess
    ? currentEpochTradeData.data?.reduce((sum, cur) => {
        return sum + cur.usdVolume.toNumber();
      }, 0)
    : 0;

  const currentTotalTrades = formatNumber.format(totalTradesSum);
  const currentTotalVol = formatMoney.format(totalVolSum);

  //const totalTradeSum = currentTotalTradeArr.reduce((sum,current)=> sum + current, 0)
  // const totalVolSum = currentTotalVolArr.reduce((sum,current)=> sum + current, 0)

  return {
    realResult,
    currentTotalTrades,
    currentTotalVol,
  };
};

export default useGetCurrentTrade;

/*
{
            col1: 'Lyra',
            col2: '967,543,123',
            col3: '8,000,000,000'
          },
          {
            col1: 'Thales',
            col2: '132,765,432',
            col3: '1,000,000,000'
          },
          {
            col1: 'Kwenta',
            col2: '925,654,321',
            col3: '14,000,000,000'
          },
*/
