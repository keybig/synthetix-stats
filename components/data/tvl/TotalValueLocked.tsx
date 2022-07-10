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
import CustomToolTip from './tooltip'
import { RiInformationFill } from "react-icons/ri"
import InfoTooltip from '../../infoToolTip/InfoTooltip'
import Dropdown from '../../dropdown/Dropdown'


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
  click: number;
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
}: TVL) => {

  const optionMap = [
    { value: 1, label: "1 Day" },
    { value: 2, label: "1 Week" },
    { value: 3, label: "1 Month" }
  ]

  const [timeFrame, setTimeFrame] = useState(1);

  const handleActive = (option: any) => {
    setTimeFrame(option.value);
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

  const ttInfo = `Total Value Locked within SNX Ecosystem. Updated every 15 minutes`

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div>
          <div className={styles.titleRow}>
            <h3 className={styles.tvl}>Total Value Locked </h3>
            <InfoTooltip content={ttInfo}>

              <span
                className={styles.icon}
              >
                <RiInformationFill />
              </span>
            </InfoTooltip>

          </div>
          <p className={styles.values}>{click === 1 ? totalValueLockedMain : click === 10 ? totalValueLockedOvm : totalValueLockedAll}</p>
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
            <Dropdown instanceId={101} options={optionMap} update={(e) => handleActive(e)} placeholder={optionMap[0].label} />

          </div>
        </div>
      </div>

      <div className={styles.responsive}>
        <ResponsiveContainer>
          <AreaChart
            data={click === 1 ? mainData : click === 10 ? ovmData : allData}
          >

            <Area
              type="linear"
              dataKey="wrapper"
              stroke="#ED1EFF"
              fill="#ED1EFF"
              fillOpacity={0.6}
              strokeWidth={2}
              stackId={2}
            />


            <Area
              type="linear"
              dataKey="debt"
              stackId={2}
              fill="#31D8A4"
              fillOpacity={0.6}
              stroke="#31D8A4"
              strokeWidth={2}
            />



            <Tooltip
              content={<CustomToolTip />}
            />
            <XAxis dataKey="date" fontSize={14} interval={"preserveStartEnd"} />
            <YAxis
              scale={"linear"}
              allowDataOverflow={true}
              domain={['auto', 'auto']}
              hide={true}
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
