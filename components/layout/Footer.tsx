import styles from './Footer.module.css'
import { BsDiscord, BsGithub, BsTwitter } from 'react-icons/bs'
import SnxLogo from '../icon/snxLogo'
import SnxIcon from '../icon/snxIcon'



const Footer = () => {
  return (
    <div className={styles.footer}>



        <ul className={styles.row}>
            <li className={styles.li}><a href='https://synthetix.io/' target="_blank" rel="noreferrer"> Synthetix </a></li>
            <li className={styles.li}><a href='https://grants.synthetix.io/' target="_blank" rel="noreferrer"> Grants Council</a> </li>
            <li className={styles.li}><a href='https://tools.synthetix.io/' target="_blank" rel="noreferrer"> Tools</a> </li>
        </ul>

        <SnxLogo/>

        <p className={styles.footerText}>Built and Maintained by the Grants Council and the Synthetix Community</p>

        <span className={styles.iconBar}>
          <a href="https://discord.com/invite/AEdUHzt" target="_blank" rel="noreferrer" className={styles.iconItem}><BsDiscord color='white'/></a>
          <a href="https://twitter.com/synthetix_io" target="_blank" rel="noreferrer" className={styles.iconItem}><BsTwitter color='white'/></a>
          <a href="https://github.com/synthetixio" target="_blank" rel="noreferrer" className={styles.iconItem}><BsGithub color='white'/></a>
          <a href="https://blog.synthetix.io" target="_blank" rel="noreferrer" className={styles.iconItem}><SnxIcon/></a>
        </span>


    </div>
  )
}

export default Footer