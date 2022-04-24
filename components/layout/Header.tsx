import styles from './Header.module.css'
import Image from 'next/image'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className={styles.header}>
        <Image src="/Logo.png" width={200} height={17}></Image>
    </div>
  )
}

export default Header