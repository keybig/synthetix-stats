import styles from "./ModalTable.module.css";
import { useState } from "react";
import { formatMoney, formatNumber } from "../../../../constants/format";
import ModalTradeTable from "./ModalTradeTable";
import { RiFullscreenLine, RiInformationFill } from "react-icons/ri"
import InfoTooltip from "../../../infoToolTip/InfoTooltip";


interface ModalTradeStats {
  closeModal: () => void;
  click: number
  tradeDataAll: any[]
  tradeDataMain: any[]
  tradeDataOvm: any[]

  totalVolMain: number
  totalTradeMain: number
  totalVolOvm: number
  totalTradeOvm: number

  dailyVolOvm: number
  dailyVolMain: number
  sevenVolMain: number
  sevenVolOvm: number
  thirtyVolMain: number
  thirtyVolOvm: number
  ninetyVolMain: number
  ninetyVolOvm: number

  dailyTradeOvm: number
  dailyTradeMain: number
  sevenTradeOvm: number
  sevenTradeMain: number
  thirtyTradeOvm: number
  thirtyTradeMain: number
  ninetyTradeOvm: number
  ninetyTradeMain: number



  dailyTradeDataOvm: any[]
  dailyTradeDataMain: any[]
  sevenTradeDataOvm: any[]
  sevenTradeDataMain: any[]
  thirtyTradeDataOvm: any[]
  thirtyTradeDataMain: any[]
  ninetyTradeDataOvm: any[]
  ninetyTradeDataMain: any[]
  allDailyTradeData: any[]
  allSevenTradeData: any[]
  allThirtyTradeData: any[]
  allNinetyTradeData: any[]
}
const ModalTable = ({
  closeModal,
  click,
  tradeDataMain,
  totalVolMain,
  totalTradeMain,
  tradeDataOvm,
  totalVolOvm,
  totalTradeOvm,
  dailyTradeDataMain,
  dailyTradeDataOvm,
  tradeDataAll,
  sevenTradeDataMain,
  sevenTradeDataOvm,
  thirtyTradeDataMain,
  thirtyTradeDataOvm,
  ninetyTradeDataMain,
  ninetyTradeDataOvm,
  allDailyTradeData,
  allSevenTradeData,
  allThirtyTradeData,
  allNinetyTradeData,
  dailyVolMain,
  dailyVolOvm,
  dailyTradeMain,
  dailyTradeOvm,
  sevenVolMain,
  sevenVolOvm,
  sevenTradeMain,
  sevenTradeOvm,
  thirtyVolMain,
  thirtyVolOvm,
  thirtyTradeMain,
  thirtyTradeOvm,
  ninetyVolMain,
  ninetyVolOvm,
  ninetyTradeMain,
  ninetyTradeOvm
}: ModalTradeStats) => {

  const buttonMap = [
    { id: 0, title: "Daily" },
    { id: 1, title: "7 Day" },
    { id: 2, title: "30 Day" },
    { id: 3, title: "90 Day" },
    { id: 4, title: "Total To Date" },
  ];

  const [timeFrame, setTimeFrame] = useState(1);

  const handleActive = (buttons: any) => {
    setTimeFrame(buttons.id);
  };

  const ovmVolume = timeFrame === 0 ?
    formatMoney.format(dailyVolOvm) :
    timeFrame === 1 ?
      formatMoney.format(sevenVolOvm) :
      timeFrame === 2 ? formatMoney.format(thirtyVolOvm) :
        timeFrame === 3 ? formatMoney.format(ninetyVolOvm) :
          formatMoney.format(totalVolOvm)

  const ovmTrade = timeFrame === 0 ?
    formatNumber.format(dailyTradeOvm) :
    timeFrame === 1 ?
      formatNumber.format(sevenTradeOvm) :
      timeFrame === 2 ? formatNumber.format(thirtyTradeOvm) :
        timeFrame === 3 ? formatNumber.format(ninetyTradeOvm) :
          formatNumber.format(totalTradeOvm)

  const mainVolume = timeFrame === 0 ?
    formatMoney.format(dailyVolMain) :
    timeFrame === 1 ?
      formatMoney.format(sevenVolMain) :
      timeFrame === 2 ? formatMoney.format(thirtyVolMain) :
        timeFrame === 3 ? formatMoney.format(ninetyVolMain) :
          formatMoney.format(totalVolMain)

  const mainTrade = timeFrame === 0 ?
    formatNumber.format(dailyTradeMain) :
    timeFrame === 1 ?
      formatNumber.format(sevenTradeMain) :
      timeFrame === 2 ? formatNumber.format(thirtyTradeMain) :
        timeFrame === 3 ? formatNumber.format(ninetyTradeMain) :
          formatNumber.format(totalTradeMain)

  const allDailyVol = dailyVolOvm + dailyVolMain
  const allDailyTrade = dailyTradeOvm + dailyTradeMain
  const allSevenVol = sevenVolOvm + sevenVolMain
  const allSevenTrade = sevenTradeOvm + sevenTradeMain
  const allThirtyVol = thirtyVolOvm + thirtyVolMain
  const allThirtyTrade = thirtyTradeOvm + thirtyTradeMain
  const allNinetyVol = ninetyVolOvm + ninetyVolMain
  const allNinetyTrade = ninetyTradeOvm + ninetyTradeMain
  const allTotalVolume = totalVolOvm + totalVolMain
  const allTotalTrade = totalTradeMain + totalTradeOvm


  const allVolume = timeFrame === 0 ?
    formatMoney.format(allDailyVol) :
    timeFrame === 1 ?
      formatMoney.format(allSevenVol) :
      timeFrame === 2 ? formatMoney.format(allThirtyVol) :
        timeFrame === 3 ? formatMoney.format(allNinetyVol) :
          formatMoney.format(allTotalVolume)

  const allTrade = timeFrame === 0 ?
    formatNumber.format(allDailyTrade) :
    timeFrame === 1 ?
      formatNumber.format(allSevenTrade) :
      timeFrame === 2 ? formatNumber.format(allThirtyTrade) :
        timeFrame === 3 ? formatNumber.format(allNinetyTrade) :
          formatNumber.format(allTotalTrade)

  const ttInfo = `SNX Ecosystem Trading Activity. Updated every 15 minutes`


  return (
    <div className={styles.container}>
      <div>
        <div className={styles.topRow}>
          <div className={styles.titleRow}>
            <h3 className={styles.title}> Trading Activity</h3>
            <InfoTooltip content={ttInfo}>

              <span
                className={styles.icon}
              >
                <RiInformationFill />
              </span>
            </InfoTooltip>
          </div>
          <div className={styles.modalButtonWrap}>
            <span className={styles.modalButtonText}>Close</span>
            <button
              className={styles.modalButton}
              onClick={closeModal}
            >
              <RiFullscreenLine size={16} />
            </button>
          </div>
        </div>
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
        <div>
        </div>
        <ModalTradeTable
          click={click}
          tableId={timeFrame}
          totalTradeStatsAll={tradeDataAll}
          totalTradeStatsMain={tradeDataMain}
          totalTradeStatsOvm={tradeDataOvm}
          dailyTradeStatsMain={dailyTradeDataMain}
          dailyTradeStatsOvm={dailyTradeDataOvm}
          sevenTradeStatsMain={sevenTradeDataMain}
          sevenTradeStatsOvm={sevenTradeDataOvm}
          thirtyTradeStatsMain={thirtyTradeDataMain}
          thirtyTradeStatsOvm={thirtyTradeDataOvm}
          ninetyTradeStatsMain={ninetyTradeDataMain}
          ninetyTradeStatsOvm={ninetyTradeDataOvm}
          dailyTradeStatsAll={allDailyTradeData}
          sevenTradeStatsAll={allSevenTradeData}
          thirtyTradeStatsAll={allThirtyTradeData}
          ninetyTradeStatsAll={allNinetyTradeData}

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

export default ModalTable;
