import useSynthetixQueries from "@synthetixio/queries";
import { useEffect, useState } from "react";
import getTime from "../lib/getTime";
import { getDebtStates, getRateUpdates, getWrappers } from "../subgraph-ovm";
import { blocky } from '../lib/getBlock'



  // start data collection at 5 minutes ago to allow data sync

  const ts = Math.floor((Date.now() / 1e3));
  const { times } = getTime()
  const { timeStamp } = getTime()

  const mainnet_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/mainnet-main"
const optimism_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main"

  export const getTvl = async() => {

    const blocks = await blocky()

    const currentDebtCall = await getDebtStates(
        optimism_url,
        {
          orderBy: "timestamp",
          orderDirection: "desc",
          first: 1,
          block: { number: blocks.currentBlock },
        },
        { debtEntry: true, totalIssuedSynths: true },
      );

      const currentDebt = currentDebtCall[0].debtEntry.toNumber();
      const currentTotalIssuedSynths = currentDebtCall[0].totalIssuedSynths.toNumber();

    
      const fourHourDebtCall = await getDebtStates(
          optimism_url,
        {
          orderBy: "timestamp",
          orderDirection: "desc",
          first: 1,
          block: { number: blocks.fourHourBlock },
        },
        { debtEntry: true },
      );

      const fourHourDebt = fourHourDebtCall[0].debtEntry.toNumber();

    
      const eightHourDebtCall = await getDebtStates(
          optimism_url,
        {
          orderBy: "timestamp",
          orderDirection: "desc",
          first: 1,
          block: { number: blocks.eightHourBlock },
        },
        { debtEntry: true },
      );

      const eightHourDebt = eightHourDebtCall[0].debtEntry.toNumber();

    
      const twelveHourDebtCall = await getDebtStates(
          optimism_url,
        {
          orderBy: "timestamp",
          orderDirection: "desc",
          first: 1,
          block: { number: blocks.twelveHourBlock },
        },
        { debtEntry: true },
      );

      const twelveHourDebt = twelveHourDebtCall[0].debtEntry.toNumber();

    
      const sixteenHourDebtCall = await getDebtStates(
          optimism_url,
        {
          orderBy: "timestamp",
          orderDirection: "desc",
          first: 1,
          block: { number: blocks.sixteenHourBlock },
        },
        { debtEntry: true },
      );

      const sixteenHourDebt = sixteenHourDebtCall[0].debtEntry.toNumber();

    
      const twentyHourDebtCall = await getDebtStates(
          optimism_url,
        {
          orderBy: "timestamp",
          orderDirection: "desc",
          first: 1,
          block: { number: blocks.twentyHourBlock },
        },
        { debtEntry: true },
      );

      const twentyHourDebt = twentyHourDebtCall[0].debtEntry.toNumber();

    
      const twentyFourHourDebtCall = await getDebtStates(
          optimism_url,
        {
          orderBy: "timestamp",
          orderDirection: "desc",
          first: 1,
          block: { number: blocks.twentyFourHourBlock },
        },
        { debtEntry: true },
      );

      const twentyFourHourDebt = twentyFourHourDebtCall[0].debtEntry.toNumber();

    
      //week, already have current and one day ago(24hourago), start at day 2
    
      const twoDayDebtCall = await getDebtStates(
          optimism_url,
        {
          orderBy: "timestamp",
          orderDirection: "desc",
          first: 1,
          block: { number: blocks.twoDayBlock },
        },
        { debtEntry: true },
      );

      const twoDayDebt = twoDayDebtCall[0].debtEntry.toNumber();

    
      const threeDayDebtCall = await getDebtStates(
          optimism_url,
        {
          orderBy: "timestamp",
          orderDirection: "desc",
          first: 1,
          block: { number: blocks.threeDayBlock },
        },
        { debtEntry: true },
      );

      const threeDayDebt = threeDayDebtCall[0].debtEntry.toNumber();

    
      const fourDayDebtCall = await getDebtStates(
          optimism_url,
        {
          orderBy: "timestamp",
          orderDirection: "desc",
          first: 1,
          block: { number: blocks.fourDayBlock },
        },
        { debtEntry: true },
      );

      const fourDayDebt = fourDayDebtCall[0].debtEntry.toNumber();

    
      const fiveDayDebtCall = await getDebtStates(
          optimism_url,
        {
          orderBy: "timestamp",
          orderDirection: "desc",
          first: 1,
          block: { number: blocks.fiveDayBlock },
        },
        { debtEntry: true },
      );

      const fiveDayDebt = fiveDayDebtCall[0].debtEntry.toNumber();

    
      const sixDayDebtCall = await getDebtStates(
          optimism_url,
        {
          orderBy: "timestamp",
          orderDirection: "desc",
          first: 1,
          block: { number: blocks.sixDayBlock },
        },
        { debtEntry: true },
      );

      const sixDayDebt = sixDayDebtCall[0].debtEntry.toNumber();

    
      // month, start at day 10
    
      const tenDayDebtCall = await getDebtStates(
          optimism_url,
        {
          orderBy: "timestamp",
          orderDirection: "desc",
          first: 1,
          block: { number: blocks.tenDayBlock },
        },
        { debtEntry: true },
      );

      const tenDayDebt = tenDayDebtCall[0].debtEntry.toNumber();

    
      const fifteenDayDebtCall = await getDebtStates(
          optimism_url,
        {
          orderBy: "timestamp",
          orderDirection: "desc",
          first: 1,
          block: { number: blocks.fifteenDayBlock },
        },
        { debtEntry: true },
      );

      const fifteenDayDebt = fifteenDayDebtCall[0].debtEntry.toNumber();

    
      const twentyDayDebtCall = await getDebtStates(
          optimism_url,
        {
          orderBy: "timestamp",
          orderDirection: "desc",
          first: 1,
          block: { number: blocks.twentyDayBlock },
        },
        { debtEntry: true },
      );

      const twentyDayDebt = twentyDayDebtCall[0].debtEntry.toNumber();

    
      const twentyFiveDayDebtCall = await getDebtStates(
          optimism_url,
        {
          orderBy: "timestamp",
          orderDirection: "desc",
          first: 1,
          block: { number: blocks.twentyFiveDayBlock },
        },
        { debtEntry: true },
      );

      const twentyFiveDayDebt = twentyFiveDayDebtCall[0].debtEntry.toNumber();

    
      
      const thirtyDayDebtCall = await getDebtStates(
          optimism_url,
        {
          orderBy: "timestamp",
          orderDirection: "desc",
          first: 1,
          block: { number: blocks.thirtyDayBlock },
        },
        { debtEntry: true },
      );

      const thirtyDayDebt = thirtyDayDebtCall[0].debtEntry.toNumber();

    
      //wrappers
    
      //current wrapper
    
      const currentWrapperCall = await getWrappers(
          optimism_url,
        { block: { number: blocks.currentBlock } },
        { amountInUSD: true },
      );

      const currentWrapper = currentWrapperCall.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );


    
      //4 hour wrapper
    
      const fourHourWrapperCall = await getWrappers(
          optimism_url,
        { block: { number: blocks.fourHourBlock } },
        { amountInUSD: true },
      );

      const fourHourWrapper = fourHourWrapperCall.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );
    
      //8 hour wrapper
    
      const eightHourWrapperCall = await getWrappers(
          optimism_url,
        { block: { number: blocks.eightHourBlock } },
        { amountInUSD: true },
      );

      const eightHourWrapper = eightHourWrapperCall.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );
    
      //twelve hour
    
      const twelveHourWrapperCall = await getWrappers(
          optimism_url,
        { block: { number: blocks.twelveHourBlock } },
        { amountInUSD: true },
      );

      const twelveHourWrapper = twelveHourWrapperCall.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );
    
      //sixteen
    
      const sixteenHourWrapperCall = await getWrappers(
          optimism_url,
        { block: { number: blocks.sixteenHourBlock } },
        { amountInUSD: true },
      );

      const sixteenHourWrapper = sixteenHourWrapperCall.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );
    
      //twenty
    
      const twentyHourWrapperCall = await getWrappers(
          optimism_url,
        { block: { number: blocks.twentyHourBlock } },
        { amountInUSD: true },
      );

      const twentyHourWrapper = twentyHourWrapperCall.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );
    
      //24 hour
    
      const twentyFourHourWrapperCall = await getWrappers(
          optimism_url,
        { block: { number: blocks.twentyFourHourBlock } },
        { amountInUSD: true },
      );

      const twentyFourHourWrapper = twentyFourHourWrapperCall.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );
    
      //2 day
    
      const twoDayWrapperCall = await getWrappers(
          optimism_url,
        { block: { number: blocks.twoDayBlock } },
        { amountInUSD: true },
      );

      const twoDayWrapper = twoDayWrapperCall.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );
    
      // 3 day
    
      const threeDayWrapperCall = await getWrappers(
          optimism_url,
        { block: { number: blocks.threeDayBlock } },
        { amountInUSD: true },
      );

      const threeDayWrapper = threeDayWrapperCall.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );
    
      // 4 day
    
      const fourDayWrapperCall = await getWrappers(
          optimism_url,
        { block: { number: blocks.fourDayBlock } },
        { amountInUSD: true },
      );

      const fourDayWrapper = fourDayWrapperCall.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );
    
      // 5 day
    
      const fiveDayWrapperCall = await getWrappers(
          optimism_url,
        { block: { number: blocks.fiveDayBlock } },
        { amountInUSD: true },
      );

      const fiveDayWrapper = fiveDayWrapperCall.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );
    
      // 6 day
    
      const sixDayWrapperCall = await getWrappers(
          optimism_url,
        { block: { number: blocks.sixDayBlock } },
        { amountInUSD: true },
      );

      const sixDayWrapper = sixDayWrapperCall.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );
    
      // 10 day
    
      const tenDayWrapperCall = await getWrappers(
          optimism_url,
        { block: { number: blocks.tenDayBlock } },
        { amountInUSD: true },
      );

      const tenDayWrapper = tenDayWrapperCall.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );
    
      // 15 day
    
      const fifteenDayWrapperCall = await getWrappers(
          optimism_url,
        { block: { number: blocks.fifteenDayBlock } },
        { amountInUSD: true },
      );

      const fifteenDayWrapper = fifteenDayWrapperCall.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );
    
      // 20 day
    
      const twentyDayWrapperCall = await getWrappers(
          optimism_url,
        { block: { number: blocks.twentyDayBlock } },
        { amountInUSD: true },
      );

      const twentyDayWrapper = twentyDayWrapperCall.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );
    
      // 25 day
    
      const twentyFiveDayWrapperCall = await getWrappers(
          optimism_url,
        { block: { number: blocks.twentyFiveDayBlock } },
        { amountInUSD: true },
      );

      const twentyFiveDayWrapper = twentyFiveDayWrapperCall.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );
    
      // 30 day
    
      const thirtyDayWrapperCall = await getWrappers(
          optimism_url,
        { block: { number: blocks.thirtyDayBlock } },
        { amountInUSD: true },
      );

      const thirtyDayWrapper = thirtyDayWrapperCall.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );

      // create the charts

      const day = [
        {
          date: timeStamp.twentyFourHourAgo,
          debt: twentyFourHourDebt,
          wrapper: twentyFourHourWrapper,
        },
        {
          date: timeStamp.twentyHourAgo,
          debt: twentyHourDebt,
          wrapper: twentyHourWrapper,
        },
        {
          date: timeStamp.sixteenHourAgo,
          debt: sixteenHourDebt,
          wrapper: sixteenHourWrapper,
        },
        {
          date: timeStamp.twelveHourAgo,
          debt: twelveHourDebt,
          wrapper: twelveHourWrapper,
        },
        {
          date: timeStamp.eightHourAgo,
          debt: eightHourDebt,
          wrapper: eightHourWrapper,
        },
        {
          date: timeStamp.fourHourAgo,
          debt: fourHourDebt,
          wrapper: fourHourWrapper,
        },
        {
          date: timeStamp.noHourAgo,
          debt: currentDebt,
          wrapper: currentWrapper,
        },
      ];

      const week = [
        {
          date: timeStamp.sixDayAgo,
          debt: sixDayDebt,
          wrapper: sixDayWrapper,
        },
        {
          date: timeStamp.fiveDayAgo,
          debt: fiveDayDebt,
          wrapper: fiveDayWrapper,
        },
        {
          date: timeStamp.fourDayAgo,
          debt: fourDayDebt,
          wrapper: fourDayWrapper,
        },
        {
          date: timeStamp.threeDayAgo,
          debt: threeDayDebt,
          wrapper: threeDayWrapper,
        },
        {
          date: timeStamp.twoDayAgo,
          debt: twoDayDebt,
          wrapper: twoDayWrapper,
        },
        {
          date: timeStamp.oneDayAgo,
          debt: twentyFourHourDebt,
          wrapper: twentyFourHourWrapper,
        },
        {
          date: timeStamp.currentDay,
          debt: currentDebt,
          wrapper: currentWrapper,
        },
      ];


      const month = [
        {
          date: timeStamp.thirtyDayAgo,
          debt: thirtyDayDebt,
          wrapper: thirtyDayWrapper,
        },
        {
          date: timeStamp.twentyFiveDayAgo,
          debt: twentyFiveDayDebt,
          wrapper: twentyFiveDayWrapper,
        },
        {
          date: timeStamp.twentyDayAgo,
          debt: twentyDayDebt,
          wrapper: twentyDayWrapper,
        },
        {
          date: timeStamp.fifteenDayAgo,
          debt: fifteenDayDebt,
          wrapper: fifteenDayWrapper,
        },
        {
          date: timeStamp.tenDayAgo,
          debt: tenDayDebt,
          wrapper: tenDayWrapper,
        },
        {
          date: timeStamp.fiveDayAgo,
          debt: fiveDayDebt,
          wrapper: fiveDayWrapper,
        },
        {
          date: timeStamp.currentDay,
          debt: currentDebt,
          wrapper: currentWrapper,
        },
      ];


    return {
        currentDebt: currentDebt,
        currentTotalIssuedSynth: currentTotalIssuedSynths,
        currentWrapper: currentWrapper,
        day: day,
        week: week,
        month: month
    }

  }

    

      

   