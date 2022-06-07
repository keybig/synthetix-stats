import useGetBlock from "./useGetBlock";
import useSynthetixQueries from "@synthetixio/queries";
import { formatMoney } from "../constants/format";
import useGetTime from "./useGetTime";
import { useEffect, useMemo, useState } from "react";

const useGetTVL = () => {
  const { subgraph } = useSynthetixQueries();
  const { blockNum } = useGetBlock();
  const { weekBlockNum } = useGetBlock();
  const { monthBlockNum } = useGetBlock();
  const { timeStamp } = useGetTime();

  const [
    blockOne,
    blockTwo,
    blockThree,
    blockFour,
    blockFive,
    blockSix,
    blockSeven
  ] = blockNum

  const [
    weekBlockOne,
    weekBlockTwo,
    weekBlockThree,
    weekBlockFour,
    weekBlockFive
  ] = weekBlockNum

  const [
    monthBlockOne,
    monthBlockTwo,
    monthBlockThree,
    monthBlockFour,
    monthBlockFive
  ] = monthBlockNum

  const [dayData, setDayData] = useState<any[]>();
  const [weekData, setWeekData] = useState<any[]>();
  const [monthData, setMonthData] = useState<any[]>();
  const [totalValueLocked, setTotalValueLocked] = useState<string>();
  const [totalWrapper, setTotalWrapper] = useState<string>();
  const [totalDebt, setTotalDebt] = useState<string>();
  const [totalIssuedSynth, setTotalIssuedSynth] = useState<string>();

  const { currentBlock } = useGetBlock()
  const { fourHourAgoBlock } = useGetBlock()
  const { eightHourAgoBlock } = useGetBlock()
  const { twelveHourAgoBlock } = useGetBlock()
  const { sixteenHourAgoBlock } = useGetBlock()
  const { twentyHourAgoBlock } = useGetBlock()
  const { twentyFourHourAgoBlock } = useGetBlock()
  const { twoDayAgoBlock } = useGetBlock()
  const { threeDayAgoBlock } = useGetBlock()
  const { fourDayAgoBlock } = useGetBlock()
  const { fiveDayAgoBlock } = useGetBlock()
  const { sixDayAgoBlock } = useGetBlock()
  const { tenDayAgoBlock } = useGetBlock()
  const { fifteenDayAgoBlock } = useGetBlock()
  const { twentyDayAgoBlock } = useGetBlock()
  const { twentyFiveDayAgoBlock } = useGetBlock()
  const { thirtyDayAgoBlock } = useGetBlock()

  const currentDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: blockOne },
    },
    { debtEntry: true, totalIssuedSynths: true },
    { enabled: !!blockOne}
  );

  const fourHourDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: blockTwo },
    },
    { debtEntry: true },
    { enabled: !!blockTwo }
  );

  const eightHourDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: blockThree },
    },
    { debtEntry: true },
    { enabled: !!blockThree }
  );

  const twelveHourDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: blockFour },
    },
    { debtEntry: true },
    { enabled: !!blockFour}
  );

  const sixteenHourDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: blockFive },
    },
    { debtEntry: true },
    { enabled: Boolean(blockFive) }
  );

  const twentyHourDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: blockSix },
    },
    { debtEntry: true },
    { enabled: Boolean(blockSix) }
  );

  const twentyFourHourDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: blockSeven },
    },
    { debtEntry: true },
    { enabled: Boolean(blockSeven) }
  );

  //week, already have current and one day ago(24hourago), start at day 2

  const twoDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: weekBlockOne },
    },
    { debtEntry: true },
    { enabled: Boolean(weekBlockOne) }
  );

  const threeDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: weekBlockTwo },
    },
    { debtEntry: true },
    { enabled: Boolean(weekBlockTwo)}
  );

  const fourDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: weekBlockThree },
    },
    { debtEntry: true },
    { enabled: Boolean(weekBlockThree) }
  );

  const fiveDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: weekBlockFour },
    },
    { debtEntry: true },
    { enabled: Boolean(weekBlockFour) }
  );

  const sixDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: weekBlockFive },
    },
    { debtEntry: true },
    { enabled: Boolean(weekBlockFive) }
  );

  // month, start at day 10

  const tenDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: monthBlockOne },
    },
    { debtEntry: true },
    { enabled: Boolean(monthBlockOne) }
  );

  const fifteenDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: monthBlockTwo },
    },
    { debtEntry: true },
    { enabled: Boolean(monthBlockTwo) }
  );

  const twentyDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: monthBlockThree },
    },
    { debtEntry: true },
    { enabled: Boolean(monthBlockThree) }
  );

  const twentyFiveDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: monthBlockFour },
    },
    { debtEntry: true },
    { enabled: Boolean(monthBlockFour) }
  );

  
  const thirtyDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: monthBlockFive },
    },
    { debtEntry: true },
    { enabled: Boolean(monthBlockFive) }
  );

  //wrappers

  //current wrapper

  const currentWrapperCall = subgraph.useGetWrappers(
    { block: { number: blockOne } },
    { amountInUSD: true },
    { enabled: Boolean(blockOne) }
  );

  //4 hour wrapper

  const fourHourWrapperCall = subgraph.useGetWrappers(
    { block: { number: blockTwo } },
    { amountInUSD: true },
    { enabled: Boolean(blockTwo) }
  );

  //8 hour wrapper

  const eightHourWrapperCall = subgraph.useGetWrappers(
    { block: { number: blockThree } },
    { amountInUSD: true },
    { enabled: Boolean(blockThree) }
  );

  //twelve hour

  const twelveHourWrapperCall = subgraph.useGetWrappers(
    { block: { number: blockFour } },
    { amountInUSD: true },
    { enabled: Boolean(blockFour) }
  );

  //sixteen

  const sixteenHourWrapperCall = subgraph.useGetWrappers(
    { block: { number: blockFive } },
    { amountInUSD: true },
    { enabled: Boolean(blockFive) }
  );

  //twenty

  const twentyHourWrapperCall = subgraph.useGetWrappers(
    { block: { number: blockSix } },
    { amountInUSD: true },
    { enabled: Boolean(blockSix) }
  );

  //24 hour

  const twentyFourHourWrapperCall = subgraph.useGetWrappers(
    { block: { number: blockSeven } },
    { amountInUSD: true },
    { enabled: Boolean(blockSeven) }
  );

  //2 day

  const twoDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: weekBlockOne } },
    { amountInUSD: true },
    { enabled: Boolean(weekBlockOne) }
  );

  // 3 day

  const threeDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: weekBlockTwo } },
    { amountInUSD: true },
    { enabled: Boolean(weekBlockTwo) }
  );

  // 4 day

  const fourDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: weekBlockThree } },
    { amountInUSD: true },
    { enabled: Boolean(weekBlockThree) }
  );

  // 5 day

  const fiveDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: weekBlockFour } },
    { amountInUSD: true },
    { enabled: Boolean(weekBlockFour) }
  );

  // 6 day

  const sixDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: weekBlockFive } },
    { amountInUSD: true },
    { enabled: Boolean(weekBlockFive) }
  );

  // 10 day

  const tenDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: monthBlockOne } },
    { amountInUSD: true },
    { enabled: Boolean(monthBlockOne) }
  );

  // 15 day

  const fifteenDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: monthBlockTwo } },
    { amountInUSD: true },
    { enabled: Boolean(monthBlockTwo) }
  );

  // 20 day

  const twentyDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: monthBlockThree } },
    { amountInUSD: true },
    { enabled: Boolean(monthBlockThree)}
  );

  // 25 day

  const twentyFiveDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: monthBlockFour } },
    { amountInUSD: true },
    { enabled: Boolean(monthBlockFour) }
  );

  // 30 day

  const thirtyDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: monthBlockFive } },
    { amountInUSD: true },
    { enabled: Boolean(monthBlockFive)}
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
      const currentDebt = currentDebtCall.data[0].debtEntry.toNumber();
      const fourHourDebt = fourHourDebtCall.data[0].debtEntry.toNumber();
      const eightHourDebt = eightHourDebtCall.data[0].debtEntry.toNumber();
      const twelveHourDebt = twelveHourDebtCall.data[0].debtEntry.toNumber();
      const sixteenHourDebt = sixteenHourDebtCall.data[0].debtEntry.toNumber();
      const twentyHourDebt = twentyHourDebtCall.data[0].debtEntry.toNumber();
      const twentyFourHourDebt =
        twentyFourHourDebtCall.data[0].debtEntry.toNumber();

      const currentWrapper = currentWrapperCall.data.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );

      const fourHourWrapper = fourHourWrapperCall.data.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );

      const eightHourWrapper = eightHourWrapperCall.data.reduce(
        (sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        },
        0
      );

      const twelveHourWrapper =
        twelveHourWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const sixteenHourWrapper =
        sixteenHourWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const twentyHourWrapper =
        twentyHourWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const twentyFourHourWrapper =
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
      const currentDebt =
        currentDebtCall.data[0].debtEntry.toNumber();

      const twentyFourHourDebt =
        twentyFourHourDebtCall.data[0].debtEntry.toNumber();

      const twoDayDebt =
       twoDayDebtCall.data[0].debtEntry.toNumber();

      const threeDayDebt =
        threeDayDebtCall.data[0].debtEntry.toNumber();

      const fourDayDebt =
        fourDayDebtCall.data[0].debtEntry.toNumber();

      const fiveDayDebt =
        fiveDayDebtCall.data[0].debtEntry.toNumber();

      const sixDayDebt =
       sixDayDebtCall.data[0].debtEntry.toNumber();

      const currentWrapper =
      
        currentWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const twentyFourHourWrapper =
        
        twentyFourHourWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const twoDayWrapper =
      
        twoDayWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const threeDayWrapper =
       
        threeDayWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const fourDayWrapper =
      
        fourDayWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const fiveDayWrapper =
      
        fiveDayWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const sixDayWrapper =
    
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
      currentDebtCall.isSuccess &&
      fiveDayDebtCall.isSuccess &&
      tenDayDebtCall.isSuccess &&
      fifteenDayDebtCall.isSuccess &&
      twentyDayDebtCall.isSuccess &&
      twentyFiveDayDebtCall.isSuccess &&
      thirtyDayDebtCall.isSuccess &&
      currentWrapperCall.isSuccess &&
      fiveDayWrapperCall.isSuccess &&
      tenDayWrapperCall.isSuccess &&
      fifteenDayWrapperCall.isSuccess &&
      twentyDayWrapperCall.isSuccess &&
      twentyFiveDayWrapperCall.isSuccess &&
      thirtyDayWrapperCall.isSuccess
    ) {
      const currentDebt =
     
        currentDebtCall.data[0].debtEntry.toNumber();

      const fiveDayDebt =
   
        fiveDayDebtCall.data[0].debtEntry.toNumber();

      const tenDayDebt =
        tenDayDebtCall.data[0].debtEntry.toNumber();

      const fifteenDayDebt =
     
        fifteenDayDebtCall.data[0].debtEntry.toNumber();

      const twentyDayDebt =
      
        twentyDayDebtCall.data[0].debtEntry.toNumber();

      const twentyFiveDayDebt =
     
        twentyFiveDayDebtCall.data[0].debtEntry.toNumber();

      const thirtyDayDebt =
     
        thirtyDayDebtCall.data[0].debtEntry.toNumber();

      const currentWrapper =
     
        currentWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const fiveDayWrapper =
     
        fiveDayWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const tenDayWrapper =
     
        tenDayWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const fifteenDayWrapper =
      
        fifteenDayWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const twentyDayWrapper =
      
        twentyDayWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const twentyFiveDayWrapper =
       
        twentyFiveDayWrapperCall.data.reduce((sum: number, cur) => {
          return sum + cur.amountInUSD.toNumber();
        }, 0);

      const thirtyDayWrapper =
      
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
