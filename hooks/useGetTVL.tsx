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

  const [dayData, setDayData] = useState<any[]>();
  const [weekData, setWeekData] = useState<any[]>();
  const [monthData, setMonthData] = useState<any[]>();
  const [totalValueLocked, setTotalValueLocked] = useState<string>();
  const [totalWrapper, setTotalWrapper] = useState<string>();
  const [totalDebt, setTotalDebt] = useState<string>();
  const [totalIssuedSynth, setTotalIssuedSynth] = useState<string>();

  const currentDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: blockNum[0] },
    },
    { debtEntry: true, totalIssuedSynths: true },
    { enabled: Boolean(blockNum[0]) }
  );

  const fourHourDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: blockNum[1] },
    },
    { debtEntry: true },
    { enabled: Boolean(blockNum[1]) }
  );

  const eightHourDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: blockNum[2] },
    },
    { debtEntry: true },
    { enabled: Boolean(blockNum[2]) }
  );

  const twelveHourDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: blockNum[3] },
    },
    { debtEntry: true },
    { enabled: Boolean(blockNum[3]) }
  );

  const sixteenHourDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: blockNum[4] },
    },
    { debtEntry: true },
    { enabled: Boolean(blockNum[4]) }
  );

  const twentyHourDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: blockNum[5] },
    },
    { debtEntry: true },
    { enabled: Boolean(blockNum[5]) }
  );

  const twentyFourHourDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: blockNum[6] },
    },
    { debtEntry: true },
    { enabled: Boolean(blockNum[6]) }
  );

  //week, already have current and one day ago(24hourago), start at day 2

  const twoDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: weekBlockNum[0] },
    },
    { debtEntry: true },
    { enabled: Boolean(weekBlockNum[0]) }
  );

  const threeDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: weekBlockNum[1] },
    },
    { debtEntry: true },
    { enabled: Boolean(weekBlockNum[1]) }
  );

  const fourDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: weekBlockNum[2] },
    },
    { debtEntry: true },
    { enabled: Boolean(weekBlockNum[2]) }
  );

  const fiveDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: weekBlockNum[3] },
    },
    { debtEntry: true },
    { enabled: Boolean(weekBlockNum[3]) }
  );

  const sixDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: weekBlockNum[4] },
    },
    { debtEntry: true },
    { enabled: Boolean(weekBlockNum[4]) }
  );

  // month, start at day 10

  const tenDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: monthBlockNum[0] },
    },
    { debtEntry: true },
    { enabled: Boolean(monthBlockNum[0]) }
  );

  const fifteenDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: monthBlockNum[1] },
    },
    { debtEntry: true },
    { enabled: Boolean(monthBlockNum[1]) }
  );

  const twentyDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: monthBlockNum[2] },
    },
    { debtEntry: true },
    { enabled: Boolean(monthBlockNum[2]) }
  );

  const twentyFiveDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: monthBlockNum[3] },
    },
    { debtEntry: true },
    { enabled: Boolean(monthBlockNum[3]) }
  );

  const thirtyDayDebtCall = subgraph.useGetDebtStates(
    {
      orderBy: "timestamp",
      orderDirection: "desc",
      first: 1,
      block: { number: monthBlockNum[4] },
    },
    { debtEntry: true },
    { enabled: Boolean(monthBlockNum[4]) }
  );

  //wrappers

  //current wrapper

  const currentWrapperCall = subgraph.useGetWrappers(
    { block: { number: blockNum[0] } },
    { amountInUSD: true },
    { enabled: Boolean(blockNum[0]) }
  );

  //4 hour wrapper

  const fourHourWrapperCall = subgraph.useGetWrappers(
    { block: { number: blockNum[1] } },
    { amountInUSD: true },
    { enabled: Boolean(blockNum[1]) }
  );

  //8 hour wrapper

  const eightHourWrapperCall = subgraph.useGetWrappers(
    { block: { number: blockNum[2] } },
    { amountInUSD: true },
    { enabled: Boolean(blockNum[2]) }
  );

  //twelve hour

  const twelveHourWrapperCall = subgraph.useGetWrappers(
    { block: { number: blockNum[3] } },
    { amountInUSD: true },
    { enabled: Boolean(blockNum[3]) }
  );

  //sixteen

  const sixteenHourWrapperCall = subgraph.useGetWrappers(
    { block: { number: blockNum[4] } },
    { amountInUSD: true },
    { enabled: Boolean(blockNum[4]) }
  );

  //twenty

  const twentyHourWrapperCall = subgraph.useGetWrappers(
    { block: { number: blockNum[5] } },
    { amountInUSD: true },
    { enabled: Boolean(blockNum[5]) }
  );

  //24 hour

  const twentyFourHourWrapperCall = subgraph.useGetWrappers(
    { block: { number: blockNum[6] } },
    { amountInUSD: true },
    { enabled: Boolean(blockNum[6]) }
  );

  //2 day

  const twoDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: weekBlockNum[0] } },
    { amountInUSD: true },
    { enabled: Boolean(weekBlockNum[0]) }
  );

  // 3 day

  const threeDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: weekBlockNum[1] } },
    { amountInUSD: true },
    { enabled: Boolean(weekBlockNum[1]) }
  );

  // 4 day

  const fourDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: weekBlockNum[2] } },
    { amountInUSD: true },
    { enabled: Boolean(weekBlockNum[2]) }
  );

  // 5 day

  const fiveDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: weekBlockNum[3] } },
    { amountInUSD: true },
    { enabled: Boolean(weekBlockNum[3]) }
  );

  // 6 day

  const sixDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: weekBlockNum[4] } },
    { amountInUSD: true },
    { enabled: Boolean(weekBlockNum[4]) }
  );

  // 10 day

  const tenDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: monthBlockNum[0] } },
    { amountInUSD: true },
    { enabled: Boolean(monthBlockNum[0]) }
  );

  // 15 day

  const fifteenDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: monthBlockNum[1] } },
    { amountInUSD: true },
    { enabled: Boolean(monthBlockNum[1]) }
  );

  // 20 day

  const twentyDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: monthBlockNum[2] } },
    { amountInUSD: true },
    { enabled: Boolean(monthBlockNum[2])}
  );

  // 25 day

  const twentyFiveDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: monthBlockNum[3] } },
    { amountInUSD: true },
    { enabled: Boolean(monthBlockNum[3]) }
  );

  // 30 day

  const thirtyDayWrapperCall = subgraph.useGetWrappers(
    { block: { number: monthBlockNum[4] } },
    { amountInUSD: true },
    { enabled: Boolean(monthBlockNum[4])}
  );

  useEffect(() => {
    if (currentDebtCall.isSuccess && currentWrapperCall.isSuccess) {
      
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
  }, [currentDebtCall.isSuccess, currentWrapperCall.isSuccess]);

  useEffect(() => {
    if (
      currentDebtCall.isSuccess &&
      fourHourDebtCall.isSuccess &&
      eightHourDebtCall.isSuccess &&
      twelveHourDebtCall.isSuccess &&
      sixteenHourDebtCall.isSuccess &&
      twentyHourDebtCall.isSuccess &&
      twentyFourHourDebtCall.isSuccess &&
      currentWrapperCall.isSuccess &&
      fourHourWrapperCall.isSuccess &&
      eightHourWrapperCall.isSuccess &&
      twelveHourWrapperCall.isSuccess &&
      sixteenHourWrapperCall.isSuccess &&
      twentyHourWrapperCall.isSuccess &&
      twentyFourHourWrapperCall.isSuccess
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
    currentDebtCall.isSuccess,
    fourHourDebtCall.isSuccess,
    eightHourDebtCall.isSuccess,
    twelveHourDebtCall.isSuccess,
    sixteenHourDebtCall.isSuccess,
    twentyHourDebtCall.isSuccess,
    twentyFourHourDebtCall.isSuccess,
    currentWrapperCall.isSuccess,
    fourHourWrapperCall.isSuccess,
    eightHourWrapperCall.isSuccess,
    twelveHourWrapperCall.isSuccess,
    sixteenHourWrapperCall.isSuccess,
    twentyHourWrapperCall.isSuccess,
    twentyFourHourWrapperCall.isSuccess,
  ]);

  useEffect(() => {
    if (
      currentDebtCall.isSuccess &&
      twentyFourHourDebtCall.isSuccess &&
      twoDayDebtCall.isSuccess &&
      threeDayDebtCall.isSuccess &&
      fourDayDebtCall.isSuccess &&
      fiveDayDebtCall.isSuccess &&
      sixDayDebtCall.isSuccess &&
      currentWrapperCall.isSuccess &&
      twentyFourHourWrapperCall.isSuccess &&
      twoDayWrapperCall.isSuccess &&
      threeDayWrapperCall.isSuccess &&
      fourDayWrapperCall.isSuccess &&
      fiveDayWrapperCall.isSuccess &&
      sixDayWrapperCall.isSuccess
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
    currentDebtCall.isSuccess,
    twentyFourHourDebtCall.isSuccess,
    twoDayDebtCall.isSuccess,
    threeDayDebtCall.isSuccess,
    fourDayDebtCall.isSuccess,
    fiveDayDebtCall.isSuccess,
    sixDayDebtCall.isSuccess,
    currentWrapperCall.isSuccess,
    twentyFourHourWrapperCall.isSuccess,
    twoDayWrapperCall.isSuccess,
    threeDayWrapperCall.isSuccess,
    fourDayWrapperCall.isSuccess,
    fiveDayWrapperCall.isSuccess,
    sixDayWrapperCall.isSuccess,
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
    currentDebtCall.isSuccess,
    fiveDayDebtCall.isSuccess,
    tenDayDebtCall.isSuccess,
    fifteenDayDebtCall.isSuccess,
    twentyDayDebtCall.isSuccess,
    twentyFiveDayDebtCall.isSuccess,
    thirtyDayDebtCall.isSuccess,
    currentWrapperCall.isSuccess,
    fiveDayWrapperCall.isSuccess,
    tenDayWrapperCall.isSuccess,
    fifteenDayWrapperCall.isSuccess,
    twentyDayWrapperCall.isSuccess,
    twentyFiveDayWrapperCall.isSuccess,
    thirtyDayWrapperCall.isSuccess,
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
