import useSynthetixQueries from "@synthetixio/queries";
import useGetBlock from "./useGetBlock";

const useGetNumStakers = () => {
  const { subgraph } = useSynthetixQueries();

  const dayStakeArr: number[] = [];
  const weekStakeArr: number[] = [];
  const monthStakeArr: number[] = [];
  const yearStakeArr: number[] = [];

  const { blockNum } = useGetBlock();
  const { weekBlockNum } = useGetBlock();
  const { monthBlockNum } = useGetBlock();

  const currentStaker = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: blockNum[0] } },
    { count: true },
    { enabled: Boolean(blockNum[0]) }
  );

  const fourHourStaker = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: blockNum[1] } },
    { count: true },
    { enabled: Boolean(blockNum[1]) }
  );

  const eightHourStaker = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: blockNum[2] } },
    { count: true },
    { enabled: Boolean(blockNum[2]) }
  );

  const twelveHourStaker = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: blockNum[3] } },
    { count: true },
    { enabled: Boolean(blockNum[3]) }
  );

  const sixtenHourStaker = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: blockNum[4] } },
    { count: true },
    { enabled: Boolean(blockNum[4]) }
  );

  const twentyHourAgoStaker = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: blockNum[5] } },
    { count: true },
    { enabled: Boolean(blockNum[5]) }
  );

  const twentyFourHourAgoStaker = subgraph.useGetTotalActiveStakers(
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

  const twoDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: weekBlockNum[0] } },
    { count: true },
    { enabled: Boolean(weekBlockNum[0]) }
  );

  const threeDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: weekBlockNum[1] } },
    { count: true },
    { enabled: Boolean(weekBlockNum[1]) }
  );

  const fourDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: weekBlockNum[2] } },
    { count: true },
    { enabled: Boolean(weekBlockNum[2]) }
  );

  const fiveDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: weekBlockNum[3] } },
    { count: true },
    { enabled: Boolean(weekBlockNum[3]) }
  );

  const sixDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: weekBlockNum[4] } },
    { count: true },
    { enabled: Boolean(weekBlockNum[4]) }
  );

  //month staker

  const tenDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: monthBlockNum[0] } },
    { count: true },
    { enabled: Boolean(monthBlockNum[0]) }
  );

  const fifteenDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: monthBlockNum[1] } },
    { count: true },
    { enabled: Boolean(monthBlockNum[1]) }
  );

  const twentyDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: monthBlockNum[2] } },
    { count: true },
    { enabled: Boolean(monthBlockNum[2]) }
  );

  const twentyFiveDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: monthBlockNum[3] } },
    { count: true },
    { enabled: Boolean(monthBlockNum[3]) }
  );

  const thirtyDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first: 1, block: { number: monthBlockNum[4] } },
    { count: true },
    { enabled: Boolean(monthBlockNum[4]) }
  );

  /*oneDayAgoStaker.data?.forEach(item=>{
    weekStakeArr.push(item.count.toNumber())
  })*/
  //week staker arr creation
  twoDayAgoStaker.data?.forEach((item) => {
    weekStakeArr.push(item.count.toNumber());
  });

  threeDayAgoStaker.data?.forEach((item) => {
    weekStakeArr.push(item.count.toNumber());
  });

  fourDayAgoStaker.data?.forEach((item) => {
    weekStakeArr.push(item.count.toNumber());
  });

  fiveDayAgoStaker.data?.forEach((item) => {
    weekStakeArr.push(item.count.toNumber());
  });

  sixDayAgoStaker.data?.forEach((item) => {
    weekStakeArr.push(item.count.toNumber());
  });

  //month staker arr creation

  tenDayAgoStaker.data?.forEach((item) => {
    monthStakeArr.push(item.count.toNumber());
  });

  fifteenDayAgoStaker.data?.forEach((item) => {
    monthStakeArr.push(item.count.toNumber());
  });

  twentyDayAgoStaker.data?.forEach((item) => {
    monthStakeArr.push(item.count.toNumber());
  });

  twentyFiveDayAgoStaker.data?.forEach((item) => {
    monthStakeArr.push(item.count.toNumber());
  });

  thirtyDayAgoStaker.data?.forEach((item) => {
    monthStakeArr.push(item.count.toNumber());
  });
  //day staker arr creation

  currentStaker.data?.forEach((item) => {
    dayStakeArr.push(item.count.toNumber());
  });

  fourHourStaker.data?.forEach((item) => {
    dayStakeArr.push(item.count.toNumber());
  });

  eightHourStaker.data?.forEach((item) => {
    dayStakeArr.push(item.count.toNumber());
  });

  twelveHourStaker.data?.forEach((item) => {
    dayStakeArr.push(item.count.toNumber());
  });

  sixtenHourStaker.data?.forEach((item) => {
    dayStakeArr.push(item.count.toNumber());
  });

  twentyHourAgoStaker.data?.forEach((item) => {
    dayStakeArr.push(item.count.toNumber());
  });

  twentyFourHourAgoStaker.data?.forEach((item) => {
    dayStakeArr.push(item.count.toNumber());
  });

  const numStakers = dayStakeArr[0];

  const day: any[] = [
    {
      id: 7, //top
      name: "24:00",
      stakers: dayStakeArr[6],
    },
    {
      id: 6,
      name: "20:00",
      stakers: dayStakeArr[5],
    },
    {
      id: 5,
      name: "16:00",
      stakers: dayStakeArr[4],
    },
    {
      id: 4,
      name: "12:00",
      stakers: dayStakeArr[3],
    },
    {
      id: 3,
      name: "8:00",
      stakers: dayStakeArr[2],
    },
    {
      id: 2,
      name: "4:00",
      stakers: dayStakeArr[1],
    },
    {
      id: 1,
      name: "0:00",
      stakers: dayStakeArr[0],
    },
  ];

  const week: any[] = [
    {
      id: 7,
      name: "4/29",
      stakers: weekStakeArr[4],
    },
    {
      id: 6,
      name: "4/28",
      stakers: weekStakeArr[3],
    },
    {
      id: 5,
      name: "4/27",
      stakers: weekStakeArr[2],
    },
    {
      id: 4,
      name: "4/26",
      stakers: weekStakeArr[1],
    },
    {
      id: 3,
      name: "4/25",
      stakers: weekStakeArr[0],
    },
    {
      id: 2,
      name: "4/24",
      stakers: dayStakeArr[6],
    },
    {
      id: 1,
      name: "4/23",
      stakers: dayStakeArr[0],
    },
  ];

  const month: any[] = [
    {
      name: "30",
      stakers: monthStakeArr[3],
    },
    {
      name: "28",
      stakers: monthStakeArr[2],
    },
    {
      name: "14",
      stakers: monthStakeArr[1],
    },
    {
      name: "7",
      stakers: monthStakeArr[0],
    },
    {
      name: "1",
      stakers: weekStakeArr[3],
    },
    {
      name: "1",
      stakers: dayStakeArr[0],
    },
  ];

  const year: any[] = [
    {
      name: "1",
      stakers: 2000,
    },
    {
      name: "3",
      stakers: 4000,
    },
    {
      name: "5",
      stakers: 3000,
    },
    {
      name: "7",
      stakers: 5780,
    },
    {
      name: "9",
      stakers: 4890,
    },
    {
      name: "12",
      stakers: 6390,
    },
  ];

  return {
    day,
    week,
    month,
    numStakers,
  };
};

export default useGetNumStakers;
