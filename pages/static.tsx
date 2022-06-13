import NetworkNavBar from '../components/network/NetworkNavBar'
import Subheader from '../components/subheader/Subheader'
import { useContext, useState } from 'react'
import { NetworkId } from '@synthetixio/contracts-interface'
import { useRouter } from 'next/router'
import { request, gql } from 'graphql-request'
import { arrayBuffer } from 'stream/consumers'



export async function getStaticProps() {

  const mainnet_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/mainnet-main"
  const optimism_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main"

  const booyah = 50

  const totalStaka = await
    fetch(mainnet_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
          query {
            synthetixes(
              first:1
            ){
              id
              issuers
            }
  }
        `,
    }),
  })
  
 
  console.log(totalStaka)


const totalStaker = async() => {
  return fetch('https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `
        query {
          snxholders(
            orderBy:timestamp
            orderDirection:desc
            skip:3000
            first:1000
          ){
            id
            initialDebtOwnership
            timestamp
            block
          }
}
      `,
  }),
})
  .then((res) => res.json())
}

const {data} = await totalStaker() // destructure data to get 


    return { props: {
      data,
      booyah
    }  }
  }
  

const Static = (props:any) => {

  console.log(JSON.stringify(props.data.snxholders)) // 

  const test = props.data.snxholders // 
  console.log(test)
  const test2 = test.forEach((item: { [x: string]: any }) => {
    console.log(`i ${item}`)
  });
  

  const test3 = props.data.snxholders[0]// 
  console.log(test3)

  console.log(props.data.snxholders.length)



  return (
    <div style={{background:"white"}}>
   

    <p>hi</p>
      
       <h5>
 
       </h5>
      

     
      


      

      

    
    </div>
  )
}

export default Static