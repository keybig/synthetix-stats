import Link from 'next/link'
import Datagrid from '../components/data/Datagrid'
import NetworkNavBar from '../components/network/NetworkNavBar'
import Subheader from '../components/subheader/Subheader'
import {
  createQueryContext,
  SynthetixQueryContextProvider,
} from '@synthetixio/queries'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useContext, useState } from 'react'
import { NetworkId } from '@synthetixio/contracts-interface'
import useNetwork from '../hooks/useNetwork'
import useGetTradeActivity from '../hooks/useGetTradeActivity'
import MainData from '../components/mainData/MainData'
import { useRouter } from 'next/router'

const queryClient = new QueryClient()

const Home = (props:any) => {


  const router = useRouter()


  const [netId, setNetId] = useState<NetworkId>(1)


  const handleNetwork = (buttons: any) => {
    setNetId(buttons.id);
    console.log(netId)
    router.push("/")
 
  };


  return (
    <div>
      <Subheader/>
      <h1>{props.id}</h1>

      <QueryClientProvider client={queryClient}>
      <SynthetixQueryContextProvider value={createQueryContext({
    networkId: 1 // Options: 1 (Mainnet), 10 (Optimism), 42 (Kovan), and 69 (Optimism Kovan)
       })}>
      
      <NetworkNavBar current={netId} handle={handleNetwork}/>

      <Datagrid/>

      </SynthetixQueryContextProvider>
    <ReactQueryDevtools />

    </QueryClientProvider>

      


      

      

    
    </div>
  )
}

export default Home