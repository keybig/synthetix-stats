import styles from "./Inflation.module.css";
import styled from "styled-components";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatNumber } from "../../../constants/format";

interface Inflation {
  click: number;
  currentRewardOvm: number;
  currentRewardMain: number;
  allTimeInflationOvm: number;
  allTimeInflationMain: number;
  inflationDataOvm: any[];
  inflationDataMain: any[];
}

const Inflation = ({
  click,
  currentRewardMain,
  currentRewardOvm,
  allTimeInflationMain,
  allTimeInflationOvm,
  inflationDataMain,
  inflationDataOvm
}:Inflation) => {

  const allReward = currentRewardMain + currentRewardOvm
  const allTime = allTimeInflationMain + allTimeInflationOvm
  console.log(currentRewardMain)

  return (
    <div className={styles.wrapper}>
      <div>
        <h3 className={styles.inflationTitle}>Inflation Fees (SNX Rewards)</h3>
        <h5 className={styles.subtitle}>Current Epoch</h5>
        <p className={styles.currentEpoch}>{click === 1 ? formatNumber.format(currentRewardMain) : click === 10 ? formatNumber.format(currentRewardOvm) : formatNumber.format(allReward)}</p>
        <h5 className={styles.subtitle}>Up to date</h5>
        <p className={styles.toDate}>{click === 1 ? formatNumber.format(allTimeInflationMain) : click === 10 ? formatNumber.format(allTimeInflationOvm) : formatNumber.format(allTime)}</p>
      </div>

      <div className={styles.chartWrapper}>
        <ResponsiveContainer width={"99%"} height={200}>
          <LineChart data={click === 1 ? inflationDataMain : inflationDataOvm}>
            <Line
              type="monotone"
              dataKey="snx_rewards"
              stroke="#8884d8"
              strokeWidth={3}
            />
            <Tooltip />
            <YAxis domain={["dataMin - 15000", "dataMax + 15000"]} hide={true}/>
            <XAxis dataKey={"date"} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Inflation;
