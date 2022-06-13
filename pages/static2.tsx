import NetworkNavBar from '../components/network/NetworkNavBar'
import Subheader from '../components/subheader/Subheader'
import { Key, ReactChild, ReactFragment, ReactPortal, useContext, useState } from 'react'
import { getDebtStates, getSNXHolders, getSynthetixById, getTotalActiveStakers } from '../subgraph-ovm'
import { snxIssuers } from '../lib/getTest'
import { blocky } from '../lib/getBlock'
import { staking } from '../lib/getStaker'
import { getTvl } from '../lib/getTvl'
import { numStaker } from '../lib/getNumStaker'
import { getTradeActivity } from '../lib/getTradeActivity'
import StaticSnxStaked from '../components/data/snxStaked/SnxStaked'
import styles from '../styles/Main.module.css'
import TotalValueLocked from '../components/data/tvl/TotalValueLocked'
import StakeAPY from '../components/data/stakeAPY/StakeAPY'
import NumStaker from '../components/data/numStaker/numStaker'
import TradeActivity from '../components/data/tradeActivity/TradeActivity'
import Inflation from '../components/data/inflation/Inflation'
import { getTradeFee } from '../lib/getTradeFee'
import TradeFee from '../components/data/tradeFee/TradeFee'



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
  

const Static2 = (props:any) => {


  return (
  <div style={{background:"white", fontSize:"2rem"}}>
    <h5> The Static Data Fetching Test yo Area</h5>

    
    <div className={styles.container}>
    
    <StaticSnxStaked 
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

    <div>
      <p> SNX Staking APY Grid</p>
      <p> {props.apy}</p>
    </div>

    <div>
      <p> SNX Total Value Locked Grid</p>
      <p> {props.theTVL.currentDebt + props.theTVL.currentWrapper}</p>
      <p> {props.theTVL.currentDebt}</p>
      <p> {props.theTVL.currentWrapper}</p>
      <> 
        {props.theTVL.day.map((item: { date: string; debt: number; wrapper: number}) => {
          return <p key={item.date}> debt: {item.debt} wrapper: {item.wrapper}</p>
        })}
      </>
      <>
      {props.theTVL.week.map((item: { date: string; debt: number; wrapper: number}) => {
          return <p key={item.date}> debt: {item.debt} wrapper: {item.wrapper}</p>
        })}
      </>
      <>
      {props.theTVL.month.map((item: { date: string; debt: number; wrapper: number}) => {
          return <p key={item.date}> debt: {item.debt} wrapper: {item.wrapper}</p>
        })}
      </>

    </div>

    <div>
      <p> Num Staker</p>
      <p>
        {props.numStake.currentStaker}
      </p>
    
      <>
        {props.numStake.day.map( (item: { date: string; stakers: number }) => {
         return <p key={item.date}>date: {item.date} stakers: {item.stakers}</p>
        })}
   
      </>
      <>
      {props.numStake.week.map((item: { date: string; stakers: number }) => {
         return <p key={item.date}> date: {item.date} stakers: {item.stakers} </p>
        })}
      </>
       <>
       {props.numStake.week.map((item : { date: string; stakers: number;}) => {
        return  <p key={item.date}> date: {item.date} stakers: {item.stakers}</p>
        })}
       </>
    
    </div>

    
  </div>
  )
}

export default Static2