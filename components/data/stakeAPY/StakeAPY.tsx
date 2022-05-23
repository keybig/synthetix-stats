import styles from './StakeAPY.module.css'
import useSynthetixQueries from '@synthetixio/queries'
import Wei from '@synthetixio/wei'
import { ethers } from 'ethers'
import useGetGlobalStake from '../../../hooks/useGetGlobalStake'
import useGetAPY from '../../../hooks/useGetAPY'

type Props = {}

const StakeAPY = (props: Props) => {

const { stakeCalc } = useGetGlobalStake()

const { APY } = useGetAPY()



  return (
    <div className={styles.container}>

      <h4 className={styles.title}>Current Staking APY</h4>
      <p className={styles.percentAPY}>
        {APY}
      </p>
    </div>
  )
}

export default StakeAPY

