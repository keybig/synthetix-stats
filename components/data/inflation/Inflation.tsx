import styles from './Inflation.module.css'
import styled from 'styled-components'
import { Line, LineChart, ResponsiveContainer } from 'recharts';

type Props = {}

const Inflation = (props: Props) => {

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


  return (
    <Wrapper>

      <Content>
        <h3>Inflation Fees (SNX Rewards)</h3>
        <SubTitle>Current Epoch</SubTitle>
        <CurrentEpoch>503,389.46</CurrentEpoch>
        <SubTitle>Up to date</SubTitle>
        <ToDate>100,000,312.99</ToDate>
      </Content>

    
      <ResponsiveContainer width={500}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    
      

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
`

const Content = styled.div`
`

const Chart = styled.div`
  
`

const SubTitle = styled.h5`
  color: #828295;
  font-family: Arial, Helvetica, sans-serif;
`

const CurrentEpoch = styled.p`
  color: #ED1EFF;
  font-size: 2rem;
`

const ToDate = styled.p`
  color: #FFFFFF;
  font-size: 2rem;
`