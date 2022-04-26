import Link from 'next/link'
import Subheader from '../components/subheader/Subheader'
import Datagrid from '../components/data/aflex/Flexgrid'
import NetworkNavBar from '../components/network/NetworkNavBar'



type Props = {}

const Flex = (props: Props) => {
  return (
    <div>
      <Subheader />
      <NetworkNavBar />
      <Datagrid />
    </div>
  )
}

export default Flex