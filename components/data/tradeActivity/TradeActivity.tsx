import styles from './TradeActivity.module.css'
import { useState, useMemo } from 'react'
import CTable from '../../table/CTable'
import TradeTable from './TradeTable'

type Props = {}

const TradeActivity = (props: Props) => {

  return (
    <div className={styles.container}>

      <h3 className={styles.title}> Trading Activity</h3>

      <div className={styles.buttonRow}>
        <button className={styles.current}>Current Epoch</button>
        <button className={styles.inactive}>Total to date</button>
      </div>
      <div className={styles.table}>
      <TradeTable />
      </div>

    <div className={styles.bottom}>
      <h5 className={styles.bottomTitle}>Total N of Trades</h5>
      <p className={styles.totalTrades}>6,784,567</p>
      <h5 className={styles.bottomTitle}>Total Volume</h5>
      <p className={styles.totalVolume}>$1,000,000,000</p>
      </div>


    </div>
  )
}

export default TradeActivity