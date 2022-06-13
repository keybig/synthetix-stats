import useSynthetixQueries from "@synthetixio/queries";
import { useEffect, useState } from "react";
import getTime from "../lib/getTime";
import { getDebtStates, getRateUpdates, getWrappers } from "../subgraph-ovm";
import { blocky } from '../lib/getBlocky'



  // start data collection at 5 minutes ago to allow data sync

  const ts = Math.floor((Date.now() / 1e3));
  const { times } = getTime()
  const { timeStamp } = getTime()

  const mainnet_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/mainnet-main"
const optimism_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main"

  export const getTvl = async() => {

    const blocks = await blocky()

    const fetchTVL = async(block:number, network:string) => {
        const tvlCall = await getDebtStates(
          network,
          {
            orderBy: "timestamp",
            orderDirection: "desc",
            first: 1,
            block: { number: block },
          },
          { debtEntry: true },
      )
         
      const activeDebt = tvlCall[0].debtEntry.toNumber();
  
      return activeDebt
  }

  const fetchWrapper = async(block:number, network:string) => {
      const wrapperCall = await getWrappers(
        network,
      { block: { number: block } },
      { amountInUSD: true },
    );

    const activeWrapper = wrapperCall.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );

    return activeWrapper
  }
  
  const ovmCurrentDebt = await fetchTVL(blocks.ovm.ovmCurrentBlock, optimism_url)
  const mainCurrentDebt = await fetchTVL(blocks.main.mainCurrentBlock, mainnet_url)
  const ovmCurrentWrapper = await fetchWrapper(blocks.ovm.ovmCurrentBlock, optimism_url)
  const mainCurrentWrapper = await fetchWrapper(blocks.main.mainCurrentBlock, mainnet_url)

  

  const ovmFourHourDebt = await fetchTVL(blocks.ovm.ovmFourHourBlock, optimism_url)
  const mainFourHourDebt = await fetchTVL(blocks.main.mainFourHourBlock, mainnet_url)
  const ovmFourHourWrapper = await fetchWrapper(blocks.ovm.ovmFourHourBlock, optimism_url)
  const mainFourHourWrapper = await fetchWrapper(blocks.main.mainFourHourBlock, mainnet_url)

  const ovmEightHourDebt = await fetchTVL(blocks.ovm.ovmEightHourBlock, optimism_url)
  const mainEightHourDebt = await fetchTVL(blocks.main.mainEightHourBlock, mainnet_url)
  const ovmEightHourWrapper = await fetchTVL(blocks.ovm.ovmEightHourBlock, optimism_url)
  const mainEightHourWrapper = await fetchTVL(blocks.main.mainEightHourBlock, mainnet_url)

  const ovmTwelveHourDebt = await fetchTVL(blocks.ovm.ovmTwelveHourBlock, optimism_url)
  const mainTwelveHourDebt = await fetchTVL(blocks.main.mainTwelveHourBlock, mainnet_url)
  const ovmTwelveHourWrapper = await fetchTVL(blocks.ovm.ovmTwelveHourBlock, optimism_url)
  const mainTwelveHourWrapper = await fetchTVL(blocks.main.mainTwelveHourBlock, mainnet_url)

  const ovmSixteenHourDebt = await fetchTVL(blocks.ovm.ovmSixteenHourBlock, optimism_url)
  const mainSixteenHourDebt = await fetchTVL(blocks.main.mainSixteenHourBlock, mainnet_url)
  const ovmSixteenHourWrapper = await fetchTVL(blocks.ovm.ovmSixteenHourBlock, optimism_url)
  const mainSixteenHourWrapper = await fetchTVL(blocks.main.mainSixteenHourBlock, mainnet_url)

  const ovmTwentyHourDebt = await fetchTVL(blocks.ovm.ovmTwentyHourBlock, optimism_url)
  const mainTwentyHourDebt = await fetchTVL(blocks.main.mainTwentyHourBlock, mainnet_url)
  const ovmTwentyHourWrapper = await fetchTVL(blocks.ovm.ovmTwentyHourBlock, optimism_url)
  const mainTwentyHourWrapper = await fetchTVL(blocks.main.mainTwentyHourBlock, mainnet_url)

  const ovmTwentyFourHourDebt = await fetchTVL(blocks.ovm.ovmTwentyFourHourBlock, optimism_url)
  const mainTwentyFourHourDebt = await fetchTVL(blocks.main.mainTwentyFourHourBlock, mainnet_url)
  const ovmTwentyFourHourWrapper = await fetchTVL(blocks.ovm.ovmTwentyFourHourBlock, optimism_url)
  const mainTwentyFourHourWrapper = await fetchTVL(blocks.main.mainTwentyFourHourBlock, mainnet_url)

  const ovmTwoDayDebt = await fetchTVL(blocks.ovm.ovmTwoDayBlock, optimism_url)
  const mainTwoDayDebt = await fetchTVL(blocks.main.mainTwoDayBlock, mainnet_url)
  const ovmTwoDayWrapper = await fetchTVL(blocks.ovm.ovmTwoDayBlock, optimism_url)
  const mainTwoDayWrapper = await fetchTVL(blocks.main.mainTwoDayBlock, mainnet_url)

  const ovmThreeDayDebt = await fetchTVL(blocks.ovm.ovmThreeDayBlock, optimism_url)
  const mainThreeDayDebt = await fetchTVL(blocks.main.mainThreeDayBlock, mainnet_url)
  const ovmThreeDayWrapper = await fetchTVL(blocks.ovm.ovmThreeDayBlock, optimism_url)
  const mainThreeDayWrapper = await fetchTVL(blocks.main.mainThreeDayBlock, mainnet_url)

  const ovmFourDayDebt = await fetchTVL(blocks.ovm.ovmFourDayBlock, optimism_url)
  const mainFourDayDebt = await fetchTVL(blocks.main.mainFourDayBlock, mainnet_url)
  const ovmFourDayWrapper = await fetchTVL(blocks.ovm.ovmFourDayBlock, optimism_url)
  const mainFourDayWrapper = await fetchTVL(blocks.main.mainFourDayBlock, mainnet_url)

  const ovmFiveDayDebt = await fetchTVL(blocks.ovm.ovmFiveDayBlock, optimism_url)
  const mainFiveDayDebt = await fetchTVL(blocks.main.mainFiveDayBlock, mainnet_url)
  const ovmFiveDayWrapper = await fetchTVL(blocks.ovm.ovmFiveDayBlock, optimism_url)
  const mainFiveDayWrapper = await fetchTVL(blocks.main.mainFiveDayBlock, mainnet_url)

  const ovmSixDayDebt = await fetchTVL(blocks.ovm.ovmSixDayBlock, optimism_url)
  const mainSixDayDebt = await fetchTVL(blocks.main.mainSixDayBlock, mainnet_url)
  const ovmSixDayWrapper = await fetchTVL(blocks.ovm.ovmSixDayBlock, optimism_url)
  const mainSixDayWrapper = await fetchTVL(blocks.main.mainSixDayBlock, mainnet_url)

  const ovmTenDayDebt = await fetchTVL(blocks.ovm.ovmTenDayBlock, optimism_url)
  const mainTenDayDebt = await fetchTVL(blocks.main.mainTenDayBlock, mainnet_url)
  const ovmTenDayWrapper = await fetchTVL(blocks.ovm.ovmTenDayBlock, optimism_url)
  const mainTenDayWrapper = await fetchTVL(blocks.main.mainTenDayBlock, mainnet_url)

  const ovmFifteenDayDebt = await fetchTVL(blocks.ovm.ovmFifteenDayBlock, optimism_url)
  const mainFifteenDayDebt = await fetchTVL(blocks.main.mainFifteenDayBlock, mainnet_url)
  const ovmFifteenDayWrapper = await fetchTVL(blocks.ovm.ovmFifteenDayBlock, optimism_url)
  const mainFifteenDayWrapper = await fetchTVL(blocks.main.mainFifteenDayBlock, mainnet_url)

  const ovmTwentyDayDebt = await fetchTVL(blocks.ovm.ovmTwentyDayBlock, optimism_url)
  const mainTwentyDayDebt = await fetchTVL(blocks.main.mainTwentyDayBlock, mainnet_url)
  const ovmTwentyDayWrapper = await fetchTVL(blocks.ovm.ovmTwentyDayBlock, optimism_url)
  const mainTwentyDayWrapper = await fetchTVL(blocks.main.mainTwentyDayBlock, mainnet_url)

  const ovmTwentyFiveDayDebt = await fetchTVL(blocks.ovm.ovmTwentyFiveDayBlock, optimism_url)
  const mainTwentyFiveDayDebt = await fetchTVL(blocks.main.mainTwentyFiveDayBlock, mainnet_url)
  const ovmTwentyFiveDayWrapper = await fetchTVL(blocks.ovm.ovmTwentyFiveDayBlock, optimism_url)
  const mainTwentyFiveDayWrapper = await fetchTVL(blocks.main.mainTwentyFiveDayBlock, mainnet_url)

  const ovmThirtyDayDebt = await fetchTVL(blocks.ovm.ovmThirtyDayBlock, optimism_url)
  const mainThirtyDayDebt = await fetchTVL(blocks.main.mainThirtyDayBlock, mainnet_url)
  const ovmThirtyDayWrapper = await fetchTVL(blocks.ovm.ovmThirtyDayBlock, optimism_url)
  const mainThirtyDayWrapper = await fetchTVL(blocks.main.mainThirtyDayBlock, mainnet_url)

  // create the charts

  const dayOvm = [
    {
      date: timeStamp.twentyFourHourAgo,
      debt: ovmTwentyFourHourDebt,
      wrapper: ovmTwentyFourHourWrapper,
    },
    {
      date: timeStamp.twentyHourAgo,
      debt: ovmTwentyHourDebt,
      wrapper: ovmTwentyHourWrapper,
    },
    {
      date: timeStamp.sixteenHourAgo,
      debt: ovmSixteenHourDebt,
      wrapper: ovmSixteenHourWrapper,
    },
    {
      date: timeStamp.twelveHourAgo,
      debt: ovmTwelveHourDebt,
      wrapper: ovmTwelveHourWrapper,
    },
    {
      date: timeStamp.eightHourAgo,
      debt: ovmEightHourDebt,
      wrapper: ovmEightHourWrapper,
    },
    {
      date: timeStamp.fourHourAgo,
      debt: ovmFourHourDebt,
      wrapper: ovmFourHourWrapper,
    },
    {
      date: timeStamp.noHourAgo,
      debt: ovmCurrentDebt,
      wrapper: ovmCurrentWrapper,
    },
  ];

  const dayMain = [
    {
      date: timeStamp.twentyFourHourAgo,
      debt: mainTwentyFourHourDebt,
      wrapper: mainTwentyFourHourWrapper,
    },
    {
      date: timeStamp.twentyHourAgo,
      debt: mainTwentyHourDebt,
      wrapper: mainTwentyHourWrapper,
    },
    {
      date: timeStamp.sixteenHourAgo,
      debt: mainSixteenHourDebt,
      wrapper: mainSixteenHourWrapper,
    },
    {
      date: timeStamp.twelveHourAgo,
      debt: mainTwelveHourDebt,
      wrapper: mainTwelveHourWrapper,
    },
    {
      date: timeStamp.eightHourAgo,
      debt: mainEightHourDebt,
      wrapper: mainEightHourWrapper,
    },
    {
      date: timeStamp.fourHourAgo,
      debt: mainFourHourDebt,
      wrapper: mainFourHourWrapper,
    },
    {
      date: timeStamp.noHourAgo,
      debt: mainCurrentDebt,
      wrapper: mainCurrentWrapper,
    },
  ];

  const weekOvm = [
    {
      date: timeStamp.sixDayAgo,
      debt: ovmSixDayDebt,
      wrapper: ovmSixDayWrapper,
    },
    {
      date: timeStamp.fiveDayAgo,
      debt: ovmFiveDayDebt,
      wrapper: ovmFiveDayWrapper,
    },
    {
      date: timeStamp.fourDayAgo,
      debt: ovmFourDayDebt,
      wrapper: ovmFourDayWrapper,
    },
    {
      date: timeStamp.threeDayAgo,
      debt: ovmThreeDayDebt,
      wrapper: ovmThreeDayWrapper,
    },
    {
      date: timeStamp.twoDayAgo,
      debt: ovmTwoDayDebt,
      wrapper: ovmTwoDayWrapper,
    },
    {
      date: timeStamp.oneDayAgo,
      debt: ovmTwentyFourHourDebt,
      wrapper: ovmTwentyFourHourWrapper,
    },
    {
      date: timeStamp.currentDay,
      debt: ovmCurrentDebt,
      wrapper: ovmCurrentWrapper,
    },
  ];

  const weekMain = [
    {
      date: timeStamp.sixDayAgo,
      debt: mainSixDayDebt,
      wrapper: mainSixDayWrapper,
    },
    {
      date: timeStamp.fiveDayAgo,
      debt: mainFiveDayDebt,
      wrapper: mainFiveDayWrapper,
    },
    {
      date: timeStamp.fourDayAgo,
      debt: mainFourDayDebt,
      wrapper: mainFourDayWrapper,
    },
    {
      date: timeStamp.threeDayAgo,
      debt: mainThreeDayDebt,
      wrapper: mainThreeDayWrapper,
    },
    {
      date: timeStamp.twoDayAgo,
      debt: mainTwoDayDebt,
      wrapper: mainTwoDayWrapper,
    },
    {
      date: timeStamp.oneDayAgo,
      debt: mainTwentyFourHourDebt,
      wrapper: mainTwentyFourHourWrapper,
    },
    {
      date: timeStamp.currentDay,
      debt: mainCurrentDebt,
      wrapper: mainCurrentWrapper,
    },
  ];


  const monthOvm = [
    {
      date: timeStamp.thirtyDayAgo,
      debt: ovmThirtyDayDebt,
      wrapper: ovmThirtyDayWrapper,
    },
    {
      date: timeStamp.twentyFiveDayAgo,
      debt: ovmTwentyFiveDayDebt,
      wrapper: ovmTwentyFiveDayWrapper,
    },
    {
      date: timeStamp.twentyDayAgo,
      debt: ovmTwentyDayDebt,
      wrapper: ovmTwentyDayWrapper,
    },
    {
      date: timeStamp.fifteenDayAgo,
      debt: ovmFifteenDayDebt,
      wrapper: ovmFifteenDayWrapper,
    },
    {
      date: timeStamp.tenDayAgo,
      debt: ovmTenDayDebt,
      wrapper: ovmTenDayWrapper,
    },
    {
      date: timeStamp.fiveDayAgo,
      debt: ovmFiveDayDebt,
      wrapper: ovmFiveDayWrapper,
    },
    {
      date: timeStamp.currentDay,
      debt: ovmCurrentDebt,
      wrapper: ovmCurrentWrapper,
    },
  ];

  const monthMain = [
    {
      date: timeStamp.thirtyDayAgo,
      debt: mainThirtyDayDebt,
      wrapper: mainThirtyDayWrapper,
    },
    {
      date: timeStamp.twentyFiveDayAgo,
      debt: mainTwentyFiveDayDebt,
      wrapper: mainTwentyFiveDayWrapper,
    },
    {
      date: timeStamp.twentyDayAgo,
      debt: mainTwentyDayDebt,
      wrapper: mainTwentyDayWrapper,
    },
    {
      date: timeStamp.fifteenDayAgo,
      debt: mainFifteenDayDebt,
      wrapper: mainFifteenDayWrapper,
    },
    {
      date: timeStamp.tenDayAgo,
      debt: mainTenDayDebt,
      wrapper: mainTenDayWrapper,
    },
    {
      date: timeStamp.fiveDayAgo,
      debt: mainFiveDayDebt,
      wrapper: mainFiveDayWrapper,
    },
    {
      date: timeStamp.currentDay,
      debt: mainCurrentDebt,
      wrapper: mainCurrentWrapper,
    },
  ];

   


    return {
        dayOvm,
        dayMain,
        weekOvm,
        weekMain,
        monthOvm,
        monthMain,
        ovmCurrentDebt,
        ovmCurrentWrapper,
        mainCurrentDebt,
        mainCurrentWrapper,
       
    }

  }

    

      

   