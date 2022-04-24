import styled from 'styled-components'
import Test from '../components/test'
import Subheader from '../components/subheader'
import Link from 'next/link'
import Nava from '../components/navit'
import SnxStaked from '../components/SnxStaked'

type Props = {}

const Grid = (props: Props) => {
  return (

    <Container>
    <Headit>Synthetix what</Headit>
    <SubH></SubH>
    <Nava></Nava>
    <SnxStaked></SnxStaked>
    

    <TVL>Total Value Locked yes</TVL>
    <SnxApy>the apy</SnxApy>
    <NumStakers>the number of stakers</NumStakers>
    <TradingActivity>trading activity</TradingActivity>
    <Inflation></Inflation>
    <MoreAdvanced></MoreAdvanced>
    <StartStaking></StartStaking>
    <TradeFee></TradeFee>
    </Container>
  )
}

export default Grid

const Container = styled.div`
  display: grid;
  height: 100vh;
  color: #f9f4f4;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;//repeat(15, 1fr);
  text-align: center;
  grid-gap: 30px;

`;

const Headit = styled.div`
  grid-row: 1;
  grid-column: 1 / 4 ;
  background: green;
`

const SubH = styled(Subheader)`
`

const NavBar = styled.nav`
  background: #3a3a55;
  grid-row-start: 3;
  grid-column-start: 1 / 3;
  padding: 0.25rem;
`;
const SnxApy = styled.div`
  background: #78809d;
  color: white;
  grid-row: 6;
  grid-column: 1;
  padding: 0.25rem;
  margin-left: 50px;
`;
const TVL = styled.div`
  background: #9aaab7;
  grid-row: 4 / 7;
  grid-column: 2 / 4;
  padding: 0.25rem;
`;

const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;

`;
const Content1 = styled.div`
  background: #a6b8b9;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;

const NumStakers = styled.div`
    background: wheat;
    grid-row: 7;
    grid-column: 1 / 4;
`

const TradingActivity = styled.div`

    background: purple;
    grid-row: 8 / 12;

`
const Inflation = styled.div`

    background: magenta;
    grid-row: 8 / 10;
    grid-column: 2/4;

`
const MoreAdvanced = styled.div`

    background: #a0a7ea;
    grid-row: 12;
    grid-column: 1;

`
const StartStaking = styled.div`

    background: #0c51a6;
    grid-row: 14;
    grid-column: 1;

`
const TradeFee = styled.div`

    background: #e4f409;
    grid-row: 10 / 14;
    grid-column: 2 / 4;

`


const GridTest = styled.div`
    //grid within a grid, it works,
    display: grid;
    grid-row: 13;
    grid-template-columns: 2;
    grid-template-rows: 2;

    p {
        grid-row: 2;
    }

    p:nth-child(2) {
        grid-row:1;
    }
`
