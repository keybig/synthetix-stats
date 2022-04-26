import styles from './SnxStaked.module.css'

type Props = {}

const SnxStaked = (props: Props) => {
  return (
    <div className={styles.snxStaked}>
    <h3 className={styles.title}>SNX Staked Yo</h3>
    <p className={styles.percentAPY}>65%</p>
    <h3 className={styles.secondaryHeading}>Total SNX Staked</h3>
    <p className={styles.values}>100,000,000</p>
    <h3 className={styles.secondaryHeading}>Staked Value</h3>
    <p className={styles.values}>$500,000</p>

</div>
  )
}

export default SnxStaked