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

    const getBlock = async(time:number, network:string) => {
      const blockCall = await getRateUpdates(
        network,
        {
          first:1,
          orderBy:"timestamp",
          orderDirection:"desc",
          where:{
              timestamp_lt:time
          }
        },{
            block:true,
            timestamp:true
        }
    )

    const block = blockCall[0].block.toNumber()

    return block
}

const ovmCurrentBlock = await getBlock(times.noHourAgo, optimism_url)
const mainCurrentBlock = await getBlock(times.noHourAgo, mainnet_url)

const ovmFourHourBlock = await getBlock(times.fourHourAgo, optimism_url)
const mainFourHourBlock = await getBlock(times.fourHourAgo, mainnet_url)

const ovmEightHourBlock = await getBlock(times.eightHourAgo, optimism_url)
const mainEightHourBlock = await getBlock(times.eightHourAgo, mainnet_url)

const ovmTwelveHourBlock = await getBlock(times.twelveHourAgo, optimism_url)
const mainTwelveHourBlock = await getBlock(times.twelveHourAgo, mainnet_url)

const ovmSixteenHourBlock = await getBlock(times.sixteenHourAgo, optimism_url)
const mainSixteenHourBlock = await getBlock(times.sixteenHourAgo, mainnet_url)

const ovmTwentyHourBlock = await getBlock(times.twentyHourAgo, optimism_url)
const mainTwentyHourBlock = await getBlock(times.twentyHourAgo, mainnet_url)

const ovmTwentyFourHourBlock = await getBlock(times.twelveHourAgo, optimism_url)
const mainTwentyFourHourBlock = await getBlock(times.twelveHourAgo, mainnet_url)

const ovmTwoDayBlock = await getBlock(times.twoDayAgo, optimism_url)
const mainTwoDayBlock = await getBlock(times.twoDayAgo, mainnet_url)

const ovmThreeDayBlock = await getBlock(times.threeDayAgo, optimism_url)
const mainThreeDayBlock = await getBlock(times.threeDayAgo, mainnet_url)

const ovmFourDayBlock = await getBlock(times.fourDayAgo, optimism_url)
const mainFourDayBlock = await getBlock(times.fourDayAgo, mainnet_url)

const ovmFiveDayBlock = await getBlock(times.fiveDayAgo, optimism_url)
const mainFiveDayBlock = await getBlock(times.fiveDayAgo, mainnet_url)

const ovmSixDayBlock = await getBlock(times.sixDayAgo, optimism_url)
const mainSixDayBlock = await getBlock(times.sixDayAgo, mainnet_url)

const ovmTenDayBlock = await getBlock(times.tenDayAgo, optimism_url)
const mainTenDayBlock = await getBlock(times.tenDayAgo, mainnet_url)

const ovmFifteenDayBlock = await getBlock(times.fifteenDayAgo, optimism_url)
const mainFifteenDayBlock = await getBlock(times.fifteenDayAgo, mainnet_url)

const ovmTwentyDayBlock = await getBlock(times.twentyDayAgo, optimism_url)
const mainTwentyDayBlock = await getBlock(times.twentyDayAgo, mainnet_url)

const ovmTwentyFiveDayBlock = await getBlock(times.twentyFiveDayAgo, optimism_url)
const mainTwentyFiveDayBlock = await getBlock(times.twentyFiveDayAgo, mainnet_url)

const ovmThirtyDayBlock = await getBlock(times.thirtyDayAgo, optimism_url)
const mainThirtyDayBlock = await getBlock(times.thirtyDayAgo, mainnet_url)






    

    return {
       ovm: {
         ovmCurrentBlock,
         ovmFourHourBlock,
         ovmEightHourBlock,
         ovmTwelveHourBlock,
         ovmSixteenHourBlock,
         ovmTwentyHourBlock,
         ovmTwentyFourHourBlock,
         ovmTwoDayBlock,
         ovmThreeDayBlock,
         ovmFourDayBlock,
         ovmFiveDayBlock,
         ovmSixDayBlock,
         ovmTenDayBlock,
         ovmFifteenDayBlock,
         ovmTwentyDayBlock,
         ovmTwentyFiveDayBlock,
         ovmThirtyDayBlock
    },
    main: {
      mainCurrentBlock,
         mainFourHourBlock,
         mainEightHourBlock,
         mainTwelveHourBlock,
         mainSixteenHourBlock,
         mainTwentyHourBlock,
         mainTwentyFourHourBlock,
         mainTwoDayBlock,
         mainThreeDayBlock,
         mainFourDayBlock,
         mainFiveDayBlock,
         mainSixDayBlock,
         mainTenDayBlock,
         mainFifteenDayBlock,
         mainTwentyDayBlock,
         mainTwentyFiveDayBlock,
         mainThirtyDayBlock

    }
    }

  }

    

      

   