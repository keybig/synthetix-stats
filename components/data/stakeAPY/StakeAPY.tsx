import styles from "./StakeAPY.module.css";
import useGetStake from '../../../hooks/useGetStake'
import { formatPercent } from "../../../constants/format";
import { useMemo } from "react";

const StakeAPY = () => {
  
  const { percentAPY } = useGetStake();

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Current Staking APY</h4>
      <p className={styles.percentAPY}>{percentAPY}</p>
    </div>
  );
};

export default StakeAPY;
