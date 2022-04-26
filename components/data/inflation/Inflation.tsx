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
        <h3>Inflation Fees (SNX Rewards</h3>
        <h5>Current Epoch</h5>
        <p>503,389.46</p>
        <h5>Up to date</h5>
        <p>100,000,312.99</p>
      </Content>

    
      <ResponsiveContainer>
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
    font-family: Inter;
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