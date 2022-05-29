import useSynthetixQueries from '@synthetixio/queries'
import { useEffect } from 'react'
import useGetGlobalStake from './useGetGlobalStake'
import useGetSNXrate from './useGetSNXrate'
import { formatNumber, formatPercent } from '../constants/format'

type Props = {}



const useGetAPY = () => {

  //stakecalc = collateral - transferable

  const { stakeCalc } = useGetGlobalStake()
  const { subgraph } = useSynthetixQueries()
  const { snxRate } = useGetSNXrate()



  const currentFeePeriods = subgraph.useGetFeePeriods(
    {orderBy:"startTime", orderDirection:"desc"},
    { feesClaimed:true, feesToDistribute:true, startTime:true, rewardsClaimed:true, rewardsToDistribute:true},
    )

    
    const startTime = currentFeePeriods.isSuccess ? currentFeePeriods.data[0].startTime.toNumber() : null
    const reward = currentFeePeriods.isSuccess ? currentFeePeriods.data[0].rewardsToDistribute.toNumber() : 0
    const fee = currentFeePeriods.isSuccess ? currentFeePeriods.data[0].feesToDistribute.toNumber() : 0

     const rewardsAmount = currentFeePeriods.data?.reduce((sum:any, current:any)=>{
       return sum + current.rewardsToDistribute.toNumber()
     },0)

     const feesAmount = currentFeePeriods.data?.reduce((sum, current)=>{
      return sum + current.feesToDistribute.toNumber()
    },0)


      const stakeAPYAmt = ( (fee / (snxRate * stakeCalc) * 52) + ( (reward / stakeCalc) * 52))

       
      const allTimeInflation = formatNumber.format(rewardsAmount)

      const currentReward = formatNumber.format(reward)
      
      const APY = formatPercent.format(stakeAPYAmt)

      const inflationData = currentFeePeriods.data?.slice(0,6).map(item=>{
        return { snx_rewards: item.rewardsToDistribute.toNumber()}
      }).reverse()

  return {
      APY,
      currentReward,
      allTimeInflation,
      startTime,
      inflationData,
  }
}

export default useGetAPY