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

    grid-row: 2;
    grid-column: 1 / span 3;
    background-color: #ff0000;
    text-align: center;
   // justify-self: start;
   
    
`
const Title = styled.h1`
    font-size: large;
    font-weight: 400px;
    color: white;
`
const Description = styled.p`
    color: white;
`
export default Subheader