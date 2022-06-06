import useSynthetixQueries from "@synthetixio/queries";
import { useEffect, useState } from "react";
import useGetBlock from "./useGetBlock";
import useGetTime from "./useGetTime";

const useGetNumStakers = () => {
  const { subgraph } = useSynthetixQueries();
  const { timeStamp } = useGetTime();

  const [dayStaker, setDayStaker] = useState<any[]>();
  const [weekStaker, setWeekStaker] = useState<any[]>();
  const [monthStaker, setMonthStaker] = useState<any[]>();
  const [numStakers, setNumStakers] = useState<number>()

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

  const currentStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: currentBlock } },
    { count: true },
    { enabled: Boolean(currentBlock) }
  );
  

  const fourHourStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: fourHourBlock } },
    { count: true },
    { enabled: Boolean(fourHourBlock) }
  );
  

  const eightHourStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: eightHourBlock } },
    { count: true },
    { enabled: Boolean(eightHourBlock) }
  );

  const twelveHourStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: twelveHourblock } },
    { count: true },
    { enabled: Boolean(twelveHourblock) }
  );

  const sixtenHourStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: sixteenHourBlock } },
    { count: true },
    { enabled: Boolean(sixteenHourBlock) }
  );

  const twentyHourStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: twentyHourBlock } },
    { count: true },
    { enabled: Boolean(twentyHourBlock) }
  );

  const twentyFourHourStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: twentyFourHourBlock } },
    { count: true },
    { enabled: Boolean(twentyFourHourBlock) }
  );

  //week staker
  /*
  const oneDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first:1, block:{number:weekBlockNum[0]}},
    { count:true}
  )*/

  const twoDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: twoDayBlock } },
    { count: true },
    { enabled: Boolean(twoDayBlock) }
  );

  const threeDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: twoDayBlock } },
    { count: true },
    { enabled: Boolean(threeDayBlock) }
  );

  const fourDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: fourDayBlock } },
    { count: true },
    { enabled: Boolean(fourDayBlock) }
  );

  const fiveDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: fiveDayBlock } },
    { count: true },
    { enabled: Boolean(fiveDayBlock) }
  );

  const sixDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: sixDayBlock } },
    { count: true },
    { enabled: Boolean(sixDayBlock) }
  );

  //month staker

  const tenDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: tenDayBlock } },
    { count: true },
    { enabled: Boolean(tenDayBlock) }
  );

  const fifteenDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: fifteenDayBlock } },
    { count: true },
    { enabled: Boolean(fifteenDayBlock) }
  );

  const twentyDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: twentyDayblock } },
    { count: true },
    { enabled: Boolean(twentyDayblock) }
  );

  const twentyFiveDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: twentyFiveDayBlock } },
    { count: true },
    { enabled: Boolean(twentyFiveDayBlock) }
  );

  const thirtyDayStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: thirtyDayBlock } },
    { count: true },
    { enabled: Boolean(thirtyDayBlock) }
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
       
        currentStakerCall.data[0].count.toNumber();
      
      setNumStakers(currentStaker)

      const fourHourStaker =
        
        fourHourStakerCall.data[0].count.toNumber();

      const eightHourStaker =
      
        eightHourStakerCall.data[0].count.toNumber();

      const twelveHourStaker =
      
        twelveHourStakerCall.data[0].count.toNumber();

      const sixteenHourStaker =
     
        sixtenHourStakerCall.data[0].count.toNumber();

      const twentyHourStaker =
   
        twentyHourStakerCall.data[0].count.toNumber();

      const twentyFourHourStaker =
    
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
        currentStakerCall.data[0].count.toNumber();

      const twentyFourHourStaker =
        twentyFourHourStakerCall.data[0].count.toNumber();

      const twoDayStaker =
         twoDayStakerCall.data[0].count.toNumber();

      const threeDayStaker =
   
        threeDayStakerCall.data[0].count.toNumber();

      const fourDayStaker =
    
        fourDayStakerCall.data[0].count.toNumber();

      const fiveDayStaker =
    
        fiveDayStakerCall.data[0].count.toNumber();

      const sixDayStaker =
       sixDayStakerCall.data[0].count.toNumber();

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
        currentStakerCall.data[0].count.toNumber();

      const fiveDayStaker =
        fiveDayStakerCall.data[0].count.toNumber();

      const tenDayStaker =
        tenDayStakerCall.data[0].count.toNumber();

      const fifteenDayStaker =
        fifteenDayStakerCall.data[0].count.toNumber();

      const twentyDayStaker =
        twentyDayStakerCall.data[0].count.toNumber();

      const twentyFiveDayStaker =
        twentyFiveDayStakerCall.data[0].count.toNumber();

      const thirtyDayStaker =
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
