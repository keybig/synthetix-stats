import styles from "./StakeAPY.module.css";
import { formatPercent } from "../../../constants/format";
import { useMemo } from "react";
import InfoTooltip from "../../infoToolTip/InfoTooltip";
import {RiInformationFill} from "react-icons/ri"


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

  const ttInfo = `The APY being earned by SNX Stakers.`
  

  return (
    <div className={styles.container}>
      <div className={styles.titleRow}>
      <h4 className={styles.title}>Current Staking APY</h4>
      <InfoTooltip content={ttInfo}>

      <span 
        className={styles.icon}
        onMouseEnter={()=>console.log("mouse enter")}
        onMouseLeave={()=>console.log("mouse left")}
        >
      <RiInformationFill/>
      </span>
      </InfoTooltip>
      </div>

      <p className={styles.percentAPY}>{click === 1 ? mainAPY : click === 10 ? ovmAPY : allAPY}</p>
    </div>
  );
};

export default StakeAPY;
