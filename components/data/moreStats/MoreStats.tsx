import Arrow from "../../icon/Arrow";
import styles from "./MoreStats.module.css";

const MoreStats = () => {
  const grafana =
    "https://grafana.synthetix.io/d/pjPJZ6x7z/synthetix-system-stats?orgId=1&kiosk=full";
  const snxLiquidations = "https://dune.com/gunboats/SNX-Liquidation";

  const snxFeeOverview = "https://dune.com/leifu/synthetix-fee-overview"

  const snxFuturesOverview = "https://dune.com/drethereum/Synthetix-Futures:-Overview"

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.statstitle}>More Advanced Stats</h4>

      <div className={styles.linkWrap}>
      <p className={styles.styledp}>SNX Grafana Dashboard </p>

        <button className={styles.advancedbutton}>
          <a href={grafana} target="_blank" rel="noreferrer">Visit Grafana <Arrow/></a>
        </button>
      </div>

      <div className={styles.linkWrap}>
      <p className={styles.styledp}>SNX Liquidations Dune </p>

        <button className={styles.advancedbutton}>
          <a href={snxLiquidations} target="_blank" rel="noreferrer">Visit Dune <Arrow/></a>
        </button>
      </div>

      <div className={styles.linkWrap}>
      <p className={styles.styledp}>SNX Fee Overview Dune </p>

        <button className={styles.advancedbutton}>
          <a href={snxFeeOverview} target="_blank" rel="noreferrer">Visit Dune <Arrow/></a>
        </button>
      </div>

      <div className={styles.linkWrap}>
      <p className={styles.styledp}>SNX Futures Overview Dune </p>

        <button className={styles.advancedbutton}>
          <a href={snxFuturesOverview} target="_blank" rel="noreferrer">Visit Dune <Arrow/></a>
        </button>
      </div>
    </div>
  );
};

export default MoreStats;
