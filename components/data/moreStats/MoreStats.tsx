import Arrow from "../../icon/Arrow";
import styles from "./MoreStats.module.css";

const MoreStats = () => {
  const grafana =
    "https://grafana.synthetix.io/d/pjPJZ6x7z/synthetix-system-stats?orgId=1&kiosk=full";
  const snxLiquidations = "https://dune.com/gunboats/SNX-Liquidation";

  const snxFeeOverview = "https://dune.com/leifu/synthetix-fee-overview"

  const snxFuturesOverview = "https://dune.com/drethereum/Synthetix-Futures:-Overview"

  const snxAnalytics = "https://tools.synthetix.io/analytics"

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.statstitle}>More Advanced Stats</h4>

      <div className={styles.linkWrap}>
      <p className={styles.styledp}>Synthetix Detailed Stats </p>

        <button className={styles.advancedbutton}>
          <a href={grafana} target="_blank" rel="noreferrer">Visit Grafana <Arrow/></a>
        </button>
      </div>

      <div className={styles.linkWrap}>
      <p className={styles.styledp}>Synthetix Dune Analytics </p>

        <button className={styles.advancedbutton}>
          <a href={snxAnalytics} target="_blank" rel="noreferrer">Visit Tools Site <Arrow/></a>
        </button>
      </div>

      
    </div>
  );
};

export default MoreStats;
