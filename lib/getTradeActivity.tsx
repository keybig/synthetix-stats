import useSynthetixQueries from "@synthetixio/queries";
import { formatNumber, formatMoney } from "../constants/format";
import { getDailyExchangePartners, getExchangePartners, getFeePeriods } from "../subgraph-ovm";

const mainnet_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/mainnet-main"
const optimism_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main"

export const getTradeActivity = async() => {
  
    const currentFeePeriods = await getFeePeriods(
    optimism_url,
  { orderBy: "startTime", orderDirection: "desc", first: 7 },
  {
    feesClaimed: true,
    feesToDistribute: true,
    startTime: true,
    rewardsClaimed: true,
    rewardsToDistribute: true,
  }
);

    const startTime = currentFeePeriods[0].startTime.toNumber()


  // all time trade info

  const tradeDataCall = await getExchangePartners(
      optimism_url,
    { orderBy: "usdVolume", orderDirection: "desc" },
    { id: true, usdVolume: true, usdFees: true, trades: true }
  );

  const tradeDataArr: any[] = [];

  tradeDataCall.forEach((item) => {
    const obj = {
      col1: item.id,
      col2: formatNumber.format(item.trades.toNumber()),
      col3: formatMoney.format(item.usdVolume.toNumber()),
    };
    tradeDataArr.push(obj);
  });

  const totalTrades = tradeDataCall.reduce((sum, cur) => {
        return sum + cur.trades.toNumber();
      }, 0)

  const totalVol = tradeDataCall.reduce((sum, cur) => {
        return sum + cur.usdVolume.toNumber();
      }, 0)

  //const totalTrades = formatNumber.format(totalTradesSum);
 // const totalVol = formatMoney.format(totalVolSum);

  console.log(`tradedataarr: ${tradeDataArr}`)
  console.log(`totalTrades: ${totalTrades}`)
  //current epoch

  const currentEpochTradeData = await getDailyExchangePartners(
      optimism_url,
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
    },
  );

  const currentTradeDataArr: any[] = [];

  currentEpochTradeData.forEach((item) => {
    const obj = {
      col1: item.partner.toString(),
      col2: item.trades.toNumber(),
      col3: item.usdVolume.toNumber(),
    };
    currentTradeDataArr.push(obj);
  });

  const currentTradeStats = currentTradeDataArr.reduce((acc, cur) => {
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

  const currentTrade = currentEpochTradeData.reduce((sum, cur) => {
        return sum + cur.trades.toNumber();
      }, 0)

  const currentVol = currentEpochTradeData.reduce((sum, cur) => {
        return sum + cur.usdVolume.toNumber();
      }, 0)

  //const currentTotalTrades = formatNumber.format(currentTradeSum);
  //const currentTotalVol = formatMoney.format(currentVolSum);

  // all time fees

  const tradeFeeArr: any[] = [];

  tradeDataCall.forEach((item) => {
    const obj = {
      name: item.id,
      value: item.usdFees.toNumber(),
    };
    tradeFeeArr.push(obj);
  });

  // current fees

  const currentFeeDataArr: any[] = [];

  currentEpochTradeData.forEach((item) => {
    const obj = {
      name: item.partner,
      value: item.usdFees.toNumber(),
    };
    currentFeeDataArr.push(obj);
  });

  const currentFeeData = currentFeeDataArr.reduce((sum, cur) => {
    const { name, value } = cur;
    const item = sum.find((it: { name: string }) => it.name === name);
    item ? (item.value += value) : sum.push({ name, value });
    return sum;
  }, []);

  const totalFeeSum = currentEpochTradeData.reduce((sum, cur) => {
        return sum + cur.usdFees.toNumber();
      }, 0)


  const currentFeeSum = currentEpochTradeData.reduce((sum, cur) => {
        return sum + cur.usdFees.toNumber();
      }, 0)
  return {
    tradeDataArr,
    currentTradeStats,
    totalTrades,
    totalVol,
    currentTrade,
    currentVol,
    tradeFeeArr,
    currentFeeData,
    totalFeeSum,
    currentFeeSum
  };
};

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
