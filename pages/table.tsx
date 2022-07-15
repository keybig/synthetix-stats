import NetworkNavBar from "../components/network/NetworkNavBar";
import Subheader from "../components/subheader/Subheader";
import { useState } from "react";
import { getTVL } from "../lib/getTVL";
import styles from "../styles/Main.module.css";
import SnxStaked from "../components/data/snxStaked/SnxStaked";
import TotalValueLocked from "../components/data/tvl/TotalValueLocked";
import StakeAPY from "../components/data/stakeAPY/StakeAPY";
import NumStaker from "../components/data/numStaker/numStaker";
import TradeActivity from "../components/data/tradeActivity/TradeActivity";
import Inflation from "../components/data/inflation/Inflation";
import TradeFee from "../components/data/tradeFee/TradeFee";
import { staker } from "../lib/getStaker";
import { numStaker} from "../lib/getNumStaker"
import { tradeData } from "../lib/getTradeData";
import MoreStats from "../components/data/moreStats/MoreStats";
import StartStaking from "../components/data/startStaking/StartStaking";

const Table = (props: any) => {

  const [netId, setNetId] = useState<number>(20);

  const handleNetwork = (buttons: any) => {
    setNetId(buttons.id);
  };

  console.log(props.trades.dailyTotalFeeOvm)

  return (
    <div>
      <Subheader />
      <NetworkNavBar handle={handleNetwork} current={netId}/>
   

      <div className={styles.container}>
         

        <TradeFee
          click={netId}
          totalFeeAll={props.trades.allTotalFee}
          totalFeeMain={props.trades.totalFeeMain}
          totalFeeOvm={props.trades.totalFeeOvm}
          dailyFeeMain={props.trades.dailyTotalFeeMain}
          dailyFeeOvm={props.trades.dailyTotalFeeOvm}
          sevenFeeMain={props.trades.sevenTotalFeeMain}
          sevenFeeOvm={props.trades.sevenTotalFeeOvm}
          thirtyFeeMain={props.trades.thirtyTotalFeeMain}
          thirtyFeeOvm={props.trades.thirtyTotalFeeOvm}
          ninetyFeeMain={props.trades.ninetyTotalFeeMain}
          ninetyFeeOvm={props.trades.ninetyTotalFeeOvm}
          allDailyFee={props.trades.allDailyFee}
          allSevenFee={props.trades.allSevenFee}
          allThirtyFee={props.trades.allThirtyFee}
          allNinetyFee={props.trades.allNinetyFee}
          feeAll={props.trades.feeCollectAll}
          feeMain={props.trades.feeCollectMain}
          feeOvm={props.trades.feeCollectOvm}
          dailyFeeCollectOvm={props.trades.dailyFeeCollectOvm}
          dailyFeeCollectMain={props.trades.dailyFeeCollectMain}
          allDailyFeeCollect={props.trades.allDailyFeeCollect}
          sevenFeeCollectMain={props.trades.sevenFeeCollectMain}
          sevenFeeCollectOvm={props.trades.sevenFeeCollectOvm}
          allSevenFeeCollect={props.trades.allSevenFeeCollect}
          thirtyFeeCollectMain={props.trades.thirtyFeeCollectMain}
          thirtyFeeCollectOvm={props.trades.thirtyFeeCollectOvm}
          allThirtyFeeCollect={props.trades.allThirtyFeeCollect}
          ninetyFeeCollectMain={props.trades.ninetyFeeCollectMain}
          ninetyFeeCollectOvm={props.trades.ninetyFeeCollectOvm}
          allNinetyFeeCollect={props.trades.allNinetyFeeCollect}
        />

      </div>
    </div>
  );
};

export default Table;

export async function getStaticProps() {

  const trades = await tradeData()



  // tests below, keep above


  return {
    props: {
      trades
    },
  };
}
