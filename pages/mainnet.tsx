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
import { staking } from '../lib/getStaker'
import { getTradeActivity } from '../lib/getTradeActivity'
import { getTvl } from '../lib/getTvl'
import { numStaker } from '../lib/getNumStaker'
import { blocky } from '../lib/getBlock'
import { getDebtStates } from '../subgraph-ovm'
import styles from '../styles/Main.module.css'
import SnxStaked from '../components/data/snxStaked/SnxStaked'
import TotalValueLocked from '../components/data/tvl/TotalValueLocked'
import StakeAPY from '../components/data/stakeAPY/StakeAPY'
import NumStaker from '../components/data/numStaker/numStaker'
import TradeActivity from '../components/data/tradeActivity/TradeActivity'
import Inflation from '../components/data/inflation/Inflation'
import TradeFee from '../components/data/tradeFee/TradeFee'



const Mainnet = (props:any) => {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        notifyOnChangeProps: ['data'],
      },
    },
  })


  const router = useRouter()

  const [netId, setNetId] = useState<NetworkId>(10)

  const handleNetwork = (buttons: any) => {
    setNetId(buttons.id);
    queryClient.invalidateQueries()
 
  };






  return (
    <div>
      <Subheader/>
   

      <div className={styles.container}>
    
    <SnxStaked 
      collateral={props.stakeParent.snxStaked} 
      stakedValue={props.stakeParent.snxRate * props.stakeParent.snxStaked}
      percentStake={props.stakeParent.percentStaked}
      />
    
    <TotalValueLocked
    dayData={props.theTVL.day}
    weekData={props.theTVL.week}
    monthData={props.theTVL.month}
    totalDebt={props.theTVL.currentDebt}
    totalWrapper={props.theTVL.currentWrapper}
    />
    <StakeAPY APY={props.apy}/>
    <NumStaker 
      dayStaker={props.numStake.day}
      weekStaker={props.numStake.week}
      monthStaker={props.numStake.month}
      numStakers={props.numStake.currentStaker}/>

    <TradeActivity
    totalTradeData={props.tradey.tradeDataArr}
    currentTotalTrades={props.tradey.currentTrade}
    totalTrades={props.tradey.totalTrades}
    totalVol={props.tradey.totalVol}
    currentTotalVol={props.tradey.currentVol}
    currentTradeData={props.tradey.currentTradeStats}
     />

     <Inflation
      currentReward={props.stakeParent.reward}
      allTimeInflation={props.stakeParent.rewardsAmt}
      inflationData={props.stakeParent.inflationData}
      />


      <TradeFee 
        tradeFeeArr={props.tradey.tradeFeeArr}
        currentFeeData={props.tradey.currentFeeData}
        currentFeeSum={props.tradey.currentFeeSum}
        totalFeeSum={props.tradey.totalFeeSum}
        totalIssuedSynth={props.tradey.totalSynth}
      />

    </div>

      


      

      

    
    </div>
  )
}

export default Mainnet

export async function getStaticProps() {

  const stakeParent = await staking()
  const percentStaked = (await staking()).percentStaked
  const snxStaked = (await staking()).snxStaked
  const snxRate = (await staking()).snxRate
  const apy = (await staking()).apy
  const tradey = await getTradeActivity()
  console.log('hello')
  console.log(stakeParent.inflationData)
  console.log(stakeParent.rewardsAmt)
  console.log(`cur rewrd: ${stakeParent.reward}`)

  console.log(tradey.tradeDataArr)


  const wrapper = (await getTvl()).currentWrapper

  const numStake = await numStaker()
  const theTVL = await getTvl()

  // tests below, keep above

  const mainnet_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/mainnet-main"
  const optimism_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main"

  const blocks = await blocky()

    const currentDebtCall = await getDebtStates(
        optimism_url,
        {
          orderBy: "timestamp",
          orderDirection: "desc",
          first: 1,
          block: { number: blocks.currentBlock },
        },
        { debtEntry: true, totalIssuedSynths: true },
      );
    
      const currentDebtEntry = currentDebtCall[0].debtEntry.toNumber()
      const totalSynths = currentDebtCall[0].totalIssuedSynths.toNumber()

      console.log(`current debt: ${currentDebtEntry}`)
      console.log(`total synths: ${totalSynths}`)

      console.log(numStake.day)


    return { props: {
        stakeParent,
        snxRate,
        snxStaked,
        percentStaked,
        apy,
        numStake,
        theTVL,
        tradey,
    }  }
  }