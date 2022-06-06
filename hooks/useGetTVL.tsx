import useGetBlock from "./useGetBlock";
import useSynthetixQueries from "@synthetixio/queries";
import { formatMoney } from "../constants/format";
import useGetTime from "./useGetTime";
import { useEffect, useMemo, useState } from "react";

const useGetTVL = () => {
  const { subgraph } = useSynthetixQueries();
  
  const { timeStamp } = useGetTime();

  const [dayData, setDayData] = useState<any[]>();
  const [weekData, setWeekData] = useState<any[]>();
  const [monthData, setMonthData] = useState<any[]>();
  const [totalValueLocked, setTotalValueLocked] = useState<string>();
  const [totalWrapper, setTotalWrapper] = useState<string>();
  const [totalDebt, setTotalDebt] = useState<string>();
  const [totalIssuedSynth, setTotalIssuedSynth] = useState<string>();

  const {currentBlock} = useGetBlock()
  const {fourHourBlock} = useGetBlock()
  const {eightHourBlock} = useGetBlock()
  const  {twelveHourblock}= useGetBlock()
  const  {sixteenHourBlock}= useGetBlock()
  const  {twentyHourBlock}= useGetBlock()
  const {twentyFourHourBlock}= useGetBlock()
  const  {twoDayBlock}= useGetBlock()
  const  {threeDayBlock}= useGetBlock()
  const   {fourDayBlock}= useGetBlock()
    const   {fiveDayBlock}= useGetBlock()
    const  {sixDayBlock}= useGetBlock()
    const  {tenDayBlock}= useGetBlock()
    const  {fifteenDayBlock}= useGetBlock()
    const  {twentyDayblock}= useGetBlock()
    const  {twentyFiveDayBlock}= useGetBlock()
    const  {thirtyDayBlock}= useGetBlock()

  

  const currentDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: currentBlock },
    },
    { debtEntry: true, totalIssuedSynths: true },
    { enabled: Boolean(currentBlock) }
  );

  const fourHourDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: fourHourBlock },
    },
    { debtEntry: true },
    { enabled: Boolean(fourHourBlock) }
  );

  const eightHourDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: eightHourBlock },
    },
    { debtEntry: true },
    { enabled: Boolean(eightHourBlock) }
  );

  const twelveHourDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: twelveHourblock },
    },
    { debtEntry: true },
    { enabled: Boolean(twelveHourblock) }
  );

  const sixteenHourDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: sixteenHourBlock },
    },
    { debtEntry: true },
    { enabled: Boolean(sixteenHourBlock) }
  );

  const twentyHourDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: twentyHourBlock },
    },
    { debtEntry: true },
    { enabled: Boolean(twentyHourBlock) }
  );

  const twentyFourHourDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: twentyFourHourBlock },
    },
    { debtEntry: true },
    { enabled: Boolean(twentyFourHourBlock) }
  );

  //week, already have current and one day ago(24hourago), start at day 2

  const twoDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: twoDayBlock },
    },
    { debtEntry: true },
    { enabled: Boolean(twoDayBlock) }
  );

  const threeDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: threeDayBlock },
    },
    { debtEntry: true },
    { enabled: Boolean(threeDayBlock) }
  );

  const fourDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: fourDayBlock },
    },
    { debtEntry: true },
    { enabled: Boolean(fourDayBlock) }
  );

  const fiveDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: fiveDayBlock },
    },
    { debtEntry: true },
    { enabled: Boolean(fiveDayBlock) }
  );

  const sixDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: sixDayBlock },
    },
    { debtEntry: true },
    { enabled: Boolean(sixDayBlock) }
  );

  // month, start at day 10

  const tenDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: tenDayBlock},
    },
    { debtEntry: true },
    { enabled: Boolean(tenDayBlock) }
  );

  const fifteenDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: fifteenDayBlock },
    },
    { debtEntry: true },
    { enabled: Boolean(fifteenDayBlock) }
  );

  const twentyDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: twentyDayblock },
    },
    { debtEntry: true },
    { enabled: Boolean(twentyDayblock) }
  );

  const twentyFiveDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: twentyFiveDayBlock },
    },
    { debtEntry: true },
    { enabled: Boolean(twentyFiveDayBlock) }
  );

  const thirtyDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: thirtyDayBlock },
    },
    { debtEntry: true },
    { enabled: Boolean(thirtyDayBlock) }
  );

  //wrappers

  //current wrapper

  const currentWrapperCall = subgraph.useGetWrappers(
    { block: { number: currentBlock } },
    { amountInUSD: true },
    { enabled: Boolean(currentBlock) }
  );

  //4 hour wrapper

  const fourHourWrapperCall = subgraph.useGetWrappers(
    { block: { number: fourHourBlock } },
    { amountInUSD: true },
    { enabled: Boolean(fourHourBlock) }
  );

  //8 hour wrapper

  const eightHourWrapperCall = subgraph.useGetWrappers(
    { block: { number: eightHourBlock } },
    { amountInUSD: true },
    { enabled: Boolean(eightHourBlock) }
  );

  //twelve hour

  const twelveHourWrapperCall = subgraph.useGetWrappers(
    { block: { number: twelveHourblock } },
    { amountInUSD: true },
    { enabled: Boolean(twelveHourblock) }
  );

  //sixteen

  const sixteenHourWrapperCall = subgraph.useGetWrappers(
    { block: { number: sixteenHourBlock } },
    { amountInUSD: true },
    { enabled: Boolean(sixteenHourBlock) }
  );

  //twenty

  const twentyHourWrapperCall = subgraph.useGetWrappers(
    { block: { number: twentyHourBlock } },
    { amountInUSD: true },
    { enabled: Boolean(twentyHourBlock) }
  );

  //24 hour

  const twentyFourHourWrapperCall = subgraph.useGetWrappers(
    { block: { number: twentyFourHourBlock } },
    { amountInUSD: true },
    { enabled: Boolean(twentyFourHourBlock) }
  );

  //2 day

  const twoDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: twoDayBlock} },
    { amountInUSD: true },
    { enabled: Boolean(twoDayBlock) }
  );

  // 3 day

  const threeDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: threeDayBlock } },
    { amountInUSD: true },
    { enabled: Boolean(threeDayBlock) }
  );

  // 4 day

  const fourDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: fourDayBlock } },
    { amountInUSD: true },
    { enabled: Boolean(fourDayBlock) }
  );

  // 5 day

  const fiveDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: fiveDayBlock } },
    { amountInUSD: true },
    { enabled: Boolean(fiveDayBlock) }
  );

  // 6 day

  const sixDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: sixDayBlock } },
    { amountInUSD: true },
    { enabled: Boolean(sixDayBlock) }
  );

  // 10 day

  const tenDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: tenDayBlock } },
    { amountInUSD: true },
    { enabled: Boolean(tenDayBlock) }
  );

  // 15 day

  const fifteenDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: fifteenDayBlock } },
    { amountInUSD: true },
    { enabled: Boolean(fifteenDayBlock) }
  );

  // 20 day

  const twentyDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: twentyDayblock } },
    { amountInUSD: true },
    { enabled: Boolean(twentyDayblock)}
  );

  // 25 day

  const twentyFiveDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: twentyFiveDayBlock } },
    { amountInUSD: true },
    { enabled: Boolean(twentyFiveDayBlock) }
  );

  // 30 day

  const thirtyDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: thirtyDayBlock } },
    { amountInUSD: true },
    { enabled: Boolean(thirtyDayBlock)}
  );

  useEffect(() => {
    if (currentDebtCall.data && currentWrapperCall.data) {
      
      const currentTotalDebt = currentDebtCall.data[0].debtEntry.toNumber();
      const fmtTotalDebt = formatMoney.format(currentTotalDebt)

      const currentWrapperTotal = currentWrapperCall.data.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );

      const fmtTotalWrapper = formatMoney.format(currentWrapperTotal) 

      const currentTotalIssuedSynth =
        currentDebtCall.data[0].totalIssuedSynths.toNumber();
      const formatTotalIssuedSynth = formatMoney.format(
        currentTotalIssuedSynth
      );

      const currentTVL = currentTotalDebt + currentWrapperTotal;
      const formatTVL = formatMoney.format(currentTVL);

      setTotalDebt(fmtTotalDebt);
      setTotalWrapper(fmtTotalWrapper);
      setTotalValueLocked(formatTVL);
      setTotalIssuedSynth(formatTotalIssuedSynth);
    }
  }, [currentDebtCall.data, currentWrapperCall.data]);

  useEffect(() => {
    if (
      currentDebtCall.data &&
      fourHourDebtCall.data &&
      eightHourDebtCall.data &&
      twelveHourDebtCall.data &&
      sixteenHourDebtCall.data &&
      twentyHourDebtCall.data &&
      twentyFourHourDebtCall.data &&
      currentWrapperCall.data &&
      fourHourWrapperCall.data &&
      eightHourWrapperCall.data &&
      twelveHourWrapperCall.data &&
      sixteenHourWrapperCall.data &&
      twentyHourWrapperCall.data &&
      twentyFourHourWrapperCall.data
    ) {
      const currentDebt = currentDebtCall.isSuccess &&
      currentDebtCall.data[0].debtEntry.toNumber();

      const fourHourDebt = fourHourDebtCall.isSuccess &&
      fourHourDebtCall.data[0].debtEntry.toNumber();

      const eightHourDebt = eightHourDebtCall.isSuccess &&
      eightHourDebtCall.data[0].debtEntry.toNumber();

      const twelveHourDebt = twelveHourDebtCall.isSuccess &&
      twelveHourDebtCall.data[0].debtEntry.toNumber();

      const sixteenHourDebt = sixteenHourDebtCall.isSuccess &&
      sixteenHourDebtCall.data[0].debtEntry.toNumber();

      const twentyHourDebt = twentyHourDebtCall.isSuccess &&
      twentyHourDebtCall.data[0].debtEntry.toNumber();

      const twentyFourHourDebt = twentyFourHourDebtCall.isSuccess &&
        twentyFourHourDebtCall.data[0].debtEntry.toNumber();

      const currentWrapper = currentWrapperCall.isSuccess &&
      currentWrapperCall.data.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );

      const fourHourWrapper = fourHourWrapperCall.isSuccess &&
      fourHourWrapperCall.data.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );

      const eightHourWrapper = eightHourWrapperCall.isSuccess &&
      eightHourWrapperCall.data.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );

      const twelveHourWrapper = twelveHourWrapperCall.isSuccess &&
        twelveHourWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const sixteenHourWrapper = sixteenHourWrapperCall.isSuccess &&
        sixteenHourWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const twentyHourWrapper = twentyHourWrapperCall.isSuccess &&
        twentyHourWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const twentyFourHourWrapper = twentyFourHourWrapperCall.isSuccess &&
        twentyFourHourWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

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

      setDayData(day);
    }
  }, [
    currentDebtCall.data,
    fourHourDebtCall.data,
    eightHourDebtCall.data,
    twelveHourDebtCall.data,
    sixteenHourDebtCall.data,
    twentyHourDebtCall.data,
    twentyFourHourDebtCall.data,
    currentWrapperCall.data,
    fourHourWrapperCall.data,
    eightHourWrapperCall.data,
    twelveHourWrapperCall.data,
    sixteenHourWrapperCall.data,
    twentyHourWrapperCall.data,
    twentyFourHourWrapperCall.data,
  ]);

  useEffect(() => {
    if (
      currentDebtCall.data &&
      twentyFourHourDebtCall.data &&
      twoDayDebtCall.data &&
      threeDayDebtCall.data &&
      fourDayDebtCall.data &&
      fiveDayDebtCall.data &&
      sixDayDebtCall.data &&
      currentWrapperCall.data &&
      twentyFourHourWrapperCall.data &&
      twoDayWrapperCall.data &&
      threeDayWrapperCall.data &&
      fourDayWrapperCall.data &&
      fiveDayWrapperCall.data &&
      sixDayWrapperCall.data
    ) {
      const currentDebt = currentDebtCall.isSuccess &&
        currentDebtCall.data[0].debtEntry.toNumber();

      const twentyFourHourDebt = twentyFourHourDebtCall.isSuccess &&
        twentyFourHourDebtCall.data[0].debtEntry.toNumber();

      const twoDayDebt = twoDayDebtCall.isSuccess &&
       twoDayDebtCall.data[0].debtEntry.toNumber();

      const threeDayDebt = threeDayDebtCall.isSuccess &&
        threeDayDebtCall.data[0].debtEntry.toNumber();

      const fourDayDebt = fourDayDebtCall.isSuccess &&
        fourDayDebtCall.data[0].debtEntry.toNumber();

      const fiveDayDebt = fiveDayDebtCall.isSuccess &&
        fiveDayDebtCall.data[0].debtEntry.toNumber();

      const sixDayDebt = sixDayDebtCall.isSuccess &&
       sixDayDebtCall.data[0].debtEntry.toNumber();

      const currentWrapper = currentWrapperCall.isSuccess &&
      
        currentWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const twentyFourHourWrapper = twentyFourHourWrapperCall.isSuccess &&
        
        twentyFourHourWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const twoDayWrapper = twoDayWrapperCall.isSuccess &&
      
        twoDayWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const threeDayWrapper = threeDayWrapperCall.isSuccess &&
       
        threeDayWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const fourDayWrapper = fourDayWrapperCall.isSuccess &&
      
        fourDayWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const fiveDayWrapper = fiveDayWrapperCall.isSuccess &&
      
        fiveDayWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const sixDayWrapper = sixDayWrapperCall.isSuccess &&
    
        sixDayWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

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

      setWeekData(week);
    }
  }, [
    currentDebtCall.data,
    twentyFourHourDebtCall.data,
    twoDayDebtCall.data,
    threeDayDebtCall.data,
    fourDayDebtCall.data,
    fiveDayDebtCall.data,
    sixDayDebtCall.data,
    currentWrapperCall.data,
    twentyFourHourWrapperCall.data,
    twoDayWrapperCall.data,
    threeDayWrapperCall.data,
    fourDayWrapperCall.data,
    fiveDayWrapperCall.data,
    sixDayWrapperCall.data,
  ]);

  useEffect(() => {
    if (
      currentDebtCall.data &&
      fiveDayDebtCall.data &&
      tenDayDebtCall.data &&
      fifteenDayDebtCall.data &&
      twentyDayDebtCall.data &&
      twentyFiveDayDebtCall.data &&
      thirtyDayDebtCall.data &&
      currentWrapperCall.data &&
      fiveDayWrapperCall.data &&
      tenDayWrapperCall.data &&
      fifteenDayWrapperCall.data &&
      twentyDayWrapperCall.data &&
      twentyFiveDayWrapperCall.data &&
      thirtyDayWrapperCall.data
    ) {
      const currentDebt = currentDebtCall.isSuccess &&
     
        currentDebtCall.data[0].debtEntry.toNumber();

      const fiveDayDebt = fiveDayDebtCall.isSuccess &&
   
        fiveDayDebtCall.data[0].debtEntry.toNumber();

      const tenDayDebt = tenDayDebtCall.isSuccess &&
        tenDayDebtCall.data[0].debtEntry.toNumber();

      const fifteenDayDebt = fifteenDayDebtCall.isSuccess &&
     
        fifteenDayDebtCall.data[0].debtEntry.toNumber();

      const twentyDayDebt = twentyDayDebtCall.isSuccess &&
      
        twentyDayDebtCall.data[0].debtEntry.toNumber();

      const twentyFiveDayDebt = twentyFiveDayDebtCall.isSuccess &&
     
        twentyFiveDayDebtCall.data[0].debtEntry.toNumber();

      const thirtyDayDebt = thirtyDayDebtCall.isSuccess &&
     
        thirtyDayDebtCall.data[0].debtEntry.toNumber();

      const currentWrapper = currentWrapperCall.isSuccess &&
     
        currentWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const fiveDayWrapper = fiveDayWrapperCall.isSuccess &&
     
        fiveDayWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const tenDayWrapper = tenDayWrapperCall.isSuccess &&
     
        tenDayWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const fifteenDayWrapper = fifteenDayWrapperCall.isSuccess &&
      
        fifteenDayWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const twentyDayWrapper = twentyDayWrapperCall.isSuccess &&
      
        twentyDayWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const twentyFiveDayWrapper = twentyFiveDayWrapperCall.isSuccess &&
       
        twentyFiveDayWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const thirtyDayWrapper = thirtyDayWrapperCall.isSuccess &&
      
        thirtyDayWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

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

      setMonthData(month);
    }
  }, [
    currentDebtCall.data,
    fiveDayDebtCall.data,
    tenDayDebtCall.data,
    fifteenDayDebtCall.data,
    twentyDayDebtCall.data,
    twentyFiveDayDebtCall.data,
    thirtyDayDebtCall.data,
    currentWrapperCall.data,
    fiveDayWrapperCall.data,
    tenDayWrapperCall.data,
    fifteenDayWrapperCall.data,
    twentyDayWrapperCall.data,
    twentyFiveDayWrapperCall.data,
    thirtyDayWrapperCall.data,
  ]);

  return {
    dayData,
    weekData,
    monthData,
    totalDebt,
    totalWrapper,
    totalValueLocked,
    totalIssuedSynth,
  };
};

export default useGetTVL;
