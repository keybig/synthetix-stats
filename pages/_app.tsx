import type { AppProps } from 'next/app'
import { createQueryContext, SynthetixQueryContextProvider } from '@synthetixio/queries'
import { QueryClient, QueryClientProvider } from 'react-query'
import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import Head from 'next/head'


function MyApp({ Component, pageProps }: AppProps) {

  const queryClient = new QueryClient()

  return (
    <>
    <Head>
      <title>The Title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <QueryClientProvider client={queryClient}>
    <SynthetixQueryContextProvider
      value={createQueryContext({
        networkId: 10 // Options: 1 (Mainnet), 10 (Optimism), 42 (Kovan), and 69 (Optimism Kovan)
      })}
    >
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </SynthetixQueryContextProvider>
    </QueryClientProvider>
    </>
  )
}

export default MyApp
