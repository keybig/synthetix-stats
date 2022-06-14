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
import { stakit } from "../lib/getStakey";

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
    
      </div>

     
    
  
  );
};

export default Static2;
