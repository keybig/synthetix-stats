import styles from './TotalValueLocked.module.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { useState } from 'react';


type Props = {}

const TotalValueLocked = (props: Props) => {

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
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

        <button className={styles.button}>All Networks</button>
        <button className={styles.button}>Mainnet</button>
        <button className={styles.button}>Optimism</button>

        </div>

      </div>

      <div className={styles.responsive}>

        <ResponsiveContainer>
        <AreaChart
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#ED1EFF" fill="#ED1EFF" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#41C79D" fill="#41C79D" />
        </AreaChart>
        </ResponsiveContainer>

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