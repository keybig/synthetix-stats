import Link from 'next/link'
import Subheader from '../components/subheader/Subheader'
import Datagrid from '../components/data/Datagrid'
import NetworkNavBar from '../components/network/NetworkNavBar'



type Props = {}

const Newgrid = (props: Props) => {
  return (
    <div>
      <Subheader />
      <NetworkNavBar />
      <Datagrid />
    </div>
  )
}

export default Newgrid