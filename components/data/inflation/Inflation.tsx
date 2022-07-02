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
import CustomToolTip from './inflationTT'
import {RiInformationFill} from "react-icons/ri"
import InfoTooltip from '../../infoToolTip/InfoTooltip'


interface Inflation {
  click: number;
  currentRewardOvm: number;
  currentRewardMain: number;
  allTimeInflationOvm: number;
  allTimeInflationMain: number;
  inflationDataOvm: any[];
  inflationDataMain: any[];
  inflationDataAll: any[];
}

const Inflation = ({
  click,
  currentRewardMain,
  currentRewardOvm,
  allTimeInflationMain,
  allTimeInflationOvm,
  inflationDataMain,
  inflationDataOvm,
  inflationDataAll
}:Inflation) => {

  const allReward = currentRewardMain + currentRewardOvm
  const allTime = allTimeInflationMain + allTimeInflationOvm

  const ttInfo = `Weekly SNX Staking Rewards. Updated Weekly`



  return (
    <div className={styles.wrapper}>
      <div className={styles.keyWrap}>
        <div className={styles.titleRow}>
        <h3 className={styles.inflationTitle}>Inflation Fees (SNX Rewards)</h3>
        <InfoTooltip content={ttInfo}>

      <span 
        className={styles.icon}
        onMouseEnter={()=>console.log("mouse enter")}
        onMouseLeave={()=>console.log("mouse left")}
        >
      <RiInformationFill/>
      </span>
      </InfoTooltip>
        </div>
        <h5 className={styles.subtitle}>Current Epoch</h5>
        <p className={styles.currentEpoch}>{click === 1 ? formatNumber.format(currentRewardMain) : click === 10 ? formatNumber.format(currentRewardOvm) : formatNumber.format(allReward)}</p>
        <h5 className={styles.subtitle}>Up to date</h5>
        <p className={styles.toDate}>{click === 1 ? formatNumber.format(allTimeInflationMain) : click === 10 ? formatNumber.format(allTimeInflationOvm) : formatNumber.format(allTime)}</p>
      </div>

     
        <ResponsiveContainer width={"100%"} height={200}>
          <LineChart data={click === 1 ? inflationDataMain : click === 10 ? inflationDataOvm : inflationDataAll}>
            <Line
              type="linear"
              dataKey="snx_rewards"
              stroke="#8884d8"
              strokeWidth={3}
            />
            <Tooltip content={<CustomToolTip/>}/>
            <YAxis domain={["dataMin - 200000", "dataMax + 15000"]} hide={true}/>
            <XAxis dataKey={"date"} fontSize={14} interval={"preserveStartEnd"} />
          </LineChart>
        </ResponsiveContainer>
     
      
    </div>
  );
};

export default Inflation;
