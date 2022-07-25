import styles from "./TradeFee.module.css";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useState } from "react";
import TradeFeeTable from "./TradeFeeTable";
import { formatMoney } from "../../../constants/format";
import CustomToolTip from './tradeFeeTT'
import Modal from "../../modal/Modal";
import ModalFee from "./modal/ModalFee";
import { RiInformationFill } from "react-icons/ri"
import { RiFullscreenLine } from "react-icons/ri"
import InfoTooltip from '../../infoToolTip/InfoTooltip'


interface Props {
  allDailyFee: any[];
  allSevenFee: any[];
  allThirtyFee: any[];
  allNinetyFee: any[];
  totalFeeOvm: any[];
  totalFeeMain: any[];
  totalFeeAll: any[];
  dailyFeeOvm: any[];
  dailyFeeMain: any[];
  sevenFeeOvm: any[];
  sevenFeeMain: any[];
  thirtyFeeOvm: any[];
  thirtyFeeMain: any[];
  ninetyFeeOvm: any[]
  ninetyFeeMain: any[]
  click: number;
  feeOvm: number;
  feeMain: number;
  feeAll: number;
  dailyFeeCollectMain: number;
  dailyFeeCollectOvm: number;
  allDailyFeeCollect: number;
  sevenFeeCollectMain: number;
  sevenFeeCollectOvm: number;
  allSevenFeeCollect: number;
  thirtyFeeCollectMain: number;
  thirtyFeeCollectOvm: number;
  allThirtyFeeCollect: number;
  ninetyFeeCollectMain: number;
  ninetyFeeCollectOvm: number;
  allNinetyFeeCollect: number;
}

const TradeFee = ({
  click,
  totalFeeAll,
  totalFeeMain,
  totalFeeOvm,
  dailyFeeMain,
  dailyFeeOvm,
  sevenFeeMain,
  sevenFeeOvm,
  thirtyFeeMain,
  thirtyFeeOvm,
  ninetyFeeMain,
  ninetyFeeOvm,
  allDailyFee,
  allSevenFee,
  allThirtyFee,
  allNinetyFee,
  feeAll,
  feeMain,
  feeOvm,
  dailyFeeCollectMain,
  dailyFeeCollectOvm,
  allDailyFeeCollect,
  sevenFeeCollectMain,
  sevenFeeCollectOvm,
  allSevenFeeCollect,
  thirtyFeeCollectMain,
  thirtyFeeCollectOvm,
  allThirtyFeeCollect,
  ninetyFeeCollectMain,
  ninetyFeeCollectOvm,
  allNinetyFeeCollect
}: Props) => {

  const buttonMap = [
    { id: 0, title: "Daily" },
    { id: 1, title: "7 Day" },
    { id: 2, title: "30 Day" },
    { id: 3, title: "90 Day" },
    { id: 4, title: "Total To Date" },
  ];

  const [timeFrame, setTimeFrame] = useState<number>(1);

  //modal
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false)
  }


  const handleActive = (buttons: any) => {
    setTimeFrame(buttons.id);
  };



  const ovmFeeData = timeFrame === 0 ?
    dailyFeeOvm :
    timeFrame === 1 ?
      sevenFeeOvm :
      timeFrame === 2 ?
        thirtyFeeOvm :
        timeFrame === 3 ?
          ninetyFeeOvm :
          totalFeeOvm

  const mainFeeData = timeFrame === 0 ?
    dailyFeeMain :
    timeFrame === 1 ?
      sevenFeeMain :
      timeFrame === 2 ?
        thirtyFeeMain :
        timeFrame === 3 ?
          ninetyFeeMain :
          totalFeeMain

  const allFeeData = timeFrame === 0 ?
    allDailyFee :
    timeFrame === 1 ?
      allSevenFee :
      timeFrame === 2 ?
        allThirtyFee :
        timeFrame === 3 ?
          allNinetyFee :
          totalFeeAll


  const pieData = click === 1 ? mainFeeData : click === 10 ? ovmFeeData : allFeeData

  const ttInfo = `Fees Earned by SNX Protocol. Updated every 15 minutes.`

  const ovmFeeTotal = timeFrame === 0 ?
    dailyFeeCollectOvm :
    timeFrame === 1 ?
      sevenFeeCollectOvm :
      timeFrame === 2 ?
        thirtyFeeCollectOvm :
        timeFrame === 3 ?
          ninetyFeeCollectOvm :
          feeOvm

  const mainFeeTotal = timeFrame === 0 ?
    dailyFeeCollectMain :
    timeFrame === 1 ?
      sevenFeeCollectMain :
      timeFrame === 2 ?
        thirtyFeeCollectMain :
        timeFrame === 3 ?
          ninetyFeeCollectMain :
          feeMain

  const allFeeTotal = timeFrame === 0 ?
    allDailyFeeCollect :
    timeFrame === 1 ?
      allSevenFeeCollect :
      timeFrame === 2 ?
        allThirtyFeeCollect :
        timeFrame === 3 ?
          allNinetyFeeCollect :
          feeAll

  const totalFeeData = click === 1 ?
    formatMoney.format(mainFeeTotal) :
    click === 10 ?
      formatMoney.format(ovmFeeTotal) :
      formatMoney.format(allFeeTotal)

  return (
    <div className={styles.wrapper}>

      <div className={styles.topRow}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>Trading Fees (sUSd Rewards)</h3>
          <InfoTooltip content={ttInfo}>

            <span
              className={styles.icon}
            >
              <RiInformationFill />
            </span>
          </InfoTooltip>
        </div>
        <div className={styles.modalButtonWrap}>
          <span className={styles.modalButtonText}>Expand</span>

          <button
            className={styles.modalButton}
            onClick={() => setModalOpen(true)}
          >
            <RiFullscreenLine size={16} />

          </button>
        </div>

        <Modal handleClose={closeModal} isOpen={modalOpen}>

          <ModalFee
            closeModal={closeModal}
            click={click}
            totalFeeAll={totalFeeAll}
            totalFeeMain={totalFeeMain}
            totalFeeOvm={totalFeeOvm}
            dailyFeeMain={dailyFeeMain}
            dailyFeeOvm={dailyFeeOvm}
            sevenFeeMain={sevenFeeMain}
            sevenFeeOvm={sevenFeeOvm}
            thirtyFeeMain={thirtyFeeMain}
            thirtyFeeOvm={thirtyFeeOvm}
            ninetyFeeMain={ninetyFeeMain}
            ninetyFeeOvm={ninetyFeeOvm}
            allDailyFee={allDailyFee}
            allSevenFee={allSevenFee}
            allThirtyFee={allThirtyFee}
            allNinetyFee={allNinetyFee}
            feeAll={feeAll}
            feeMain={feeMain}
            feeOvm={feeOvm}
            dailyFeeCollectOvm={dailyFeeCollectOvm}
            dailyFeeCollectMain={dailyFeeCollectMain}
            allDailyFeeCollect={allDailyFeeCollect}
            sevenFeeCollectMain={sevenFeeCollectMain}
            sevenFeeCollectOvm={sevenFeeCollectOvm}
            allSevenFeeCollect={allSevenFeeCollect}
            thirtyFeeCollectMain={thirtyFeeCollectMain}
            thirtyFeeCollectOvm={thirtyFeeCollectOvm}
            allThirtyFeeCollect={allThirtyFeeCollect}
            ninetyFeeCollectMain={ninetyFeeCollectMain}
            ninetyFeeCollectOvm={ninetyFeeCollectOvm}
            allNinetyFeeCollect={allNinetyFeeCollect}
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

      <div className={styles.chart}>
        <div className={styles.pieWrap}>
          <ResponsiveContainer>
            <PieChart>

              <Pie
                dataKey="value"
                nameKey="name"
                isAnimationActive={false}
                data={pieData}
                outerRadius={"99%"}
                cx={"50%"}
                cy={"50%"}
              >

                {
                  pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        entry.name === "KWENTA" ?
                          "#FFD75C" :
                          entry.name === "CURVE" ?
                            "#ED1EFF" :
                            entry.name === "1INCH" ?
                              "#00D1FF" :
                              entry.name === "LYRA" ?
                                "#31D8A4" :
                                entry.name === "DHEDGE" ?
                                  "#FC8738" :
                                  entry.name === "SX" ?
                                    "#0b03fc" :
                                    entry.name === "ENZYME" ?
                                      "#fc03e3" :
                                      entry.name === "ibAMM" ?
                                        "#20fc03" :
                                        entry.name === "YEARN" ?
                                          "#03fca5" :
                                          entry.name === "SADDLE" ?
                                            "#9403fc" :
                                            entry.name === "OTHER" ?
                                              "#21cdfc" :
                                              entry.name === "0" ?
                                                "#fc0303" :
                                                "FF8042"}
                      fillOpacity={0.3}
                      stroke={
                        entry.name === "KWENTA" ?
                          "#FFD75C" :
                          entry.name === "CURVE" ?
                            "#ED1EFF" :
                            entry.name === "1INCH" ?
                              "#00D1FF" :
                              entry.name === "LYRA" ?
                                "#31D8A4" :
                                entry.name === "DHEDGE" ?
                                  "#FC8738" :
                                  entry.name === "SX" ?
                                    "#0b03fc" :
                                    entry.name === "ENZYME" ?
                                      "#fc03e3" :
                                      entry.name === "ibAMM" ?
                                        "#20fc03" :
                                        entry.name === "YEARN" ?
                                          "#03fca5" :
                                          entry.name === "SADDLE" ?
                                            "#9403fc" :
                                            entry.name === "OTHER" ?
                                              "#21cdfc" :
                                              entry.name === "0" ?
                                                "#fc0303" :
                                                "FF8042"
                      }
                      strokeWidth={2}
                      strokeOpacity={1}
                      style={{
                        filter: `drop-shadow(0px 0px 7px ${entry.name === "KWENTA" ?
                          "#FFD75C" :
                          entry.name === "CURVE" ?
                            "#ED1EFF" :
                            entry.name === "1INCH" ?
                              "#00D1FF" :
                              entry.name === "LYRA" ?
                                "#31D8A4" :
                                entry.name === "DHEDGE" ?
                                  "#FC8738" :
                                  entry.name === "SX" ?
                                    "#0b03fc" :
                                    entry.name === "ENZYME" ?
                                      "#fc03e3" :
                                      entry.name === "ibAMM" ?
                                        "#20fc03" :
                                        entry.name === "YEARN" ?
                                          "#03fca5" :
                                          entry.name === "SADDLE" ?
                                            "#9403fc" :
                                            entry.name === "OTHER" ?
                                              "#21cdfc" :
                                              entry.name === "0" ?
                                                "#fc0303" :
                                                "FF8042"
                          }`
                      }}


                    />
                  ))
                }
              </Pie>
              <Tooltip content={<CustomToolTip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className={styles.chartkey}>
          <TradeFeeTable
            click={click}
            tableId={timeFrame}
            totalFeeAll={totalFeeAll}
            totalFeeOvm={totalFeeOvm}
            totalFeeMain={totalFeeMain}
            dailyFeeMain={dailyFeeMain}
            dailyFeeOvm={dailyFeeOvm}
            sevenFeeMain={sevenFeeMain}
            sevenFeeOvm={sevenFeeOvm}
            thirtyFeeMain={thirtyFeeMain}
            thirtyFeeOvm={thirtyFeeOvm}
            ninetyFeeMain={ninetyFeeMain}
            ninetyFeeOvm={ninetyFeeOvm}
            allDailyFee={allDailyFee}
            allSevenFee={allSevenFee}
            allThirtyFee={allThirtyFee}
            allNinetyFee={allNinetyFee}
          />
        </div>
      </div>

      <div>
        <p className={styles.totalsynthsupply}>Total Fee Earned</p>
        <p className={styles.totalsupplyamount}>{totalFeeData}</p>
      </div>
    </div>
  );
};

export default TradeFee;
