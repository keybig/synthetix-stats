import MoreStats from "../components/data/moreStats/MoreStats";
import StartStaking from "../components/data/startStaking/StartStaking";
import SubheaderFAQ from "../components/subheader/SubheaderFAQ";
import styles from "../styles/Write.module.css";


const Write = () => {
    
    return (
        <div>
            <SubheaderFAQ />
            <div className={styles.wrapper}>
                <div className={styles.snxStakedWrapper}>
                    <h3> SNX Staked Percentage </h3>
                    <p>
                        To get the SNX Staked Percentage, first we need to get the Total SNX Staked, and the Total Supply. 
                    </p>
                    <h3> Total SNX Staked </h3>
                    <p>
                        How to get total SNX Staked
                    </p>
                    <h3> Staked Value </h3>
                    <p>
                        How to get Staked Value
                    </p>
                </div>

                <div className={styles.tvlWrapper}>
                    <p>tvl</p>
                </div>

                <div className={styles.stakeAPYWrapper}>
                    <p>apy</p>
                </div>

                <div className={styles.inflationWrapper}>
                    <p>inflation</p>
                </div>

                <div className={styles.numStakerWrapper}>
                    <p>numStaker</p>
                </div>

                <div className={styles.tradesWrapper}>
                    <p>trades</p>
                </div>

                <div className={styles.tradeFeeWrapper}>
                    <p>tradeFee</p>
                </div>
                <MoreStats />
                <StartStaking />


            </div>
        </div>
    )
}

export default Write