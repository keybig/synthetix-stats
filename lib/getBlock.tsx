import useSynthetixQueries from "@synthetixio/queries";
import { useEffect, useState } from "react";
import getTime from "../lib/getTime";
import { getRateUpdates } from "../subgraph-ovm";


  // start data collection at 5 minutes ago to allow data sync

  const ts = Math.floor((Date.now() / 1e3));
  const { times } = getTime()

  const mainnet_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/mainnet-main"
const optimism_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main"

  export const blocky = async() => {

    const currentBlockCall = await getRateUpdates(
        optimism_url,
        {
          first:1,
          orderBy:"timestamp",
          orderDirection:"desc",
          where:{
              timestamp_lt:times.noHourAgo
          }
        },{
            block:true,
            timestamp:true
        }
    )

    const currentBlock = currentBlockCall[0].block.toNumber()

    const fourHourBlockCall = await getRateUpdates(
        optimism_url,
        { first:1, orderBy:"timestamp", orderDirection:"desc", where:{
          timestamp_lt:times.fourHourAgo,
        }},
        { timestamp:true, block:true}
      )
      const fourHourBlock = fourHourBlockCall[0].block.toNumber()


      const eightHourBlockCall = await getRateUpdates(
        optimism_url,
        { first:1, orderBy:"timestamp", orderDirection:"desc", where:{
          timestamp_lt:times.eightHourAgo,
        }},
        { timestamp:true, block:true}
      )

      const eightHourBlock = eightHourBlockCall[0].block.toNumber()


      const twelveHourBlockCall = await getRateUpdates(
        optimism_url,
        { first:1, orderBy:"timestamp", orderDirection:"desc", where:{
          timestamp_lt:times.twelveHourAgo,
        }},
        { timestamp:true, block:true}
      )

      const twelveHourBlock = twelveHourBlockCall[0].block.toNumber()


      const sixteenHourBlockCall = await getRateUpdates(
        optimism_url,
        { first:1, orderBy:"timestamp", orderDirection:"desc", where:{
          timestamp_lt:times.sixteenHourAgo,
        }},
        { timestamp:true, block:true}
      )

      const sixteenHourBlock = sixteenHourBlockCall[0].block.toNumber()


      const twentyHourBlockCall = await getRateUpdates(
        optimism_url,
        { first:1, orderBy:"timestamp", orderDirection:"desc", where:{
          timestamp_lt:times.twentyHourAgo,
        }},
        { timestamp:true, block:true}
      )

      const twentyHourBlock = twentyHourBlockCall[0].block.toNumber()


      const twentyFourHourBlockCall = await getRateUpdates(
        optimism_url,
        { first:1, orderBy:"timestamp", orderDirection:"desc", where:{
          timestamp_lt:times.twentyFourHourAgo,
        }},
        { timestamp:true, block:true}
      )

      const twentyFourHourBlock = twentyFourHourBlockCall[0].block.toNumber()

      //week blocks, current and one day pulled from daily block, starts at day2

      const twoDayBlockCall = await getRateUpdates(
        optimism_url,
          { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
              timestamp_lt:times.twoDayAgo
          }},
          { timestamp:true, block:true}
      )

      const twoDayBlock = twoDayBlockCall[0].block.toNumber()


      

      const threeDayBlockCall = await getRateUpdates(
        optimism_url,
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.threeDayAgo
        }},
        { timestamp:true, block:true}
    )

    const threeDayBlock = threeDayBlockCall[0].block.toNumber()


    const fourDayBlockCall = await getRateUpdates(
        optimism_url,
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.fourDayAgo
        }},
        { timestamp:true, block:true}
    )

    const fourDayBlock = fourDayBlockCall[0].block.toNumber()


    const fiveDayBlockCall = await getRateUpdates(
        optimism_url,
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.fiveDayAgo
        }},
        { timestamp:true, block:true}
    )

    const fiveDayBlock = fiveDayBlockCall[0].block.toNumber()


   

    const sixDayBlockCall = await getRateUpdates(
        optimism_url,
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.sixDayAgo
        }},
        { timestamp:true, block:true}
    )

    const sixDayBlock = sixDayBlockCall[0].block.toNumber()



    // month block num, current and 5 pulled from week, starts at 10

    const tenDayBlockCall = await getRateUpdates(
        optimism_url,
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.tenDayAgo
        }},
        { timestamp:true, block:true}
    )

    const tenDayBlock = tenDayBlockCall[0].block.toNumber()



   

    const fifteenDayBlockCall = await getRateUpdates(
        optimism_url,
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.fifteenDayAgo
        }},
        { timestamp:true, block:true}
    )

    const fifteenDayBlock = fifteenDayBlockCall[0].block.toNumber()


    

    const twentyDayBlockCall = await getRateUpdates(
        optimism_url,
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.twentyDayAgo
        }},
        { timestamp:true, block:true}
    )

    const twentyDayBlock = twentyDayBlockCall[0].block.toNumber()

   

    const twentyFiveDayBlockCall = await getRateUpdates(
        optimism_url,
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.twentyFiveDayAgo
        }},
        { timestamp:true, block:true}
    )

    const twentyFiveDayBlock = twentyFiveDayBlockCall[0].block.toNumber()


    

    const thirtyDayBlockCall = await getRateUpdates(
        optimism_url,
        { first:1, orderBy:"timestamp", orderDirection:"desc",where:{
            timestamp_lt:times.thirtyDayAgo
        }},
        { timestamp:true, block:true}
    )

    const thirtyDayBlock = thirtyDayBlockCall[0].block.toNumber()

    return {
        currentBlock: currentBlock,
        fourHourBlock: fourHourBlock,
        eightHourBlock: eightHourBlock,
        twelveHourBlock: twelveHourBlock,
        sixteenHourBlock: sixteenHourBlock,
        twentyHourBlock: twentyHourBlock,
        twentyFourHourBlock: twentyFourHourBlock,
        twoDayBlock: twoDayBlock,
        threeDayBlock: threeDayBlock,
        fourDayBlock: fourDayBlock,
        fiveDayBlock: fiveDayBlock,
        sixDayBlock: sixDayBlock,
        tenDayBlock: tenDayBlock,
        fifteenDayBlock: fifteenDayBlock,
        twentyDayBlock: twentyDayBlock,
        twentyFiveDayBlock: twentyFiveDayBlock,
        thirtyDayBlock: thirtyDayBlock
    }

  }

    

      

   