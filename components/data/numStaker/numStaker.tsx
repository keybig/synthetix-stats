import styles from "./numStaker.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";



interface NumStaker {
      currentStakerAll: number;
      currentStakerOvm: number;
      currentStakerMain: number;
      dayAll: any[];
      dayMain: any[];
      dayOvm: any[];
      weekAll: any[];
      weekMain: any[];
      weekOvm: any[];
      monthAll: any[];
      monthMain: any[];
      monthOvm: any[];
      click: number;
}
const NumStaker = ({
      click,
      currentStakerAll,
      currentStakerOvm,
      currentStakerMain,
      dayAll,
      dayMain,
      dayOvm,
      weekAll,
      weekMain,
      weekOvm,
      monthAll,
      monthMain,
      monthOvm
}:NumStaker) => {


  const buttonMap = [
    { id: 1, title: "One Day" },
    { id: 2, title: "One Week" },
    { id: 3, title: "One Month" },
    //{ id: 4, title: "one Year" }
  ];

  const [timeFrame, setTimeFrame] = useState(1);

  const handleActive = (buttons: any) => {
    setTimeFrame(buttons.id);
  };

  const ovmData = timeFrame === 1 ? dayOvm : timeFrame === 2 ? weekOvm : monthOvm
  const mainData = timeFrame === 1 ? dayMain : timeFrame === 2 ? weekMain : monthMain
  const allData = timeFrame === 1 ? dayAll : timeFrame === 2 ? weekAll : monthAll
  

  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <div>
          <h3>Number of Individual Stakers</h3>
          <p className={styles.value}>{click === 1 ? currentStakerMain : click === 10 ? currentStakerOvm : currentStakerAll}</p>
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

      <ResponsiveContainer height={300} width="100%">
        <LineChart data={click === 1 ? mainData : click === 10 ? ovmData : allData}>
          <Line
            type="monotone"
            dataKey="stakers"
            stroke="#8884d8"
            strokeWidth={2}
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NumStaker;
