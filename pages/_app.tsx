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
