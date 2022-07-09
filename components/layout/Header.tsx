import styles from './Header.module.css'
import Image from 'next/image'
import SnxHeading from '../icon/snxHeading'


const Header = () => {
  return (
    <div className={styles.header}>
        <SnxHeading/>
    </div>
  )
}

export default Header