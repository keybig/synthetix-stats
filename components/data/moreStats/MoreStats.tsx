import styles from "./MoreStats.module.css";

const MoreStats = () => {
  const grafana =
    "https://grafana.synthetix.io/d/pjPJZ6x7z/synthetix-system-stats?orgId=1&kiosk=full";
  return (
    <div className={styles.wrapper}>
      <div>
        <h4 className={styles.statstitle}>More Advanced Stats</h4>
        <p className={styles.styledp}> Get granular on Synthetix </p>
      </div>
      <div>
        <button className={styles.advancedbutton}>
          <a href={grafana}>Visit Grafana</a>
        </button>
      </div>
    </div>
  );
};

export default MoreStats;
