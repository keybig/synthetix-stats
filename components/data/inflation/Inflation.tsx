import styles from "./Inflation.module.css";
import styled from "styled-components";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import useGetStake from "../../../hooks/useGetStake";

interface Inflation {
  currentReward: number;
  allTimeInflation: number;
  inflationData: any[];
}

const Inflation = ({
  currentReward,
  allTimeInflation,
  inflationData
}:Inflation) => {

  return (
    <div className={styles.wrapper}>
      <div>
        <h3>Inflation Fees (SNX Rewards)</h3>
        <h5 className={styles.subtitle}>Current Epoch</h5>
        <p className={styles.currentEpoch}>{currentReward}</p>
        <h5 className={styles.subtitle}>Up to date</h5>
        <p className={styles.toDate}>{allTimeInflation}</p>
      </div>

      <div className={styles.chartWrapper}>
        <ResponsiveContainer width={"100%"} height={330}>
          <LineChart data={inflationData}>
            <Line
              type="monotone"
              dataKey="snx_rewards"
              stroke="#8884d8"
              strokeWidth={3}
            />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Inflation;
