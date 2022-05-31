import styles from './Footer.module.css'
import Image from 'next/image'



const Footer = () => {
  return (
    <div className={styles.footer}>

        <ul className={styles.row}>
            <li className={styles.li}> Synthetix </li>
            <li className={styles.li}> Grants Council </li>
            <li className={styles.li}> Tools </li>
            <li className={styles.li}> Teleporter </li> 
        </ul>

        <Image src="/Frame.png" height={36} width={46} alt="hello"></Image>

        <p className={styles.footerText}>Built and Maintained by the Grants Council and the Synthetix Community</p>

        <Image src="/Icons.png" height={50} width={150} alt="hello"></Image>


    </div>
  )
}

export default Footer