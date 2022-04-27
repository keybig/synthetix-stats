import styles from './Footer.module.css'
import Image from 'next/image'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={styles.footer}>

        <ul className={styles.row}>
            <li> Synthetix </li>
            <li> Grants Council </li>
            <li> Tools </li>
            <li> Teleporter </li> 
        </ul>

        <Image src="/Frame.png" height={36} width={46} alt="hello"></Image>

        <p className={styles.footerText}>Built and Maintained by the Grants Council and the Synthetix Community</p>

        <Image src="/Icons.png" height={50} width={150} alt="hello"></Image>


    </div>
  )
}

export default Footer