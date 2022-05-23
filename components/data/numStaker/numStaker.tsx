import styles from './numStaker.module.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import useSynthetixQueries from '@synthetixio/queries'
import { times} from "../tvl/times";
import useGetBlock from '../../../hooks/useGetBlock'


type Props = {}




const NumStaker = (props: Props) => {

  const { subgraph } = useSynthetixQueries()


  const dayStakeArr:number[] = []
  const weekStakeArr:number[] = []
  const monthStakeArr:number[] = []
  const yearStakeArr:number[] = []

  const {blockNum} = useGetBlock()
  const {weekBlockNum} = useGetBlock()
  const {monthBlockNum} = useGetBlock()

  console.log(weekBlockNum)

  const currentStaker = subgraph.useGetTotalActiveStakers(
    { first:1, block:{number:blockNum[0]}},
    { count:true}
  )

  const fourHourStaker = subgraph.useGetTotalActiveStakers(
    { first:1, block:{number:blockNum[1]}},
    { count:true}
  )

  const eightHourStaker = subgraph.useGetTotalActiveStakers(
    { first:1, block:{number:blockNum[2]}},
    { count:true}
  )

  const twelveHourStaker = subgraph.useGetTotalActiveStakers(
    { first:1, block:{number:blockNum[3]}},
    { count:true}
  )

  const sixtenHourStaker = subgraph.useGetTotalActiveStakers(
    { first:1, block:{number:blockNum[4]}},
    { count:true}
  )

  const twentyHourAgoStaker = subgraph.useGetTotalActiveStakers(
    { first:1, block:{number:blockNum[5]}},
    { count:true}
  )

  const twentyFourHourAgoStaker = subgraph.useGetTotalActiveStakers(
    { first:1, block:{number:blockNum[6]}},
    { count:true}
  )

  //week staker
    /*
  const oneDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first:1, block:{number:weekBlockNum[0]}},
    { count:true}
  )*/

  const twoDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first:1, block:{number:weekBlockNum[0]}},
    { count:true}
  )

  const threeDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first:1, block:{number:weekBlockNum[1]}},
    { count:true}
  )

  const fourDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first:1, block:{number:weekBlockNum[2]}},
    { count:true}
  )

  const fiveDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first:1, block:{number:weekBlockNum[3]}},
    { count:true}
  )

  const sixDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first:1, block:{number:weekBlockNum[4]}},
    { count:true}
  )

  //month staker

  const tenDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first:1, block:{number:monthBlockNum[0]}},
    { count:true }
  )

  const fifteenDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first:1, block:{number:monthBlockNum[1]}},
    { count:true }
  )

  const twentyDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first:1, block:{number:monthBlockNum[2]}},
    { count:true }
  )

  const twentyFiveDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first:1, block:{number:monthBlockNum[3]}},
    { count:true }
  )

  const thirtyDayAgoStaker = subgraph.useGetTotalActiveStakers(
    { first:1, block:{number:monthBlockNum[4]}},
    { count:true }
  )

  /*oneDayAgoStaker.data?.forEach(item=>{
    weekStakeArr.push(item.count.toNumber())
  })*/
  //week staker arr creation
  twoDayAgoStaker.data?.forEach(item=>{
    weekStakeArr.push(item.count.toNumber())
  })

  threeDayAgoStaker.data?.forEach(item=>{
    weekStakeArr.push(item.count.toNumber())
  })

  fourDayAgoStaker.data?.forEach(item=>{
    weekStakeArr.push(item.count.toNumber())
  })

  fiveDayAgoStaker.data?.forEach(item=>{
    weekStakeArr.push(item.count.toNumber())
  })

  sixDayAgoStaker.data?.forEach(item=>{
    weekStakeArr.push(item.count.toNumber())
  })

  //month staker arr creation

  tenDayAgoStaker.data?.forEach(item=>{
    monthStakeArr.push(item.count.toNumber())
  })

  fifteenDayAgoStaker.data?.forEach(item=>{
    monthStakeArr.push(item.count.toNumber())
  })

  twentyDayAgoStaker.data?.forEach(item=>{
    monthStakeArr.push(item.count.toNumber())
  })

  twentyFiveDayAgoStaker.data?.forEach(item=>{
    monthStakeArr.push(item.count.toNumber())
  })

  thirtyDayAgoStaker.data?.forEach(item=>{
    monthStakeArr.push(item.count.toNumber())
  })
 //day staker arr creation

  currentStaker.data?.forEach(item => {
    dayStakeArr.push(item.count.toNumber())
  })

  fourHourStaker.data?.forEach(item =>{
    dayStakeArr.push(item.count.toNumber())
  })

  eightHourStaker.data?.forEach(item=>{
    dayStakeArr.push(item.count.toNumber())
  })

  twelveHourStaker.data?.forEach(item=>{
    dayStakeArr.push(item.count.toNumber())
  })

  sixtenHourStaker.data?.forEach(item=>{
    dayStakeArr.push(item.count.toNumber())
  })

  twentyHourAgoStaker.data?.forEach(item=>{
    dayStakeArr.push(item.count.toNumber())
  })

  twentyFourHourAgoStaker.data?.forEach(item=>{
    dayStakeArr.push(item.count.toNumber())
  })


  




  const buttonMap = [
    { id: 1, title: "One Day" },
    { id: 2, title: "One Week" },
    { id: 3, title: "One Month" },
    //{ id: 4, title: "one Year" }
  ];
  

    const [click, setClick] = useState(1);

   

    const handleActive = (buttons: any) => {
      setClick(buttons.id);
    };

    const day = [
      {
        id:7,//top
        name: '24:00',
        stakers: dayStakeArr[6]
      },
      {
        id: 6,
        name: '20:00',
        stakers: dayStakeArr[5],
      },
      {
        id: 5,
        name: '16:00',
        stakers: dayStakeArr[4],
      },
      {
        id: 4,
        name: '12:00',
        stakers: dayStakeArr[3],
      },
      {
        id: 3,
        name: '8:00',
        stakers: dayStakeArr[2],
      },
      {
        id: 2,
        name: '4:00',
        stakers: dayStakeArr[1],
      },
      {
        id: 1,
        name: '0:00',
        stakers: dayStakeArr[0],
      },
    ];
  
    const week = [
      {
        id:7,
        name: '4/29',
        stakers: weekStakeArr[4],
      },
      {
        id:6,
        name: '4/28',
        stakers: weekStakeArr[3],
      },
      {
        id:5,
        name: '4/27',
        stakers: weekStakeArr[2],
      },
      {
        id:4,
        name: '4/26',
        stakers: weekStakeArr[1],
      },
      {
        id:3,
        name: '4/25',
        stakers: weekStakeArr[0],
      },
      {
        id:2,
        name: '4/24',
        stakers: dayStakeArr[6],
      },
      {
        id:1,
        name: '4/23',
        stakers: dayStakeArr[0],
      },
    ];
  
    const month = [
      {
        name: '30',
        stakers: monthStakeArr[3],
      },
      {
        name: '28',
        stakers: monthStakeArr[2],
      },
      {
        name: '14',
        stakers: monthStakeArr[1],
      },
      {
        name: '7',
        stakers: monthStakeArr[0],
      },
      {
        name: '1',
        stakers: weekStakeArr[3],
      },
      {
        name: '1',
        stakers: dayStakeArr[0],
      },
    ];

    const year = [
      {
        name: '1',
        stakers: 2000,
      },
      {
        name: '3',
        stakers: 4000,
      },
      {
        name: '5',
        stakers: 3000,
      },
      {
        name: '7',
        stakers: 5780,
      },
      {
        name: '9',
        stakers: 4890,
      },
      {
        name: '12',
        stakers: 6390,
      },
    ];

  console.log(dayStakeArr)
  console.log(weekStakeArr)


  return (
    <div className={styles.container}>    
    
      <div className={styles.topRow}>

        <div>
        <h3>Number of Individual Stakers</h3>
        <p className={styles.value}>
          {dayStakeArr[0]}
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
      
      {click === 1 ? (
        <ResponsiveContainer height={300} width='100%'>
        <LineChart data={day}>
          <Line type="monotone" dataKey="stakers" stroke="#8884d8" strokeWidth={2} />
          <Tooltip/>
        </LineChart>
        </ResponsiveContainer>) :

        click === 2 ? (
          <ResponsiveContainer height={300} width='100%'>
          <LineChart data={week}>
            <Line type="monotone" dataKey="stakers" stroke="#8884d8" strokeWidth={2} />
            <Tooltip/>
          </LineChart>
          </ResponsiveContainer>) 

          : 
          
           (
            <ResponsiveContainer height={300} width='100%'>
            <LineChart data={month}>
              <Line type="monotone" dataKey="stakers" stroke="#8884d8" strokeWidth={2} />
              <Tooltip/>
            </LineChart>
            </ResponsiveContainer>) 
            
         }
        
      </div>
     
  )
}

export default NumStaker