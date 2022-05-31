import styles from "./SnxStaked.module.css";
import useGetGlobalStake from "../../../hooks/useGetGlobalStake";

const SnxStaked = () => {
  const { stakeAmount } = useGetGlobalStake();
  const { stakedVal } = useGetGlobalStake();
  const { percentStaked } = useGetGlobalStake();

  return (
    <div className={styles.snxStaked}>
      <h3 className={styles.title}>SNX Staked</h3>
      <p className={styles.percentAPY}>{percentStaked}</p>
      <h3 className={styles.secondaryHeading}>Total SNX Staked</h3>
      <p className={styles.values}>{stakeAmount}</p>
      <h3 className={styles.secondaryHeading}>Staked Value</h3>
      <p className={styles.values}>{stakedVal}</p>
    </div>
  );
};

export default SnxStaked;
