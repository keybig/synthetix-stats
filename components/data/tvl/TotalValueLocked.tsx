import styles from "./TotalValueLocked.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { useMemo, useState } from "react";

interface TVL {
  dayDataOvm: any[];
  weekDataOvm: any[];
  monthDataOvm: any[];
  dayDataMain: any[];
  weekDataMain: any[];
  monthDataMain: any[];
  totalDebtOvm: number;
  totalDebtMain: number;
  totalWrapperOvm: number;
  totalWrapperMain: number;
}


const TotalValueLocked = ({
  click,
  dayDataOvm, 
  dayDataMain,
  weekDataOvm,
  weekDataMain,
  monthDataOvm,
  monthDataMain,
  totalDebtOvm,
  totalDebtMain,
  totalWrapperOvm,
  totalWrapperMain
}:TVL) => {
  const buttonMap = [
    { id: 1, title: "One Day" },
    { id: 2, title: "One Week" },
    { id: 3, title: "One Month" },
  ];

  const [timeFrame, setTimeFrame] = useState(1);

  const handleActive = (buttons: any) => {
    setTimeFrame(buttons.id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.info}>
          <h3 className={styles.tvl}>Total Value Locked</h3>
          <p className={styles.values}>{totalDebtOvm + totalWrapperOvm}</p>
        </div>

        <div className={styles.selectors}>
          {buttonMap.map((buttonMap) => (
            <button
              key={buttonMap.id}
              onClick={() => handleActive(buttonMap)}
              className={
                buttonMap.id === timeFrame ? styles.button : styles.inactive
              }
            >
              {buttonMap.title}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.responsive}>
        <ResponsiveContainer>
          <AreaChart data={timeFrame === 1 ? dayDataOvm : timeFrame === 2 ? weekDataOvm : monthDataOvm}>
            <XAxis dataKey="date" fontSize={14} />

            <Tooltip />
            <Area
              type="monotone"
              dataKey="debt"
              stackId="1"
              stroke="#41C79D"
              fill="#41C79D"
            />
            <Area
              type="monotone"
              dataKey="wrapper"
              stackId="1"
              stroke="#f506e1"
              fill="#f506e1"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.bottom}>
        <div className={styles.debtPool}>
          <h5 className={styles.stakingColor}>Staking Debt Pool</h5>
          <p>{totalDebtOvm}</p>
        </div>

        <div className={styles.wrapper}>
          <h5 className={styles.wrapperColor}>Wrappers</h5>
          <p>{totalWrapperOvm}</p>
        </div>
      </div>
    </div>
  );
};

export default TotalValueLocked;
