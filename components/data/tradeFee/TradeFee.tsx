import styles from './TradeFee.module.css'
import styled from 'styled-components'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useMemo, useState } from 'react';
import useGetTradeFee from '../../../hooks/useGetTradeFee';
import TradeFeeTable from './TradeFeeTable'


type Props = {
}



const TradeFee = (props: Props) => {

  const { tradeFeeArr } = useGetTradeFee()
  const { currentFeeData } = useGetTradeFee()
  const { totalIssuedSynth } = useGetTradeFee()


  const buttonMap = [
    { id: 1, title: "Current Epoch" },
    { id: 2, title: "Total To Date" }
  ];


    const [click, setClick] = useState(1);


    const handleActive = (buttons: any) => {
      setClick(buttons.id);
    };

  

  const current = [
    { name: "Wrappers", value: 400 },
    { name: "Protocol", value: 300 },
    { name: "Protocol", value: 300 },
    { name: "Other", value: 200 },
    { name: "Protocol", value: 100 }
  ];


  const total = [
    { name: "Wrappers", value: 2100 },
    { name: "Protocol", value: 500 },
    { name: "Protocol", value: 200 },
    { name: "Other", value: 200 },
    { name: "Protocol", value: 200 }
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
          <PieWrap>
          <ResponsiveContainer height={300}>
            <PieChart>
              <Pie
                dataKey="value"
                nameKey="name"
                isAnimationActive={false}
                data={click === 1 ? currentFeeData : tradeFeeArr}
                outerRadius={'80%'}
              >
                {total.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}

              </Pie>
              <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </PieWrap>
      
      
      
     

      <ChartKey>
        <TradeFeeTable tableId={click}/>

        </ChartKey>

      </Chart>
    
      <div>
        <TotalSynthSupply>Total Synth Supply</TotalSynthSupply>
        <TotalSupplyAmount>
          {`$${totalIssuedSynth}`}
        </TotalSupplyAmount>
        </div>

    </Wrapper>
  )
}

export default TradeFee


export const Wrapper = styled.div`
   grid-area: tradeFee;
   background: rgba(11, 11, 34, 1);
   display: flex;
   flex-direction: column;
   border-radius: 10px;
   padding: 30px 50px 30px 30px;
   border: 2px solid #FFD75C;
   font-family: Arial, Helvetica, sans-serif;
   text-align: left;
   max-width: 100%;
   @media(max-width: 960px){
    margin:0;
    padding:2rem;
  }
`

const Content = styled.div`
@media(max-width: 960px){
        padding: 1rem 0;
    }

`

const Chart = styled.div`
  margin: 0 0;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media(max-width: 960px){
        display:flex;
        flex-direction: column;
        width: 100%;
    }
  
`
const PieWrap = styled.div`
  width:50%;
  @media(max-width:960px){
    width:100%;
  }
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
  @media(max-width: 960px){
    width:100%;
  }
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
  @media(max-width: 960px){
    padding:0;
    font-size:1rem;
  }
`

const TotalSynthSupply = styled.p`
  color: rgba(255,255,255,0.5);
  font-size: 1.5rem;
  text-align: right;
  padding-top: 1rem;
  @media(max-width: 960px){
    padding:1rem;
  }
`
const TotalSupplyAmount = styled.p`
  color: #FFD753;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: right;
  margin:0px;
  @media(max-width: 960px){
    padding:1rem;
  }
`
const ResponsiveWrapper = styled.div`
  display: flex;  
`