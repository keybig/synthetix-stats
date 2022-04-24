import type { AppProps } from 'next/app'
import { createQueryContext, SynthetixQueryContextProvider } from '@synthetixio/queries'
import { QueryClient, QueryClientProvider } from 'react-query'
import '../styles/globals.css'
import Layout from '../components/layout/Layout'


function MyApp({ Component, pageProps }: AppProps) {

  const queryClient = new QueryClient()

  return (

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
  )
}

export default MyApp
