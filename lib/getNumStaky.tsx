import { getFeePeriods, getLatestRateById, getSNXHolders, getSynthetixById, getSynths } from "../subgraph-ovm";
import { blocky } from "./getBlock";
import getTime from "./getTime";


export const numStakey = async () => {
    const mainnet_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/mainnet-main"
    const optimism_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main"

    const blocks = await blocky()
    const { timeStamp } = getTime();


    const snxAll = await getSynthetixById(
        optimism_url,
        {
            id:"1"
        }, {
            issuers:true,
            snxHolders:true
        }
    );

    const issuers = snxAll.issuers.toNumber()

    const fetchNumStaker = async (network: string, block:number) => {
        const snxStaker = await getSynthetixById(
            network,
            { id: "1", block: { number: block } },
            { issuers: true },
        )

        const issuers = snxAll.issuers.toNumber()

        return issuers
    }

    const currentStakerOvm = await fetchNumStaker(optimism_url, blocks.currentBlock)
    const currentStakerMain = await fetchNumStaker(mainnet_url, blocks.currentBlock)
    const currentStakerAll = currentStakerMain + currentStakerOvm

    const fourHourStakerOvm = await fetchNumStaker(optimism_url, blocks.fourHourBlock)
    const fourHourStakerMain = await fetchNumStaker(mainnet_url, blocks.fourHourBlock)
    const fourHourStakerAll = fourHourStakerMain + fourHourStakerOvm

    const eightHourStakerOvm = await fetchNumStaker(optimism_url, blocks.eightHourBlock)
    const eightHourStakerMain = await fetchNumStaker(mainnet_url, blocks.eightHourBlock)
    const eightHourStakerAll = eightHourStakerMain + eightHourStakerOvm

    const twelveHourStakerOvm = await fetchNumStaker(optimism_url, blocks.twelveHourBlock)
    const twelveHourStakerMain = await fetchNumStaker(mainnet_url, blocks.twelveHourBlock)
    const twelveHourStakerAll = twelveHourStakerMain + twelveHourStakerOvm

    const sixteenHourStakerOvm = await fetchNumStaker(optimism_url, blocks.sixteenHourBlock)
    const sixteenHourStakerMain = await fetchNumStaker(mainnet_url, blocks.sixteenHourBlock)
    const sixteenHourStakerAll = sixteenHourStakerMain + sixteenHourStakerOvm

    const twentyHourStakerOvm = await fetchNumStaker(optimism_url, blocks.twentyHourBlock)
    const twentyHourStakerMain = await fetchNumStaker(mainnet_url, blocks.twentyHourBlock)
    const twentyHourStakerAll = twentyHourStakerMain + twentyHourStakerOvm

    const twentyFourHourStakerOvm = await fetchNumStaker(optimism_url, blocks.twentyFourHourBlock)
    const twentyFourHourStakerMain = await fetchNumStaker(mainnet_url, blocks.twentyFourHourBlock)
    const twentyFourHourStakerAll = twentyFourHourStakerMain + twentyFourHourStakerOvm

    const twoDayStakerOvm = await fetchNumStaker(optimism_url, blocks.twoDayBlock)
    const twoDayStakerMain = await fetchNumStaker(mainnet_url, blocks.twoDayBlock)
    const twoDayStakerAll = twoDayStakerMain + twoDayStakerOvm

    const threeDayStakerOvm = await fetchNumStaker(optimism_url, blocks.threeDayBlock)
    const threeDayStakerMain = await fetchNumStaker(mainnet_url, blocks.threeDayBlock)
    const threeDayStakerAll = threeDayStakerMain + threeDayStakerOvm

    const fourDayStakerOvm = await fetchNumStaker(optimism_url, blocks.fourDayBlock)
    const fourDayStakerMain = await fetchNumStaker(mainnet_url, blocks.fourDayBlock)
    const fourDayStakerAll = fourDayStakerMain + fourDayStakerOvm

    const fiveDayStakerOvm = await fetchNumStaker(optimism_url, blocks.fiveDayBlock)
    const fiveDayStakerMain = await fetchNumStaker(mainnet_url, blocks.fiveDayBlock)
    const fiveDayStakerAll = fiveDayStakerMain + fiveDayStakerOvm

    const sixDayStakerOvm = await fetchNumStaker(optimism_url, blocks.sixDayBlock)
    const sixDayStakerMain = await fetchNumStaker(mainnet_url, blocks.sixDayBlock)
    const sixDayStakerAll = sixDayStakerMain + sixDayStakerOvm

    const tenDayStakerOvm = await fetchNumStaker(optimism_url, blocks.tenDayBlock)
    const tenDayStakerMain = await fetchNumStaker(mainnet_url, blocks.tenDayBlock)
    const tenDayStakerAll = tenDayStakerMain + tenDayStakerOvm

    const fifteenDayStakerOvm = await fetchNumStaker(optimism_url, blocks.fifteenDayBlock)
    const fifteenDayStakerMain = await fetchNumStaker(mainnet_url, blocks.fifteenDayBlock)
    const fifteenDayStakerAll = fifteenDayStakerMain + fifteenDayStakerOvm

    const twentyDayStakerOvm = await fetchNumStaker(optimism_url, blocks.twentyDayBlock)
    const twentyDayStakerMain = await fetchNumStaker(mainnet_url, blocks.twentyDayBlock)
    const twentyDayStakerAll = twentyDayStakerMain + twentyDayStakerOvm

    const twentyFiveDayStakerOvm = await fetchNumStaker(optimism_url, blocks.twentyFiveDayBlock)
    const twentyFiveDayStakerMain = await fetchNumStaker(mainnet_url, blocks.twentyFiveDayBlock)
    const twentyFiveDayStakerAll = twentyFiveDayStakerMain + twentyFiveDayStakerOvm

    const thirtyDayStakerOvm = await fetchNumStaker(optimism_url, blocks.thirtyDayBlock)
    const thirtyDayStakerMain = await fetchNumStaker(mainnet_url, blocks.thirtyDayBlock)
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
          stakers: sixDayStakerAll,
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



