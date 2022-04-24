import Head from 'next/head'

type Layout = {
  children: any
}

const Layout = (props: Layout) => {
  return (
    <div>
      <Head>
        <title>YoYo</title>
      </Head>
      {props.children}
    </div>
    

  )
}

export default Layout