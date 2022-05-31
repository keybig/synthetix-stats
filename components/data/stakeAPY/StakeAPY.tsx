import styles from "./StakeAPY.module.css";
import useGetAPY from "../../../hooks/useGetAPY";

const StakeAPY = () => {
  const { APY } = useGetAPY();

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Current Staking APY</h4>
      <p className={styles.percentAPY}>{APY}</p>
    </div>
  );
};

export default StakeAPY;
