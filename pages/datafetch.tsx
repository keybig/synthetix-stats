import synthetix from '@synthetixio/contracts-interface'
import useSynthetixQueries from '@synthetixio/queries'
import { useSNXData } from '@synthetixio/queries/build/node/generated/queryFuncs'
import Wei, { wei } from '@synthetixio/wei'
import { ethers } from 'ethers'
import { useEffect } from 'react'
import { arrayBuffer } from 'stream/consumers'
import styled from 'styled-components'
import useGetBlock from '../hooks/useGetBlock'
import { RealTest, TimeGoTest } from '../components/data/tvl/times'
import useGetTVL from '../hooks/useGetTVL'
import useGetTradeActivity from '../hooks/useGetTradeActivity'


type Props = {
}

  // Use the mainnet
  const network = "homestead";

  // Specify your own API keys
  // Each is optional, and if you omit it the default
  // API key for that service will be used.
  const provider = ethers.getDefaultProvider(network, {
      etherscan: "4YCUHXX2TCJPD6IFYSSI7DCX62QUZCSIUC",
  });


const datafetch = (props: Props) => {

/*
const { currentTradeDataArr } = useGetTradeActivity()
const { kwentaVolSum } = useGetTradeActivity()
const { kwentaTradeSum } = useGetTradeActivity()

console.log(kwentaTradeSum)
console.log(kwentaVolSum)
//console.log(currentTradeDataArr)



const blockNum = useGetBlock()

const dayTvlBal = useGetTVL()

console.log(dayTvlBal)


const { subgraph } = useSynthetixQueries()

// SNX Staked
// Percent Staked, Total Staked, Staked Value

const totalofSNX = subgraph.useGetSynthetixById(
  {id: "1"},
  {issuers:true, snxHolders:true}
)

const totalStaked = totalofSNX?.data?.issuers.toNumber()

const totalHolder = totalofSNX?.data?.snxHolders.toNumber()
//@ts-ignore
const percentStaked = `${(totalStaked / totalHolder).toFixed(2).substring(2)}%`

const result = subgraph.useGetDebtStates(
    { first: 1, orderBy: 'timestamp', orderDirection: 'desc' },
    { totalIssuedSynths: true },
  )

  const totalSNX = useSynthetixQueries().subgraph.useGetSynthByCurrencyKeys(
      { first: 5},
      { id: true, proxyAddress: true},
  )

  const feesy = useSynthetixQueries().subgraph.useGetFeePeriods(
    { orderBy:"startTime", orderDirection: "desc", first:5 },
    { id: true, startTime: true, feesClaimed: true, feesToDistribute: true, rewardsClaimed: true, rewardsToDistribute: true }
  )

  //const es = JSON.stringify(feesy.data)
  //console.log(es)

console.log(TimeGoTest.currentDay)
console.log(`hours${TimeGoTest.noHourAgo}`)
 

const staky = useSynthetixQueries().subgraph.useGetTotalActiveStakers(
  {first: 1},
  {id: true, count: true}
)

const allStaked = subgraph.useGetSNXHolders(
  {where:{initialDebtOwnership_not:0},orderBy:'collateral',orderDirection:"desc",first:8000},
  { collateral:true, transferable:true},
)

const collat:any = []
const transfer:any = []
const holding:any = []

allStaked.data?.forEach(item => {
  for (let key in item) {
     key === "collateral" ? 
      collat.push(item[key]?.toNumber()) : 
      key === "transferable" ? transfer.push(item[key]?.toNumber()) : 
      null
  }
});

const stakeCalc = collat.reduce((sum:number, current:number) => sum + current, 0)-transfer.reduce((sum:number, current:number) => sum + current, 0)

const stakeAmount = stakeCalc.toFixed(2)

const crazy = subgraph.useGetDebtStates(
  {orderBy:"timestamp", orderDirection:"desc", first:1},
  {totalIssuedSynths:true}
)


const debtCall = subgraph.useGetDebtStates(
  {orderBy:"timestamp", orderDirection:"desc", first:3},
  {totalIssuedSynths:true, timestamp:true}
).data?.forEach(item => {
  console.log('hello')
})


const wrapperCall = subgraph.useGetWrappers(
  {first:3, block:{number:7832932}},
  {amount:true, amountInUSD:true}
)

const wrapperBal:number[] = []

wrapperCall.data?.forEach(item =>{

  wrapperBal.push(item.amountInUSD.toNumber())

})

const newWrapperCall = subgraph.useGetWrappers(
  {first:3, block:{number:8132932}},
  {amount:true, amountInUSD:true}
)

const newWrapperBal:number[] = []

newWrapperCall.data?.forEach(item =>{

  newWrapperBal.push(item.amountInUSD.toNumber())

})

*/

  return (
    <Background>
    
     
    </Background>
  )
}

const Background = styled.div`
  background-color: white;
`

export default datafetch

