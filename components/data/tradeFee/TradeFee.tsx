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
    { name: "Wrappers", value: 400 },
    { name: "Protocol", value: 300 },
    { name: "Protocol", value: 300 },
    { name: "Other", value: 200 },
    { name: "Protocol", value: 100 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#f60ce6'];



  return (
    <Wrapper>

<StyledH3>Trading Fees (sUSd Rewards)</StyledH3>

        <Buttons>
        {buttonMap.map((buttonMap) => (
        <button
          key={buttonMap.id}
          onClick={() => handleActive(buttonMap)}
          className={ buttonMap.id === click ? styles.current : styles.inactive}
        >
          {buttonMap.title}
        </button>
      ))}
        </Buttons>
        
      <Chart>
      <ResponsiveContainer width={'99%'} aspect={1}>
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            outerRadius={'80%'}
          >

              {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      </Chart>
     
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
    </Wrapper>
  )
}

export default TradeFee


export const Wrapper = styled.div`
   grid-area: tradeFee;
   background: rgba(11, 11, 34, 0.5);
   border-radius: 10px;
   padding: 30px 50px 30px 30px;
   border: 2px solid #FFD75C;
   font-family: Arial, Helvetica, sans-serif;
  
  
   display: grid;
   grid-template: auto / repeat(2,minmax(0,1fr));
   grid-auto-flow: row dense;
`

const Buttons = styled.div`
grid-area: 2 / 1 / 2 / 1;
`

const StyledH3 = styled.h3`
  grid-area: 1 / 1 / 1 / 1;
`

const Chart = styled.div`
grid-area: 3 / 1 / 3 / 1;  
opacity: 0.6;
  
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
  grid-area: 3 / 2 / 3 / 2;
  display: flex;
  flex-direction: column;
  align-items:self-end;
  
 
`

const KeyWrappers = styled.div`
  display: flex;
`

const KeyProtocol = styled.div`
  display: flex;
`
const KeyOther = styled.div`
  display:flex;
`

const StyledP = styled.p`
  color: ${props => props.color};
  font-size: 1.25rem;
  font-weight: bold;
  margin: 1rem;
  padding: 0 0.5rem;
  text-align: right;
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