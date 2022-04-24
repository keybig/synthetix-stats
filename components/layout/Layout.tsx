import Header from './Header'
import Footer from './Footer'

type Props = {
  children: any;
}

const Layout = (props: Props) => {
  return (
    <>
    <Header />
    {props.children}
    <Footer />
    </>
  )
}

export default Layout