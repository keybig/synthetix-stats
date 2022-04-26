import styles from './Inflation.module.css'
import styled from 'styled-components'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

type Props = {}

const TradeFee = (props: Props) => {

  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
  ];


  return (
    <Wrapper>

      <Content>
        <h3>Trading Fees (sUSd Rewards)</h3>
        <h5>Current Epoch</h5>
        <p>503,389.46</p>
        <h5>Up to date</h5>
        <p>100,000,312.99</p>
      </Content>

    
      <ResponsiveContainer width="99%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    
      

    </Wrapper>
  )
}

export default TradeFee

export const Wrapper = styled.div`
   grid-area: tradeFee;
   background: rgba(11, 11, 34, 0.5);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 30px 50px 30px 30px;
    border: 2px solid #FFD75C;
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