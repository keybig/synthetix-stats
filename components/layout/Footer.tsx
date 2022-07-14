import styles from './Footer.module.css'
import { BsDiscord, BsGithub, BsTwitter } from 'react-icons/bs'
import SnxLogo from '../icon/snxLogo'



const Footer = () => {
  return (
    <div className={styles.footer}>



        <ul className={styles.row}>
            <li className={styles.li}><a href='https://synthetix.io/' target="_blank" rel="noreferrer"> Synthetix </a></li>
            <li className={styles.li}><a href='https://grants.synthetix.io/' target="_blank" rel="noreferrer"> Grants Council</a> </li>
            <li className={styles.li}> Tools </li>
            <li className={styles.li}> Teleporter </li> 
        </ul>

        <SnxLogo/>

        <p className={styles.footerText}>Built and Maintained by the Grants Council and the Synthetix Community</p>

        <span className={styles.iconBar}>
          <a href="#" className={styles.iconItem}><BsDiscord color='white'/></a>
          <a href="#" className={styles.iconItem}><BsTwitter color='white'/></a>
          <a href="#" className={styles.iconItem}><BsGithub color='white'/></a>
        </span>


    </div>
  )
}

export default Footer