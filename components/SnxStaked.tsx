import styled from 'styled-components'

type Props = {}

const SnxStaked = (props: Props) => {
  return (
      <>
      <StakeWrap>
          <h3>SNX Staked</h3>
          <p>65%</p>
          <h3>Total SNX Staked</h3>
          <p>100,000,000</p>
      </StakeWrap>
    
      </>
  )
}

const StakeWrap = styled.div`
  grid-row: 4 / auto;
  grid-column: 1;
  background: #13d908;
  max-height: 100%;
  display: flex;
  flex-direction: column;
`



export default SnxStaked