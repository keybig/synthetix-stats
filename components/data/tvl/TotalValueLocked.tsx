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

  const data = [
    {
      name: '0:00',
      uv: 4000,
      pv: 1000,
    },
    {
      name: '4:00',
      uv: 5000,
      pv: 1500,
    },
    {
      name: '8:00',
      uv: 3000,
      pv: 1000,
    },
    {
      name: '12:00',
      uv: 3780,
      pv: 1508,
    },
    {
      name: '16:00',
      uv: 2890,
      pv: 1200,
    },
    {
      name: '20:00',
      uv: 5390,
      pv: 3800,
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

        <ResponsiveContainer>
        <AreaChart
          data={data}
        >
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