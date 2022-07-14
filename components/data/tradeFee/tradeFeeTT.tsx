import { TooltipProps } from 'recharts';
import { formatMoney } from '../../../constants/format';
import styles from './tradeFeeTT.module.css'

// date
// tvl
// staking debt pool
// wrapper
const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<number, string>) => {


    


  if (active) {

    
    const tradeFeeVal = payload && payload[0].value
    const tradeFeeName = payload && payload[0].name


    return (
      <div className={styles.TTwrap}>
        <p className={styles.TTfeeVal}>{tradeFeeName ? tradeFeeName : null}</p>
        <p className={styles.TTfeeVal}>{tradeFeeVal ? formatMoney.format(tradeFeeVal) : 0}</p>

      </div>
    );
  }

  return null;
};

export default CustomTooltip