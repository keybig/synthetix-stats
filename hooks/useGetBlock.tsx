import useSynthetixQueries from "@synthetixio/queries";
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

  const ts = Math.floor(Date.now() / 1e3);


    const blockNum:number[] = []
    const weekBlockNum:number[] = []
    const monthBlockNum:number[] = []

    const { subgraph } = useSynthetixQueries()

    const currentBlock = subgraph.useGetRateUpdates(
      { first:1, orderBy:"timestamp", orderDirection:"desc", where:{
        timestamp_lt:ts,
      }},
      { timestamp:true, block:true}
    )

    currentBlock.data?.forEach(item => {
        blockNum.push(item.block.toNumber())
    })

    
    const fourHourAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc", where:{
          timestamp_lt:times.fourHourAgo,
        }},
        { timestamp:true, block:true}
      )
  
      fourHourAgoBlock.data?.forEach(item => {
        blockNum.push(item.block.toNumber())

      })

      const eightHourAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc", where:{
          timestamp_lt:times.eightHourAgo,
        }},
        { timestamp:true, block:true}
      )
  
      eightHourAgoBlock.data?.forEach(item => {
        blockNum.push(item.block.toNumber())

      })

      const twelveHourAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc", where:{
          timestamp_lt:times.twelveHourAgo,
        }},
        { timestamp:true, block:true}
      )
  
      twelveHourAgoBlock.data?.forEach(item => {
        blockNum.push(item.block.toNumber())

      })

      const sixteenHourAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc", where:{
          timestamp_lt:times.sixteenHourAgo,
        }},
        { timestamp:true, block:true}
      )
  
      sixteenHourAgoBlock.data?.forEach(item => {
        blockNum.push(item.block.toNumber())

      })

      const twentyHourAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc", where:{
          timestamp_lt:times.twentyHourAgo,
        }},
        { timestamp:true, block:true}
      )
  
      twentyHourAgoBlock.data?.forEach(item => {
        blockNum.push(item.block.toNumber())

      })

      const twentyFourHourAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc", where:{
          timestamp_lt:times.twentyFourHourAgo,
        }},
        { timestamp:true, block:true}
      )
  
      twentyFourHourAgoBlock.data?.forEach(item => {
        blockNum.push(item.block.toNumber())
      })

      //week blocks, current and one day pulled from daily block, starts at day2

      const twoDayAgoBlock = subgraph.useGetRateUpdates(
          { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
              timestamp_lt:times.twoDayAgo
          }},
          { timestamp:true, block:true}
      )

      twoDayAgoBlock.data?.forEach(item => {
        weekBlockNum.push(item.block.toNumber())
      })

      const threeDayAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.threeDayAgo
        }},
        { timestamp:true, block:true}
    )

    threeDayAgoBlock.data?.forEach(item => {
      weekBlockNum.push(item.block.toNumber())
    })

    const fourDayAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.fourDayAgo
        }},
        { timestamp:true, block:true}
    )

    fourDayAgoBlock.data?.forEach(item => {
      weekBlockNum.push(item.block.toNumber())
    })

    const fiveDayAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.fiveDayAgo
        }},
        { timestamp:true, block:true}
    )

    fiveDayAgoBlock.data?.forEach(item => {
      weekBlockNum.push(item.block.toNumber())
    })

    const sixDayAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.sixDayAgo
        }},
        { timestamp:true, block:true}
    )

    sixDayAgoBlock.data?.forEach(item => {
      weekBlockNum.push(item.block.toNumber())
    })

    // month block num, current and 5 pulled from week, starts at 10

    const tenDayAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.tenDayAgo
        }},
        { timestamp:true, block:true}
    )

    tenDayAgoBlock.data?.forEach(item => {
      monthBlockNum.push(item.block.toNumber())
    })

    const fifteenDayAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.fifteenDayAgo
        }},
        { timestamp:true, block:true}
    )

    fifteenDayAgoBlock.data?.forEach(item => {
      monthBlockNum.push(item.block.toNumber())
    })

    const twentyDayAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.twentyDayAgo
        }},
        { timestamp:true, block:true}
    )

    twentyDayAgoBlock.data?.forEach(item => {
      monthBlockNum.push(item.block.toNumber())
    })

    const twentyFiveDayAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.twentyFiveDayAgo
        }},
        { timestamp:true, block:true}
    )

    twentyFiveDayAgoBlock.data?.forEach(item => {
      monthBlockNum.push(item.block.toNumber())
    })

    const thirtyDayAgoBlock = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.thirtyDayAgo
        }},
        { timestamp:true, block:true}
    )

    thirtyDayAgoBlock.data?.forEach(item => {
      monthBlockNum.push(item.block.toNumber())
    })
      

    

  return {
      blockNum,
      weekBlockNum,
      monthBlockNum
  }
}

export default useGetBlock