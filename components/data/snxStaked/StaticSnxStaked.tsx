import styles from "./SnxStaked.module.css";
import useGetStake from '../../../hooks/useGetStake'
import { formatNumber } from "../../../constants/format";

interface Staked {
  collateral: number;
  stakedValue: number;
  percentStake: number;
}

const SnxStaked = ({collateral, stakedValue, percentStake}:Staked) => {


  return (
    <div className={styles.snxStaked}>
      <h3 className={styles.title}>SNX Staked</h3>
      <p className={styles.percentAPY}>{percentStake}</p>
      <h3 className={styles.secondaryHeading}>Total SNX Staked</h3>
      <p className={styles.values}>{collateral}</p>
      <h3 className={styles.secondaryHeading}>Staked Value</h3>
      <p className={styles.values}>{stakedValue}</p>
    </div>
  );
};

export default SnxStaked;
