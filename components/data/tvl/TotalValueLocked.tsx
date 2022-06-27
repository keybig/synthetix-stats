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
import { formatMoney } from "../../../constants/format";

interface TVL {
  dayDataOvm: any[];
  dayDataAll: any[];
  weekDataOvm: any[];
  weekDataAll: any[];
  monthDataOvm: any[];
  monthDataAll: any[];
  dayDataMain: any[];
  weekDataMain: any[];
  monthDataMain: any[];
  totalDebtOvm: number;
  totalDebtMain: number;
  totalWrapperOvm: number;
  totalWrapperMain: number;
  click:number;
}


const TotalValueLocked = ({
  click,
  dayDataOvm, 
  dayDataMain,
  dayDataAll,
  weekDataOvm,
  weekDataMain,
  weekDataAll,
  monthDataOvm,
  monthDataMain,
  monthDataAll,
  totalDebtOvm,
  totalDebtMain,
  totalWrapperOvm,
  totalWrapperMain,
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

  // click === 1 ? mainnet : click === 10 ? optimism : click === 21 ? all networks

  const totalValueLockedOvm = formatMoney.format(totalDebtOvm + totalWrapperOvm)
  const totalValueLockedMain = formatMoney.format(totalDebtMain + totalWrapperMain)
  const totalValueLockedAll = formatMoney.format((totalDebtMain + totalDebtOvm) + (totalWrapperMain + totalWrapperOvm))

  const allDebt = formatMoney.format(totalDebtMain + totalDebtOvm)
  const allWrapper = formatMoney.format(totalWrapperMain + totalWrapperOvm)
  const ovmDebt = formatMoney.format(totalDebtOvm)
  const ovmWrapper = formatMoney.format(totalWrapperOvm)
  const mainDebt = formatMoney.format(totalDebtMain)
  const mainWrapper = formatMoney.format(totalWrapperMain)

  const ovmData = timeFrame === 1 ? dayDataOvm : timeFrame === 2 ? weekDataOvm : monthDataOvm
  const mainData = timeFrame === 1 ? dayDataMain : timeFrame === 2 ? weekDataMain : monthDataMain
  const allData = timeFrame === 1 ? dayDataAll : timeFrame === 2 ? weekDataAll : monthDataAll
  
  

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div>
          <h3 className={styles.tvl}>Total Value Locked</h3>
          <p className={styles.values}>{click === 1 ? totalValueLockedMain : click === 10 ? totalValueLockedOvm : totalValueLockedAll}</p>
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
          <AreaChart data={click === 1 ? mainData : click === 10 ? ovmData : allData}>
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
          <p className={styles.debtWrapVal}>{click === 1 ? mainDebt : click === 10 ? ovmDebt : allDebt}</p>
        </div>

        <div className={styles.wrapper}>
          <h5 className={styles.wrapperColor}>Wrappers</h5>
          <p className={styles.debtWrapVal}>{click === 1 ? mainWrapper : click === 10 ? ovmWrapper : allWrapper}</p>
        </div>
      </div>
    </div>
  );
};

export default TotalValueLocked;
