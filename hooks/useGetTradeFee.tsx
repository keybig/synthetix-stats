import useSynthetixQueries from '@synthetixio/queries'
import useGetGlobalStake from './useGetGlobalStake'
import useGetAPY from './useGetAPY'
import { useMemo, useState } from 'react'
import { arrayBuffer } from 'stream/consumers'
import useGetTradeActivity from './useGetTradeActivity'

type Props = {}

const useGetTradeFee = () => {

    const { subgraph } = useSynthetixQueries()
    const { startTime } = useGetAPY()
    const { currentEpochTradeData } = useGetTradeActivity()

    const tradeFeeArr:any[] = []
    const totalTradeFeeArr:number[]=[]




    //@ts-ignore
    const currentEpochTime = startTime + 604800

    const formatNumber = Intl.NumberFormat("en-US")
    const formatMoney = Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"usd"
    })

    // all time trade info

    /* wrappers

    const allTimeWrapperCall = subgraph.useGetWrappers(
      {first:3},
      {amountInUSD:true}
    )
    const allTimeWrapperArr:number[]=[]

    allTimeWrapperCall.data?.forEach(item =>{
      allTimeWrapperArr.push(item.amountInUSD.toNumber())
    })

    const allTimeWrapperVal = allTimeWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    const wrapper = {
      name: "Wrappers",
      value: allTimeWrapperVal
    }

    tradeFeeArr.push(wrapper)

    //*/

    // total wrapper object

  


    const tradeFeeCall = subgraph.useGetExchangePartners(
        {orderBy:"usdVolume", orderDirection:"desc"},
        {id:true, usdFees:true},
        {queryKey:"tradeFeeCall"}
    )
    
   tradeFeeCall.data?.forEach(item => {
      const id = item.id
      const fees = item.usdFees.toNumber()
      const obj = {
            name: id,
            value: fees,
        }
      tradeFeeArr.push(obj)
    })

  // current fee call

  const currentFeeDataArr:any[] = []
  const currentTotalFeeArr:number[] = []

  const currentFeeCall = currentEpochTradeData.data?.forEach(item=>{
    currentTotalFeeArr.push(item.usdFees.toNumber())
    const id = item.partner
    const fees = item.usdFees.toNumber()
    const obj = {
      name: id,
      value: fees
    }
    currentFeeDataArr.push(obj)
  })


  const currentFeeData = currentFeeDataArr.reduce((acc, cur) => {
    const {name, value} = cur;                            
    const item = acc.find((it: { name: string }) => it.name === name);        
    item ? item.value += value : acc.push({name, value}); 
    return acc;                                          
  } , []);
 
  const totalIssuedSynthCall = subgraph.useGetDebtStates(
    {first:1, orderBy:"timestamp", orderDirection:"desc"},
    {totalIssuedSynths:true}
  )

  const totalIssuedSynth = totalIssuedSynthCall.isSuccess ? 
        formatNumber.format(totalIssuedSynthCall.data[0].totalIssuedSynths.toNumber()) : null
  
  const currentTotalFee = currentTotalFeeArr.reduce((sum:number, current:number)=> sum + current, 0)

  

    


  return {
      tradeFeeArr,
      currentFeeData,
      totalIssuedSynth,
      currentTotalFee
  }
}

export default useGetTradeFee

/*
{
            col1: 'Lyra',
            col2: '967,543,123',
            col3: '8,000,000,000'
          },
          {
            col1: 'Thales',
            col2: '132,765,432',
            col3: '1,000,000,000'
          },
          {
            col1: 'Kwenta',
            col2: '925,654,321',
            col3: '14,000,000,000'
          },
*/