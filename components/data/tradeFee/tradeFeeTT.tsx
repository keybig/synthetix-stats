import { TooltipProps } from 'recharts';
import {
  ValueType,
  NameType,
} from 'recharts/src/component/DefaultTooltipContent';
import { formatMoney, formatNumber } from '../../../constants/format';
import styles from './tradeFeeTT.module.css'

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

    
    const tradeFeeVal = payload && payload[0].value
    const tradeFeeName = payload && payload[0].name


    return (
      <div className={styles.TTwrap}>
        <p className={styles.TTnumStake}>{tradeFeeName ? tradeFeeName : null}</p>
        <p className={styles.TTnumStake}>{tradeFeeVal ? formatMoney.format(tradeFeeVal) : 0}</p>

      </div>
    );
  }

  return null;
};

export default CustomTooltip