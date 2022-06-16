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

  const mainAPY = formatPercent.format(main)
  const ovmAPY = formatPercent.format(ovm)
  const allAPY = formatPercent.format(avg)
  

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Current Staking APY</h4>
      <p className={styles.percentAPY}>{click === 1 ? mainAPY : click === 10 ? ovmAPY : allAPY}</p>
    </div>
  );
};

export default StakeAPY;
