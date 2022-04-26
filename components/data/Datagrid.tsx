import styles from './Datagrid.module.css'
import SnxStaked from './snxStaked/SnxStaked'
import TotalValueLocked from './tvl/TotalValueLocked'
import StakeAPY from './stakeAPY/StakeAPY'
import NumStaker from './numStaker/numStaker'
import TradeActivity from './tradeActivity/TradeActivity'
import Inflation from './inflation/Inflation'
import TradeFee from './tradeFee/TradeFee'
import MoreStats from './moreStats/MoreStats'
import StartStaking from './startStaking/StartStaking'

type Props = {}

const Datagrid = (props: Props) => {
  return (
    <div className={styles.container}>
        <SnxStaked />
        <TotalValueLocked />
        <StakeAPY />
        <NumStaker />
        <TradeActivity />
        <Inflation />
        <TradeFee />
        <MoreStats />
        <StartStaking />
    </div>
  )
}

export default Datagrid