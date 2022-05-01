import styles from './numStaker.module.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';


type Props = {}

const NumStaker = (props: Props) => {

  const buttonMap = [
    { id: 1, title: "One Day" },
    { id: 2, title: "One Week" },
    { id: 3, title: "One Month" },
    { id: 4, title: "one Year" }
  ];
  

    const [click, setClick] = useState(1);

   

    const handleActive = (buttons: any) => {
      setClick(buttons.id);
    };

    const day = [
      {
        name: '0:00',
        stakers: 4000,
      },
      {
        name: '4:00',
        stakers: 5000,
      },
      {
        name: '8:00',
        stakers: 3000,
      },
      {
        name: '12:00',
        stakers: 3780,
      },
      {
        name: '16:00',
        stakers: 2890,
      },
      {
        name: '20:00',
        stakers: 5390,
      },
    ];
  
    const week = [
      {
        name: '4/23',
        stakers: 4000,
      },
      {
        name: '4/24',
        stakers: 5000,
      },
      {
        name: '4/25',
        stakers: 3000,
      },
      {
        name: '4/26',
        stakers: 2780,
      },
      {
        name: '4/27',
        stakers: 5890,
      },
      {
        name: '4/28',
        stakers: 3390,
      },
      {
        name: '4/29',
        stakers: 6105,
      }
    ];
  
    const month = [
      {
        name: '1',
        stakers: 4000,
      },
      {
        name: '1',
        stakers: 5000,
      },
      {
        name: '7',
        stakers: 3000,
      },
      {
        name: '14',
        stakers: 3780,
      },
      {
        name: '28',
        stakers: 2890,
      },
      {
        name: '30',
        stakers: 5390,
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

  


  return (
    <div className={styles.container}>    
    
      <div className={styles.topRow}>

        <div>
        <h3>Number of Individual Stakers</h3>
        <p className={styles.value}>6,000</p>
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
        </LineChart>
        </ResponsiveContainer>) :

        click === 2 ? (
          <ResponsiveContainer height={300} width='100%'>
          <LineChart data={week}>
            <Line type="monotone" dataKey="stakers" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
          </ResponsiveContainer>) 

          : 
          
          click === 3 ? (
            <ResponsiveContainer height={300} width='100%'>
            <LineChart data={month}>
              <Line type="monotone" dataKey="stakers" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
            </ResponsiveContainer>) 
            
          : (
            <ResponsiveContainer height={300} width='100%'>
            <LineChart data={year}>
              <Line type="monotone" dataKey="stakers" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
            </ResponsiveContainer>)}
        
      </div>
     
  )
}

export default NumStaker