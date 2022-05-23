import useSynthetixQueries from "@synthetixio/queries";
import { useState } from "react";

const ts = Math.floor(Date.now() / 1e3);



export const times = {

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
     fiveDaysAgo: ts - (3600 * 24) * 5,
     tenDayAgo: ts - (3600 * 24) * 10,
     fifteenDayAgo: ts - (3600 * 24) * 15,
     twentyDayAgo: ts - (3600 * 24) * 20,
     twentyFiveDayAgo: ts - (3600 * 24) * 25,
     thirtyDayAgo: ts - (3600 * 24) * 30
    }

    export const TimeGoTest = {
        //week date number
        currentDay: new Date(ts*1000).getUTCDate(),
        currentDayMonth: new Date(ts*1000).getUTCMonth(),

        oneDayAgo: new Date(times.oneDayAgo*1000).getUTCDate(),
        oneDayAgoMonth: new Date(times.oneDayAgo*1000).getUTCMonth(),

        twoDayAgo: new Date(times.twoDayAgo*1000).getUTCDate(),
        twoDayAgoMonth: new Date(times.twoDayAgo*1000).getUTCMonth(),

        threeDayAgo: new Date(times.threeDayAgo*1000).getUTCDate(),
        threeDayAgoMonth: new Date(times.threeDayAgo*1000).getUTCMonth(),

        fourDayAgo: new Date(times.fourDayAgo*1000).getUTCDate(),
        fourDayAgoMonth: new Date(times.fourDayAgo*1000).getUTCMonth(),

        fiveDayAgo: new Date(times.fiveDayAgo*1000).getUTCDate(),
        fiveDayAgoMonth: new Date(times.fiveDayAgo*1000).getUTCMonth(),

        sixDayAgo: new Date(times.sixDayAgo*1000).getUTCDate(),
        sixDayAgoMonth: new Date(times.sixDayAgo*1000).getUTCMonth(),

        tenDaysAgo: new Date(times.tenDayAgo*1000).getUTCDate(),
        fifteenDaysAgo: new Date(times.fifteenDayAgo*1000).getUTCDate(),
        twentyDaysAgo: new Date(times.twentyDayAgo*1000).getUTCDate(),
        twentyFiveDaysAgo: new Date(times.twentyFiveDayAgo*1000).getUTCDate(),
        thirtyDaysAgo: new Date(times.thirtyDayAgo*1000).getUTCDate(),

        //day hour
        noHourAgo: new Date(times.noHourAgo*1000).getUTCHours(),
        fourHoursAgo: new Date(times.fourHourAgo*1000).getUTCHours(),
        eightHoursAgo: new Date(times.eightHourAgo*1000).getUTCHours(),
        twelveHoursAgo: new Date(times.twelveHourAgo*1000).getUTCHours(),
        sixteenHoursAgo: new Date(times.sixteenHourAgo*1000).getUTCHours(),
        twentyHoursAgo: new Date(times.twentyHourAgo*1000).getUTCHours(),
        twentyFourHoursAgo: new Date (times.twentyFourHourAgo*1000).getUTCHours(),
    }

    export const RealTest = {
      currentDay: `${TimeGoTest.currentDayMonth+1}/${TimeGoTest.currentDay}`
    

    }

    
 
    



 

   

   


   

