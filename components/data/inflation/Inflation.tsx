import styles from './Inflation.module.css'
import styled from 'styled-components'
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import useGetAPY from '../../../hooks/useGetAPY'

type Props = {}

const Inflation = (props: Props) => {

  const { currentReward } = useGetAPY()
  const { allTimeInflation } = useGetAPY()
  const { rewardsAmt } = useGetAPY()
  

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      snx_rewards: rewardsAmt[6],
      amt: 10,
    },
    {
      name: 'Page B',
      uv: 3000,
      snx_rewards: rewardsAmt[5],
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      snx_rewards: rewardsAmt[4],
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      snx_rewards: rewardsAmt[3],
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      snx_rewards: rewardsAmt[2],
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      snx_rewards: rewardsAmt[1],
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      snx_rewards: rewardsAmt[0],
      amt: 2100,
    },
  
  ];


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
        <LineChart data={data}>
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