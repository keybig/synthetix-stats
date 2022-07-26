import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import Head from 'next/head'


function MyApp({ Component, pageProps,  }: AppProps) {
  
  return (
    <>
    <Head>
      <title>SNX Stats</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32" />
			<link rel="icon" type="image/png" href="/favicon/favicon-16x16.png" sizes="16x16" />
    </Head>
    
    <Layout>
    <Component {...pageProps} />
    </Layout>
    <div id="portal"></div>
   
    </>
  )
}

export default MyApp
