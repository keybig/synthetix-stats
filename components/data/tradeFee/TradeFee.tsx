import styles from "./TradeFee.module.css";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useState } from "react";
import TradeFeeTable from "./TradeFeeTable";
import { formatNumber } from "../../../constants/format";

interface Props  {
  allDailyFee: any[]
  allSevenFee: any[]
  allThirtyFee: any[]
  allNinetyFee: any[]
  totalFeeOvm: any[];
  totalFeeMain: any[];
  totalFeeAll: any[]
  dailyFeeOvm: any[]
  dailyFeeMain: any[]
  sevenFeeOvm: any[]
  sevenFeeMain: any[]
  thirtyFeeOvm: any[]
  thirtyFeeMain: any[]
  ninetyFeeOvm: any[]
  ninetyFeeMain: any[]
  totalIssuedSynth: number;
  click: number;
  ovmTotalSynth: number;
  mainTotalSynth: number;
  allTotalSynth: number;
}

const TradeFee = ({
  click,
  totalFeeAll,
  totalFeeMain,
  totalFeeOvm,
  mainTotalSynth,
  ovmTotalSynth,
  allTotalSynth,
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
  allNinetyFee
}:Props) => {
 
  const buttonMap = [
    { id: 0, title: "Daily" },
    { id: 1, title: "7 Day" },
    { id: 2, title: "30 Day" },
    { id: 3, title: "90 Day" },
    { id: 4, title: "Total To Date" },
  ];

  const [timeFrame, setTimeFrame] = useState<number>(1);
 

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


  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#f60ce6"];

  return (
    <div className={styles.wrapper}>
      <h3>Trading Fees (sUSd Rewards)</h3>

      <div className={styles.content}>
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
        <div className={styles.piewrap}>
          <ResponsiveContainer height={300}>
            <PieChart>
              <Pie
                dataKey="value"
                nameKey="name"
                isAnimationActive={false}
                data={click === 1 ? mainFeeData : click === 10 ? ovmFeeData : allFeeData}
                outerRadius={"80%"}
              >
             {mainFeeData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
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
        <p className={styles.totalsynthsupply}>Total Synth Supply</p>
        <p className={styles.totalsupplyamount}>{click === 1 ? formatNumber.format(mainTotalSynth) : click === 10 ? formatNumber.format(ovmTotalSynth) : formatNumber.format(allTotalSynth)}</p>
      </div>
    </div>
  );
};

export default TradeFee;
