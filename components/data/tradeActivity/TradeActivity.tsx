import styles from './TradeActivity.module.css'
import { useState, useMemo } from 'react'
import TradeTable from './TradeTable'
import TotalTable from './TotalTable'
import useGetTradeActivity from '../../../hooks/useGetTradeActivity'
import useGetCurrentTrade from '../../../hooks/useCurrentTrade'

type Props = {}



const TradeActivity = (props: Props) => {

  const  {totalTrades}  = useGetTradeActivity()
  const  {totalVol}  = useGetTradeActivity()
  const {currentTotalTrades} = useGetTradeActivity()
  const {currentTotalVol} = useGetTradeActivity()

  

  const buttonMap = [
    { id: 1, title: "Current Epoch" },
    { id: 2, title: "Total To Date" }
  ];


    const [click, setClick] = useState(2);


    const handleActive = (buttons: any) => {
      setClick(buttons.id);
    };

    


  return (
    <div className={styles.container}>

      <h3 className={styles.title}> Trading Activity</h3>

      <div className={styles.buttonRow}>
        
      {buttonMap.map((buttonMap) => (
        <button
          key={buttonMap.id}
          onClick={() => handleActive(buttonMap)}
          className={ buttonMap.id === click ? styles.current : styles.inactive}
        >
          {buttonMap.title}
        </button>
      ))}

      </div>
      <div className={styles.table}>
        <TradeTable tableId={click}/>
      </div>

    <div className={styles.bottom}>
      <h5 className={styles.bottomTitle}>Total N of Trades</h5>
    
      <p className={styles.totalTrades}>{click === 1 ? currentTotalTrades : totalTrades}</p>
   

      <h5 className={styles.bottomTitle}>Total Volume</h5>
    
      <p className={styles.totalVolume}>{click === 1 ? currentTotalVol : totalVol}</p>
      
      </div>


    </div>
  )
}

export default TradeActivity