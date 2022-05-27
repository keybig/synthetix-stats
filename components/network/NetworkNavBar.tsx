import { NetworkId } from '@synthetixio/contracts-interface';
import { createQueryContext, SynthetixQueryContext, SynthetixQueryContextProvider } from '@synthetixio/queries';
import { useContext, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import styles from './NetworkNavBar.module.css'
import { useRouter } from 'next/router'


type Props = {
  children?:any;
  
}

const NetworkNavBar = (props:Props) => {

  const queryClient = new QueryClient()

  const buttonMap = [
   // { id: 100, netId: 10, title: "All Networks" },
    { id: 1, netId: 1, title: "Mainnet" },
    { id: 10, netId: 10, title: "Optimism" }
  ];





    const [network, setNetwork] = useState<NetworkId>(10);
  
   const updateNetwork = () => {
     queryClient.refetchQueries('cfpapy')
   }

    const handleActive = (buttons: any) => {
      setNetwork(buttons.id);
      updateNetwork()
    };
    
    const test = createQueryContext({
      networkId: network, // Options: 1 (Mainnet), 10 (Optimism), 42 (Kovan), and 69 (Optimism Kovan)
      
      })

    const grafana = 'https://grafana.synthetix.io/d/pjPJZ6x7z/synthetix-system-stats?orgId=1&kiosk=full'
      


  return (
    <div>
       
       <QueryClientProvider client={queryClient}>
<SynthetixQueryContextProvider
value={test}
>
    <div className={styles.navContainer}>

        <div className={styles.navNetwork}>


        {buttonMap.map((buttonMap) => (
        <button
          key={buttonMap.id}
          onClick={() => handleActive(buttonMap)}
          className={ buttonMap.id === network ? styles.navCurrent : styles.navInactive}
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
       
     
      {props.children}

    </SynthetixQueryContextProvider>
    <ReactQueryDevtools />

    </QueryClientProvider>
  


   
    </div>

  )
}

export default NetworkNavBar