import styles from './TotalValueLocked.module.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { useState } from 'react';
import useSynthetixQueries from '@synthetixio/queries'
import {times, TimeGoTest} from './times'
import useGetTVL from '../../../hooks/useGetTVL'
import useGetBlock from '../../../hooks/useGetBlock'
import useGetTime from '../../../hooks/useGetTime'



type Props = {}

const formatMoney = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

//timing





const TotalValueLocked = (props: Props) => {

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
    const {timeStamp} = useGetTime()

   

    const handleActive = (buttons: any) => {
      setClick(buttons.id);
    };

    const { subgraph } = useSynthetixQueries()
    const {blockNum} = useGetBlock()

    const tvlBal:number[] = []
    const wrapperBal:number[] = []


    const debtCall = subgraph.useGetDebtStates(
      {orderBy:"timestamp", orderDirection:"desc", first:1},
      {totalIssuedSynths:true}
    )

    debtCall.isSuccess ? tvlBal.push(debtCall.data[0].totalIssuedSynths.toNumber()) : null


    const wrapperCall = subgraph.useGetWrappers(
      {first:3, block:{number:blockNum[0]}},
      {amount:true, amountInUSD:true}
    )


    wrapperCall.data?.forEach(item =>{

      tvlBal.push(item.amountInUSD.toNumber())
      wrapperBal.push(item.amountInUSD.toNumber())

    })


    const totalBal = tvlBal.reduce((sum:number, current:number) => sum + current, 0)
    const totalWrapperBal = wrapperBal.reduce((sum:number, current:number) => sum + current, 0)




    const formatMoney = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
  });

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
               formatMoney.format(totalBal)
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

        {click === 1 ? 
      (
        <ResponsiveContainer>
        <AreaChart
          data={day}
        >
          <XAxis dataKey="date" interval={'preserveStartEnd'} fontSize={14} />
         
          <Tooltip />
          <Area type="monotone" dataKey="wrapper" stackId="1" stroke="#ED1EFF" fill="#ED1EFF" />
          <Area type="monotone" dataKey="debt" stackId="1" stroke="#41C79D" fill="#41C79D" />
        </AreaChart>
        </ResponsiveContainer>) : 

        click === 2 ? (
          <ResponsiveContainer>
        <AreaChart
          data={week}
        >
          <XAxis dataKey="date" interval={'preserveStartEnd'} fontSize={14} />
          <Tooltip />
          <Area type="monotone" dataKey="wrapper" stackId="1" stroke="#ED1EFF" fill="#ED1EFF" />
          <Area type="monotone" dataKey="debt" stackId="1" stroke="#41C79D" fill="#41C79D" />
        </AreaChart>
        </ResponsiveContainer>) 
         : (
          <ResponsiveContainer>
        <AreaChart
          data={month}
        >
          <XAxis dataKey="date" interval={'preserveStartEnd'} fontSize={14}/>
          <Tooltip />
          <Area type="monotone" dataKey="wrapper" stackId="1" stroke="#ED1EFF" fill="#ED1EFF" />
          <Area type="monotone" dataKey="debt" stackId="1" stroke="#41C79D" fill="#41C79D" />
        </AreaChart>
        </ResponsiveContainer>) 
        }

        </div>
        
      <div className={styles.bottom}>

        <div className={styles.debtPool}>
        <h5 className={styles.stakingColor}>Staking Debt Pool</h5>
        <p>
          {
            formatMoney.format(debtCall.isSuccess ? debtCall.data[0].totalIssuedSynths.toNumber():0)
          }
        </p>
        </div>
      

      <div className={styles.wrapper}>
        <h5 className={styles.wrapperColor}>Wrappers</h5>
        <p>
          {
            formatMoney.format(totalWrapperBal)
          }
        </p>
      </div>

      </div>

      

      


      
   
    </div>
  )
}


export default TotalValueLocked