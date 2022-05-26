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

  const queryClient = new QueryClient()

  const [netId, setNetId] = useState<NetworkId>(1)

  
  return (
    <>
    <Head>
      <title>The Title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <QueryClientProvider client={queryClient}>
    <SynthetixQueryContextProvider
      value={createQueryContext({
        networkId: netId // Options: 1 (Mainnet), 10 (Optimism), 42 (Kovan), and 69 (Optimism Kovan)
      })}
    >
    <Layout>
    <Component {...pageProps} />
    </Layout>
    <ReactQueryDevtools />
    </SynthetixQueryContextProvider>
    </QueryClientProvider>
    </>
  )
}

export default MyApp
