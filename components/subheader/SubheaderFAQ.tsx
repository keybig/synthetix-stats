import styles from './SubheaderFAQ.module.css'


const SubheaderFAQ = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.heading}>Synthetix Stats FAQ</h1>
        <p className={styles.description}>
            A description for how each entity is calculated, and how you can reproduce the stats.
        </p>
        <p className={styles.description}>
            The data on this page is fetched from the  
            <a href="https://github.com/Synthetixio/synthetix-subgraph" target="_blank" rel="noreferrer" className={styles.link}>
                  SNX Subgraph
                </a>
             <br/>
        </p>
        <p className={styles.description}>
            You can make queries in The Graph playground here: 
        </p>
        <ul className={styles.list}>
            <li>
            <a href="https://thegraph.com/hosted-service/subgraph/synthetixio-team/mainnet-main?selected=playground" target="_blank" rel="noreferrer" className={styles.link}>
                ETH Mainnet
            </a>
            </li>
            <li>
            <a href="https://thegraph.com/hosted-service/subgraph/synthetixio-team/optimism-main?selected=playground" target="_blank" rel="noreferrer" className={styles.link}>
                Optimism
            </a>
            </li>
        </ul>
    </div>
  )
}

export default SubheaderFAQ