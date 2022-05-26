import useSynthetixQueries from '@synthetixio/queries'
import useGetGlobalStake from './useGetGlobalStake'
import useGetAPY from './useGetAPY'
import { useMemo, useState } from 'react'
import { arrayBuffer } from 'stream/consumers'

type Props = {}

const useGetCurrentTrade = () => {

    const { subgraph } = useSynthetixQueries()
    const { startTime } = useGetAPY()
    //@ts-ignore
    const currentEpochTime = startTime + 604800

    // current trade info

    const currentEpochTradeData = subgraph.useGetDailyExchangePartners(
        { where:{timestamp_gt:startTime}, orderBy:"timestamp", orderDirection:"desc"},
        { timestamp:true, trades:true, usdFees:true, usdVolume:true, partner:true },
        { queryKey:"currentEpochTradeData"}
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

  const realResult = currentTradeDataArr.reduce((acc, cur) => {
    const {col1, col2, col3} = cur;
    const item = acc.find((it: { col1: string }) => it.col1 === col1);
    item ? item.col2 += col2 : acc.push({col1, col2, col3});
    return acc;
  } , []);

  const totalTradeSum = currentTotalTradeArr.reduce((sum,current)=> sum + current, 0)
  const totalVolSum = currentTotalVolArr.reduce((sum,current)=> sum + current, 0)


  return {
      realResult,
      totalVolSum
       
  }
}

export default useGetCurrentTrade

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