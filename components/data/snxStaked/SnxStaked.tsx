import styles from "./SnxStaked.module.css";
import { formatNumber } from "../../../constants/format";

interface Staked {
  click: number;
  percentStakeOvm: number;
  percentStakeMain: number;
  percentStakeAll: number;
  stakeAmountOvm: number;
  stakeAmountMain: number;
  stakeAmountAll: number;
  stakeValueOvm: number;
  stakeValueMain: number;
  stakeValueAll: number;
}

const SnxStaked = ({
  click, 
  percentStakeAll, 
  percentStakeMain, 
  percentStakeOvm, 
  stakeAmountAll, 
  stakeAmountMain, 
  stakeAmountOvm,
  stakeValueAll,
  stakeValueMain,
  stakeValueOvm,
}:Staked) => {


  return (
    <div className={styles.snxStaked}>
      <h3 className={styles.title}>SNX Staked</h3>
      <p className={styles.percentAPY}>{click === 1 ? percentStakeMain : click === 10 ? percentStakeOvm : percentStakeAll}</p>
      <h3 className={styles.secondaryHeading}>Total SNX Staked</h3>
      <p className={styles.values}>{click === 1 ? stakeAmountMain : click === 10 ? stakeAmountOvm : stakeAmountAll}</p>
      <h3 className={styles.secondaryHeading}>Staked Value</h3>
      <p className={styles.values}>{click === 1 ? stakeValueMain : click === 10 ? stakeValueOvm : stakeValueAll}</p>
    </div>
  );
};

export default SnxStaked;
