import styles from "./StakeAPY.module.css";
import { formatPercent } from "../../../constants/format";
import { useMemo } from "react";

interface APY {
  ovm: number;
  main: number;
  click: number;
  avg: number;
}
const StakeAPY = ({ovm, main, click, avg}:APY) => {
  

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Current Staking APY</h4>
      <p className={styles.percentAPY}>{click === 1 ? main : click === 10 ? ovm : avg}</p>
    </div>
  );
};

export default StakeAPY;
