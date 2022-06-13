import Datagrid from '../components/data/Datagrid'
import NetworkNavBar from '../components/network/NetworkNavBar'
import Subheader from '../components/subheader/Subheader'
import {
  createQueryContext,
  SynthetixQueryContextProvider,
} from '@synthetixio/queries'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useState } from 'react'
import { NetworkId } from '@synthetixio/contracts-interface'
import { useRouter } from 'next/router'
import styles from '../styles/Main.module.css'
import StartStaking from '../components/data/startStaking/StartStaking'
import MoreStats from '../components/data/moreStats/MoreStats'
import TradeFee from '../components/data/tradeFee/TradeFee'
import Inflation from '../components/data/inflation/Inflation'
import TradeActivity from '../components/data/tradeActivity/TradeActivity'
import NumStaker from '../components/data/numStaker/numStaker'
import StakeAPY from '../components/data/stakeAPY/StakeAPY'
import TotalValueLocked from '../components/data/tvl/TotalValueLocked'
import SnxStaked from '../components/data/snxStaked/SnxStaked'



const Main = () => {

  


  const router = useRouter()

  const [netId, setNetId] = useState<number>(10)

  const handleNetwork = (buttons: any) => {
    setNetId(buttons.id);
  };






  return (
    <div>
      <Subheader/>

      <div className={styles.container}>
      <SnxStaked />
      <TotalValueLocked />
      <StakeAPY />
      <NumStaker />
      <TradeActivity />
      <Inflation />
      <TradeFee />
      <MoreStats />
      <StartStaking />
      
    </div>
    
    </div>
  )
}

export default Main