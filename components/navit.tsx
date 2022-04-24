import styled from 'styled-components'
import Link from 'next/link'

type Props = {}

const Nava = (props: Props) => {
  return (
      <>
    <NavWrap>
        <button>All Networks</button>
        <button>Mainnet</button>
        <button>Optimism</button>
        <Align>
          <Link href='/grid'>
           <a>grid</a>
        </Link>
        <Link href='/newgrid'>
        <a>newgrid</a>
        </Link>
        </Align>
    </NavWrap>
    <AdvancedNav>
        <button>Advanced Stats</button>
    </AdvancedNav>
    </>
  )
}

const NavWrap = styled.div`
  grid-row: 3;
  grid-column: 1 / 3 ;
  background: #800053;
`
const AdvancedNav = styled.div`
    grid-row: 3;
    grid-column: 3;
    background: #00ccff;

`

const Align = styled.p`
    text-align: left;
    a {
      color: white;
    }
`

export default Nava