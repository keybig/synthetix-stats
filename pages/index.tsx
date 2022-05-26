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


const Home = (props:any) => {

  return (
    <div>
      <Subheader />
      <NetworkNavBar>
      <Datagrid />
      </NetworkNavBar>
    </div>
  )
}

export default Home