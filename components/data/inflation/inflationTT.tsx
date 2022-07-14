import { TooltipProps } from 'recharts';
import { formatNumber } from '../../../constants/format';
import styles from './inflationTT.module.css'

// date
// tvl
// staking debt pool
// wrapper
const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {


    


  if (active) {

    
    const rewardsTT = payload && payload[0].value

    return (
      <div className={styles.TTwrap}>
        <p className={styles.TTlabel}>{label}</p>
        <p className={styles.TTsnxReward}>{rewardsTT ? `${formatNumber.format(rewardsTT)} SNX` : 0}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip