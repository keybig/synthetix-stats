import { formatPercentDec } from "../constants/format";
import { getDailyExchangePartners, getExchangePartners } from "../subgraph-ovm";
import getTime from "./getTime";



const { times } = getTime()

const mainnet_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/mainnet-main"
const optimism_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main"

export const activa = async() => {


    const fetchTradeData = async(network:string) => {
        const tradeDataCall = await getExchangePartners(
            network,
          { orderBy: "usdVolume", orderDirection: "desc", where:{usdVolume_gt:100} },
          { id: true, usdVolume: true, usdFees: true, trades: true }
        );
      
        const tradeDataArrTemp: any[] = [];
        const tradeFeeArrTemp: any[] = [];
      1
        tradeDataCall.forEach((item) => {
          if (item.usdVolume.toNumber() > 500000) {           
          const obj = {
            col1: item.id === undefined ? null : item.id === "0" ? "LYRA" : item.id,
            col2: item.trades.toNumber(),
            col3: item.usdVolume.toNumber(),
          };
          tradeDataArrTemp.push(obj);
          const feeObj = {
            name: item.id === undefined ? null : item.id === "0" ? "LYRA" : item.id,
            value: item.usdFees.toNumber(),
          };
          tradeFeeArrTemp.push(feeObj);
        }
          else {
            const obj = {
              col1: "OTHER",
              col2: item.trades.toNumber(),
              col3: item.usdVolume.toNumber(),
            };
            tradeDataArrTemp.push(obj);
            const feeObj = {
              name: "OTHER",
              value: item.usdFees.toNumber(),
            };
            tradeFeeArrTemp.push(feeObj);
          }
        });

        // reduce other in tradeDataArr and tradeFeeArr

        const tradeDataArr = tradeDataArrTemp.reduce((acc, cur) => {
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

        const tradeFeeArrPrep = tradeFeeArrTemp.reduce((acc, cur) => {
          const { name, value, } = cur;
        const item = acc.find((it: { name: string }) => it.name === name);
        if (item) {
          item.value += value;
        } else {
          acc.push({ name, value, });
        }
        return acc;
      }, []);

        //
      
        const totalTrades = tradeDataCall.reduce((sum, cur) => {
              return sum + cur.trades.toNumber();
            }, 0)
      
        const totalVol = tradeDataCall.reduce((sum, cur) => {
              return sum + cur.usdVolume.toNumber();
            }, 0)

        const totalFee = tradeDataCall.reduce((sum, cur) => {
          return sum + cur.usdFees.toNumber();
        }, 0)

        const tradeFeeArr = tradeFeeArrPrep.map((e:any)=>{
          const percentCalc = e.value / totalFee
          const percent = formatPercentDec.format(percentCalc)
          return {
            name: e.name,
            value: e.value,
            percent: percent,
          }
        })

         
      
  
      return {
          tradeDataArr,
          tradeFeeArr,
          totalTrades,
          totalVol,
          totalFee
      }
  }


    const tradeOvm = await fetchTradeData(optimism_url)
    const tradeDataOvm = tradeOvm.tradeDataArr
    const totalVolOvm = tradeOvm.totalVol
    const totalTradeOvm = tradeOvm.totalTrades
    const totalFeeOvm = tradeOvm.tradeFeeArr
    const feeCollectOvm = tradeOvm.totalFee

    const tradeMain = await fetchTradeData(mainnet_url)
    const tradeDataMain = tradeMain.tradeDataArr
    const totalVolMain = tradeMain.totalVol
    const totalTradeMain = tradeMain.totalTrades
    const totalFeeMain = tradeMain.tradeFeeArr
    const feeCollectMain = tradeMain.totalFee

    const feeCollectAll = feeCollectMain + feeCollectOvm

  


    // Daily, 7 day, 30 day, 90 day 

    const fetchDayTrade = async(network:string, startTime:number) => {
      const dayEpochTradeData = await getDailyExchangePartners(
          network,
        {
          where: { 
            timestamp_gte: startTime
           },
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
    
      const dayTradeDataArr: any[] = [];
    
      dayEpochTradeData.forEach((item) => {
        const partner = item.partner === undefined ? null : item.partner === "0" ? "LYRA" : item.partner
        const obj = {
          col1: partner,
          col2: item.trades.toNumber(),
          col3: item.usdVolume.toNumber(),
        };
        dayTradeDataArr.push(obj);
      });
    
      const dayTradeStats = dayTradeDataArr.reduce((acc, cur) => {
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
    
      const dayTradeNum = dayEpochTradeData.reduce((sum, cur) => {
            return sum + cur.trades.toNumber();
          }, 0)
    
      const dayVol = dayEpochTradeData.reduce((sum, cur) => {
            return sum + cur.usdVolume.toNumber();
          }, 0)
      
      const dayTotalFee = dayEpochTradeData.reduce((sum, cur) => {
        return sum + cur.usdFees.toNumber();
      }, 0)
    
        const dayFeeDataArr: any[] = [];
    
        dayEpochTradeData.forEach((item) => {
          const partner = item.partner === undefined ? null : item.partner === "0" ? "LYRA" : item.partner
            const obj = {
              name:  partner,
              value: item.usdFees.toNumber(),
            };
           dayFeeDataArr.push(obj);
          });
        
        const dayFeeDataPrep = dayFeeDataArr.reduce((sum, cur) => {
            const { name, value } = cur;
            const item = sum.find((it: { name: string }) => it.name === name);
            item ? (item.value += value) : sum.push({ name, value });
            return sum;
          }, []);

        const dayFeeData = dayFeeDataPrep.map((e:any)=>{
          const percent = formatPercentDec.format(e.value / dayTotalFee)
          return {
            name: e.name,
            value: e.value,
            percent: percent,
          }
        })
    
        
    
        
    
        return {
            dayTradeStats,
            dayTradeNum,
            dayVol,
            dayFeeData,
            dayTotalFee
        }
      }

     // Daily
     const dailyTradeOvm = await fetchDayTrade(optimism_url, times.twentyFourHourAgo)
     const dailyTradeDataOvm = dailyTradeOvm.dayTradeStats
     const dailyTotalVolOvm = dailyTradeOvm.dayVol
     const dailyTotalTradeOvm = dailyTradeOvm.dayTradeNum
     const dailyTotalFeeOvm = dailyTradeOvm.dayFeeData
     const dailyFeeCollectOvm = dailyTradeOvm.dayTotalFee
 
     const dailyTradeMain = await fetchDayTrade(mainnet_url, times.twentyFourHourAgo)
     const dailyTradeDataMain = dailyTradeMain.dayTradeStats
     const dailyTotalVolMain = dailyTradeMain.dayVol
     const dailyTotalTradeMain = dailyTradeMain.dayTradeNum
     const dailyTotalFeeMain = dailyTradeMain.dayFeeData
     const dailyFeeCollectMain = dailyTradeMain.dayTotalFee

     


      // 7 day
      const sevenTradeOvm = await fetchDayTrade(optimism_url, times.sevenDayAgo)
        const sevenTradeDataOvm = sevenTradeOvm.dayTradeStats
        const sevenTotalVolOvm = sevenTradeOvm.dayVol
        const sevenTotalTradeOvm = sevenTradeOvm.dayTradeNum
        const sevenTotalFeeOvm = sevenTradeOvm.dayFeeData
        const sevenFeeCollectOvm = sevenTradeOvm.dayTotalFee
    
        const sevenTradeMain = await fetchDayTrade(mainnet_url, times.sevenDayAgo)
        const sevenTradeDataMain = sevenTradeMain.dayTradeStats
        const sevenTotalVolMain = sevenTradeMain.dayVol
        const sevenTotalTradeMain = sevenTradeMain.dayTradeNum
        const sevenTotalFeeMain = sevenTradeMain.dayFeeData
        const sevenFeeCollectMain = sevenTradeMain.dayTotalFee

      // 30 day

      const thirtyTradeOvm = await fetchDayTrade(optimism_url, times.thirtyDayAgo)
        const thirtyTradeDataOvm = thirtyTradeOvm.dayTradeStats
        const thirtyTotalVolOvm = thirtyTradeOvm.dayVol
        const thirtyTotalTradeOvm = thirtyTradeOvm.dayTradeNum
        const thirtyTotalFeeOvm = thirtyTradeOvm.dayFeeData
        const thirtyFeeCollectOvm = thirtyTradeOvm.dayTotalFee
    
        const thirtyTradeMain = await fetchDayTrade(mainnet_url, times.thirtyDayAgo)
        const thirtyTradeDataMain = thirtyTradeMain.dayTradeStats
        const thirtyTotalVolMain = thirtyTradeMain.dayVol
        const thirtyTotalTradeMain = thirtyTradeMain.dayTradeNum
        const thirtyTotalFeeMain = thirtyTradeMain.dayFeeData
        const thirtyFeeCollectMain = thirtyTradeMain.dayTotalFee

      // 90 day

      const ninetyTradeOvm = await fetchDayTrade(optimism_url, times.ninetyDayAgo)
        const ninetyTradeDataOvm = ninetyTradeOvm.dayTradeStats
        const ninetyTotalVolOvm = ninetyTradeOvm.dayVol
        const ninetyTotalTradeOvm = ninetyTradeOvm.dayTradeNum
        const ninetyTotalFeeOvm = ninetyTradeOvm.dayFeeData
        const ninetyFeeCollectOvm = ninetyTradeOvm.dayTotalFee
    
        const ninetyTradeMain = await fetchDayTrade(mainnet_url, times.ninetyDayAgo)
        const ninetyTradeDataMain = ninetyTradeMain.dayTradeStats
        const ninetyTotalVolMain = ninetyTradeMain.dayVol
        const ninetyTotalTradeMain = ninetyTradeMain.dayTradeNum
        const ninetyTotalFeeMain = ninetyTradeMain.dayFeeData
        const ninetyFeeCollectMain = ninetyTradeMain.dayTotalFee

        // all data

        const allTotalTradeDataArr = [...tradeDataOvm, ...tradeDataMain]
        const allTotalTradeFeeArr = [...totalFeeOvm, ...totalFeeMain]

        const allDailyTradeDataArr = [...dailyTradeDataOvm, ...dailyTradeDataMain]
        const allSevenTradeDataArr = [...sevenTradeDataOvm, ...sevenTradeDataMain]
        const allThirtyTradeDataArr = [...thirtyTradeDataOvm, ...thirtyTradeDataMain]
        const allNinetyTradeDataArr = [...ninetyTradeDataOvm, ...ninetyTradeDataMain]

        const allDailyFeeArr = [...dailyTotalFeeOvm, ...dailyTotalFeeMain]
        const allSevenFeeArr = [...sevenTotalFeeOvm, ...sevenTotalFeeMain]
        const allThirtyFeeArr = [...thirtyTotalFeeOvm, ...thirtyTotalFeeMain]
        const allNinetyFeeArr = [...ninetyTotalFeeOvm, ...ninetyTotalFeeMain]

        const allDailyFeeCollect = dailyFeeCollectMain + dailyFeeCollectOvm
        const allSevenFeeCollect = sevenFeeCollectMain + sevenFeeCollectOvm
        const allThirtyFeeCollect = thirtyFeeCollectMain + thirtyFeeCollectOvm
        const allNinetyFeeCollect = ninetyFeeCollectMain + ninetyFeeCollectOvm


    const allDailyTradeData = allDailyTradeDataArr.reduce((acc, cur) => {
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

      const allSevenTradeData = allSevenTradeDataArr.reduce((acc, cur) => {
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

      const allThirtyTradeData = allThirtyTradeDataArr.reduce((acc, cur) => {
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

      const allNinetyTradeData = allNinetyTradeDataArr.reduce((acc, cur) => {
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

      const allTotalFee = allTotalTradeFeeArr.reduce((acc, cur) => {
        const item = acc.find((it: { name: string }) => it.name === cur.name);
        if (item) {
          item.value += cur.value;
          item.percent = formatPercentDec.format((item.value)/feeCollectAll)
        } else {
          cur.percent = formatPercentDec.format((cur.value)/feeCollectAll)
          acc.push(cur);
        }
        return acc;
      }, []);

      const allSevenFee = allSevenFeeArr.reduce((acc, cur) => {
        const item = acc.find((it: { name: string }) => it.name === cur.name);
        if (item) {
          item.value += cur.value;
          item.percent = formatPercentDec.format((item.value)/allSevenFeeCollect)
        } else {
          cur.percent = formatPercentDec.format((cur.value)/allSevenFeeCollect)
          acc.push(cur);
        }
        return acc;
      }, []);

      const allThirtyFee = allThirtyFeeArr.reduce((acc, cur) => {
        const item = acc.find((it: { name: string }) => it.name === cur.name);
        if (item) {
          item.value += cur.value;
          item.percent = formatPercentDec.format((item.value)/allThirtyFeeCollect)
        } else {
          cur.percent = formatPercentDec.format((cur.value)/allThirtyFeeCollect)
          acc.push(cur);
        }
        return acc;
      }, []);

      const allNinetyFee = allNinetyFeeArr.reduce((acc, cur) => {
        const item = acc.find((it: { name: string }) => it.name === cur.name);
        if (item) {
          item.value += cur.value;
          item.percent = formatPercentDec.format((item.value)/allNinetyFeeCollect)
        } else {
          cur.percent = formatPercentDec.format((cur.value)/allNinetyFeeCollect)
          acc.push(cur);
        }

        return acc;
      }, []);

      const allDailyFee = allDailyFeeArr.reduce((acc, cur) => {
        const item = acc.find((it: { name: string }) => it.name === cur.name);
        if (item) {
          item.value += cur.value;
          item.percent = formatPercentDec.format(item.value/allDailyFeeCollect)
        } else {
          cur.percent = formatPercentDec.format(cur.value/allDailyFeeCollect)
          acc.push(cur);
        }
        return acc;
      }, []);

     




  return {
      allTotalTradeData,
      allTotalFee,
      tradeDataMain,
      totalVolMain,
      totalTradeMain,
      totalFeeMain,
      tradeDataOvm,
      totalVolOvm,
      totalTradeOvm,
      totalFeeOvm,
      sevenTradeOvm,
sevenTradeDataOvm,
sevenTotalVolOvm, 
sevenTotalTradeOvm,
sevenTotalFeeOvm,
sevenTradeMain,
sevenTradeDataMain,
sevenTotalVolMain,
sevenTotalTradeMain,
sevenTotalFeeMain,
thirtyTradeOvm,
thirtyTradeDataOvm,
thirtyTotalVolOvm,
thirtyTotalTradeOvm,
thirtyTotalFeeOvm,
thirtyTradeMain,
thirtyTradeDataMain,
thirtyTotalVolMain,
thirtyTotalTradeMain,
thirtyTotalFeeMain,
ninetyTradeOvm,
ninetyTradeDataOvm,
ninetyTotalVolOvm,
ninetyTotalTradeOvm,
ninetyTotalFeeOvm,
ninetyTradeMain,
ninetyTradeDataMain,
ninetyTotalVolMain,
ninetyTotalTradeMain,
ninetyTotalFeeMain,
dailyTradeOvm,
dailyTradeDataOvm,
dailyTotalVolOvm,
dailyTotalTradeOvm,
dailyTotalFeeOvm,
dailyTradeMain,
dailyTradeDataMain,
dailyTotalVolMain,
dailyTotalTradeMain,
dailyTotalFeeMain,
allDailyTradeData,
allSevenTradeData,
allThirtyTradeData,
allNinetyTradeData,
allDailyFee,
allSevenFee,
allThirtyFee,
allNinetyFee,
feeCollectAll,
feeCollectMain,
feeCollectOvm
   
  };
};


