import getTime from "../lib/getTime";
import { getDebtStates, getWrappers } from "../subgraph-ovm";
import { blocky } from '../lib/getBlocky'



  // start data collection at 5 minutes ago to allow data sync

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
  const allCurrentDebt = ovmCurrentDebt + mainCurrentDebt

  const ovmCurrentWrapper = await fetchWrapper(blocks.ovm.ovmCurrentBlock, optimism_url)
  const mainCurrentWrapper = await fetchWrapper(blocks.main.mainCurrentBlock, mainnet_url)
  const allCurrentWrapper = ovmCurrentWrapper + mainCurrentWrapper

  

  const ovmFourHourDebt = await fetchTVL(blocks.ovm.ovmFourHourBlock, optimism_url)
  const mainFourHourDebt = await fetchTVL(blocks.main.mainFourHourBlock, mainnet_url)
  const allFourHourDebt = ovmFourHourDebt + mainFourHourDebt

  const ovmFourHourWrapper = await fetchWrapper(blocks.ovm.ovmFourHourBlock, optimism_url)
  const mainFourHourWrapper = await fetchWrapper(blocks.main.mainFourHourBlock, mainnet_url)
  const allFourHourWrapper = ovmFourHourWrapper + mainFourHourWrapper

  const ovmEightHourDebt = await fetchTVL(blocks.ovm.ovmEightHourBlock, optimism_url)
  const mainEightHourDebt = await fetchTVL(blocks.main.mainEightHourBlock, mainnet_url)
  const allEightHourDebt = ovmEightHourDebt + mainEightHourDebt

  const ovmEightHourWrapper = await fetchWrapper(blocks.ovm.ovmEightHourBlock, optimism_url)
  const mainEightHourWrapper = await fetchWrapper(blocks.main.mainEightHourBlock, mainnet_url)
  const allEightHourWrapper = mainEightHourWrapper + ovmEightHourWrapper

  const ovmTwelveHourDebt = await fetchTVL(blocks.ovm.ovmTwelveHourBlock, optimism_url)
  const mainTwelveHourDebt = await fetchTVL(blocks.main.mainTwelveHourBlock, mainnet_url)
  const allTwelveHourDebt = ovmTwelveHourDebt + mainTwelveHourDebt

  const ovmTwelveHourWrapper = await fetchWrapper(blocks.ovm.ovmTwelveHourBlock, optimism_url)
  const mainTwelveHourWrapper = await fetchWrapper(blocks.main.mainTwelveHourBlock, mainnet_url)
  const allTwelveHourWrapper = ovmTwelveHourWrapper + mainTwelveHourWrapper

  const ovmSixteenHourDebt = await fetchTVL(blocks.ovm.ovmSixteenHourBlock, optimism_url)
  const mainSixteenHourDebt = await fetchTVL(blocks.main.mainSixteenHourBlock, mainnet_url)
  const allSixteenHourDebt = ovmSixteenHourDebt + mainSixteenHourDebt

  const ovmSixteenHourWrapper = await fetchWrapper(blocks.ovm.ovmSixteenHourBlock, optimism_url)
  const mainSixteenHourWrapper = await fetchWrapper(blocks.main.mainSixteenHourBlock, mainnet_url)
  const allSixteenHourWrapper = ovmSixteenHourWrapper + mainSixteenHourWrapper

  const ovmTwentyHourDebt = await fetchTVL(blocks.ovm.ovmTwentyHourBlock, optimism_url)
  const mainTwentyHourDebt = await fetchTVL(blocks.main.mainTwentyHourBlock, mainnet_url)
  const allTwentyHourDebt = ovmTwentyHourDebt + mainTwentyHourDebt

  const ovmTwentyHourWrapper = await fetchWrapper(blocks.ovm.ovmTwentyHourBlock, optimism_url)
  const mainTwentyHourWrapper = await fetchWrapper(blocks.main.mainTwentyHourBlock, mainnet_url)
  const allTWentyHourWrapper = ovmTwentyHourWrapper + mainTwentyHourWrapper

  const ovmTwentyFourHourDebt = await fetchTVL(blocks.ovm.ovmTwentyFourHourBlock, optimism_url)
  const mainTwentyFourHourDebt = await fetchTVL(blocks.main.mainTwentyFourHourBlock, mainnet_url)
  const allTwentyFourHourDebt = ovmTwentyFourHourDebt + mainTwentyFourHourDebt

  const ovmTwentyFourHourWrapper = await fetchWrapper(blocks.ovm.ovmTwentyFourHourBlock, optimism_url)
  const mainTwentyFourHourWrapper = await fetchWrapper(blocks.main.mainTwentyFourHourBlock, mainnet_url)
  const allTwentyFourHourWrapper = ovmTwentyFourHourWrapper + mainTwentyFourHourWrapper

  const ovmTwoDayDebt = await fetchTVL(blocks.ovm.ovmTwoDayBlock, optimism_url)
  const mainTwoDayDebt = await fetchTVL(blocks.main.mainTwoDayBlock, mainnet_url)
  const allTwoDayDebt = ovmTwoDayDebt + mainTwoDayDebt

  const ovmTwoDayWrapper = await fetchWrapper(blocks.ovm.ovmTwoDayBlock, optimism_url)
  const mainTwoDayWrapper = await fetchWrapper(blocks.main.mainTwoDayBlock, mainnet_url)
  const allTwoDayWrapper = ovmTwoDayWrapper + mainTwoDayWrapper

  const ovmThreeDayDebt = await fetchTVL(blocks.ovm.ovmThreeDayBlock, optimism_url)
  const mainThreeDayDebt = await fetchTVL(blocks.main.mainThreeDayBlock, mainnet_url)
  const allThreeDayDebt = ovmThreeDayDebt + mainThreeDayDebt

  const ovmThreeDayWrapper = await fetchWrapper(blocks.ovm.ovmThreeDayBlock, optimism_url)
  const mainThreeDayWrapper = await fetchWrapper(blocks.main.mainThreeDayBlock, mainnet_url)
  const allThreeDayWrapper = ovmThreeDayWrapper + mainThreeDayWrapper

  const ovmFourDayDebt = await fetchTVL(blocks.ovm.ovmFourDayBlock, optimism_url)
  const mainFourDayDebt = await fetchTVL(blocks.main.mainFourDayBlock, mainnet_url)
  const allFourDayDebt = ovmFourDayDebt + mainFourDayDebt

  const ovmFourDayWrapper = await fetchWrapper(blocks.ovm.ovmFourDayBlock, optimism_url)
  const mainFourDayWrapper = await fetchWrapper(blocks.main.mainFourDayBlock, mainnet_url)
  const allFourDayWrapper = ovmFourDayWrapper + mainFourDayWrapper

  const ovmFiveDayDebt = await fetchTVL(blocks.ovm.ovmFiveDayBlock, optimism_url)
  const mainFiveDayDebt = await fetchTVL(blocks.main.mainFiveDayBlock, mainnet_url)
  const allFiveDayDebt = ovmFiveDayDebt + mainFiveDayDebt

  const ovmFiveDayWrapper = await fetchWrapper(blocks.ovm.ovmFiveDayBlock, optimism_url)
  const mainFiveDayWrapper = await fetchWrapper(blocks.main.mainFiveDayBlock, mainnet_url)
  const allFiveDayWrapper = ovmFiveDayWrapper + mainFiveDayWrapper

  const ovmSixDayDebt = await fetchTVL(blocks.ovm.ovmSixDayBlock, optimism_url)
  const mainSixDayDebt = await fetchTVL(blocks.main.mainSixDayBlock, mainnet_url)
  const allSixDayDebt = ovmSixDayDebt + mainSixDayDebt

  const ovmSixDayWrapper = await fetchWrapper(blocks.ovm.ovmSixDayBlock, optimism_url)
  const mainSixDayWrapper = await fetchWrapper(blocks.main.mainSixDayBlock, mainnet_url)
  const allSixDayWrapper = ovmSixDayWrapper + mainSixDayWrapper

  const ovmTenDayDebt = await fetchTVL(blocks.ovm.ovmTenDayBlock, optimism_url)
  const mainTenDayDebt = await fetchTVL(blocks.main.mainTenDayBlock, mainnet_url)
  const allTenDayDebt = ovmTenDayDebt + mainTenDayDebt

  const ovmTenDayWrapper = await fetchWrapper(blocks.ovm.ovmTenDayBlock, optimism_url)
  const mainTenDayWrapper = await fetchWrapper(blocks.main.mainTenDayBlock, mainnet_url)
  const allTenDayWrapper = ovmTenDayWrapper + mainTenDayWrapper

  const ovmFifteenDayDebt = await fetchTVL(blocks.ovm.ovmFifteenDayBlock, optimism_url)
  const mainFifteenDayDebt = await fetchTVL(blocks.main.mainFifteenDayBlock, mainnet_url)
  const allFifteenDayDebt = ovmFifteenDayDebt + mainFifteenDayDebt

  const ovmFifteenDayWrapper = await fetchWrapper(blocks.ovm.ovmFifteenDayBlock, optimism_url)
  const mainFifteenDayWrapper = await fetchWrapper(blocks.main.mainFifteenDayBlock, mainnet_url)
  const allFifteenDayWrapper = ovmFifteenDayWrapper + mainFifteenDayWrapper

  const ovmTwentyDayDebt = await fetchTVL(blocks.ovm.ovmTwentyDayBlock, optimism_url)
  const mainTwentyDayDebt = await fetchTVL(blocks.main.mainTwentyDayBlock, mainnet_url)
  const allTwentyDayDebt = ovmTwentyDayDebt + mainTwentyDayDebt

  const ovmTwentyDayWrapper = await fetchWrapper(blocks.ovm.ovmTwentyDayBlock, optimism_url)
  const mainTwentyDayWrapper = await fetchWrapper(blocks.main.mainTwentyDayBlock, mainnet_url)
  const allTwentyDayWrapper = ovmTwentyDayWrapper + mainTwentyDayWrapper

  const ovmTwentyFiveDayDebt = await fetchTVL(blocks.ovm.ovmTwentyFiveDayBlock, optimism_url)
  const mainTwentyFiveDayDebt = await fetchTVL(blocks.main.mainTwentyFiveDayBlock, mainnet_url)
  const allTwentyFiveDayDebt = ovmTwentyFiveDayDebt + mainTwentyFiveDayDebt

  const ovmTwentyFiveDayWrapper = await fetchWrapper(blocks.ovm.ovmTwentyFiveDayBlock, optimism_url)
  const mainTwentyFiveDayWrapper = await fetchWrapper(blocks.main.mainTwentyFiveDayBlock, mainnet_url)
  const allTwentyFiveDayWrapper = ovmTwentyFiveDayWrapper + mainTwentyFiveDayWrapper

  const ovmThirtyDayDebt = await fetchTVL(blocks.ovm.ovmThirtyDayBlock, optimism_url)
  const mainThirtyDayDebt = await fetchTVL(blocks.main.mainThirtyDayBlock, mainnet_url)
  const allThirtyDayDebt = ovmThirtyDayDebt + mainThirtyDayDebt

  const ovmThirtyDayWrapper = await fetchWrapper(blocks.ovm.ovmThirtyDayBlock, optimism_url)
  const mainThirtyDayWrapper = await fetchWrapper(blocks.main.mainThirtyDayBlock, mainnet_url)
  const allThirtyDayWrapper = ovmThirtyDayWrapper + mainThirtyDayWrapper

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

  const dayAll = [
    {
      date: timeStamp.twentyFourHourAgo,
      debt: allTwentyFourHourDebt,
      wrapper: allTwentyFourHourWrapper,
    },
    {
      date: timeStamp.twentyHourAgo,
      debt: allTwentyHourDebt,
      wrapper: allTWentyHourWrapper,
    },
    {
      date: timeStamp.sixteenHourAgo,
      debt: allSixteenHourDebt,
      wrapper: allSixteenHourWrapper,
    },
    {
      date: timeStamp.twelveHourAgo,
      debt: allTwelveHourDebt,
      wrapper: allTwelveHourWrapper,
    },
    {
      date: timeStamp.eightHourAgo,
      debt: allEightHourDebt,
      wrapper: allEightHourWrapper,
    },
    {
      date: timeStamp.fourHourAgo,
      debt: allFourHourDebt,
      wrapper: allFourHourWrapper,
    },
    {
      date: timeStamp.noHourAgo,
      debt: allCurrentDebt,
      wrapper: allCurrentWrapper,
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

  const weekAll = [
    {
      date: timeStamp.sixDayAgo,
      debt: allSixDayDebt,
      wrapper: allSixDayWrapper,
    },
    {
      date: timeStamp.fiveDayAgo,
      debt: allFiveDayDebt,
      wrapper: allFiveDayWrapper,
    },
    {
      date: timeStamp.fourDayAgo,
      debt: allFourDayDebt,
      wrapper: allFourDayWrapper,
    },
    {
      date: timeStamp.threeDayAgo,
      debt: allThreeDayDebt,
      wrapper: allThreeDayWrapper,
    },
    {
      date: timeStamp.twoDayAgo,
      debt: allTwoDayDebt,
      wrapper: allTwoDayWrapper,
    },
    {
      date: timeStamp.oneDayAgo,
      debt: allTwentyFourHourDebt,
      wrapper: allTwentyFourHourWrapper,
    },
    {
      date: timeStamp.currentDay,
      debt: allCurrentDebt,
      wrapper: allCurrentWrapper,
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

  const monthAll = [
    {
      date: timeStamp.thirtyDayAgo,
      debt: allThirtyDayDebt,
      wrapper: allThirtyDayWrapper,
    },
    {
      date: timeStamp.twentyFiveDayAgo,
      debt: allTwentyFiveDayDebt,
      wrapper: allTwentyFiveDayWrapper,
    },
    {
      date: timeStamp.twentyDayAgo,
      debt: allTwentyDayDebt,
      wrapper: allTwentyDayWrapper,
    },
    {
      date: timeStamp.fifteenDayAgo,
      debt: allFifteenDayDebt,
      wrapper: allFifteenDayWrapper,
    },
    {
      date: timeStamp.tenDayAgo,
      debt: allTenDayDebt,
      wrapper: allTenDayWrapper,
    },
    {
      date: timeStamp.fiveDayAgo,
      debt: allFiveDayDebt,
      wrapper: allFiveDayWrapper,
    },
    {
      date: timeStamp.currentDay,
      debt: allCurrentDebt,
      wrapper: allCurrentWrapper,
    },
  ];

 


    return {
        dayOvm,
        dayMain,
        dayAll,
        weekOvm,
        weekMain,
        weekAll,
        monthOvm,
        monthMain,
        monthAll,
        allCurrentDebt,
        allCurrentWrapper,
        ovmCurrentDebt,
        ovmCurrentWrapper,
        mainCurrentDebt,
        mainCurrentWrapper,
       
    }

  }

    

      

   