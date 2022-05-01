import styles from './TotalValueLocked.module.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { useState } from 'react';


type Props = {}

const TotalValueLocked = (props: Props) => {

  const buttonMap = [
    { id: 1, title: "One Day" },
    { id: 2, title: "One Week" },
    { id: 3, title: "One Month" }
  ];
  

    const [click, setClick] = useState(1);

   

    const handleActive = (buttons: any) => {
      setClick(buttons.id);
    };

  const day = [
    {
      name: '0:00',
      mainnet: 4000,
      optimism: 1000,
    },
    {
      name: '4:00',
      mainnet: 5000,
      optimism: 1500,
    },
    {
      name: '8:00',
      mainnet: 3000,
      optimism: 1000,
    },
    {
      name: '12:00',
      mainnet: 3780,
      optimism: 1508,
    },
    {
      name: '16:00',
      mainnet: 2890,
      optimism: 1200,
    },
    {
      name: '20:00',
      mainnet: 5390,
      optimism: 3800,
    },
  ];

  const week = [
    {
      name: '4/23',
      mainnet: 4000,
      optimism: 1000,
    },
    {
      name: '4/24',
      mainnet: 5000,
      optimism: 1500,
    },
    {
      name: '4/25',
      mainnet: 3000,
      optimism: 7000,
    },
    {
      name: '4/26',
      mainnet: 2780,
      optimism: 4508,
    },
    {
      name: '4/27',
      mainnet: 5890,
      optimism: 1200,
    },
    {
      name: '4/28',
      mainnet: 3390,
      optimism: 3800,
    },
    {
      name: '4/29',
      mainnet: 6105,
      optimism: 4200,
    }
  ];

  const month = [
    {
      name: '1',
      mainnet: 4000,
      optimism: 1000,
    },
    {
      name: '1',
      mainnet: 5000,
      optimism: 1500,
    },
    {
      name: '7',
      mainnet: 3000,
      optimism: 1000,
    },
    {
      name: '14',
      mainnet: 3780,
      optimism: 1508,
    },
    {
      name: '28',
      mainnet: 2890,
      optimism: 1200,
    },
    {
      name: '30',
      mainnet: 5390,
      optimism: 3800,
    },
  ];

  return (
    <div className={styles.container}>

      <div className={styles.topBar}>

        <div className={styles.info}>
          <h3 className={styles.tvl}>Total Value Locked</h3>
          <p className={styles.values}>$1,000,000</p>
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
          <XAxis dataKey="name" />
         
          <Tooltip />
          <Area type="monotone" dataKey="mainnet" stackId="1" stroke="#ED1EFF" fill="#ED1EFF" />
          <Area type="monotone" dataKey="optimism" stackId="1" stroke="#41C79D" fill="#41C79D" />
        </AreaChart>
        </ResponsiveContainer>) : 

        click === 2 ? (
          <ResponsiveContainer>
        <AreaChart
          data={week}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <Area type="monotone" dataKey="mainnet" stackId="1" stroke="#ED1EFF" fill="#ED1EFF" />
          <Area type="monotone" dataKey="optimism" stackId="1" stroke="#41C79D" fill="#41C79D" />
        </AreaChart>
        </ResponsiveContainer>) 
         : (
          <ResponsiveContainer>
        <AreaChart
          data={month}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <Area type="monotone" dataKey="mainnet" stackId="1" stroke="#ED1EFF" fill="#ED1EFF" />
          <Area type="monotone" dataKey="optimism" stackId="1" stroke="#41C79D" fill="#41C79D" />
        </AreaChart>
        </ResponsiveContainer>) 
        }

        </div>
        
      <div className={styles.bottom}>

        <div className={styles.debtPool}>
        <h5 className={styles.stakingColor}>Staking Debt Pool</h5>
        <p>$512,345,678</p>
        </div>
      

      <div className={styles.wrapper}>
        <h5 className={styles.wrapperColor}>Wrappers</h5>
        <p>$487,654,322</p>
      </div>

      </div>

      

      


      
   
    </div>
  )
}


export default TotalValueLocked