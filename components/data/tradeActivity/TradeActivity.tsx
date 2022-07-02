import styles from "./TradeActivity.module.css";
import { useState, useMemo } from "react";
import TradeTable from "./TradeTable";
import { formatMoney, formatNumber } from "../../../constants/format";
import Modal from '../../modal/Modal'
import ModalTable from './modal/ModalTable'
import {RiInformationFill} from "react-icons/ri"
import {RiFullscreenLine} from "react-icons/ri"
import {MdFullscreen} from "react-icons/md"
import InfoTooltip from '../../infoToolTip/InfoTooltip'

interface TradeStats {
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


  currentTradeDataAll: any[]
  currentTradeDataMain: any[]
  currentTradeDataOvm: any[]
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


  currentTotalVolMain: number
  currentTotalVolOvm: number


  currentTotalTradeMain: number
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
  dailyTradeDataMain,
  currentTotalVolMain,
  currentTotalTradeMain,
  dailyTradeDataOvm,
  currentTotalVolOvm,
  currentTotalTradeOvm,
  currentTradeDataAll,
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
}: TradeStats) => {

  const buttonMap = [
    { id: 0, title: "Daily" },
    { id: 1, title: "7 Day" },
    { id: 2, title: "30 Day" },
    { id: 3, title: "90 Day" },
    { id: 4, title: "Total To Date" },
  ];

  const [timeFrame, setTimeFrame] = useState(1);

  //modalnew
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false)
  }

  const close = () => {

    setModalOpen(false);
    console.log('close')

  }
  const open = () => {
    setModalOpen(true);
    console.log('open')
  }
  //
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
      <div className={styles.topRow}>
      <div className={styles.titleRow}>
      <h3 className={styles.title}> Trading Activity</h3>
      <InfoTooltip content={ttInfo}>

      <span 
        className={styles.icon}
        onMouseEnter={()=>console.log("mouse enter")}
        onMouseLeave={()=>console.log("mouse left")}
        >
      <RiInformationFill/>
      </span>
      </InfoTooltip>
      </div>
      <button 
        className={styles.modalButton}
        onClick={()=> setModalOpen(true)}
        >
            <RiFullscreenLine size={16}/>
      </button>
     
      <Modal handleClose={closeModal} isOpen={modalOpen}>


        <ModalTable 
          closeModal={closeModal}
          click={click}
          tradeDataMain={tradeDataMain}
          totalVolMain={totalVolMain}
          totalTradeMain={totalTradeMain}
          tradeDataOvm={tradeDataOvm}
          totalVolOvm={totalVolOvm}
          totalTradeOvm={totalTradeOvm}
          dailyTradeDataMain={dailyTradeDataMain}
          currentTotalVolMain={currentTotalVolMain}
          currentTotalTradeMain={currentTotalTradeMain}
          dailyTradeDataOvm={dailyTradeDataOvm}
          currentTotalVolOvm={currentTotalVolOvm}
          currentTotalTradeOvm={currentTotalTradeOvm}
          currentTradeDataAll={currentTradeDataAll}
          tradeDataAll={tradeDataAll}
          sevenTradeDataMain={sevenTradeDataMain}
          sevenTradeDataOvm={sevenTradeDataOvm}
          thirtyTradeDataMain={thirtyTradeDataMain}
          thirtyTradeDataOvm={thirtyTradeDataOvm}
          ninetyTradeDataMain={ninetyTradeDataMain}
          ninetyTradeDataOvm={ninetyTradeDataOvm}
          allDailyTradeData={allDailyTradeData}
          allSevenTradeData={allSevenTradeData}
          allThirtyTradeData={allThirtyTradeData}
          allNinetyTradeData={allNinetyTradeData}
          dailyVolMain={dailyVolMain}
          dailyVolOvm={dailyVolOvm}
          dailyTradeMain={dailyTradeMain}
          dailyTradeOvm={dailyTradeOvm}
          sevenVolMain={sevenVolMain}
          sevenVolOvm={sevenVolOvm}
          sevenTradeMain={sevenTradeMain}
          sevenTradeOvm={sevenTradeOvm}
          thirtyVolMain={thirtyVolMain}
          thirtyVolOvm={thirtyVolOvm}
          thirtyTradeMain={thirtyTradeMain}
          thirtyTradeOvm={thirtyTradeOvm}
          ninetyVolMain={ninetyVolMain}
          ninetyVolOvm={ninetyVolOvm}
          ninetyTradeMain={ninetyTradeMain}
          ninetyTradeOvm={ninetyTradeOvm}
          currentTradeDataMain={currentTradeDataAll}
          currentTradeDataOvm={currentTradeDataAll}

          />


      
        </Modal>
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
        <TradeTable
          click={click}
          modal={modalOpen}
          tableId={timeFrame}
          totalTradeStatsAll={tradeDataAll}
          totalTradeStatsMain={tradeDataMain}
          totalTradeStatsOvm={tradeDataOvm}
          currentTradeStatsAll={currentTradeDataAll}
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
          mainTrade={mainTrade}
          ovmTrade={ovmTrade}
          allTrade={allTrade}
          mainVolume={mainVolume}
          ovmVolume={ovmVolume}
          allVolume={allVolume}

        />
      </div>
      
    </div>
  );
};

export default TradeActivity;
