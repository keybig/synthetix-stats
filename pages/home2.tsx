import Link from 'next/link'
import Datagrid from '../components/data/Datagrid'
import NetworkNavBar from '../components/network/NetworkNavBar'
import Subheader from '../components/subheader/Subheader'



type Props = {}

const home2 = (props: Props) => {
  return (
    <div>
      <Subheader />
      <NetworkNavBar />
      <Datagrid />
    </div>
  )
}

export default home2