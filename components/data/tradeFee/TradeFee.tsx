import styles from "./TradeFee.module.css";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useState } from "react";
import TradeFeeTable from "./TradeFeeTable";
import { formatNumber } from "../../../constants/format";

interface Props  {
  currentFeeOvm: any[];
  currentFeeMain: any[];
  currentFeeAll: any[];
  totalFeeOvm: any[];
  totalFeeMain: any[];
  totalFeeAll: any[]
  totalIssuedSynth: number;
  click: number;
  ovmTotalSynth: number;
  mainTotalSynth: number;
  allTotalSynth: number;
}

const TradeFee = ({
  click,
  currentFeeOvm,
  currentFeeAll,
  currentFeeMain,
  totalFeeAll,
  totalFeeMain,
  totalFeeOvm,
  mainTotalSynth,
  ovmTotalSynth,
  allTotalSynth
}:Props) => {
 
  const buttonMap = [
    { id: 1, title: "Current Epoch" },
    { id: 2, title: "Total To Date" },
  ];

  const [timeFrame, setTimeFrame] = useState<number>(1);
 

  const handleActive = (buttons: any) => {
    setTimeFrame(buttons.id);
  };

  const ovmData = timeFrame === 1 ? currentFeeOvm : totalFeeOvm
  const mainData = timeFrame === 1 ? currentFeeMain : totalFeeMain
  const allData = timeFrame === 1 ? currentFeeAll : totalFeeAll

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
                data={click === 1 ? mainData : click === 10 ? ovmData : allData}
                outerRadius={"80%"}
              >
                {mainData.map((entry, index) => (
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
            currentFeeAll={currentFeeAll}
            currentFeeMain={currentFeeMain}
            currentFeeOvm={currentFeeOvm}
            totalFeeAll={totalFeeAll}
            totalFeeOvm={totalFeeOvm}
            totalFeeMain={totalFeeMain}
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
