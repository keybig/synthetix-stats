import NetworkNavBar from '../components/network/NetworkNavBar'
import Subheader from '../components/subheader/Subheader'
import { useContext, useState } from 'react'
import { NetworkId } from '@synthetixio/contracts-interface'
import { useRouter } from 'next/router'
import { request, gql } from 'graphql-request'
import { arrayBuffer } from 'stream/consumers'
import { getDebtStates, getRateUpdates } from '../subgraph-ovm'
import getTime from '../lib/getTime'
import { blocky } from '../lib/getBlocky'
import { getTvl } from '../lib/getTVLy'
import { activa } from '../lib/getTradeActivitas'



export async function getStaticProps() {

  const mainnet_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/mainnet-main"
  const optimism_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main"
  const { times } = getTime()

    const blocks = await blocky()


    const tradeStat = await activa()
    console.log(tradeStat.tradeDataMain)
    console.log(tradeStat.tradeDataOvm)




    return { props: {
      tradeStat
    }  }
  }
  

const Static = (props:any) => {

  return (
    <div style={{background:"white", fontSize:"2rem"}}>
   

   
      

     
      


      

      

    
    </div>
  )
}

export default Static