import useSynthetixQueries from "@synthetixio/queries";
import { formatNumber, formatMoney } from "../constants/format";
import { getDailyExchangePartners, getExchangePartners, getFeePeriods } from "../subgraph-ovm";

const mainnet_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/mainnet-main"
const optimism_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main"

export const activa = async() => {
  
    const getStartTime = async(network:string) => {
    const currentFeePeriods = await getFeePeriods(
    network,
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
    return startTime
    }

    const startTimeOvm = await getStartTime(optimism_url)
    const startTimeMain = await getStartTime(mainnet_url)


    const fetchTradeData = async(network:string) => {
        const tradeDataCall = await getExchangePartners(
            network,
          { orderBy: "usdVolume", orderDirection: "desc" },
          { id: true, usdVolume: true, usdFees: true, trades: true }
        );
      
        const tradeDataArr: any[] = [];
        const tradeFeeArr: any[] = [];
      
        tradeDataCall.forEach((item) => {
          const obj = {
            col1: item.id === undefined ? null : item.id,
            col2: item.trades.toNumber(),
            col3: item.usdVolume.toNumber(),
          };
          tradeDataArr.push(obj);
          const feeObj = {
            name: item.id,
            value: item.usdFees.toNumber(),
          };
          tradeFeeArr.push(obj);
        });
      
        const totalTrades = tradeDataCall.reduce((sum, cur) => {
              return sum + cur.trades.toNumber();
            }, 0)
      
        const totalVol = tradeDataCall.reduce((sum, cur) => {
              return sum + cur.usdVolume.toNumber();
            }, 0)
         
      
  
      return {
          tradeDataArr,
          tradeFeeArr,
          totalTrades,
          totalVol
      }
  }


    const tradeOvm = await fetchTradeData(optimism_url)
    const tradeDataOvm = tradeOvm.tradeDataArr
    const totalVolOvm = tradeOvm.totalVol
    const totalTradeOvm = tradeOvm.totalTrades
    const totalFeeOvm = tradeOvm.tradeFeeArr

    const tradeMain = await fetchTradeData(mainnet_url)
    const tradeDataMain = tradeMain.tradeDataArr
    const totalVolMain = tradeMain.totalVol
    const totalTradeMain = tradeMain.totalTrades
    const totalFeeMain = tradeMain.tradeFeeArr

  //const totalTrades = formatNumber.format(totalTradesSum);
 // const totalVol = formatMoney.format(totalVolSum);


  //current epoch

  const fetchCurrentTrade = async(network:string, startTime:number) => {
  const currentEpochTradeData = await getDailyExchangePartners(
      network,
    {
      where: { timestamp_gte: startTime },
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

  const currentTradeNum = currentEpochTradeData.reduce((sum, cur) => {
        return sum + cur.trades.toNumber();
      }, 0)

  const currentVol = currentEpochTradeData.reduce((sum, cur) => {
        return sum + cur.usdVolume.toNumber();
      }, 0)

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

    return {
        currentTradeStats,
        currentTradeNum,
        currentVol,
        currentFeeData,
    }
  }

  const currentTradeOvm = await fetchCurrentTrade(optimism_url, startTimeOvm)
    const currentTradeDataOvm = currentTradeOvm.currentTradeStats
    const currentTotalVolOvm = currentTradeOvm.currentVol
    const currentTotalTradeOvm = currentTradeOvm.currentTradeNum
    const currentTotalFeeOvm = currentTradeOvm.currentFeeData

    const currentTradeMain = await fetchCurrentTrade(mainnet_url, startTimeMain)
    const currentTradeDataMain = currentTradeMain.currentTradeStats
    const currentTotalVolMain = currentTradeMain.currentVol
    const currentTotalTradeMain = currentTradeMain.currentTradeNum
    const currentTotalFeeMain = currentTradeMain.currentFeeData

    // create the all networks data

    const allCurrentTradeDataArr = [...currentTradeDataOvm, ...currentTradeDataMain]
    const allTotalTradeDataArr = [...tradeDataOvm, ...tradeDataMain]

    const allCurrentTradeData = allCurrentTradeDataArr.reduce((acc, cur) => {
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

      console.log(allCurrentTradeData)

      const allTotalTradeData = allTotalTradeDataArr.reduce((acc, cur) => {
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

      console.log(allTotalTradeData)

  return {
      allCurrentTradeData,
      allTotalTradeData,
      tradeDataMain,
      totalVolMain,
      totalTradeMain,
      totalFeeMain,
      tradeDataOvm,
      totalVolOvm,
      totalTradeOvm,
      totalFeeOvm,
      currentTradeDataMain,
      currentTotalVolMain,
      currentTotalTradeMain,
      currentTotalFeeMain,
      currentTradeDataOvm,
      currentTotalVolOvm,
      currentTotalTradeOvm,
      currentTotalFeeOvm
   
  };
};