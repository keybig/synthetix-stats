import Datagrid from '../components/data/Datagrid'
import NetworkNavBar from '../components/network/NetworkNavBar'
import Subheader from '../components/subheader/Subheader'
import useSynthetixQueries, {
  createQueryContext,
  SynthetixQueryContext,
  SynthetixQueryContextProvider,
} from '@synthetixio/queries'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useContext, useState } from 'react'
import { NetworkId } from '@synthetixio/contracts-interface'
import { useRouter } from 'next/router'
import { request, gql } from 'graphql-request'
import { arrayBuffer } from 'stream/consumers'
import useGetBlock from '../hooks/useGetBlock'
import { getDebtStates, getSNXHolders, getSynthetixById, getTotalActiveStakers } from '../subgraph-ovm'
import { snxIssuers } from '../lib/getTest'
import { blocky } from '../lib/getBlock'
import { staking } from '../lib/getStaker'
import { getTvl } from '../lib/getTvl'




export async function getStaticProps() {

  const stakeParent = await staking()
  const percentStaked = (await staking()).percentStaked
  const snxStaked = (await staking()).snxStaked
  const snxRate = (await staking()).snxRate
  const apy = (await staking()).apy

  const wrapper = (await getTvl()).currentWrapper

  // tests below, keep above

  const mainnet_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/mainnet-main"
  const optimism_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main"

  const blocks = await blocky()

    const currentDebtCall = await getDebtStates(
        optimism_url,
        {
          orderBy: "timestamp",
          orderDirection: "desc",
          first: 1,
          block: { number: blocks.currentBlock },
        },
        { debtEntry: true, totalIssuedSynths: true },
      );
    
      const currentDebtEntry = currentDebtCall[0].debtEntry.toNumber()
      const totalSynths = currentDebtCall[0].totalIssuedSynths.toNumber()

      console.log(`current debt: ${currentDebtEntry}`)
      console.log(`total synths: ${totalSynths}`)


    return { props: {
        stakeParent,
        snxRate,
        snxStaked,
        percentStaked,
        apy
    }  }
  }
  

const Static2 = (props:any) => {


  return (
  <div style={{background:"white", fontSize:"2rem"}}>
    <h5> The Static Data Fetching Test yo Area</h5>

    <div>
      <p> SNX Staking Grid </p>
      <p>
        {props.stakeParent.percentStaked}
        </p>
        <p>
        {props.stakeParent.snxStaked}
        </p>
        <p>
        {props.stakeParent.snxRate * props.stakeParent.snxStaked}
      </p>
    </div>


    <div>
      <p> SNX Staking APY Grid</p>
      <p> {props.apy}</p>
    </div>

    <div>
      <p> SNX Total Value Locked Grid</p>
      <p> TVL Placeholder</p>
      <p> Debt Placeholder</p>
      <p> Wrapper Placeholder</p>
      <p> chart placeholder</p>
    </div>

    
  </div>
  )
}

export default Static2