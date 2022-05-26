import styles from './numStaker.module.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import useSynthetixQueries from '@synthetixio/queries'
import { times} from "../tvl/times";
import useGetBlock from '../../../hooks/useGetBlock'
import useGetNumStakers from '../../../hooks/useGetNumStakers'


type Props = {}





const NumStaker = (props: Props) => {

 
  const  {day}  = useGetNumStakers()
  const  {week}  = useGetNumStakers()
  const  {month}  = useGetNumStakers()
  const  {numStakers}  = useGetNumStakers()



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

    

 


  return (
    <div className={styles.container}>    
    
      <div className={styles.topRow}>

        <div>
        <h3>Number of Individual Stakers</h3>
        <p className={styles.value}>
          {numStakers}
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
      
      
        <ResponsiveContainer height={300} width='100%'>
        <LineChart data={click === 1 ? day : click === 2 ? week : month}>
          <Line type="monotone" dataKey="stakers" stroke="#8884d8" strokeWidth={2} />
          <Tooltip/>
        </LineChart>
        </ResponsiveContainer> 
            
         
        
      </div>
     
  )
}

export default NumStaker