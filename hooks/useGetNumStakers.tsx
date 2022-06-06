import useSynthetixQueries from "@synthetixio/queries";
import { useEffect, useState } from "react";
import useGetBlock from "./useGetBlock";
import useGetTime from "./useGetTime";

const useGetNumStakers = () => {
  const { subgraph } = useSynthetixQueries();
  const { blockNum } = useGetBlock();
  const { weekBlockNum } = useGetBlock();
  const { monthBlockNum } = useGetBlock();
  const { timeStamp } = useGetTime();

  const [dayStaker, setDayStaker] = useState<any[]>();
  const [weekStaker, setWeekStaker] = useState<any[]>();
  const [monthStaker, setMonthStaker] = useState<any[]>();
  const [numStakers, setNumStakers] = useState<number>()

  const currentStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: blockNum[0] } },
    { count: true },
    { enabled: Boolean(blockNum[0]) }
  );

  const fourHourStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: blockNum[1] } },
    { count: true },
    { enabled: Boolean(blockNum[1]) }
  );

  const eightHourStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: blockNum[2] } },
    { count: true },
    { enabled: Boolean(blockNum[2]) }
  );

  const twelveHourStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: blockNum[3] } },
    { count: true },
    { enabled: Boolean(blockNum[3]) }
  );

  const sixtenHourStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: blockNum[4] } },
    { count: true },
    { enabled: Boolean(blockNum[4]) }
  );

  const twentyHourStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: blockNum[5] } },
    { count: true },
    { enabled: Boolean(blockNum[5]) }
  );

  const twentyFourHourStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: blockNum[6] } },
    { count: true },
    { enabled: Boolean(blockNum[6]) }
  );

  //week staker
  /*
  const oneDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first:1, block:{number:weekBlockNum[0]}},
    { count:true}
  )*/

  const twoDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: weekBlockNum[0] } },
    { count: true },
    { enabled: Boolean(weekBlockNum[0]) }
  );

  const threeDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: weekBlockNum[1] } },
    { count: true },
    { enabled: Boolean(weekBlockNum[1]) }
  );

  const fourDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: weekBlockNum[2] } },
    { count: true },
    { enabled: Boolean(weekBlockNum[2]) }
  );

  const fiveDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: weekBlockNum[3] } },
    { count: true },
    { enabled: Boolean(weekBlockNum[3]) }
  );

  const sixDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: weekBlockNum[4] } },
    { count: true },
    { enabled: Boolean(weekBlockNum[4]) }
  );

  //month staker

  const tenDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: monthBlockNum[0] } },
    { count: true },
    { enabled: Boolean(monthBlockNum[0]) }
  );

  const fifteenDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: monthBlockNum[1] } },
    { count: true },
    { enabled: Boolean(monthBlockNum[1]) }
  );

  const twentyDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: monthBlockNum[2] } },
    { count: true },
    { enabled: Boolean(monthBlockNum[2]) }
  );

  const twentyFiveDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: monthBlockNum[3] } },
    { count: true },
    { enabled: Boolean(monthBlockNum[3]) }
  );

  const thirtyDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: monthBlockNum[4] } },
    { count: true },
    { enabled: Boolean(monthBlockNum[4]) }
  );

  useEffect(() => {
    if (
      currentStakerCall.isSuccess &&
      fourHourStakerCall.isSuccess &&
      eightHourStakerCall.isSuccess &&
      twelveHourStakerCall.isSuccess &&
      sixtenHourStakerCall.isSuccess &&
      twentyHourStakerCall.isSuccess &&
      twentyFourHourStakerCall.isSuccess
    ) {
      const currentStaker =
        currentStakerCall.isSuccess &&
        currentStakerCall.data[0].count.toNumber();
      
      setNumStakers(currentStaker)

      const fourHourStaker =
        fourHourStakerCall.isSuccess &&
        fourHourStakerCall.data[0].count.toNumber();

      const eightHourStaker =
        eightHourStakerCall.isSuccess &&
        eightHourStakerCall.data[0].count.toNumber();

      const twelveHourStaker =
        twelveHourStakerCall.isSuccess &&
        twelveHourStakerCall.data[0].count.toNumber();

      const sixteenHourStaker =
        sixtenHourStakerCall.isSuccess &&
        sixtenHourStakerCall.data[0].count.toNumber();

      const twentyHourStaker =
        twentyHourStakerCall.isSuccess &&
        twentyHourStakerCall.data[0].count.toNumber();

      const twentyFourHourStaker =
        twentyFourHourStakerCall.isSuccess &&
        twentyFourHourStakerCall.data[0].count.toNumber();

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

      setDayStaker(day);
    }
  }, [
    currentStakerCall.isSuccess,
    fourHourStakerCall.isSuccess,
    eightHourStakerCall.isSuccess,
    twelveHourStakerCall.isSuccess,
    sixtenHourStakerCall.isSuccess,
    twentyHourStakerCall.isSuccess,
    twentyFourHourStakerCall.isSuccess,
  ]);

  useEffect(() => {
    if (
      currentStakerCall.isSuccess &&
      twentyFourHourStakerCall.isSuccess &&
      twoDayStakerCall.isSuccess &&
      threeDayStakerCall.isSuccess &&
      fourDayStakerCall.isSuccess &&
      fiveDayStakerCall.isSuccess &&
      sixDayStakerCall.isSuccess
    ) {
      const currentStaker =
        currentStakerCall.isSuccess &&
        currentStakerCall.data[0].count.toNumber();

      const twentyFourHourStaker =
        twentyFourHourStakerCall.isSuccess &&
        twentyFourHourStakerCall.data[0].count.toNumber();

      const twoDayStaker =
        twoDayStakerCall.isSuccess && twoDayStakerCall.data[0].count.toNumber();

      const threeDayStaker =
        threeDayStakerCall.isSuccess &&
        threeDayStakerCall.data[0].count.toNumber();

      const fourDayStaker =
        fourDayStakerCall.isSuccess &&
        fourDayStakerCall.data[0].count.toNumber();

      const fiveDayStaker =
        fiveDayStakerCall.isSuccess &&
        fiveDayStakerCall.data[0].count.toNumber();

      const sixDayStaker =
        sixDayStakerCall.isSuccess && sixDayStakerCall.data[0].count.toNumber();

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

      setWeekStaker(week);
    }
  }, [
    currentStakerCall.isSuccess,
    twentyFourHourStakerCall.isSuccess,
    twoDayStakerCall.isSuccess,
    threeDayStakerCall.isSuccess,
    fourDayStakerCall.isSuccess,
    fiveDayStakerCall.isSuccess,
    sixDayStakerCall.isSuccess,
  ]);

  useEffect(() => {
    if (
      currentStakerCall.isSuccess &&
      fiveDayStakerCall.isSuccess &&
      tenDayStakerCall.isSuccess &&
      fifteenDayStakerCall.isSuccess &&
      twentyDayStakerCall.isSuccess &&
      twentyFiveDayStakerCall.isSuccess &&
      thirtyDayStakerCall.isSuccess
    ) {
      const currentStaker =
        currentStakerCall.isSuccess &&
        currentStakerCall.data[0].count.toNumber();

      const fiveDayStaker =
        fiveDayStakerCall.isSuccess &&
        fiveDayStakerCall.data[0].count.toNumber();

      const tenDayStaker =
        tenDayStakerCall.isSuccess && tenDayStakerCall.data[0].count.toNumber();

      const fifteenDayStaker =
        fifteenDayStakerCall.isSuccess &&
        fifteenDayStakerCall.data[0].count.toNumber();

      const twentyDayStaker =
        twentyDayStakerCall.isSuccess &&
        twentyDayStakerCall.data[0].count.toNumber();

      const twentyFiveDayStaker =
        twentyFiveDayStakerCall.isSuccess &&
        twentyFiveDayStakerCall.data[0].count.toNumber();

      const thirtyDayStaker =
        thirtyDayStakerCall.isSuccess &&
        thirtyDayStakerCall.data[0].count.toNumber();

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

      setMonthStaker(month);
    }
  }, [
    currentStakerCall.isSuccess,
    fiveDayStakerCall.isSuccess,
    tenDayStakerCall.isSuccess,
    fifteenDayStakerCall.isSuccess,
    twentyDayStakerCall.isSuccess,
    twentyFiveDayStakerCall.isSuccess,
    thirtyDayStakerCall.isSuccess,
  ]);

  return {
    dayStaker,
    weekStaker,
    monthStaker,
    numStakers
  };
};

export default useGetNumStakers;
