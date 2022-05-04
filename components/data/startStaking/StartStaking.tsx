import styled from 'styled-components'
import Img from './Group.png'

type Props = {}

const MoreStats = (props: Props) => {
  return (
    <Wrapper>
      <Info>
      <StatsTitle>Start Staking Synthetix</StatsTitle>
      <StyledP> Stack that Synthetix </StyledP>
      </Info>
      <div>
        <AdvancedStatsButton>Staking App</AdvancedStatsButton>
      </div>
    </Wrapper>
  )
}


export default MoreStats

const Wrapper = styled.div`
   grid-area: startStaking;
   background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) #402FC8;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 30px 50px 30px 30px;
    border: 2px solid #ED1EFF;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    line-height:normal;
    letter-spacing: 0px;
    text-align: left;
`

const StatsTitle = styled.h4`
color:white;
text-transform:capitalize;
`

const Info = styled.div`
  
`

const StyledP = styled.p`
  font-size:1rem;
  color:rgba(255,255,255,0.5);
  text-transform: capitalize;
  padding:0.5rem 0;
`

const AdvancedStatsButton = styled.button`
  border-radius: 100px;
    background: #131619;
    color: white;
    padding: 8px 18px;
    margin: 0px 2px;
    border: none;
`