import useSynthetixQueries from '@synthetixio/queries'
import { useEffect } from 'react'
import useGetGlobalStake from './useGetGlobalStake'

type Props = {}

const useGetSNXrate = () => {

    const { data } = useSynthetixQueries().subgraph.useGetLatestRateById(
        {id:"SNX"},
        {rate:true}
    )

    const snxRate = data?.rate.toNumber() ?? 0

  return {
      snxRate
  }
}

export default useGetSNXrate