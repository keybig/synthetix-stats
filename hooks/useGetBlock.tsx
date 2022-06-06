import useSynthetixQueries from "@synthetixio/queries";
import { useEffect, useMemo, useState } from "react";
import useGetTime from "./useGetTime";

interface Blocks {
  currentBlock: number;
  oneDayAgoBlock: number;
  twoDayAgoBlock: number;
  threeDayAgoBlock: number;
  fourDayAgoBlock: number;
  fiveDayAgoBlock: number;
  sixDayAgoBlock: number;
  tenDayAgoBlock: number;
  fifteenDayAgoBlock: number;
  twentyDayAgoBlock: number;
  twentyFiveDayAgoBlock: number;
  thirtyDayAgoBlock: number;

  fourHourAgoBlock: number;
  eightHourAgoBlock: number;
  twelveHourAgoBlock: number;
  sixteenHourAgoBlock: number;
  twentyHourAgoBlock: number;
  twentyFourHourAgoBlock: number;
}

const useGetBlock = () => {
  const { times } = useGetTime();
  const { ts } = useGetTime()

  const { subgraph } = useSynthetixQueries();

  const currentBlockCall = subgraph.useGetRateUpdates(
    {
      first: 1,
      orderBy: "timestamp",
      orderDirection: "desc",
      where: {
        timestamp_lt: ts,
      },
    },
    { timestamp: true, block: true }
  );

  const currentBlock = useMemo(() => {
    if (currentBlockCall.isSuccess) {
      const blockNum = currentBlockCall.data[0].block.toNumber();
      return blockNum;
    } else {
     return 10530002;
    }
  }, [currentBlockCall.data]);

  const fourHourBlockCall = subgraph.useGetRateUpdates(
    {
      first: 1,
      orderBy: "timestamp",
      orderDirection: "desc",
      where: {
        timestamp_lt: times.fourHourAgo,
      },
    },
    { timestamp: true, block: true }
  );

  const fourHourBlock = useMemo(() => {
    if (fourHourBlockCall.isSuccess) {
      const blockNum = fourHourBlockCall.data[0].block.toNumber();
      return blockNum;
    } else {
      return 10530002;
    }
  }, [fourHourBlockCall.data]);

  const eightHourBlockCall = subgraph.useGetRateUpdates(
    {
      first: 1,
      orderBy: "timestamp",
      orderDirection: "desc",
      where: {
        timestamp_lt: times.eightHourAgo,
      },
    },
    { timestamp: true, block: true }
  );

  const eightHourBlock = useMemo(() => {
    if (eightHourBlockCall.isSuccess) {
      const blockNum = eightHourBlockCall.data[0].block.toNumber();
      return blockNum;
    } else {
      return 10530003;
    }
  }, [eightHourBlockCall.data]);

  const twelveHourBlockCall = subgraph.useGetRateUpdates(
    {
      first: 1,
      orderBy: "timestamp",
      orderDirection: "desc",
      where: {
        timestamp_lt: times.twelveHourAgo,
      },
    },
    { timestamp: true, block: true }
  );

  const twelveHourblock = useMemo(() => {
    if (twelveHourBlockCall.isSuccess) {
      const blockNum = twelveHourBlockCall.data[0].block.toNumber();
      return blockNum;
    } else {
      return 10530004;
    }
  }, [twelveHourBlockCall.data]);

  const sixteenHourBlockCall = subgraph.useGetRateUpdates(
    {
      first: 1,
      orderBy: "timestamp",
      orderDirection: "desc",
      where: {
        timestamp_lt: times.sixteenHourAgo,
      },
    },
    { timestamp: true, block: true }
  );

  const sixteenHourBlock = useMemo(() => {
    if (sixteenHourBlockCall.isSuccess) {
      const blockNum = sixteenHourBlockCall.data[0].block.toNumber();
      return blockNum;
    } else {
      return 10530005;
    }
  }, [currentBlockCall.data]);

  const twentyHourBlockCall = subgraph.useGetRateUpdates(
    {
      first: 1,
      orderBy: "timestamp",
      orderDirection: "desc",
      where: {
        timestamp_lt: times.twentyHourAgo,
      },
    },
    { timestamp: true, block: true }
  );

  const twentyHourBlock = useMemo(() => {
    if (twentyHourBlockCall.isSuccess) {
      const blockNum = twentyHourBlockCall.data[0].block.toNumber();
      return blockNum;
    } else {
      return 10530006;
    }
  }, [twentyHourBlockCall.data]);

  const twentyFourHourBlockCall = subgraph.useGetRateUpdates(
    {
      first: 1,
      orderBy: "timestamp",
      orderDirection: "desc",
      where: {
        timestamp_lt: times.twentyFourHourAgo,
      },
    },
    { timestamp: true, block: true }
  );

  const twentyFourHourBlock = useMemo(() => {
    if (twentyFourHourBlockCall.isSuccess) {
      const blockNum = twentyFourHourBlockCall.data[0].block.toNumber();
      return blockNum;
    } else {
      return 10530007;
    }
  }, [twentyFourHourBlockCall.data]);

  //week blocks, current and one day pulled from daily block, starts at day2

  const twoDayBlockCall = subgraph.useGetRateUpdates(
    {
      first: 1,
      orderBy: "timestamp",
      orderDirection: "desc",
      where: {
        timestamp_lt: times.twoDayAgo,
      },
    },
    { timestamp: true, block: true }
  );

  const twoDayBlock = useMemo(() => {
    if (twoDayBlockCall.isSuccess) {
      const blockNum = twoDayBlockCall.data[0].block.toNumber();
      return blockNum;
    } else {
      return 10530008;
    }
  }, [twoDayBlockCall.data]);

  const threeDayBlockCall = subgraph.useGetRateUpdates(
    {
      first: 1,
      orderBy: "timestamp",
      orderDirection: "desc",
      where: {
        timestamp_lt: times.threeDayAgo,
      },
    },
    { timestamp: true, block: true }
  );

  const threeDayBlock = useMemo(() => {
    if (threeDayBlockCall.isSuccess) {
      const blockNum = threeDayBlockCall.data[0].block.toNumber();
      return blockNum;
    } else {
      return 10530009;
    }
  }, [threeDayBlockCall.data]);

  const fourDayBlockCall = subgraph.useGetRateUpdates(
    {
      first: 1,
      orderBy: "timestamp",
      orderDirection: "desc",
      where: {
        timestamp_lt: times.fourDayAgo,
      },
    },
    { timestamp: true, block: true }
  );

  const fourDayBlock = useMemo(() => {
    if (fourDayBlockCall.isSuccess) {
      const blockNum = fourDayBlockCall.data[0].block.toNumber();
      return blockNum;
    } else {
      return 10530010;
    }
  }, [fourDayBlockCall.data]);

  const fiveDayBlockCall = subgraph.useGetRateUpdates(
    {
      first: 1,
      orderBy: "timestamp",
      orderDirection: "desc",
      where: {
        timestamp_lt: times.fiveDayAgo,
      },
    },
    { timestamp: true, block: true }
  );

  const fiveDayBlock = useMemo(() => {
    if (fiveDayBlockCall.isSuccess) {
      const blockNum = fiveDayBlockCall.data[0].block.toNumber();
      return blockNum;
    } else {
      return 10530011;
    }
  }, [fiveDayBlockCall.data]);

  const sixDayBlockCall = subgraph.useGetRateUpdates(
    {
      first: 1,
      orderBy: "timestamp",
      orderDirection: "desc",
      where: {
        timestamp_lt: times.sixDayAgo,
      },
    },
    { timestamp: true, block: true }
  );

  const sixDayBlock = useMemo(() => {
    if (sixDayBlockCall.isSuccess) {
      const blockNum = sixDayBlockCall.data[0].block.toNumber();
      return blockNum;
    } else {
      return 10530012;
    }
  }, [sixDayBlockCall.data]);

  // month block num, current and 5 pulled from week, starts at 10

  const tenDayBlockCall = subgraph.useGetRateUpdates(
    {
      first: 1,
      orderBy: "timestamp",
      orderDirection: "desc",
      where: {
        timestamp_lt: times.tenDayAgo,
      },
    },
    { timestamp: true, block: true }
  );

  const tenDayBlock = useMemo(() => {
    if (tenDayBlockCall.isSuccess) {
      const blockNum = tenDayBlockCall.data[0].block.toNumber();
      return blockNum;
    } else {
      return 10530013;
    }
  }, [tenDayBlockCall.data]);

  const fifteenDayBlockCall = subgraph.useGetRateUpdates(
    {
      first: 1,
      orderBy: "timestamp",
      orderDirection: "desc",
      where: {
        timestamp_lt: times.fifteenDayAgo,
      },
    },
    { timestamp: true, block: true }
  );

  const fifteenDayBlock = useMemo(() => {
    if (fifteenDayBlockCall.isSuccess) {
      const blockNum = fifteenDayBlockCall.data[0].block.toNumber();
      return blockNum;
    } else {
      return 10530014;
    }
  }, [fifteenDayBlockCall.data]);

  const twentyDayBlockCall = subgraph.useGetRateUpdates(
    {
      first: 1,
      orderBy: "timestamp",
      orderDirection: "desc",
      where: {
        timestamp_lt: times.twentyDayAgo,
      },
    },
    { timestamp: true, block: true }
  );

  const twentyDayblock = useMemo(() => {
    if (twentyDayBlockCall.isSuccess) {
      const blockNum = twentyDayBlockCall.data[0].block.toNumber();
      return blockNum;
    } else {
      return 10530015;
    }
  }, [twentyDayBlockCall.data]);

  const twentyFiveDayBlockCall = subgraph.useGetRateUpdates(
    {
      first: 1,
      orderBy: "timestamp",
      orderDirection: "desc",
      where: {
        timestamp_lt: times.twentyFiveDayAgo,
      },
    },
    { timestamp: true, block: true }
  );

  const twentyFiveDayBlock = useMemo(() => {
    if (twentyFiveDayBlockCall.isSuccess) {
      const blockNum = twentyFiveDayBlockCall.data[0].block.toNumber();
      return blockNum;
    } else {
      return 10530016;
    }
  }, [twentyFiveDayBlockCall.data]);

  const thirtyDayBlockCall = subgraph.useGetRateUpdates(
    {
      first: 1,
      orderBy: "timestamp",
      orderDirection: "desc",
      where: {
        timestamp_lt: times.thirtyDayAgo,
      },
    },
    { timestamp: true, block: true }
  );

  const thirtyDayBlock = useMemo(() => {
    if (thirtyDayBlockCall.isSuccess) {
      const blockNum = thirtyDayBlockCall.data[0].block.toNumber();
      return blockNum;
    } else {
      return 10530017;
    }
  }, [thirtyDayBlockCall.data]);

  /*
  useEffect(() => {

    if (
        currentBlock.isSuccess &&
        fourHourAgoBlock.isSuccess &&
        eightHourAgoBlock.isSuccess &&
        twelveHourAgoBlock.isSuccess &&
        sixteenHourAgoBlock.isSuccess &&
        twentyHourAgoBlock.isSuccess &&
        twentyFourHourAgoBlock.isSuccess &&
        twoDayAgoBlock.isSuccess &&
        threeDayAgoBlock.isSuccess &&
        fourDayAgoBlock.isSuccess &&
        fiveDayAgoBlock.isSuccess &&
        sixDayAgoBlock.isSuccess &&
        tenDayAgoBlock.isSuccess &&
        fifteenDayAgoBlock.isSuccess &&
        twentyDayAgoBlock.isSuccess &&
        twentyFiveDayAgoBlock.isSuccess &&
        thirtyDayAgoBlock.isSuccess
    )
    {

    const blockNum: number[] = [];
    const weekBlockNum: number[] = [];
    const monthBlockNum: number[] = [];

    const obj = {
      currentBlock: currentBlock.data[0].block.toNumber(),
      fourHourBlock: fourHourAgoBlock.data[0].block.toNumber(),
      eightHourBlock: eightHourAgoBlock.data[0].block.toNumber(),
      twelveHourBlock: twelveHourAgoBlock.data[0].block.toNumber(),
      sixteenHourBlock: sixteenHourAgoBlock.data[0].block.toNumber(),
      twentyHourBlock: twentyHourAgoBlock.data[0].block.toNumber(),
      twentyFourHourBlock: twentyFourHourAgoBlock.data[0].block.toNumber(),
      twoDayBlock: twoDayAgoBlock.data[0].block.toNumber(),
      threeDayBlock: threeDayAgoBlock.data[0].block.toNumber(),
    }

    

    currentBlock.data?.forEach((item) => {
      blockNum.push(item.block.toNumber());
    });

    fourHourAgoBlock.data?.forEach((item) => {
      blockNum.push(item.block.toNumber());
    });

    eightHourAgoBlock.data?.forEach((item) => {
      blockNum.push(item.block.toNumber());
    });

    twelveHourAgoBlock.data?.forEach((item) => {
      blockNum.push(item.block.toNumber());
    });

    sixteenHourAgoBlock.data?.forEach((item) => {
      blockNum.push(item.block.toNumber());
    });

    twentyHourAgoBlock.data?.forEach((item) => {
      blockNum.push(item.block.toNumber());
    });

    twentyFourHourAgoBlock.data?.forEach((item) => {
      blockNum.push(item.block.toNumber());
    });

    twoDayAgoBlock.data?.forEach((item) => {
      weekBlockNum.push(item.block.toNumber());
    });

    threeDayAgoBlock.data?.forEach((item) => {
      weekBlockNum.push(item.block.toNumber());
    });
    fourDayAgoBlock.data?.forEach((item) => {
      weekBlockNum.push(item.block.toNumber());
    });

    fiveDayAgoBlock.data?.forEach((item) => {
      weekBlockNum.push(item.block.toNumber());
    });

    sixDayAgoBlock.data?.forEach((item) => {
      weekBlockNum.push(item.block.toNumber());
    });

    tenDayAgoBlock.data?.forEach((item) => {
      monthBlockNum.push(item.block.toNumber());
    });

    fifteenDayAgoBlock.data?.forEach((item) => {
      monthBlockNum.push(item.block.toNumber());
    });

    twentyDayAgoBlock.data?.forEach((item) => {
      monthBlockNum.push(item.block.toNumber());
    });

    twentyFiveDayAgoBlock.data?.forEach((item) => {
      monthBlockNum.push(item.block.toNumber());
    });

    thirtyDayAgoBlock.data?.forEach((item) => {
      monthBlockNum.push(item.block.toNumber());
    });

    setBlockNum(blockNum)
    setWeekBlockNum(weekBlockNum)
    setMonthBlockNum(monthBlockNum)
}
  }, [
    currentBlock,
    fourHourAgoBlock,
    eightHourAgoBlock,
    twelveHourAgoBlock,
    sixteenHourAgoBlock,
    twentyHourAgoBlock,
    twentyFourHourAgoBlock,
    twoDayAgoBlock,
    threeDayAgoBlock,
    fourDayAgoBlock,
    fiveDayAgoBlock,
    sixDayAgoBlock,
    tenDayAgoBlock,
    fifteenDayAgoBlock,
    twentyDayAgoBlock,
    twentyFiveDayAgoBlock,
    thirtyDayAgoBlock
  ]);*/

  return {
    currentBlock,
    fourHourBlock,
    eightHourBlock,
    twelveHourblock,
    sixteenHourBlock,
    twentyHourBlock,
    twentyFourHourBlock,
    twoDayBlock,
    threeDayBlock,
    fourDayBlock,
    fiveDayBlock,
    sixDayBlock,
    tenDayBlock,
    fifteenDayBlock,
    twentyDayblock,
    twentyFiveDayBlock,
    thirtyDayBlock,
  };
};

export default useGetBlock;
