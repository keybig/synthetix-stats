import Arrow from "../../icon/Arrow";
import styles from "./StartStaking.module.css";

const MoreStats = () => {
  const stakingUrl = "https://staking.synthetix.io/";
  return (
    <div className={styles.wrapper}>
    <h4 className={styles.statstitle}>Start Staking</h4>

    <div className={styles.linkWrap}>
    <p className={styles.styledp}>Start Staking SNX</p>

      <button className={styles.advancedbutton}>
        <a href={stakingUrl} target="_blank" rel="noreferrer">Staking DAPP <Arrow/></a>
      </button>
    </div>

  </div>
  );
};

export default MoreStats;
