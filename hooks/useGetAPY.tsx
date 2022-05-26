import useSynthetixQueries from '@synthetixio/queries'
import { useEffect } from 'react'
import useGetGlobalStake from './useGetGlobalStake'

type Props = {}



const useGetAPY = () => {

  const { stakeCalc } = useGetGlobalStake()
    const { subgraph } = useSynthetixQueries()



const currentFeePeriods = subgraph.useGetFeePeriods(
  {orderBy:"startTime", orderDirection:"desc"},
  { feesClaimed:true, feesToDistribute:true, startTime:true, rewardsClaimed:true, rewardsToDistribute:true},
  )

    

    const formatPercent = Intl.NumberFormat("en-US", {
      style: "percent",
  });

    const formatNumber = Intl.NumberFormat("en-US")
    
    const startTime = currentFeePeriods.isSuccess ? currentFeePeriods.data[0].startTime.toNumber() : null

    const currentRate = subgraph.useGetRateUpdates(
        { first:1, orderBy:"timestamp", orderDirection:"desc", where:{
          synth:"SNX",
        }},
        { timestamp:true, block:true, rate:true}
      )
      
      const rewardsAmt:number[] = []
      const feeAmt:number[] = []
      const currentRateSNX:number[] = []
      const inflationAmt:number[] = []
      
      const getFeeData = currentFeePeriods.data?.forEach(item=>{
        rewardsAmt.push(item.rewardsToDistribute.toNumber())
        feeAmt.push(item.feesToDistribute.toNumber())
      })

      const currentPriceSNX = currentRate.data?.forEach(item=>{
          currentRateSNX.push(item.rate.toNumber())
      })

      const snxRate = currentRateSNX[0]

      const valStake = snxRate * stakeCalc

      const feeAPYAmt = (feeAmt[0] / valStake) * 52

      const rewardsAPYAmt = (rewardsAmt[0] / stakeCalc) * 52

      const stakeAPYAmt = feeAPYAmt + rewardsAPYAmt

      const allTimeRewards = rewardsAmt.reduce((sum:number,current:number) => sum + current, 0)
       
      const allTimeInflation = formatNumber.format(allTimeRewards)

      const currentReward = formatNumber.format(rewardsAmt[0])
      
      const APY = formatPercent.format(stakeAPYAmt)
  return {
      APY,
      currentReward,
      allTimeInflation,
      rewardsAmt,
      startTime
  }
}

export default useGetAPY