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
import { useState } from 'react'
import { NetworkId } from '@synthetixio/contracts-interface'
import useNetwork from '../hooks/useNetwork'



const queryClient = new QueryClient()



const Home = (props:any) => {
//@ts-ignore
  const { netId } = useNetwork()

  return (
    <div>
      <Subheader />
      <QueryClientProvider client={queryClient}>
        <SynthetixQueryContextProvider
          value={createQueryContext({
            networkId: 10 // Options: 1 (Mainnet), 10 (Optimism), 42 (Kovan), and 69 (Optimism Kovan)
          })}
        >
      <NetworkNavBar />
      <Datagrid />
      </SynthetixQueryContextProvider>
      <ReactQueryDevtools/>
      </QueryClientProvider>
      

    </div>
  )
}

export default Home