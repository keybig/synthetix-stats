import styles from './TradeFee.module.css'
import styled from 'styled-components'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useMemo, useState } from 'react';


type Props = {
}


const TradeFee = (props: Props) => {


  const buttonMap = [
    { id: 1, title: "Current Epoch" },
    { id: 2, title: "Total To Date" }
  ];


    const [click, setClick] = useState(1);


    const handleActive = (buttons: any) => {
      setClick(buttons.id);
    };

  

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

        {buttonMap.map((buttonMap) => (
        <button
          key={buttonMap.id}
          onClick={() => handleActive(buttonMap)}
          className={ buttonMap.id === click ? styles.current : styles.inactive}
        >
          {buttonMap.title}
        </button>
      ))}
        
        </Content>
        
     
      <Chart>
      <ResponsiveContainer>
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
     
      <ChartKey>
        <KeyWrappers>
                <StyledP color="#00D1FF">Wrappers</StyledP>
                <StyledP color="white">$286,228,739</StyledP>
                <StyledP color="#00D1FF">37%</StyledP>
        </KeyWrappers>

        <KeyProtocol>
                <StyledP color="#ED1EFF">Protocol</StyledP>
                <StyledP color="white">$286,228,739</StyledP>
                <StyledP color="#ED1EFF">37%</StyledP>
              

        </KeyProtocol>

        <KeyProtocol>
               
                <StyledP color="#31D8A4">Protocol</StyledP>
                <StyledP color="white">$286,228,739</StyledP>
                <StyledP color="#31D8A4">37%</StyledP>

        </KeyProtocol>

        <KeyProtocol>
                
                <StyledP color="#FFD75C">Protocol</StyledP>
                <StyledP color="white">$286,228,739</StyledP>
                <StyledP color="#FFD75C">37%</StyledP>

        </KeyProtocol>

        <KeyOther>
                <StyledP color="#FC8738">Other   </StyledP>
                <StyledP color="white">$286,228,739</StyledP>
                <StyledP color="#FC8738">37%</StyledP>

                
        </KeyOther>
        <TotalSynthSupply>Total Synth Supply</TotalSynthSupply>
        <TotalSupplyAmount>$23,077,796</TotalSupplyAmount>

      </ChartKey>



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
  min-width: 10rem;
  
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

const ChartKey = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const KeyWrappers = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: right;
`

const KeyProtocol = styled.div`
  display: flex;
  justify-content: space-between;
`
const KeyOther = styled.div`
  display:flex;
  justify-content: space-between;
  text-align: right;
`

const StyledP = styled.p`
  color: ${props => props.color};
  font-size: 1.25rem;
  font-weight: bold;
  margin: 1rem;
  padding: 0 0.5rem;
`

const TotalSynthSupply = styled.p`
  color: rgba(255,255,255,0.5);
  font-size: 1.5rem;
  text-align: right;
  padding-top: 1rem;
`
const TotalSupplyAmount = styled.p`
  color: #FFD753;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: right;
  margin:0px;
`
