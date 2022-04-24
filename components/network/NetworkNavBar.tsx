import styles from './NetworkNavBar.module.css'

type Props = {}

const NetworkNavBar = (props: Props) => {
  return (

    <div className={styles.container}>

        <div className={styles.network}>

            <button className={styles.current}>All Networks</button>
            <button className={styles.inactive}>Mainnet</button>
            <button className={styles.inactive}>Optimism</button>

        </div>

        <div className={styles.moreStats}>

            <button className={styles.advancedStats}>Advanced Stats</button>
            
        </div>

    </div>

  )
}

export default NetworkNavBar