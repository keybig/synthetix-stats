import Link from 'next/link'
import Datagrid from '../components/data/Datagrid'
import NetworkNavBar from '../components/network/NetworkNavBar'
import Subheader from '../components/subheader/Subheader'



type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Subheader />
      <NetworkNavBar />
      <Datagrid />
    </div>
  )
}

export default Home