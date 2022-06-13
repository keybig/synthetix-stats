import NetworkNavBar from "../components/network/NetworkNavBar";
import Subheader from "../components/subheader/Subheader";
import {
  Key,
  ReactChild,
  ReactFragment,
  ReactPortal,
  useContext,
  useState,
} from "react";
import {
  getDebtStates,
  getSNXHolders,
  getSynthetixById,
  getTotalActiveStakers,
} from "../subgraph-ovm";
import { snxIssuers } from "../lib/getTest";
import { blocky } from "../lib/getBlock";
import { staking } from "../lib/getStaker";
import { getTvl } from "../lib/getTVLy";
import { numStaker } from "../lib/getNumStaker";
import { getTradeActivity } from "../lib/getTradeActivity";
import StaticSnxStaked from "../components/data/snxStaked/SnxStaked";
import styles from "../styles/Main.module.css";
import TotalValueLocked from "../components/data/tvl/TotalValueLocked";
import StakeAPY from "../components/data/stakeAPY/StakeAPY";
import NumStaker from "../components/data/numStaker/numStaker";
import TradeActivity from "../components/data/tradeActivity/TradeActivity";
import Inflation from "../components/data/inflation/Inflation";
import { getTradeFee } from "../lib/getTradeFee";
import TradeFee from "../components/data/tradeFee/TradeFee";

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

const Static2 = (props: any) => {
  const [netId, setNetId] = useState<number>(10);

  const handleNetwork = (buttons: any) => {
    setNetId(buttons.id);
  };

  return (
    <div style={{ background: "white", fontSize: "2rem" }}>
      <h5> The Static Data Fetching Test yo Area</h5>
    <NetworkNavBar handle={handleNetwork} current={netId}/>
      <div className={styles.container}>
        <StaticSnxStaked
          collateral={props.stakeParent.snxStaked}
          stakedValue={props.stakeParent.snxRate * props.stakeParent.snxStaked}
          percentStake={props.stakeParent.percentStaked}
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

export default Static2;
