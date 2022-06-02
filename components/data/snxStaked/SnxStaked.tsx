import styles from "./SnxStaked.module.css";
import useGetStake from '../../../hooks/useGetStake'
import { formatNumber } from "../../../constants/format";

const SnxStaked = () => {
  const { totalCollateral } = useGetStake();
  const { stakedVal } = useGetStake();
  const { percentStaked } = useGetStake();

  return (
    <div className={styles.snxStaked}>
      <h3 className={styles.title}>SNX Staked</h3>
      <p className={styles.percentAPY}>{percentStaked}</p>
      <h3 className={styles.secondaryHeading}>Total SNX Staked</h3>
      <p className={styles.values}>{totalCollateral}</p>
      <h3 className={styles.secondaryHeading}>Staked Value</h3>
      <p className={styles.values}>{stakedVal}</p>
    </div>
  );
};

export default SnxStaked;
