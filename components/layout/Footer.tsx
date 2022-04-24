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

        <Image src="/Frame.png" height={36} width={46}></Image>

        <p>Built and Maintained by the Grants Council and the Synthetix Community</p>

        <p> Logo Placeholder </p>
    </div>
  )
}

export default Footer