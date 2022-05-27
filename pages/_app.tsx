import type { AppProps } from 'next/app'
import useSynthetixQueries, { createQueryContext, SynthetixQueryContextProvider } from '@synthetixio/queries'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import Head from 'next/head'
import { useState } from 'react'
import { NetworkId } from '@synthetixio/contracts-interface'


function MyApp({ Component, pageProps }: AppProps) {


  //const [netId, setNetId] = useState<NetworkId>(10)

  const queryClient = new QueryClient()


  
  return (
    <>
    <Head>
      <title>The Title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    
    <Layout>
  
    <Component {...pageProps} />
   
    </Layout>
   
    </>
  )
}

export default MyApp
