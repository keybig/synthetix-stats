import NetworkNavBar from "../components/network/NetworkNavBar";
import Subheader from "../components/subheader/Subheader";
import { useState } from "react";
import { useRouter } from "next/router";
import { staking } from "../lib/getStaker";
import { getTradeActivity } from "../lib/getTradeActivity";
import { getTvl } from "../lib/getTvl";
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

const Home = (props: any) => {
  const router = useRouter();

  const [netId, setNetId] = useState<number>(10);

  const handleNetwork = (buttons: any) => {
    setNetId(buttons.id);
  };

  return (
    <div>
      <Subheader />

      <div className={styles.container}>
        <SnxStaked
          collateral={props.stakeParent.snxStaked}
          stakedValue={props.stakeParent.snxRate * props.stakeParent.snxStaked}
          percentStake={props.stakeParent.percentStaked}
        />

        <TotalValueLocked
          dayDataOvm={props.theTVL.day}
          weekDataOvm={props.theTVL.week}
          monthDataOvm={props.theTVL.month}
          totalDebtOvm={props.theTVL.currentDebt}
          totalWrapperOvm={props.theTVL.currentWrapper}
          dayDataMain={props.theTVL.day}
          weekDataMain={props.theTVL.week}
          monthDataMain={props.theTVL.month}
          totalDebtMain={props.theTVL.currentDebt}
          totalWrapperMain={props.theTVL.currentWrapper}
        />
        <StakeAPY APY={props.stakeParent.apy} />
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
  );
};

export default Home;

export async function getStaticProps() {
  const stakeParent = await staking();
  const tradey = await getTradeActivity();
  const numStake = await numStaker();
  const theTVL = await getTvl();

  // tests below, keep above

  return {
    props: {
      stakeParent,
      numStake,
      theTVL,
      tradey,
    },
  };
}
