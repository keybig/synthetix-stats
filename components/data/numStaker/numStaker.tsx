import styles from './numStaker.module.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


type Props = {}

const NumStaker = (props: Props) => {

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className={styles.container}>    
    
      <div className={styles.topRow}>

        <div>
        <h3>Number of Individual Stakers</h3>
        <p className={styles.value}>6,000</p>
        </div>
     
        <div className={styles.selectors}>
        <button className={styles.button}>1 Day</button>
        <button className={styles.button}>1 Week</button>
        <button className={styles.button}>1 Month</button>
        <button className={styles.button}>1 Year</button>
        </div>


      </div>
      
        <ResponsiveContainer height={300} width='100%'>
        <LineChart data={data}>
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
          <Legend />
        </LineChart>
        </ResponsiveContainer>
        
      </div>
     
  )
}

export default NumStaker