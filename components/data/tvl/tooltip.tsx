import { TooltipProps } from 'recharts';
import {
  ValueType,
  NameType,
} from 'recharts/src/component/DefaultTooltipContent';
import { formatMoney } from '../../../constants/format';
import styles from './Tooltip.module.css'

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

    const debtVal = payload && payload[1].value
    const wrapperVal = payload && payload[0].value
    const tvl = debtVal && wrapperVal ? debtVal + wrapperVal : 0
    console.log(payload)
  
    return (
      <div className={styles.TTwrap}>
        <p className={styles.TTlabel}>{label}</p>
        <h6 className={styles.TTheading}>TVL</h6>
        <p className={styles.TTtvl}>{formatMoney.format(tvl)}</p>
        <h6 className={styles.TTheading}>Staking Debt Pool</h6>
        <p className={styles.TTdebt}>{debtVal ? formatMoney.format(debtVal) : 0}</p>
        <h6 className={styles.TTheading}>Wrappers</h6>
        <p className={styles.TTwrapper}>{wrapperVal ? formatMoney.format(wrapperVal) : 0}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip