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

  const currentStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: blockOne } },
    { count: true },
    { enabled: Boolean(blockOne) }
  );

  const fourHourStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: blockTwo } },
    { count: true },
    { enabled: Boolean(blockTwo) }
  );

  const eightHourStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: blockThree } },
    { count: true },
    { enabled: Boolean(blockThree) }
  );

  const twelveHourStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: blockFour } },
    { count: true },
    { enabled: Boolean(blockFour) }
  );

  const sixtenHourStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: blockFive } },
    { count: true },
    { enabled: Boolean(blockFive) }
  );

  const twentyHourStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: blockSix } },
    { count: true },
    { enabled: Boolean(blockSix) }
  );

  const twentyFourHourStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: blockSeven } },
    { count: true },
    { enabled: Boolean(blockSeven) }
  );

  //week staker
  /*
  const oneDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first:1, block:{number:weekBlockNum[0]}},
    { count:true}
  )*/

  const twoDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: weekBlockOne } },
    { count: true },
    { enabled: Boolean(weekBlockOne) }
  );

  const threeDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: weekBlockTwo } },
    { count: true },
    { enabled: Boolean(weekBlockTwo) }
  );

  const fourDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: weekBlockThree } },
    { count: true },
    { enabled: Boolean(weekBlockThree) }
  );

  const fiveDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: weekBlockFour } },
    { count: true },
    { enabled: Boolean(weekBlockFour) }
  );

  const sixDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: weekBlockFive } },
    { count: true },
    { enabled: Boolean(weekBlockFive) }
  );

  //month staker

  const tenDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: monthBlockOne } },
    { count: true },
    { enabled: Boolean(monthBlockOne) }
  );

  const fifteenDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: monthBlockTwo } },
    { count: true },
    { enabled: Boolean(monthBlockTwo) }
  );

  const twentyDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: monthBlockThree } },
    { count: true },
    { enabled: Boolean(monthBlockThree) }
  );

  const twentyFiveDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: monthBlockFour } },
    { count: true },
    { enabled: Boolean(monthBlockFour) }
  );

  const thirtyDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: monthBlockFive } },
    { count: true },
    { enabled: Boolean(monthBlockFive) }
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
    currentStakerCall.data,
    fourHourStakerCall.data,
    eightHourStakerCall.data,
    twelveHourStakerCall.data,
    sixtenHourStakerCall.data,
    twentyHourStakerCall.data,
    twentyFourHourStakerCall.data,
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
    currentStakerCall.data,
    twentyFourHourStakerCall.data,
    twoDayStakerCall.data,
    threeDayStakerCall.data,
    fourDayStakerCall.data,
    fiveDayStakerCall.data,
    sixDayStakerCall.data,
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
    currentStakerCall.data,
    fiveDayStakerCall.data,
    tenDayStakerCall.data,
    fifteenDayStakerCall.data,
    twentyDayStakerCall.data,
    twentyFiveDayStakerCall.data,
    thirtyDayStakerCall.data,
  ]);

  return {
    dayStaker,
    weekStaker,
    monthStaker,
    numStakers
  };
};

export default useGetNumStakers;
