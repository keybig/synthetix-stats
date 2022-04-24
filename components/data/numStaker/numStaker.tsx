import styles from './numStaker.module.css'
import styled from 'styled-components'

type Props = {}

const NumStaker = (props: Props) => {
  return (
    <Wrapper>
      Number of Stakers
    </Wrapper>
  )
}

export default NumStaker

const Wrapper = styled.div`
    grid-area: numStaker;
    background: #3a3adc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 10px;
    padding: 30px 50px 30px 30px;
    border: 2px solid #13f2f2;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    line-height:normal;
    font-weight: 700;
    letter-spacing: 0px;
    text-align: left;
`