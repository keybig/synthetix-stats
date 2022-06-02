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


const Inflation = () => {
  const { currentReward } = useGetStake();
  const { allTimeInflation } = useGetStake();
  const { inflationData } = useGetStake();

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

export const Wrapper = styled.div`
  grid-area: inflation;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    linear-gradient(73.6deg, #8e2de2 2.11%, #ed1eff 90.45%);
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  padding: 30px 50px 30px 30px;
  border: 2px solid #ed1eff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  line-height: normal;
  font-weight: 700;
  letter-spacing: 0px;
  text-align: left;
  flex-wrap: wrap;
  @media (max-width: 960px) {
    padding: 2rem 1rem;
  }
`;

const Content = styled.div``;

const Chart = styled.div``;

const SubTitle = styled.h5`
  color: #828295;
  font-family: Arial, Helvetica, sans-serif;

  @media (max-width: 960px) {
    padding: 1rem 0;
  }
`;

const CurrentEpoch = styled.p`
  color: #ed1eff;
  font-size: 2rem;
`;

const ToDate = styled.p`
  color: #ffffff;
  font-size: 2rem;
`;
const ChartWrapper = styled.div`
  width: 50%;
  flex-grow: 2;
`;
