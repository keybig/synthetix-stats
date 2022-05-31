import styles from "./StartStaking.module.css";

const MoreStats = () => {
  const stakingUrl = "https://staking.synthetix.io/";
  return (
    <div className={styles.wrapper}>
      <div>
        <h4 className={styles.statstitle}>Start Staking Synthetix</h4>
        <p className={styles.styledp}> Stack that Synthetix </p>
      </div>
      <div>
        <button className={styles.advancedbutton}>
          <a href={stakingUrl}>Staking App</a>
        </button>
      </div>
    </div>
  );
};

export default MoreStats;
