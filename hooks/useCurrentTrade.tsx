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
        { staleTime:Infinity}
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

  

  
        

    const ceKwentaVolArr:number[] = []
    const ceKwentaTradeArr:number[] = []
    const ceDhedgeVolArr:number[] = []
    const ceDhedgeTradeArr:number[] = []
    const ce1InchVolArr:number[] = []
    const ce1InchTradeArr:number[] = []
    const ceZeroVolArr:number[] = []
    const ceZeroTradeArr:number[] = []


    currentTradeDataArr.filter(item=>{
      return item.col1 === "KWENTA"
    }).forEach(item=>{
      ceKwentaTradeArr.push(item.col2)
      ceKwentaVolArr.push(item.col3)
    })

    const kwentaVolSum = ceKwentaVolArr.reduce((sum, current)=>sum+current,0)

    const kwentaTradeSum = ceKwentaTradeArr.reduce((sum, current)=>sum+current,0)
  

    //dhedge

    const currentEpochDhedge = currentEpochTradeData.data?.filter(item=>{
      return item.partner === "DHEDGE"
    })

   const dhedgeFilter = currentEpochDhedge?.forEach(item=>{
      ceDhedgeVolArr.push(item.usdVolume.toNumber())
      ceDhedgeTradeArr.push(item.trades.toNumber())
    })

    const dhedgeVolSum = ceDhedgeVolArr.reduce((sum, current)=>sum+current,0)
    const dhedgeTradeSum = ceDhedgeTradeArr.reduce((sum, current)=>sum+current,0)

    //zero

    const currentEpochZero = currentEpochTradeData.data?.filter(item=>{
      return item.partner === "0"
    })

   const zeroFilter = currentEpochZero?.forEach(item=>{
      ceZeroVolArr.push(item.usdVolume.toNumber())
      ceZeroTradeArr.push(item.trades.toNumber())
    })

    const zeroVolSum = ceZeroVolArr.reduce((sum, current)=>sum+current,0)
    const zeroTradeSum = ceZeroTradeArr.reduce((sum, current)=>sum+current,0)

    //1INCH

    
    const currentEpoch1Inch = currentEpochTradeData.data?.filter(item=>{
      return item.partner === "1INCH"
    })

   const oneInchFilter = currentEpoch1Inch?.forEach(item=>{
      ce1InchVolArr.push(item.usdVolume.toNumber())
      ce1InchTradeArr.push(item.trades.toNumber())
    })

    const oneInchVolSum = ceDhedgeVolArr.reduce((sum, current)=>sum+current,0)
    const oneInchTradeSum = ceDhedgeTradeArr.reduce((sum, current)=>sum+current,0)




    const currentData = [
      {
        col1: "KWENTA",
        col2: kwentaTradeSum,
        col3: kwentaVolSum,
      },
      {
        col1: "DHEDGE",
        col2: dhedgeTradeSum,
        col3: dhedgeVolSum,
      },
      {
        col1: "1INCH",
        col2: oneInchTradeSum,
        col3: oneInchVolSum,
      },
      {
        col1: "0",
        col2: zeroTradeSum,
        col3: zeroVolSum
      }
    ]

   
  

  
    
  

   
console.log('ohno')
    


  return {
      realResult
       
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