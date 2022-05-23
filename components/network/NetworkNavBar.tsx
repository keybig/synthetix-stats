import { useState } from 'react'
import styles from './NetworkNavBar.module.css'

type Props = {
}

const NetworkNavBar = (props: Props) => {

  const buttonMap = [
    { id: 100, title: "All Networks" },
    { id: 1, title: "Mainnet" },
    { id: 10, title: "Optimism" }
  ];



    const [click, setClick] = useState(10);


    const handleActive = (buttons: any) => {
      setClick(buttons.id);
    };
    

  return (

    <div className={styles.navContainer}>

        <div className={styles.navNetwork}>


        {buttonMap.map((buttonMap) => (
        <button
          key={buttonMap.id}
          onClick={() => handleActive(buttonMap)}
          className={ buttonMap.id === click ? styles.navCurrent : styles.navInactive}
        >
          {buttonMap.title}
        </button>
      ))}

        </div>

        <div className={styles.navMoreStats}>

            <button className={styles.navAdvancedStats}>Advanced Stats</button>
            
        </div>

    </div>

  )
}

export default NetworkNavBar