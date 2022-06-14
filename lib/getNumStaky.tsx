import { getFeePeriods, getLatestRateById, getSNXHolders, getSynthetixById, getSynths } from "../subgraph-ovm";
import { blocky } from "./getBlock";
import getTime from "./getTime";


export const numStaker = async () => {
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

    const currentStakerCall = await getSynthetixById(
        optimism_url,
        { id: "1", block: { number: blocks.currentBlock } },
        { issuers: true },
      );

      const currentStaker = currentStakerCall.issuers.toNumber()
    
      const fourHourStakerCall = await getSynthetixById(
          optimism_url,
        { id: "1", block: { number: blocks.fourHourBlock } },
        { issuers: true },
      );

      const fourHourStaker = fourHourStakerCall.issuers.toNumber()
    
      const eightHourStakerCall = await getSynthetixById(
        optimism_url,
        { id: "1", block: { number: blocks.eightHourBlock } },
        { issuers: true },
      );

      const eightHourStaker = eightHourStakerCall.issuers.toNumber()
    
      const twelveHourStakerCall = await getSynthetixById(
        optimism_url,
        { id: "1", block: { number: blocks.twelveHourBlock } },
        { issuers: true },
      );

      const twelveHourStaker = twelveHourStakerCall.issuers.toNumber()
    
      const sixtenHourStakerCall = await getSynthetixById(
        optimism_url,
        { id: "1", block: { number: blocks.sixteenHourBlock } },
        { issuers: true },
      );

      const sixteenHourStaker = sixtenHourStakerCall.issuers.toNumber()
    
      const twentyHourStakerCall = await getSynthetixById(
        optimism_url,
        { id: "1", block: { number: blocks.twentyHourBlock } },
        { issuers: true },
      );

      const twentyHourStaker = twentyHourStakerCall.issuers.toNumber()
    
      const twentyFourHourStakerCall = await getSynthetixById(
        optimism_url,
        { id: "1", block: { number: blocks.twentyFourHourBlock } },
        { issuers: true },
      );

      const twentyFourHourStaker = twentyFourHourStakerCall.issuers.toNumber()
    
      const twoDayStakerCall = await getSynthetixById(
        optimism_url,
        { id: "1", block: { number: blocks.twoDayBlock } },
        { issuers: true },
      );

      const twoDayStaker = twoDayStakerCall.issuers.toNumber()
    
      const threeDayStakerCall = await getSynthetixById(
        optimism_url,
        { id: "1", block: { number: blocks.threeDayBlock } },
        { issuers: true },
      );

      const threeDayStaker = threeDayStakerCall.issuers.toNumber()
    
      const fourDayStakerCall = await getSynthetixById(
        optimism_url,
        { id: "1", block: { number: blocks.fourDayBlock } },
        { issuers: true },
      );

      const fourDayStaker = fourDayStakerCall.issuers.toNumber()
    
      const fiveDayStakerCall = await getSynthetixById(
        optimism_url,
        { id: "1", block: { number: blocks.fiveDayBlock } },
        { issuers: true },
      );

      const fiveDayStaker = fiveDayStakerCall.issuers.toNumber()
    
      const sixDayStakerCall = await getSynthetixById(
        optimism_url,
        { id: "1", block: { number: blocks.sixDayBlock } },
        { issuers: true },
      );

      const sixDayStaker = sixDayStakerCall.issuers.toNumber()
    
      //month staker
    
      const tenDayStakerCall = await getSynthetixById(
        optimism_url,
        { id: "1", block: { number: blocks.tenDayBlock } },
        { issuers: true },
      );

      const tenDayStaker = tenDayStakerCall.issuers.toNumber()
    
      const fifteenDayStakerCall = await getSynthetixById(
        optimism_url,
        { id: "1", block: { number: blocks.fifteenDayBlock } },
        { issuers: true },
      );

      const fifteenDayStaker = fifteenDayStakerCall.issuers.toNumber()
    
      const twentyDayStakerCall = await getSynthetixById(
        optimism_url,
        { id: "1", block: { number: blocks.twentyDayBlock } },
        { issuers: true },
      );

      const twentyDayStaker = twentyDayStakerCall.issuers.toNumber()
    
      const twentyFiveDayStakerCall = await getSynthetixById(
        optimism_url,
        { id: "1", block: { number: blocks.twentyFiveDayBlock } },
        { issuers: true },
      );

      const twentyFiveDayStaker = twentyFiveDayStakerCall.issuers.toNumber()
    
      const thirtyDayStakerCall = await getSynthetixById(
        optimism_url,
        { id: "1", block: { number: blocks.thirtyDayBlock } },
        { issuers: true },
      );

      const thirtyDayStaker = thirtyDayStakerCall.issuers.toNumber()

      const day = [
        {
          date: timeStamp.twentyFourHourAgo,
          stakers: twentyFourHourStaker,
        },
        {
          date: timeStamp.twentyHourAgo,
          stakers: twentyHourStaker,
        },
        {
          date: timeStamp.sixteenHourAgo,
          stakers: sixteenHourStaker,
        },
        {
          date: timeStamp.twelveHourAgo,
          stakers: twelveHourStaker,
        },
        {
          date: timeStamp.eightHourAgo,
          stakers: eightHourStaker,
        },
        {
          date: timeStamp.fourHourAgo,
          stakers: fourHourStaker,
        },
        {
          date: timeStamp.noHourAgo,
          stakers: currentStaker,
        },
      ];

      const week = [
        {
          date: timeStamp.sixDayAgo,
          stakers: sixDayStaker,
        },
        {
          date: timeStamp.fiveDayAgo,
          stakers: fiveDayStaker,
        },
        {
          date: timeStamp.fourDayAgo,
          stakers: fourDayStaker,
        },
        {
          date: timeStamp.threeDayAgo,
          stakers: threeDayStaker,
        },
        {
          date: timeStamp.twoDayAgo,
          stakers: twoDayStaker,
        },
        {
          date: timeStamp.oneDayAgo,
          stakers: twentyFourHourStaker,
        },
        {
          date: timeStamp.currentDay,
          stakers: currentStaker,
        },
      ];

      const month = [
        {
          date: timeStamp.thirtyDayAgo,
          stakers: thirtyDayStaker,
        },
        {
          date: timeStamp.twentyFiveDayAgo,
          stakers: twentyFiveDayStaker,
        },
        {
          date: timeStamp.twentyDayAgo,
          stakers: twentyDayStaker,
        },
        {
          date: timeStamp.fifteenDayAgo,
          stakers: fifteenDayStaker,
        },
        {
          date: timeStamp.tenDayAgo,
          stakers: tenDayStaker,
        },
        {
          date: timeStamp.fiveDayAgo,
          stakers: fiveDayStaker,
        },
        {
          date: timeStamp.currentDay,
          stakers: currentStaker,
        },
      ];
    


  return {
      currentStaker: currentStaker,
      day: day,
      week: week,
      month: month
     
  }

}



