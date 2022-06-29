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
import { numStakey} from "../lib/getNumStaky"
import { activa } from "../lib/getTradeActivitas";
import MoreStats from "../components/data/moreStats/MoreStats";
import StartStaking from "../components/data/startStaking/StartStaking";

const Home = (props: any) => {
  const router = useRouter();

  const [netId, setNetId] = useState<number>(20);

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
          click={netId}
          currentStakerOvm={props.numberStake.currentStakerOvm}
          currentStakerAll={props.numberStake.currentStakerAll}
          currentStakerMain={props.numberStake.currentStakerMain}
          dayAll={props.numberStake.dayAll}
          dayMain={props.numberStake.dayMain}
          dayOvm={props.numberStake.dayOvm}
          weekAll={props.numberStake.weekAll}
          weekMain={props.numberStake.weekMain}
          weekOvm={props.numberStake.weekOvm}
          monthAll={props.numberStake.monthAll}
          monthMain={props.numberStake.monthMain}
          monthOvm={props.numberStake.monthOvm}

        />

      

        <TradeActivity
          click={netId}
          tradeDataMain={props.active.tradeDataMain}
          tradeDataOvm={props.active.tradeDataOvm}
          totalVolMain={props.active.totalVolMain}
          totalTradeMain={props.active.totalTradeMain}
          totalVolOvm={props.active.totalVolOvm}
          totalTradeOvm={props.active.totalTradeOvm}
          currentTradeDataMain={props.active.currentTradeDataMain}
          currentTotalVolMain={props.active.currentTotalVolMain}
          currentTotalTradeMain={props.active.currentTotalTradeMain}
          currentTradeDataOvm={props.active.currentTradeDataOvm}
          currentTotalVolOvm={props.active.currentTotalVolOvm}
          currentTotalTradeOvm={props.active.currentTotalTradeOvm}
          currentTradeDataAll={props.active.allCurrentTradeData}
          tradeDataAll={props.active.allTotalTradeData}
          sevenTradeDataMain={props.active.sevenTradeDataMain}
          sevenTradeDataOvm={props.active.sevenTradeDataOvm}
          thirtyTradeDataMain={props.active.thirtyTradeDataMain}
          thirtyTradeDataOvm={props.active.thirtyTradeDataOvm}
          ninetyTradeDataMain={props.active.ninetyTradeDataMain}
          ninetyTradeDataOvm={props.active.ninetyTradeDataOvm}
          dailyTradeDataMain={props.active.dailyTradeDataMain}
          dailyTradeDataOvm={props.active.dailyTradeDataOvm}
          allDailyTradeData={props.active.allDailyTradeData}
          allSevenTradeData={props.active.allSevenTradeData}
          allThirtyTradeData={props.active.allThirtyTradeData}
          allNinetyTradeData={props.active.allNinetyTradeData}
          dailyVolOvm={props.active.dailyTotalVolOvm}
          dailyVolMain={props.active.dailyTotalVolMain}
          sevenVolMain={props.active.sevenTotalVolMain}
          sevenVolOvm={props.active.sevenTotalVolOvm}
          thirtyVolMain={props.active.thirtyTotalVolMain}
          thirtyVolOvm={props.active.thirtyTotalVolOvm}
          ninetyVolMain={props.active.ninetyTotalVolMain}
          ninetyVolOvm={props.active.ninetyTotalVolOvm}
          dailyTradeOvm={props.active.dailyTotalTradeOvm}
          dailyTradeMain={props.active.dailyTotalTradeMain}
          sevenTradeOvm={props.active.sevenTotalTradeOvm}
          sevenTradeMain={props.active.sevenTotalTradeMain}
          thirtyTradeOvm={props.active.thirtyTotalTradeOvm}
          thirtyTradeMain={props.active.thirtyTotalTradeMain}
          ninetyTradeOvm={props.active.ninetyTotalTradeOvm}
          ninetyTradeMain={props.active.ninetyTotalTradeMain}
        />

        <Inflation
          click={netId}
          currentRewardMain={props.staka.rewardMain}
          currentRewardOvm={props.staka.rewardOvm}
          allTimeInflationMain={props.staka.rewardsAmountMain}
          allTimeInflationOvm={props.staka.rewardsAmountOvm}
          inflationDataMain={props.staka.inflationDataMain}
          inflationDataOvm={props.staka.inflationDataOvm}
          inflationDataAll={props.staka.inflationDataAll}
        />

        <TradeFee
          totalIssuedSynth={props.tradey.totalSynth}
          click={netId}
          totalFeeAll={props.active.allTotalFee}
          totalFeeMain={props.active.totalFeeMain}
          totalFeeOvm={props.active.totalFeeOvm}
          ovmTotalSynth={props.active.ovmTotalSynth}
          mainTotalSynth={props.active.mainTotalSynth}
          allTotalSynth={props.active.mainTotalSynth}
          dailyFeeMain={props.active.dailyTotalFeeMain}
          dailyFeeOvm={props.active.dailyTotalFeeOvm}
          sevenFeeMain={props.active.sevenTotalFeeMain}
          sevenFeeOvm={props.active.sevenTotalFeeOvm}
          thirtyFeeMain={props.active.thirtyTotalFeeMain}
          thirtyFeeOvm={props.active.thirtyTotalFeeOvm}
          ninetyFeeMain={props.active.ninetyTotalFeeMain}
          ninetyFeeOvm={props.active.ninetyTotalFeeOvm}
          allDailyFee={props.active.allDailyFee}
          allSevenFee={props.active.allSevenFee}
          allThirtyFee={props.active.allThirtyFee}
          allNinetyFee={props.active.allNinetyFee}
          feeAll={props.active.feeCollectAll}
          feeMain={props.active.feeCollectMain}
          feeOvm={props.active.feeCollectOvm}
        />

        <MoreStats/>
        <StartStaking/>
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
  const numberStake = await numStakey()
  const active = await activa()

  // tests below, keep above

  return {
    props: {
      stakeParent,
      numStake,
      theTVL,
      tradey,
      staka,
      numberStake,
      active
    },
  };
}
