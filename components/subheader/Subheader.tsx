import styles from './Subheader.module.css'

type Props = {}

const Subheader = (props: Props) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.heading}>Synthetix Stats</h1>
        <p className={styles.description}>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
        </p>
    </div>
  )
}

export default Subheader