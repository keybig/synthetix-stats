import { NetworkId } from '@synthetixio/contracts-interface'
import React, { useState } from 'react'
import Datagrid from '../data/Datagrid'
import NetworkNavBar from '../network/NetworkNavBar'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createQueryContext, SynthetixQueryContext, SynthetixQueryContextProvider } from '@synthetixio/queries'
import { ReactQueryDevtools } from 'react-query/devtools'
import Router from 'next/router'

type Props = {}

const MainData = (props: Props) => {

  const queryClient = new QueryClient()


  const [netId, setNetId] = useState<NetworkId>(10)


  const handleNetwork = (buttons: any) => {
    queryClient.invalidateQueries()
    setNetId(buttons.id);
    
  };


  const networkCtx = createQueryContext({
    networkId: netId, // Options: 1 (Mainnet), 10 (Optimism), 42 (Kovan), and 69 (Optimism Kovan)
    
    })


  return (
    <>
    <NetworkNavBar handle={handleNetwork} current={netId} />

    

    <Datagrid/>

  

    </>
  )
}

export default MainData