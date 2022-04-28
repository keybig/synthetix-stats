import styles from './TradeFee.module.css'
import styled from 'styled-components'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import Table from '../../table/Table'
import { useMemo } from 'react';


type Props = {}

const TradeFee = (props: Props) => {

  const name = "myName"

  const data = useMemo(
    () => [
      {
        col1: 'Wow',
        col2: '867,543',
        col3: '1,000,000,000',
        col4: 'yoyo'
      },
      {
        col1: 'Thales',
        col2: '765,432',
        col3: '1,000,000',
        col4: "now we on"
      },
      {
        col1: 'Kwenta',
        col2: '654,321',
        col3: '1,000,000',
        col4: 'whats good'
      },
    ],
    []
  )

  const columns = useMemo(
    () => [
      {
        Header: name,
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'N of Trades',
        accessor: 'col2',
      },
      {
        Header: 'Volume',
        accessor: 'col3',
      },
      {
        Header: "Its good",
        accessor: 'col4'
      }
    ],
    []
  )

  const dataChart = [
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
        <InactiveButton>Total to date</InactiveButton>
        </Content>
        
     
      <Chart>
      <ResponsiveContainer width={'50%'} height={300}>
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={dataChart}
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
     
      <Table data={data} columns={columns} />
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
    border: none;
`
const InactiveButton = styled.button`
  
    color: #00D1FF;
    border-radius: 100px;
    padding: 8px 18px;
    margin: 0px 2px;
    background: transparent;
    border: none;

`