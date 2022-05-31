import Datagrid from '../components/data/Datagrid'
import NetworkNavBar from '../components/network/NetworkNavBar'
import Subheader from '../components/subheader/Subheader'
import {
  createQueryContext,
  SynthetixQueryContextProvider,
} from '@synthetixio/queries'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useState } from 'react'
import { NetworkId } from '@synthetixio/contracts-interface'
import { useRouter } from 'next/router'



const Home = () => {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        notifyOnChangeProps: "tracked"
      },
    },
  })


  const router = useRouter()

  const [netId, setNetId] = useState<NetworkId>(10)

  const handleNetwork = (buttons: any) => {
    setNetId(buttons.id);
    router.push("/mainnet")
 
  };






  return (
    <div>
      <Subheader/>
   

      <QueryClientProvider client={queryClient}>
      <SynthetixQueryContextProvider value={createQueryContext({
    networkId: netId // Options: 1 (Mainnet), 10 (Optimism), 42 (Kovan), and 69 (Optimism Kovan)
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