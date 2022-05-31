import useSynthetixQueries from "@synthetixio/queries";
import useGetAPY from "./useGetAPY";
import { formatNumber, formatMoney } from "../constants/format";

const useGetTradeActivity = () => {
  const { subgraph } = useSynthetixQueries();
  const { startTime } = useGetAPY();

  // const [currentTable, setCurrentTable] = useState<any[]>([])

  //const currentEpochTime = startTime + 604800

  // all time trade info

  const tradeDataCall = subgraph.useGetExchangePartners(
    { orderBy: "usdVolume", orderDirection: "desc" },
    { id: true, usdVolume: true, usdFees: true, trades: true }
  );

  const tradeDataArr: any[] = [];

  tradeDataCall.data?.forEach((item) => {
    const obj = {
      col1: item.id,
      col2: formatNumber.format(item.trades.toNumber()),
      col3: formatMoney.format(item.usdVolume.toNumber()),
    };
    tradeDataArr.push(obj);
  });

  const totalTradesSum = tradeDataCall.isSuccess
    ? tradeDataCall.data?.reduce((sum, cur) => {
        return sum + cur.trades.toNumber();
      }, 0)
    : 0;

  const totalVolSum = tradeDataCall.isSuccess
    ? tradeDataCall.data?.reduce((sum, cur) => {
        return sum + cur.usdVolume.toNumber();
      }, 0)
    : 0;

  const totalTrades = formatNumber.format(totalTradesSum);
  const totalVol = formatMoney.format(totalVolSum);

  //current epoch

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

  const currentTotalTradeArr: number[] = [];
  const currentTotalVolArr: number[] = [];

  const currentFilter = currentEpochTradeData.data?.forEach((item) => {
    currentTotalTradeArr.push(item.trades.toNumber());
    currentTotalVolArr.push(item.usdVolume.toNumber());
    const id = item.partner.toString();
    const trades = formatNumber.format(item.trades.toNumber());
    const volume = formatMoney.format(item.usdVolume.toNumber());
    const obj = {
      col1: id,
      col2: trades,
      col3: volume,
    };
    currentTradeDataArr.push(obj);
  });

  const currentEpochData = currentTradeDataArr.reduce((acc, cur) => {
    if (acc[cur.col1]) {
      acc[cur.col1].col2 = acc[cur.col1].col2 + cur.col2;
      acc[cur.col1].col3 = acc[cur.col1].col3 + cur.col3;
    } else {
      acc[cur.col1] = cur;
    }

    return cur;

    return acc;
  }, []);

  const currentTotalTradeSum = currentTotalTradeArr.reduce(
    (sum, current) => sum + current,
    0
  );
  const currentTotalVolSum = currentTotalVolArr.reduce(
    (sum, current) => sum + current,
    0
  );

  const currentTotalTrades = formatNumber.format(currentTotalTradeSum);
  const currentTotalVol = formatMoney.format(currentTotalVolSum);

  return {
    tradeDataArr,
    currentEpochData,
    totalTrades,
    totalVol,
    currentTotalTrades,
    currentTotalVol,
    currentEpochTradeData,
    tradeDataCall,
  };
};

export default useGetTradeActivity;

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
