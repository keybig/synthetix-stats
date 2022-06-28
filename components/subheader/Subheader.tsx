import styles from './Subheader.module.css'


const Subheader = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.heading}>Synthetix Stats</h1>
        <p className={styles.description}>
        The Synthetix HERO Stats page. Some of the most important stats for the community.
       </p>
    </div>
  )
}

export default Subheader