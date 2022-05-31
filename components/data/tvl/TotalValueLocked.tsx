import styles from './TotalValueLocked.module.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { useMemo, useState } from 'react';
import useGetTVL from '../../../hooks/useGetTVL'
import useGetTime from '../../../hooks/useGetTime'
import useGetGlobalStake from '../../../hooks/useGetGlobalStake';




const TotalValueLocked = () => {

  const buttonMap = [
    { id: 1, title: "One Day" },
    { id: 2, title: "One Week" },
    { id: 3, title: "One Month" }
  ];
  

    const [click, setClick] = useState(1);

    const {dayTvlBal} = useGetTVL()
    const {weekTvlBal} = useGetTVL()
    const {monthTvlBal} = useGetTVL()
    const {dayWrappers} = useGetTVL()
    const {weekWrappers} = useGetTVL()
    const {monthWrappers} = useGetTVL()
    const {totalBal} = useGetTVL()
    const {wrapperTotalVal} = useGetTVL()
    const {totalIssuedSynth} = useGetTVL()
    const {timeStamp} = useGetTime()
    const {stakedVal} = useGetGlobalStake()

   
    

    const handleActive = (buttons: any) => {
      setClick(buttons.id);
    };


  const week = [
    {
      date: timeStamp.sixDayAgo,
      debt: weekTvlBal[4],
      wrapper: weekWrappers[4],
    },
    {
      date: timeStamp.fiveDayAgo,
      debt: weekTvlBal[3],
      wrapper: weekWrappers[3],
    },
    {
      date: timeStamp.fourDayAgo,
      debt: weekTvlBal[2],
      wrapper: weekWrappers[2],
    },
    {
      date: timeStamp.threeDayAgo,
      debt: weekTvlBal[1],
      wrapper: weekWrappers[1],
    },
    {
      date: timeStamp.twoDayAgo,
      debt: weekTvlBal[0],
      wrapper: weekWrappers[0],
    },
    {
      date: timeStamp.oneDayAgo,
      debt: dayTvlBal[6],
      wrapper: dayWrappers[6],
    },
    {
      date: timeStamp.currentDay,
      debt: dayTvlBal[0],
      wrapper: dayWrappers[0],
    },
  ]

  const day = [
    {
      date: timeStamp.twentyFourHourAgo,
      debt: dayTvlBal[6],
      wrapper: dayWrappers[6],
    },
    {
      date: timeStamp.twentyHourAgo,
      debt: dayTvlBal[5],
      wrapper: dayWrappers[5],
    },
    {
      date: timeStamp.sixteenHourAgo,
      debt: dayTvlBal[4],
      wrapper: dayWrappers[4],
    },
    {
      date: timeStamp.twelveHourAgo,
      debt: dayTvlBal[3],
      wrapper: dayWrappers[3],
    },
    {
      date: timeStamp.eightHourAgo,
      debt: dayTvlBal[2],
      wrapper: dayWrappers[2],
    },
    {
      date: timeStamp.fourHourAgo,
      debt: dayTvlBal[1],
      wrapper: dayWrappers[1],
    },
    {
      date: timeStamp.noHourAgo,
      debt: dayTvlBal[0],
      wrapper: dayWrappers[0],
    },
  ]

  const month = [
    {
      date: timeStamp.thirtyDayAgo,
      debt: monthTvlBal[4],
      wrapper: monthWrappers[4],
    },
    {
      date: timeStamp.twentyFiveDayAgo,
      debt: monthTvlBal[3],
      wrapper: monthWrappers[3],
    },
    {
      date: timeStamp.twentyDayAgo,
      debt: monthTvlBal[2],
      wrapper: monthWrappers[2],
    },
    {
      date: timeStamp.fifteenDayAgo,
      debt: monthTvlBal[1],
      wrapper: monthWrappers[1],
    },
    {
      date: timeStamp.tenDayAgo,
      debt: monthTvlBal[0],
      wrapper: monthWrappers[0],
    },
    {
      date: timeStamp.fiveDayAgo,
      debt: weekTvlBal[3],
      wrapper: weekWrappers[3],
    },
    {
      date: timeStamp.currentDay,
      debt: dayTvlBal[0],
      wrapper: dayWrappers[0],
    },
  ]


 
 



  return (
    <div className={styles.container}>

      <div className={styles.topBar}>

        <div className={styles.info}>
          <h3 className={styles.tvl}>Total Value Locked</h3>
          <p className={styles.values}>
            {
               stakedVal
            }
         
        
          </p>
    
        </div>

     


        <div className={styles.selectors}>

        {buttonMap.map((buttonMap) => (
        <button
          key={buttonMap.id}
          onClick={() => handleActive(buttonMap)}
          className={ buttonMap.id === click ? styles.button : styles.inactive}
        >
          {buttonMap.title}
        </button>
      ))}

        </div>

      </div>

      <div className={styles.responsive}>

       
        <ResponsiveContainer>
        <AreaChart
          data={click === 1 ? day : click === 2 ? week : month}
        >
          <XAxis dataKey="date" fontSize={14} />
         
          <Tooltip />
          <Area type="monotone" dataKey="debt" stackId="1" stroke="#41C79D" fill="#41C79D" />
        </AreaChart>
        </ResponsiveContainer>


        </div>
        
      <div className={styles.bottom}>

        <div className={styles.debtPool}>
        <h5 className={styles.stakingColor}>Staking Debt Pool</h5>
        <p>
          {
            totalIssuedSynth
          }
        </p>
        </div>
      

      <div className={styles.wrapper}>
        <h5 className={styles.wrapperColor}>Wrappers</h5>
        <p>
          {
            wrapperTotalVal
          }
        </p>
      </div>

      </div>

      

      


      
   
    </div>
  )
}


export default TotalValueLocked