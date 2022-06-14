import styles from "./TradeFee.module.css";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useState } from "react";
import TradeFeeTable from "./TradeFeeTable";

interface Props  {
  tradeFeeArr: any[];
  currentFeeData: any[];
  currentFeeSum: number;
  totalFeeSum: number;
  totalIssuedSynth: number;

}

const TradeFee = ({
  tradeFeeArr,
  currentFeeData,
  currentFeeSum,
  totalFeeSum,
  totalIssuedSynth
}:Props) => {
 
  const buttonMap = [
    { id: 1, title: "Current Epoch" },
    { id: 2, title: "Total To Date" },
  ];

  const [click, setClick] = useState<number>(1);
 

  const handleActive = (buttons: any) => {
    setClick(buttons.id);
  };

  const current = [
    { name: "Wrappers", value: 400 },
    { name: "Protocol", value: 300 },
    { name: "Protocol", value: 300 },
    { name: "Other", value: 200 },
    { name: "Protocol", value: 100 },
  ];

  const total = [
    { name: "Wrappers", value: 2100 },
    { name: "Protocol", value: 500 },
    { name: "Protocol", value: 200 },
    { name: "Other", value: 200 },
    { name: "Protocol", value: 200 },
  ];

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
              buttonMap.id === click ? styles.current : styles.inactive
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
                data={click === 1 ? currentFeeData : tradeFeeArr}
                outerRadius={"80%"}
              >
                {total.map((entry, index) => (
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
            tableId={click}
            tradeFeeArr={tradeFeeArr}
            totalFeeSum={totalFeeSum}
            currentFeeData={currentFeeData}
            currentFeeSum={currentFeeSum}
             />
            
        </div>
      </div>

      <div>
        <p className={styles.totalsynthsupply}>Total Synth Supply</p>
        <p className={styles.totalsupplyamount}>{totalIssuedSynth}</p>
      </div>
    </div>
  );
};

export default TradeFee;
