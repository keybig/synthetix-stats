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
  AreaChart,
  Area,
} from "recharts";
import { useState } from "react";
import { formatNumber } from "../../../constants/format";
import CustomToolTip from './tooltip'
import InfoTooltip from "../../infoToolTip/InfoTooltip";
import { RiInformationFill } from "react-icons/ri"
import Select from 'react-select'
import Dropdown from '../../dropdown/Dropdown'






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
}: NumStaker) => {

  const allStaker = formatNumber.format(currentStakerAll)
  const ovmStaker = formatNumber.format(currentStakerOvm)
  const mainStaker = formatNumber.format(currentStakerMain)

  const buttonMap = [
    { id: 1, title: "Daily" },
    { id: 2, title: "1 Week" },
    { id: 3, title: "1 Month" },
    //{ id: 4, title: "one Year" }
  ];

  const optionMap = [
    { value: 1, label: "1 Day" },
    { value: 2, label: "1 Week" },
    { value: 3, label: "1 Month" }
  ]

  const [timeFrame, setTimeFrame] = useState(1);

  const handleActive = (option: any) => {
    setTimeFrame(option.value);
  };

  const ovmData = timeFrame === 1 ? dayOvm : timeFrame === 2 ? weekOvm : monthOvm
  const mainData = timeFrame === 1 ? dayMain : timeFrame === 2 ? weekMain : monthMain
  const allData = timeFrame === 1 ? dayAll : timeFrame === 2 ? weekAll : monthAll

  const ttInfo = `How many SNX is currently staked. Updated every 15 minutes`


  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <div>
          <div className={styles.titleRow}>
            <h3 className={styles.numStakerTitle}>Number of Stakers</h3>
            <InfoTooltip content={ttInfo}>

              <span
                className={styles.icon}
              >
                <RiInformationFill />
              </span>
            </InfoTooltip>
          </div>
          <p className={styles.value}>{click === 1 ? mainStaker : click === 10 ? ovmStaker : allStaker}</p>
        </div>

        <div className={styles.selectors}>

          <div className={styles.mainMenu}>
            {optionMap.map((option) => (
              <button
                key={option.value}
                onClick={() => handleActive(option)}
                className={
                  option.value === timeFrame ? styles.button : styles.inactive
                }
              >
                {option.label}
              </button>
            ))}


          </div>

          <div className={styles.mobileMenu}>

            <Dropdown instanceId={25} options={optionMap} update={(e) => handleActive(e)} placeholder={optionMap[0].label} />

          </div>

        </div>
      </div>

      <ResponsiveContainer height={200} width="100%">
        <AreaChart data={click === 1 ? mainData : click === 10 ? ovmData : allData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#8884d8" stopOpacity={0.3} />
              <stop offset="25%" stopColor="#8884d8" stopOpacity={0.2} />
              <stop offset="50%" stopColor="#8884d8" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0.05} />
              <stop offset="99%" stopColor="linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), #402FC8;" stopOpacity={0.1} />

            </linearGradient>

           
        <filter id="shadow" height="200%">
            <feDropShadow dx="3" dy="10" stdDeviation="10" color="#8884d8"/>
        </filter>
  

          </defs>


          <Area
            type="linear"
            dataKey="stakers"
            stroke="#8884d8"
            strokeWidth={2}
            fill="url(#colorUv)"
          />
          <Tooltip content={<CustomToolTip />} />
          <YAxis domain={["auto", "auto"]} hide={true} />
          <XAxis dataKey={"date"} interval={"preserveStartEnd"} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NumStaker;
