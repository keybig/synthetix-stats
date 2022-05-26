import useSynthetixQueries from '@synthetixio/queries'
import useGetGlobalStake from './useGetGlobalStake'
import useGetAPY from './useGetAPY'
import { useMemo, useState } from 'react'
import { arrayBuffer } from 'stream/consumers'

type Props = {}

const useGetTradeActivity = () => {

    const { subgraph } = useSynthetixQueries()
    const { startTime } = useGetAPY()

   // const [currentTable, setCurrentTable] = useState<any[]>([])

    //@ts-ignore
    const currentEpochTime = startTime + 604800

    const formatNumber = Intl.NumberFormat("en-US")
    const formatMoney = Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"usd"
    })

    // all time trade info


    const tradeDataCall = subgraph.useGetExchangePartners(
        {orderBy:"usdVolume", orderDirection:"desc"},
        {id:true, usdVolume:true, usdFees:true, trades:true},
    )

    const tradeDataArr:any[] = []

    const totalTradesArr:number[]=[]
    const totalVolArr:number[]=[]

    
   tradeDataCall.data?.forEach(item => {
      totalTradesArr.push(item.trades.toNumber())
      totalVolArr.push(item.usdVolume.toNumber())
      
      const id = item.id
      const trades = formatNumber.format(item.trades.toNumber()).toString()
      const volume = formatMoney.format(item.usdVolume.toNumber()).toString()
      const obj = {
            col1: item.id,
            col2: JSON.stringify(item.trades.toNumber()),
            col3: JSON.stringify(item.usdVolume.toNumber())
        }
      tradeDataArr.push(obj)
    })

    const totalTradesSum = totalTradesArr.reduce((sum,current)=> sum + current, 0)
    const totalVolSum = totalVolArr.reduce((sum,current)=>sum+current,0)

    const totalTrades = formatNumber.format(totalTradesSum)
    const totalVol = formatMoney.format(totalVolSum)

    //current epoch

    const currentEpochTradeData = subgraph.useGetDailyExchangePartners(
      { where:{timestamp_gt:startTime}, orderBy:"timestamp", orderDirection:"desc"},
      { timestamp:true, trades:true, usdFees:true, usdVolume:true, partner:true },
    )

    const currentTradeDataArr:any[] = []

    const currentTotalTradeArr:number[] = []
    const currentTotalVolArr:number[] = []

    const currentFilter = currentEpochTradeData.data?.forEach(item=>{
        currentTotalTradeArr.push(item.trades.toNumber())
        currentTotalVolArr.push(item.usdVolume.toNumber())
        const id = item.partner.toString()
        const trades = item.trades.toNumber()
        const volume = item.usdVolume.toNumber()
        const obj = {
          col1: id,
          col2: trades,
          col3: volume,
        }
        currentTradeDataArr.push(obj)
    })

    const currentEpochData = currentTradeDataArr.reduce((acc, cur) => {
      const {col1, col2, col3} = cur;
      const item = acc.find((it: { col1: string }) => it.col1 === col1);
      item ? item.col2 += col2 : acc.push({col1, col2, col3});
      return acc;
    } , []);

    const currentTotalTradeSum = currentTotalTradeArr.reduce((sum,current)=> sum + current, 0)
    const currentTotalVolSum = currentTotalVolArr.reduce((sum,current)=> sum + current, 0)

    const currentTotalTrades = formatNumber.format(currentTotalTradeSum)
    const currentTotalVol = formatMoney.format(currentTotalVolSum)


  return {
      tradeDataArr,
      currentEpochData,
      totalTrades,
      totalVol,
      currentTotalTrades,
      currentTotalVol,
      currentEpochTradeData
  }
}

export default useGetTradeActivity

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