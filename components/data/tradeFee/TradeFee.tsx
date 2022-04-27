import styles from './TradeFee.module.css'
import styled from 'styled-components'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import TradeTable from './TradeTable'


type Props = {}

const TradeFee = (props: Props) => {

  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group F", value: 100 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#f60ce6'];



  return (
    <Wrapper>

      
        <h3>Trading Fees (sUSd Rewards)</h3>
        <Content>
        <StyledButton>Current Epoch</StyledButton>
        <StyledButton>Total to date</StyledButton>
        </Content>
        
     
      <Chart>
      <ResponsiveContainer width={'50%'} height={300}>
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="30%"
            cy="50%"
            outerRadius={'80%'}
          >

              {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
     
      <TradeTable/>
      </Chart>
    
      

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
    font-family: Arial, Helvetica, sans-serif;
    text-align: left;
`

const Content = styled.div`
  display: flex;

`

const Chart = styled.div`
  display: flex;
  margin: 0 0;
  flex: 10%;
  justify-content: flex-start;
  align-items: center;
  
`

const StyledButton = styled.button`
   background:#00D1FF;
    border-radius: 100px;
    padding: 8px 18px;
    margin: 0px 2px;
`