import { NetworkId } from '@synthetixio/contracts-interface';
import { ReactNode } from 'react'

import styles from './NetworkNavBar.module.css'



type Props = {
 // netwerk: NetworkId
 handle: (buttons: netButton)=> void;
 current:NetworkId
 children?:ReactNode;
}

interface netButton {
  id: NetworkId;
  title: string;

}

const NetworkNavBar = (props:Props) => {

  /*

  const [netId, setNetId] = useState<NetworkId>(10)

  


  const handleNetwork = (buttons: any) => {
    setNetId(buttons.id);
    console.log(netId)
 
  };
  */


  const buttonMap:netButton[] = [
   // { id: 100, netId: 10, title: "All Networks" },
    { id: 1, title: "Mainnet" },
    { id: 10, title: "Optimism" }
  ];
    
    

    const grafana = 'https://grafana.synthetix.io/d/pjPJZ6x7z/synthetix-system-stats?orgId=1&kiosk=full'
      


  return (
    <div>
       
   

    <div className={styles.navContainer}>

        <div className={styles.navNetwork}>


        {buttonMap.map((buttonMap) => (
        <button
          key={buttonMap.id}
          onClick={() => props.handle(buttonMap)}
          className={ buttonMap.id === props.current ? styles.navCurrent : styles.navInactive}
        >
          {buttonMap.title}
        </button>
      ))}


        </div>

        <div className={styles.navMoreStats}>

            <button className={styles.navAdvancedStats}>
              <a href={grafana}>
              Advanced Stats
              </a>
              </button>
            
        </div>
        </div>

       
     
  
  


   
    </div>

  )
}

export default NetworkNavBar