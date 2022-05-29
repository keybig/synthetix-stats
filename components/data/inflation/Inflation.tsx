import styles from './Inflation.module.css'
import styled from 'styled-components'
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import useGetAPY from '../../../hooks/useGetAPY'

// current rewards, all time rewards, inflation data from useGetAPY()
type Props = {}

const Inflation = (props: Props) => {

  const { currentReward } = useGetAPY()
  const { allTimeInflation } = useGetAPY()
  const { inflationData } = useGetAPY()



  return (
    <Wrapper>


      <Content>
        <h3>Inflation Fees (SNX Rewards)</h3>
        <SubTitle>Current Epoch</SubTitle>
        <CurrentEpoch>
          {currentReward}
        </CurrentEpoch>
        <SubTitle>Up to date</SubTitle>
        <ToDate>
          {allTimeInflation}
        </ToDate>
      </Content>

      <ChartWrapper>
      <ResponsiveContainer width={'100%'} height={330}>
        <LineChart data={inflationData}>
          <Line type="monotone" dataKey="snx_rewards" stroke="#8884d8" strokeWidth={3} />
          <Tooltip/>
        </LineChart>
      </ResponsiveContainer>
      </ChartWrapper>
    
      

    </Wrapper>
  )
}

export default Inflation

export const Wrapper = styled.div`
   grid-area: inflation;
   background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), linear-gradient(73.6deg, #8E2DE2 2.11%, #ED1EFF 90.45%);
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    padding: 30px 50px 30px 30px;
    border: 2px solid #ED1EFF;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    line-height:normal;
    font-weight: 700;
    letter-spacing: 0px;
    text-align: left;
    flex-wrap: wrap;
    @media(max-width: 960px){
        padding:2rem 1rem; 
    }
`

const Content = styled.div`
`

const Chart = styled.div`
  
`

const SubTitle = styled.h5`
  color: #828295;
  font-family: Arial, Helvetica, sans-serif;

  @media(max-width: 960px){
        padding: 1rem 0;
    }
`

const CurrentEpoch = styled.p`
  color: #ED1EFF;
  font-size: 2rem;
`

const ToDate = styled.p`
  color: #FFFFFF;
  font-size: 2rem;
`
const ChartWrapper = styled.div`
  width:50%;
  flex-grow:2;
`