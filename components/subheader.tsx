import styled from 'styled-components'

type Props = {}

const Subheader = (props: Props) => {
  return (
    <StyledHeading>
        <Title>Synthetix Stats</Title>
        <Description>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
        </Description>
    </StyledHeading>
  )
}

const StyledHeading = styled.div`

    width: 100%;
    border-style: solid;
    border-width: 2px;
    background-color: #001aff;
    text-align: center;
    
`
const Title = styled.h1`
    text-align: center;
    font-size: large;
    font-weight: 400px;
    color: white;
`
const Description = styled.p`
    text-align: center;
    color: white;
`
export default Subheader