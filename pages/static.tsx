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



export async function getStaticProps() {

  const mainnet_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/mainnet-main"
  const optimism_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main"
  const { times } = getTime()

    const blocks = await blocky()


    const fetchyTVL = await getTvl()
  




    return { props: {
      fetchyTVL
    }  }
  }
  

const Static = (props:any) => {

  



  return (
    <div style={{background:"white"}}>
   

   
 
      
       <h5>
 
       </h5>
      

     
      


      

      

    
    </div>
  )
}

export default Static