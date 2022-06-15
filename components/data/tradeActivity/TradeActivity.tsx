import styles from "./TradeActivity.module.css";
import { useState, useMemo } from "react";
import TradeTable from "./TradeTable";

interface TradeStats {
  click: number
  tradeDataAll: any[]
  tradeDataMain: any[]
  tradeDataOvm: any[]
  totalVolMain: number
  totalTradeMain: number
  totalVolOvm: number
  totalTradeOvm: number
  currentTradeDataAll: any[]
  currentTradeDataMain: any[]
  currentTotalVolMain: number
  currentTotalTradeMain: number
  currentTradeDataOvm: any[]
  currentTotalVolOvm: number
  currentTotalTradeOvm: number
}
const TradeActivity = ({
  click,
  tradeDataMain,
  totalVolMain,
  totalTradeMain,
  tradeDataOvm,
  totalVolOvm,
  totalTradeOvm,
  currentTradeDataMain,
  currentTotalVolMain,
  currentTotalTradeMain,
  currentTradeDataOvm,
  currentTotalVolOvm,
  currentTotalTradeOvm,
  currentTradeDataAll,
  tradeDataAll,
}:TradeStats) => {

  const buttonMap = [
    { id: 1, title: "Current Epoch" },
    { id: 2, title: "Total To Date" },
  ];

  const [timeFrame, setTimeFrame] = useState(1);

  const handleActive = (buttons: any) => {
    setTimeFrame(buttons.id);
  };

  const ovmVolume = timeFrame === 1 ? currentTotalVolOvm : totalVolOvm
 const ovmTrade = timeFrame === 1 ? currentTotalTradeOvm : totalTradeOvm

 const mainVolume = timeFrame === 1 ? currentTotalVolMain : totalVolMain
 const mainTrade = timeFrame === 1 ? currentTotalTradeMain : totalTradeMain

 const currentTotalVolume = currentTotalVolOvm + currentTotalVolMain
 const currentTotalTrade = currentTotalTradeOvm + currentTotalTradeMain
 const allTotalVolume = totalVolMain + totalVolOvm
 const allTotalTrade = totalTradeMain + totalTradeOvm

 const allVolume = timeFrame === 1 ? currentTotalVolume : allTotalVolume
 const allTrade = timeFrame === 1 ? currentTotalTrade : allTotalTrade

  return (
    <div className={styles.container}>
      <h3 className={styles.title}> Trading Activity</h3>

      <div className={styles.buttonRow}>
        {buttonMap.map((buttonMap) => (
          <button
            key={buttonMap.id}
            onClick={() => handleActive(buttonMap)}
            className={
              buttonMap.id === timeFrame ? styles.current : styles.inactive
            }
          >
            {buttonMap.title}
          </button>
        ))}
      </div>
      <div className={styles.table}>
        <TradeTable 
          click={click}
          tableId={timeFrame}
          totalTradeStatsAll={tradeDataAll}
          totalTradeStatsMain={tradeDataMain}
          totalTradeStatsOvm={tradeDataOvm}
          currentTradeStatsAll={currentTradeDataAll}
          currentTradeStatsMain={currentTradeDataMain}
          currentTradeStatsOvm={currentTradeDataOvm}
           />
           
      </div>

      <div className={styles.bottom}>
        <h5 className={styles.bottomTitle}>Total N of Trades</h5>

        <p className={styles.totalTrades}>
        {click === 1 ? mainTrade : click === 10 ? ovmTrade : allTrade}
        </p>

        <h5 className={styles.bottomTitle}>Total Volume</h5>

        <p className={styles.totalVolume}>
        {click === 1 ? mainVolume : click === 10 ? ovmVolume : allVolume}
        </p>
      </div>
    </div>
  );
};

export default TradeActivity;
