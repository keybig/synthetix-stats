import NetworkNavBar from "../components/network/NetworkNavBar";
import Subheader from "../components/subheader/Subheader";
import { useState } from "react";
import { useRouter } from "next/router";
import { staking } from "../lib/getStaker";
import { getTradeActivity } from "../lib/getTradeActivity";
import { getTvl } from "../lib/getTVLy";
import { numStaker } from "../lib/getNumStaker";
import { blocky } from "../lib/getBlock";
import { getDebtStates } from "../subgraph-ovm";
import styles from "../styles/Main.module.css";
import SnxStaked from "../components/data/snxStaked/SnxStaked";
import TotalValueLocked from "../components/data/tvl/TotalValueLocked";
import StakeAPY from "../components/data/stakeAPY/StakeAPY";
import NumStaker from "../components/data/numStaker/numStaker";
import TradeActivity from "../components/data/tradeActivity/TradeActivity";
import Inflation from "../components/data/inflation/Inflation";
import TradeFee from "../components/data/tradeFee/TradeFee";
import { stakit } from "../lib/getStakey";

const Home = (props: any) => {
  const router = useRouter();

  const [netId, setNetId] = useState<number>(10);

  const handleNetwork = (buttons: any) => {
    setNetId(buttons.id);
  };

  return (
    <div>
      <Subheader />
      <NetworkNavBar handle={handleNetwork} current={netId}/>

      <div className={styles.container}>
        <SnxStaked
          click={netId}
          percentStakeAll={props.staka.percentStakedAll}
          percentStakeMain={props.staka.percentStakedMain}
          percentStakeOvm={props.staka.percentStakedOvm}
          stakeAmountAll={props.staka.totalStakeAll}
          stakeAmountMain={props.staka.totalStakeMain}
          stakeAmountOvm={props.staka.totalStakeOvm}
          stakeValueAll={props.staka.stakeValueAll}
          stakeValueMain={props.staka.stakeValueMain}
          stakeValueOvm={props.staka.stakeValueOvm}
        />

<TotalValueLocked
          dayDataOvm={props.theTVL.dayOvm}
          weekDataOvm={props.theTVL.weekOvm}
          monthDataOvm={props.theTVL.monthOvm}
          totalDebtOvm={props.theTVL.ovmCurrentDebt}
          totalWrapperOvm={props.theTVL.ovmCurrentWrapper}
          dayDataMain={props.theTVL.dayMain}
          weekDataMain={props.theTVL.weekMain}
          monthDataMain={props.theTVL.monthMain}
          totalDebtMain={props.theTVL.mainCurrentDebt}
          totalWrapperMain={props.theTVL.mainCurrentWrapper}
          dayDataAll={props.theTVL.dayAll}
          weekDataAll={props.theTVL.weekAll}
          monthDataAll={props.theTVL.monthAll}
          click={netId}
        />
        <StakeAPY
          click={netId}
          avg={props.staka.apyAvg}
          ovm={props.staka.apyOvm}
          main={props.staka.apyMain}
         />
        <NumStaker
          dayStaker={props.numStake.day}
          weekStaker={props.numStake.week}
          monthStaker={props.numStake.month}
          numStakers={props.numStake.currentStaker}
        />

        <TradeActivity
          totalTradeData={props.tradey.tradeDataArr}
          currentTotalTrades={props.tradey.currentTrade}
          totalTrades={props.tradey.totalTrades}
          totalVol={props.tradey.totalVol}
          currentTotalVol={props.tradey.currentVol}
          currentTradeData={props.tradey.currentTradeStats}
        />

        <Inflation
          click={netId}
          currentRewardMain={props.staka.rewardMain}
          currentRewardOvm={props.staka.rewardOvm}
          allTimeInflationMain={props.staka.rewardsAmountMain}
          allTimeInflationOvm={props.staka.rewardsAmountOvm}
          inflationDataMain={props.staka.inflationDataMain}
          inflationDataOvm={props.staka.inflationDataOvm}
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
  );
};

export default Home;

export async function getStaticProps() {
  const stakeParent = await staking();
  const tradey = await getTradeActivity();
  const numStake = await numStaker();
  const theTVL = await getTvl();
  const staka = await stakit()

  // tests below, keep above

  return {
    props: {
      stakeParent,
      numStake,
      theTVL,
      tradey,
      staka
    },
  };
}
