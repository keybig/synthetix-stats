import styles from './StakeAPY.module.css'

type Props = {}

const StakeAPY = (props: Props) => {
  return (
    <div className={styles.container}>

      <h4 className={styles.title}>Current Staking APY</h4>
      <p className={styles.percentAPY}>49.03%</p>

    </div>
  )
}

export default StakeAPY

