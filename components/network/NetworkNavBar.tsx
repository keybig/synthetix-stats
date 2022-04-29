import { useState } from 'react'
import styles from './NetworkNavBar.module.css'

type Props = {}

const NetworkNavBar = (props: Props) => {

  const buttonMap = [
    { id: 1, title: "All Networks" },
    { id: 2, title: "Mainnet" },
    { id: 3, title: "Optimism" }
  ];


    const [click, setClick] = useState(1);


    const handleActive = (buttons: any) => {
      setClick(buttons.id);
    };

  return (

    <div className={styles.container}>

        <div className={styles.network}>


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

        <div className={styles.moreStats}>

            <button className={styles.advancedStats}>Advanced Stats</button>
            
        </div>

    </div>

  )
}

export default NetworkNavBar