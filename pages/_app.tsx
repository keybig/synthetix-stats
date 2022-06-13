import type { AppProps } from 'next/app'
import useSynthetixQueries, { createQueryContext, SynthetixQueryContextProvider } from '@synthetixio/queries'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import Head from 'next/head'
import { useContext, useState } from 'react'
import { NetworkId } from '@synthetixio/contracts-interface'


function MyApp({ Component, pageProps,  }: AppProps) {

  const queryClient = new QueryClient()

  


  
  return (
    <>
    <Head>
      <title>The Title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    
    <Layout>
    <QueryClientProvider client={queryClient}>
      <SynthetixQueryContextProvider value={createQueryContext({
    networkId: 10 // Options: 1 (Mainnet), 10 (Optimism), 42 (Kovan), and 69 (Optimism Kovan)
       })}>
      
    
    <Component {...pageProps} />
    </SynthetixQueryContextProvider>
    <ReactQueryDevtools />

    </QueryClientProvider>
    </Layout>
   
    </>
  )
}

export default MyApp
