import { getFeePeriods, getLatestRateById, getSNXHolders, getSynthetixById, getSynths, getTotalActiveStakers } from "../subgraph-ovm";
import { blocky } from "./getBlocky";
import getTime from "./getTime";


export const numStakey = async () => {
    const mainnet_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/mainnet-main"
    const optimism_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main"

    const blocks = await blocky()
    const { timeStamp } = getTime();


    const fetchNumStaker = async (network: string, block:number) => {
        
        const snxStaker = await getTotalActiveStakers(
            network,
            { block: { number: block } },
            { count: true },
        )

        const issuers = snxStaker[0].count.toNumber()

        return issuers
    }

    const currentStakerOvm = await fetchNumStaker(optimism_url, blocks.ovm.ovmCurrentBlock)
    const currentStakerMain = await fetchNumStaker(mainnet_url, blocks.main.mainCurrentBlock)
    const currentStakerAll = currentStakerMain + currentStakerOvm

    const fourHourStakerOvm = await fetchNumStaker(optimism_url, blocks.ovm.ovmFourHourBlock)
    const fourHourStakerMain = await fetchNumStaker(mainnet_url, blocks.main.mainFourHourBlock)
    const fourHourStakerAll = fourHourStakerMain + fourHourStakerOvm

    const eightHourStakerOvm = await fetchNumStaker(optimism_url, blocks.ovm.ovmEightHourBlock)
    const eightHourStakerMain = await fetchNumStaker(mainnet_url, blocks.main.mainEightHourBlock)
    const eightHourStakerAll = eightHourStakerMain + eightHourStakerOvm

    const twelveHourStakerOvm = await fetchNumStaker(optimism_url, blocks.ovm.ovmTwelveHourBlock)
    const twelveHourStakerMain = await fetchNumStaker(mainnet_url, blocks.main.mainTwelveHourBlock)
    const twelveHourStakerAll = twelveHourStakerMain + twelveHourStakerOvm

    const sixteenHourStakerOvm = await fetchNumStaker(optimism_url, blocks.ovm.ovmSixteenHourBlock)
    const sixteenHourStakerMain = await fetchNumStaker(mainnet_url, blocks.main.mainSixteenHourBlock)
    const sixteenHourStakerAll = sixteenHourStakerMain + sixteenHourStakerOvm

    const twentyHourStakerOvm = await fetchNumStaker(optimism_url, blocks.ovm.ovmTwentyHourBlock)
    const twentyHourStakerMain = await fetchNumStaker(mainnet_url, blocks.main.mainTwentyHourBlock)
    const twentyHourStakerAll = twentyHourStakerMain + twentyHourStakerOvm

    const twentyFourHourStakerOvm = await fetchNumStaker(optimism_url, blocks.ovm.ovmTwentyFourHourBlock)
    const twentyFourHourStakerMain = await fetchNumStaker(mainnet_url, blocks.main.mainTwentyFourHourBlock)
    const twentyFourHourStakerAll = twentyFourHourStakerMain + twentyFourHourStakerOvm

    const twoDayStakerOvm = await fetchNumStaker(optimism_url, blocks.ovm.ovmTwoDayBlock)
    const twoDayStakerMain = await fetchNumStaker(mainnet_url, blocks.main.mainTwoDayBlock)
    const twoDayStakerAll = twoDayStakerMain + twoDayStakerOvm

    const threeDayStakerOvm = await fetchNumStaker(optimism_url, blocks.ovm.ovmThreeDayBlock)
    const threeDayStakerMain = await fetchNumStaker(mainnet_url, blocks.main.mainThreeDayBlock)
    const threeDayStakerAll = threeDayStakerMain + threeDayStakerOvm

    const fourDayStakerOvm = await fetchNumStaker(optimism_url, blocks.ovm.ovmFourDayBlock)
    const fourDayStakerMain = await fetchNumStaker(mainnet_url, blocks.main.mainFourDayBlock)
    const fourDayStakerAll = fourDayStakerMain + fourDayStakerOvm

    const fiveDayStakerOvm = await fetchNumStaker(optimism_url, blocks.ovm.ovmFiveDayBlock)
    const fiveDayStakerMain = await fetchNumStaker(mainnet_url, blocks.main.mainFiveDayBlock)
    const fiveDayStakerAll = fiveDayStakerMain + fiveDayStakerOvm

    const sixDayStakerOvm = await fetchNumStaker(optimism_url, blocks.ovm.ovmSixDayBlock)
    const sixDayStakerMain = await fetchNumStaker(mainnet_url, blocks.main.mainSixDayBlock)
    const sixDayStakerAll = sixDayStakerMain + sixDayStakerOvm

    const tenDayStakerOvm = await fetchNumStaker(optimism_url, blocks.ovm.ovmTenDayBlock)
    const tenDayStakerMain = await fetchNumStaker(mainnet_url, blocks.main.mainTenDayBlock)
    const tenDayStakerAll = tenDayStakerMain + tenDayStakerOvm

    const fifteenDayStakerOvm = await fetchNumStaker(optimism_url, blocks.ovm.ovmFifteenDayBlock)
    const fifteenDayStakerMain = await fetchNumStaker(mainnet_url, blocks.main.mainFifteenDayBlock)
    const fifteenDayStakerAll = fifteenDayStakerMain + fifteenDayStakerOvm

    const twentyDayStakerOvm = await fetchNumStaker(optimism_url, blocks.ovm.ovmTwentyDayBlock)
    const twentyDayStakerMain = await fetchNumStaker(mainnet_url, blocks.main.mainTwentyDayBlock)
    const twentyDayStakerAll = twentyDayStakerMain + twentyDayStakerOvm

    const twentyFiveDayStakerOvm = await fetchNumStaker(optimism_url, blocks.ovm.ovmTwentyFiveDayBlock)
    const twentyFiveDayStakerMain = await fetchNumStaker(mainnet_url, blocks.main.mainTwentyFiveDayBlock)
    const twentyFiveDayStakerAll = twentyFiveDayStakerMain + twentyFiveDayStakerOvm

    const thirtyDayStakerOvm = await fetchNumStaker(optimism_url, blocks.ovm.ovmThirtyDayBlock)
    const thirtyDayStakerMain = await fetchNumStaker(mainnet_url, blocks.main.mainThirtyDayBlock)
    const thirtyDayStakerAll = thirtyDayStakerMain + thirtyDayStakerOvm

      const dayOvm = [
        {
          date: timeStamp.twentyFourHourAgo,
          stakers: twentyFourHourStakerOvm,
        },
        {
          date: timeStamp.twentyHourAgo,
          stakers: twentyHourStakerOvm,
        },
        {
          date: timeStamp.sixteenHourAgo,
          stakers: sixteenHourStakerOvm,
        },
        {
          date: timeStamp.twelveHourAgo,
          stakers: twelveHourStakerOvm,
        },
        {
          date: timeStamp.eightHourAgo,
          stakers: eightHourStakerOvm,
        },
        {
          date: timeStamp.fourHourAgo,
          stakers: fourHourStakerOvm,
        },
        {
          date: timeStamp.noHourAgo,
          stakers: currentStakerOvm,
        },
      ];

      const dayMain = [
        {
          date: timeStamp.twentyFourHourAgo,
          stakers: twentyFourHourStakerMain,
        },
        {
          date: timeStamp.twentyHourAgo,
          stakers: twentyHourStakerMain,
        },
        {
          date: timeStamp.sixteenHourAgo,
          stakers: sixteenHourStakerMain,
        },
        {
          date: timeStamp.twelveHourAgo,
          stakers: twelveHourStakerMain,
        },
        {
          date: timeStamp.eightHourAgo,
          stakers: eightHourStakerMain,
        },
        {
          date: timeStamp.fourHourAgo,
          stakers: fourHourStakerMain,
        },
        {
          date: timeStamp.noHourAgo,
          stakers: currentStakerMain,
        },
      ];

      const dayAll = [
        {
          date: timeStamp.twentyFourHourAgo,
          stakers: twentyFourHourStakerAll,
        },
        {
          date: timeStamp.twentyHourAgo,
          stakers: twentyHourStakerAll,
        },
        {
          date: timeStamp.sixteenHourAgo,
          stakers: sixteenHourStakerAll,
        },
        {
          date: timeStamp.twelveHourAgo,
          stakers: twelveHourStakerAll,
        },
        {
          date: timeStamp.eightHourAgo,
          stakers: eightHourStakerAll,
        },
        {
          date: timeStamp.fourHourAgo,
          stakers: fourHourStakerAll,
        },
        {
          date: timeStamp.noHourAgo,
          stakers: currentStakerAll,
        },
      ];


      const weekOvm = [
        {
          date: timeStamp.sixDayAgo,
          stakers: sixDayStakerOvm,
        },
        {
          date: timeStamp.fiveDayAgo,
          stakers: fiveDayStakerOvm,
        },
        {
          date: timeStamp.fourDayAgo,
          stakers: fourDayStakerOvm,
        },
        {
          date: timeStamp.threeDayAgo,
          stakers: threeDayStakerOvm,
        },
        {
          date: timeStamp.twoDayAgo,
          stakers: twoDayStakerOvm,
        },
        {
          date: timeStamp.oneDayAgo,
          stakers: twentyFourHourStakerOvm,
        },
        {
          date: timeStamp.currentDay,
          stakers: currentStakerOvm,
        },
      ];

      const weekMain = [
        {
          date: timeStamp.sixDayAgo,
          stakers: sixDayStakerMain,
        },
        {
          date: timeStamp.fiveDayAgo,
          stakers: fiveDayStakerMain,
        },
        {
          date: timeStamp.fourDayAgo,
          stakers: fourDayStakerMain,
        },
        {
          date: timeStamp.threeDayAgo,
          stakers: threeDayStakerMain,
        },
        {
          date: timeStamp.twoDayAgo,
          stakers: twoDayStakerMain,
        },
        {
          date: timeStamp.oneDayAgo,
          stakers: twentyFourHourStakerMain,
        },
        {
          date: timeStamp.currentDay,
          stakers: currentStakerMain,
        },
      ];

      const weekAll = [
        {
          date: timeStamp.sixDayAgo,
          stakers: sixDayStakerAll,
        },
        {
          date: timeStamp.fiveDayAgo,
          stakers: fiveDayStakerAll,
        },
        {
          date: timeStamp.fourDayAgo,
          stakers: fourDayStakerAll,
        },
        {
          date: timeStamp.threeDayAgo,
          stakers: threeDayStakerAll,
        },
        {
          date: timeStamp.twoDayAgo,
          stakers: twoDayStakerAll,
        },
        {
          date: timeStamp.oneDayAgo,
          stakers: twentyFourHourStakerAll,
        },
        {
          date: timeStamp.currentDay,
          stakers: currentStakerAll,
        },
      ];

      const monthOvm = [
        {
          date: timeStamp.thirtyDayAgo,
          stakers: thirtyDayStakerOvm,
        },
        {
          date: timeStamp.twentyFiveDayAgo,
          stakers: twentyFiveDayStakerOvm,
        },
        {
          date: timeStamp.twentyDayAgo,
          stakers: twentyDayStakerOvm,
        },
        {
          date: timeStamp.fifteenDayAgo,
          stakers: fifteenDayStakerOvm,
        },
        {
          date: timeStamp.tenDayAgo,
          stakers: tenDayStakerOvm,
        },
        {
          date: timeStamp.fiveDayAgo,
          stakers: fiveDayStakerOvm,
        },
        {
          date: timeStamp.currentDay,
          stakers: currentStakerOvm,
        },
      ];

      const monthMain = [
        {
          date: timeStamp.thirtyDayAgo,
          stakers: thirtyDayStakerMain,
        },
        {
          date: timeStamp.twentyFiveDayAgo,
          stakers: twentyFiveDayStakerMain,
        },
        {
          date: timeStamp.twentyDayAgo,
          stakers: twentyDayStakerMain,
        },
        {
          date: timeStamp.fifteenDayAgo,
          stakers: fifteenDayStakerMain,
        },
        {
          date: timeStamp.tenDayAgo,
          stakers: tenDayStakerMain,
        },
        {
          date: timeStamp.fiveDayAgo,
          stakers: fiveDayStakerMain,
        },
        {
          date: timeStamp.currentDay,
          stakers: currentStakerMain,
        },
      ];

      const monthAll = [
        {
          date: timeStamp.thirtyDayAgo,
          stakers: thirtyDayStakerAll,
        },
        {
          date: timeStamp.twentyFiveDayAgo,
          stakers: twentyFiveDayStakerAll,
        },
        {
          date: timeStamp.twentyDayAgo,
          stakers: twentyDayStakerAll,
        },
        {
          date: timeStamp.fifteenDayAgo,
          stakers: fifteenDayStakerAll,
        },
        {
          date: timeStamp.tenDayAgo,
          stakers: tenDayStakerAll,
        },
        {
          date: timeStamp.fiveDayAgo,
          stakers: fiveDayStakerAll,
        },
        {
          date: timeStamp.currentDay,
          stakers: currentStakerAll,
        },
      ];

   
    


  return {
      currentStakerAll,
      currentStakerOvm,
      currentStakerMain,
      dayAll,
      dayMain,
      dayOvm,
      weekAll,
      weekMain,
      weekOvm,
      monthAll,
      monthMain,
      monthOvm
     
  }

}



