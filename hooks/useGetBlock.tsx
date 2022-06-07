import useSynthetixQueries from "@synthetixio/queries";
import { useEffect, useState } from "react";
import useGetTime from "./useGetTime";

interface Blocks  {
    currentBlock: number
    oneDayAgoBlock: number
    twoDayAgoBlock: number
    threeDayAgoBlock: number
    fourDayAgoBlock: number
    fiveDayAgoBlock: number
    sixDayAgoBlock: number
    tenDayAgoBlock: number
    fifteenDayAgoBlock: number
    twentyDayAgoBlock: number
    twentyFiveDayAgoBlock: number
    thirtyDayAgoBlock: number

    fourHourAgoBlock:number
    eightHourAgoBlock:number
    twelveHourAgoBlock:number
    sixteenHourAgoBlock:number
    twentyHourAgoBlock:number
    twentyFourHourAgoBlock:number
}

const useGetBlock = () => {

  const { times } = useGetTime()
  const [blockNum, setBlockNum] = useState<number[]>([])
  const [weekBlockNum, setWeekBlockNum] = useState<number[]>([])
  const [monthBlockNum, setMonthBlockNum] = useState<number[]>([])

  // start data collection at 5 minutes ago to allow data sync

  const ts = Math.floor((Date.now() / 1e3)-300);

    const { subgraph } = useSynthetixQueries()

    const currentBlock = subgraph.useGetRateUpdates(
      { first:1, orderBy:"timestamp", orderDirection:"desc", where:{
        timestamp_lt:ts,
      }},
      { timestamp:true, block:true},
    )

    const fourHourAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc", where:{
          timestamp_lt:times.fourHourAgo,
        }},
        { timestamp:true, block:true}
      )

      const eightHourAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc", where:{
          timestamp_lt:times.eightHourAgo,
        }},
        { timestamp:true, block:true}
      )

      const twelveHourAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc", where:{
          timestamp_lt:times.twelveHourAgo,
        }},
        { timestamp:true, block:true}
      )

      const sixteenHourAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc", where:{
          timestamp_lt:times.sixteenHourAgo,
        }},
        { timestamp:true, block:true}
      )

      const twentyHourAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc", where:{
          timestamp_lt:times.twentyHourAgo,
        }},
        { timestamp:true, block:true}
      )

      const twentyFourHourAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc", where:{
          timestamp_lt:times.twentyFourHourAgo,
        }},
        { timestamp:true, block:true}
      )

      //week blocks, current and one day pulled from daily block, starts at day2

      const twoDayAgoBlock = subgraph.useGetRateUpdates(
          { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
              timestamp_lt:times.twoDayAgo
          }},
          { timestamp:true, block:true}
      )

      

      const threeDayAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.threeDayAgo
        }},
        { timestamp:true, block:true}
    )

    const fourDayAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.fourDayAgo
        }},
        { timestamp:true, block:true}
    )

    const fiveDayAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.fiveDayAgo
        }},
        { timestamp:true, block:true}
    )

   

    const sixDayAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.sixDayAgo
        }},
        { timestamp:true, block:true}
    )


    // month block num, current and 5 pulled from week, starts at 10

    const tenDayAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.tenDayAgo
        }},
        { timestamp:true, block:true}
    )


   

    const fifteenDayAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.fifteenDayAgo
        }},
        { timestamp:true, block:true}
    )

    

    const twentyDayAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.twentyDayAgo
        }},
        { timestamp:true, block:true}
    )

   

    const twentyFiveDayAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.twentyFiveDayAgo
        }},
        { timestamp:true, block:true}
    )

    

    const thirtyDayAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.thirtyDayAgo
        }},
        { timestamp:true, block:true}
    )

   useEffect(() => {
    
    const blockNum:number[] = []
    const weekBlockNum:number[] = []
    const monthBlockNum:number[] = []
   
    currentBlock.isSuccess &&
      currentBlock.data.forEach(item => {
          blockNum.push(item.block.toNumber())
      })
      
        fourHourAgoBlock.isSuccess &&
        fourHourAgoBlock.data.forEach(item => {
          blockNum.push(item.block.toNumber())
        })
  
      eightHourAgoBlock.isSuccess &&
      eightHourAgoBlock.data.forEach(item => {
        blockNum.push(item.block.toNumber())

      })
  
      twelveHourAgoBlock.isSuccess &&
      twelveHourAgoBlock.data?.forEach(item => {
        blockNum.push(item.block.toNumber())

      })
  
      sixteenHourAgoBlock.isSuccess &&
      sixteenHourAgoBlock.data?.forEach(item => {
        blockNum.push(item.block.toNumber())

      })
  
      twentyHourAgoBlock.isSuccess &&
      twentyHourAgoBlock.data?.forEach(item => {
        blockNum.push(item.block.toNumber())

      })
  
      twentyFourHourAgoBlock.isSuccess &&
      twentyFourHourAgoBlock.data?.forEach(item => {
        blockNum.push(item.block.toNumber())
      })

      twoDayAgoBlock.isSuccess &&
      twoDayAgoBlock.data?.forEach(item => {
        weekBlockNum.push(item.block.toNumber())
      })

    threeDayAgoBlock.isSuccess &&
    threeDayAgoBlock.data?.forEach(item => {
      weekBlockNum.push(item.block.toNumber())
    })

    fourDayAgoBlock.isSuccess &&
    fourDayAgoBlock.data?.forEach(item => {
      weekBlockNum.push(item.block.toNumber())
    })

    fiveDayAgoBlock.isSuccess &&
    fiveDayAgoBlock.data?.forEach(item => {
      weekBlockNum.push(item.block.toNumber())
    })

    sixDayAgoBlock.isSuccess &&
    sixDayAgoBlock.data?.forEach(item => {
      weekBlockNum.push(item.block.toNumber())
    })

    tenDayAgoBlock.isSuccess &&
    tenDayAgoBlock.data?.forEach(item => {
      monthBlockNum.push(item.block.toNumber())
    })

    fifteenDayAgoBlock.isSuccess &&
    fifteenDayAgoBlock.data?.forEach(item => {
      monthBlockNum.push(item.block.toNumber())
    })

    twentyDayAgoBlock.isSuccess &&
    twentyDayAgoBlock.data?.forEach(item => {
      monthBlockNum.push(item.block.toNumber())
    })

    twentyFiveDayAgoBlock.isSuccess &&
    twentyFiveDayAgoBlock.data?.forEach(item => {
      monthBlockNum.push(item.block.toNumber())
    })

    thirtyDayAgoBlock.isSuccess &&
    thirtyDayAgoBlock.data?.forEach(item => {
      monthBlockNum.push(item.block.toNumber())
    })

    setBlockNum(blockNum)
    setWeekBlockNum(weekBlockNum)
    setMonthBlockNum(monthBlockNum)
    
   }, [
     currentBlock.data,
     fourHourAgoBlock.data,
     eightHourAgoBlock.data,
     twelveHourAgoBlock.data,
     sixteenHourAgoBlock.data,
     twentyHourAgoBlock.data,
     twentyFourHourAgoBlock.data,
     twoDayAgoBlock.data,
     threeDayAgoBlock.data,
     fourDayAgoBlock.data,
     fiveDayAgoBlock.data,
     sixDayAgoBlock.data,
     tenDayAgoBlock.data,
     fifteenDayAgoBlock.data,
     twentyDayAgoBlock.data,
     twentyFiveDayAgoBlock.data,
     thirtyDayAgoBlock.data

     ])
   
      

    

    

  return {
      blockNum,
      weekBlockNum,
      monthBlockNum,
      currentBlock,
      fourHourAgoBlock,
      eightHourAgoBlock,
      twelveHourAgoBlock,
      sixteenHourAgoBlock,
      twentyHourAgoBlock,
      twentyFourHourAgoBlock,
      twoDayAgoBlock,
      threeDayAgoBlock,
      fourDayAgoBlock,
      fiveDayAgoBlock,
      sixDayAgoBlock,
      tenDayAgoBlock,
      fifteenDayAgoBlock,
      twentyDayAgoBlock,
      twentyFiveDayAgoBlock,
      thirtyDayAgoBlock
  }
}

export default useGetBlock