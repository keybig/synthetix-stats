import styled from 'styled-components'
import Test from '../components/test'
import Subheader from '../components/subheader'
import Link from 'next/link'
import Image from 'next/image'


type Props = {}

const Grid = (props: Props) => {


  return (
    <>
    <Container>
    <Headit>
      <Image src="/Logo.png" width={200} height={17}></Image>
    </Headit>
    <SubH />
    <NavBar>NavBar</NavBar>
    <Testit>
      yoyoyoyo 
      <Link href='/numbers'>
        <a>numba</a>
        </Link>

        <Link href='/hello'>
        <a>hello</a>
        </Link>
        
        </Testit>
    <Main>Main</Main>
    <Datas>yes</Datas>
    <Footer>Footer</Footer>
    </Container>
    </>
  )
}

export default Grid

const Container = styled.div`
  display: grid;
  height: 100vh;
  color: #f9f4f4;
  grid-template: repeat(4, 1fr) / repeat(3, 1fr);
  gap: 300px;
  grid-template-areas:
      "headit headit headit"
      "subhead subhead subhead"
      "nav test test"
      "main test test"
      "datas test test"
      "content content content"
      "content content content"
      "footer footer footer"
      "footer footer footer";
  text-align: center;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "nav"
      "test"
      "sidebar"
      "main"
      "content"
      "footer";
  }
`;

const NavBar = styled.nav`
  background: #3a3a55;
  grid-area: nav;
  padding: 0.25rem;
`;
const Main = styled.main`
  background: #1f2128;
  color: white;
  grid-area: main;
  padding: 0.25rem;
`;
const SideBar = styled.div`
  background: #9aaab7;
  grid-area: sidebar;
  padding: 0.25rem;
`;

const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const Content1 = styled.div`
  background: #a6b8b9;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;
const Content2 = styled(Content1)``;
const Content3 = styled(Content1)``;
const Footer = styled.footer`
  background: #ff9637;
  grid-area: footer;
  padding: 0.25rem;
`;

const Testit = styled(Test)`
`
const Headit = styled.div`
  grid-area: headit;
  background: green;
`

const SubH = styled(Subheader)`
`

const Datas = styled.div`
  grid-area: datas;
  background: #007180;
`

/*
header

subheader
subheader text

state-network | advanced stats

data: 

SNX Staked
              TVL
Staking APY

Number Stakers

Trading Activity | Inflation Fees
Trading Activity | Trading Fees
More Stats | Trading Fees
Start Staking | Trading Fees
Footer
*/