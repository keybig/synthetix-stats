import styled from 'styled-components'

type Props = {}

const Header = (props: Props) => {
  return (
    <StyledHeader>
        <HeaderText>Synthetix</HeaderText>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`

    width: 100%;
    border-style: solid;
    border-width: 2px;
    background-color: #00ffa6;
    text-align: center;
    
`
const HeaderText = styled.h1`
    text-align: center;
    font-size: large;
    font-weight: 400px;

`

export default Header