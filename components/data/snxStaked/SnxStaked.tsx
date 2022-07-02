import styles from "./SnxStaked.module.css";
import { formatMoney, formatNumber, formatPercent } from "../../../constants/format";
import {RiInformationFill} from "react-icons/ri"
import InfoTooltip from '../../infoToolTip/InfoTooltip'

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

  const percentMain = formatPercent.format(percentStakeMain)
  const percentOvm = formatPercent.format(percentStakeOvm)
  const percentAll = formatPercent.format(percentStakeAll)

  const stakeMain = formatNumber.format(stakeAmountMain)
  const stakeOvm = formatNumber.format(stakeAmountOvm)
  const stakeAll = formatNumber.format(stakeAmountAll)

  const valueMain = formatMoney.format(stakeValueMain)
  const valueOvm = formatMoney.format(stakeValueOvm)
  const valueAll = formatMoney.format(stakeValueAll)

  const ttInfo = `How many SNX is staked compared to total supply. Updated every 15 minutes.`


  return (
    <div className={styles.snxStaked}>
      <div className={styles.titleRow}>
      <h3 className={styles.title}>SNX Staked </h3>
      <InfoTooltip content={ttInfo}>

      <span className={styles.icon}>
      <RiInformationFill/>
      </span>
      </InfoTooltip>

      </div>
      <p className={styles.percentStaked}>{click === 1 ? percentMain : click === 10 ? percentOvm : percentAll}</p>
      <h3 className={styles.secondaryHeading}>Total SNX Staked</h3>
      <p className={styles.values}>{click === 1 ? stakeMain : click === 10 ? stakeOvm : stakeAll}</p>
      <h3 className={styles.secondaryHeading}>Staked Value</h3>
      <p className={styles.values}>{click === 1 ? valueMain : click === 10 ? valueOvm : valueAll}</p>
    </div>
  );
};

export default SnxStaked;
