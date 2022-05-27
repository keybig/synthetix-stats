import styles from './SnxStaked.module.css'
import useSynthetixQueries, { createQueryContext, SynthetixQueryContextProvider } from '@synthetixio/queries'
import Wei from '@synthetixio/wei'
import useGetGlobalStake from '../../../hooks/useGetGlobalStake'


type Props = {}

const SnxStaked = (props: Props) => {

  const {totalHolder} = useGetGlobalStake()
  const {stakeAmount} = useGetGlobalStake()

  const {stakedVal} = useGetGlobalStake()

  const {percentStaked} = useGetGlobalStake()
  const {stakeCalc} = useGetGlobalStake()
  const {totalBal} = useGetGlobalStake()

  return (
    <div className={styles.snxStaked}>
     
    <h3 className={styles.title}>SNX Staked</h3>
    <p className={styles.percentAPY}>{`${(stakeCalc / totalBal).toFixed(2).substring(2)}%`}</p>
    <h3 className={styles.secondaryHeading}>Total SNX Staked</h3>
    <p className={styles.values}>
      {
        stakeAmount
      }
    </p>
    <h3 className={styles.secondaryHeading}>Staked Value</h3>
    <p className={styles.values}>
      {
       stakedVal
      }
    </p>
  
   
</div>
  )
}

export default SnxStaked