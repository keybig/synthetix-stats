import styles from "./Inflation.module.css";
import styled from "styled-components";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

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

  return (
    <div className={styles.wrapper}>
      <div>
        <h3>Inflation Fees (SNX Rewards)</h3>
        <h5 className={styles.subtitle}>Current Epoch</h5>
        <p className={styles.currentEpoch}>{click === 1 ? currentRewardMain : currentRewardOvm}</p>
        <h5 className={styles.subtitle}>Up to date</h5>
        <p className={styles.toDate}>{click === 1 ? allTimeInflationMain : allTimeInflationOvm}</p>
      </div>

      <div className={styles.chartWrapper}>
        <ResponsiveContainer width={"100%"} height={330}>
          <LineChart data={click === 1 ? inflationDataMain : inflationDataOvm}>
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
