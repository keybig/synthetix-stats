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
import useGetTVL from "../../../hooks/useGetTVL";
import useGetTime from "../../../hooks/useGetTime";

const TotalValueLocked = () => {
  const buttonMap = [
    { id: 1, title: "One Day" },
    { id: 2, title: "One Week" },
    { id: 3, title: "One Month" },
  ];

  const [click, setClick] = useState(1);

  const { dayData } = useGetTVL();
  const { weekData } = useGetTVL();
  const { monthData } = useGetTVL();
  const { totalDebt } = useGetTVL();
  const { totalWrapper } = useGetTVL();
  const { totalValueLocked } = useGetTVL();




  const handleActive = (buttons: any) => {
    setClick(buttons.id);
  };


  

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.info}>
          <h3 className={styles.tvl}>Total Value Locked</h3>
          <p className={styles.values}>{totalValueLocked}</p>
        </div>

        <div className={styles.selectors}>
          {buttonMap.map((buttonMap) => (
            <button
              key={buttonMap.id}
              onClick={() => handleActive(buttonMap)}
              className={
                buttonMap.id === click ? styles.button : styles.inactive
              }
            >
              {buttonMap.title}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.responsive}>
        <ResponsiveContainer>
          <AreaChart data={click === 1 ? dayData : click === 2 ? weekData : monthData}>
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
          <p>{totalDebt}</p>
        </div>

        <div className={styles.wrapper}>
          <h5 className={styles.wrapperColor}>Wrappers</h5>
          <p>{totalWrapper}</p>
        </div>
      </div>
    </div>
  );
};

export default TotalValueLocked;
