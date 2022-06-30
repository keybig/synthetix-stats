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
import { formatNumber } from "../../../constants/format";
import CustomToolTip from './tooltip'




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

  const allStaker = formatNumber.format(currentStakerAll)
  const ovmStaker = formatNumber.format(currentStakerOvm)
  const mainStaker = formatNumber.format(currentStakerMain)

  const buttonMap = [
    { id: 1, title: "Daily" },
    { id: 2, title: "1 Week" },
    { id: 3, title: "1 Month" },
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
          <h3 className={styles.numStakerTitle}>Number of Individual Stakers</h3>
          <p className={styles.value}>{click === 1 ? mainStaker : click === 10 ? ovmStaker : allStaker}</p>
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

      <ResponsiveContainer height={300} width="100%">
        <LineChart data={click === 1 ? mainData : click === 10 ? ovmData : allData}>
          <Line
            type="linear"
            dataKey="stakers"
            stroke="#8884d8"
            strokeWidth={2}
          />
          <Tooltip content={<CustomToolTip/>}/>
          <YAxis domain={["dataMin - 5", "dataMax + 5"]} hide={true} />
          <XAxis dataKey={"date"} interval={"preserveStartEnd"} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NumStaker;
