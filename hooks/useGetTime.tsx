const useGetTime = () => {
  const ts = Math.floor(Date.now() / 1e3);

  const times = {
    //week
    oneDayAgo: ts - 3600 * 24,
    twoDayAgo: ts - 3600 * 48,
    threeDayAgo: ts - 3600 * 72,
    fourDayAgo: ts - 3600 * 96,
    fiveDayAgo: ts - 3600 * 120,
    sixDayAgo: ts - 3600 * 144,

    //day
    noHourAgo: ts,
    fourHourAgo: ts - 3600 * 4,
    eightHourAgo: ts - 3600 * 8,
    twelveHourAgo: ts - 3600 * 12,
    sixteenHourAgo: ts - 3600 * 16,
    twentyHourAgo: ts - 3600 * 20,
    twentyFourHourAgo: ts - 3600 * 24,

    //month
    fiveDaysAgo: ts - 3600 * 24 * 5,
    tenDayAgo: ts - 3600 * 24 * 10,
    fifteenDayAgo: ts - 3600 * 24 * 15,
    twentyDayAgo: ts - 3600 * 24 * 20,
    twentyFiveDayAgo: ts - 3600 * 24 * 25,
    thirtyDayAgo: ts - 3600 * 24 * 30,
  };

  const TimeSet = {
    currentDay: new Date(ts * 1000),
    oneDayAgo: new Date(times.oneDayAgo * 1000),
    twoDayAgo: new Date(times.twoDayAgo * 1000),
    threeDayAgo: new Date(times.threeDayAgo * 1000),
    fourDayAgo: new Date(times.fourDayAgo * 1000),
    fiveDayAgo: new Date(times.fiveDayAgo * 1000),
    sixDayAgo: new Date(times.sixDayAgo * 1000),
    tenDayAgo: new Date(times.tenDayAgo * 1000),
    fifteenDayAgo: new Date(times.fifteenDayAgo * 1000),
    twentyDayAgo: new Date(times.twentyDayAgo * 1000),
    twentyFiveDayAgo: new Date(times.twentyFiveDayAgo * 1000),
    thirtyDayAgo: new Date(times.thirtyDayAgo * 1000),
    noHourAgo: new Date(times.noHourAgo * 1000),
    fourHourAgo: new Date(times.fourHourAgo * 1000),
    eightHourAgo: new Date(times.eightHourAgo * 1000),
    twelveHourAgo: new Date(times.twelveHourAgo * 1000),
    sixteenHourAgo: new Date(times.sixteenHourAgo * 1000),
    twentyHourAgo: new Date(times.twentyHourAgo * 1000),
    twentyFourHourAgo: new Date(times.twentyFourHourAgo * 1000),
  };

  const TimeGoTest = {
    //week date number
    currentDay: TimeSet.currentDay.getUTCDate(),
    currentDayMonth: TimeSet.currentDay.getUTCMonth(),

    oneDayAgo: TimeSet.oneDayAgo.getUTCDate(),
    oneDayAgoMonth: TimeSet.oneDayAgo.getUTCMonth(),

    twoDayAgo: TimeSet.twoDayAgo.getUTCDate(),
    twoDayAgoMonth: TimeSet.twoDayAgo.getUTCMonth(),

    threeDayAgo: TimeSet.threeDayAgo.getUTCDate(),
    threeDayAgoMonth: TimeSet.threeDayAgo.getUTCMonth(),

    fourDayAgo: TimeSet.fourDayAgo.getUTCDate(),
    fourDayAgoMonth: TimeSet.fourDayAgo.getUTCMonth(),

    fiveDayAgo: TimeSet.fiveDayAgo.getUTCDate(),
    fiveDayAgoMonth: TimeSet.fiveDayAgo.getUTCMonth(),

    sixDayAgo: TimeSet.sixDayAgo.getUTCDate(),
    sixDayAgoMonth: TimeSet.sixDayAgo.getUTCMonth(),

    tenDayAgo: TimeSet.tenDayAgo.getUTCDate(),
    tenDayAgoMonth: TimeSet.tenDayAgo.getUTCMonth(),

    fifteenDayAgo: TimeSet.fifteenDayAgo.getUTCDate(),
    fifteenDayAgoMonth: TimeSet.fifteenDayAgo.getUTCMonth(),

    twentyDayAgo: TimeSet.twentyDayAgo.getUTCDate(),
    twentyDayAgoMonth: TimeSet.twentyDayAgo.getUTCMonth(),

    twentyFiveDayAgo: TimeSet.twentyFiveDayAgo.getUTCDate(),
    twentyFiveDayAgoMonth: TimeSet.twentyFiveDayAgo.getUTCMonth(),

    thirtyDayAgo: TimeSet.thirtyDayAgo.getUTCDate(),
    thirtyDayAgoMonth: TimeSet.thirtyDayAgo.getUTCMonth(),

    //day hour
    noHourAgo: TimeSet.noHourAgo.getUTCHours(),
    noHourAgoMin: TimeSet.noHourAgo.getUTCMinutes(),

    fourHourAgo: TimeSet.fourHourAgo.getUTCHours(),
    fourHourAgoMin: TimeSet.fourHourAgo.getUTCMinutes(),

    eightHourAgo: TimeSet.eightHourAgo.getUTCHours(),
    eightHourAgoMin: TimeSet.eightHourAgo.getUTCMinutes(),

    twelveHourAgo: TimeSet.twelveHourAgo.getUTCHours(),
    twelveHourAgoMin: TimeSet.twelveHourAgo.getUTCMinutes(),

    sixteenHourAgo: TimeSet.sixteenHourAgo.getUTCHours(),
    sixteenHourAgoMin: TimeSet.sixteenHourAgo.getUTCMinutes(),

    twentyHourAgo: TimeSet.twentyHourAgo.getUTCHours(),
    twentyHourAgoMin: TimeSet.twentyHourAgo.getUTCMinutes(),

    twentyFourHourAgo: TimeSet.twentyFourHourAgo.getUTCHours(),
    twentyFourHourAgoMin: TimeSet.twentyFourHourAgo.getUTCMinutes(),
  };

  const timeStamp = {
    currentDay: `${TimeGoTest.currentDayMonth + 1}/${TimeGoTest.currentDay}`,
    oneDayAgo: `${TimeGoTest.oneDayAgoMonth + 1}/${TimeGoTest.oneDayAgo}`,
    twoDayAgo: `${TimeGoTest.twoDayAgoMonth + 1}/${TimeGoTest.twoDayAgo}`,
    threeDayAgo: `${TimeGoTest.threeDayAgoMonth + 1}/${TimeGoTest.threeDayAgo}`,
    fourDayAgo: `${TimeGoTest.fourDayAgoMonth + 1}/${TimeGoTest.fourDayAgo}`,
    fiveDayAgo: `${TimeGoTest.fiveDayAgoMonth + 1}/${TimeGoTest.fiveDayAgo}`,
    sixDayAgo: `${TimeGoTest.sixDayAgoMonth + 1}/${TimeGoTest.sixDayAgo}`,
    tenDayAgo: `${TimeGoTest.tenDayAgoMonth + 1}/${TimeGoTest.tenDayAgo}`,
    fifteenDayAgo: `${TimeGoTest.fifteenDayAgoMonth + 1}/${
      TimeGoTest.fifteenDayAgo
    }`,
    twentyDayAgo: `${TimeGoTest.twentyDayAgoMonth + 1}/${
      TimeGoTest.twentyDayAgo
    }`,
    twentyFiveDayAgo: `${TimeGoTest.twentyFiveDayAgoMonth + 1}/${
      TimeGoTest.twentyFiveDayAgo
    }`,
    thirtyDayAgo: `${TimeGoTest.thirtyDayAgoMonth + 1}/${
      TimeGoTest.thirtyDayAgo
    }`,

    noHourAgo: `${TimeGoTest.noHourAgo}:${TimeGoTest.noHourAgoMin}`,
    fourHourAgo: `${TimeGoTest.fourHourAgo}:${TimeGoTest.fourHourAgoMin}`,
    eightHourAgo: `${TimeGoTest.eightHourAgo}:${TimeGoTest.eightHourAgoMin}`,
    twelveHourAgo: `${TimeGoTest.twelveHourAgo}:${TimeGoTest.twelveHourAgoMin}`,
    sixteenHourAgo: `${TimeGoTest.sixteenHourAgo}:${TimeGoTest.sixteenHourAgoMin}`,
    twentyHourAgo: `${TimeGoTest.twentyHourAgo}:${TimeGoTest.twentyHourAgoMin}`,
    twentyFourHourAgo: `${TimeGoTest.twentyFourHourAgo}:${TimeGoTest.twentyFourHourAgoMin}`,
  };
  return {
    timeStamp,
    times,
  };
};

export default useGetTime;
