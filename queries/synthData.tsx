import useSynthetixQueries from '@synthetixio/queries'
import { synthetix } from '@synthetixio/contracts-interface';
import { useState, useEffect } from 'react';


export default function SynthData() {

  const [stateya, setStateya] = useState("test")

  const { subgraph } = useSynthetixQueries()
  const result = subgraph.useGetDebtStates(
    { first: 1, orderBy: 'timestamp', orderDirection: 'desc' },
    { totalIssuedSynths: true },
  )

  const newTest = subgraph.useGetExchangeFees(
    {first: 5},
    {id: true, fee: true}
  )

  console.log(newTest.data)
  
  useEffect(() => {
    
    const ya = async () => {
      try {
      const totalSNX = await snxjs.contracts.Synthetix.totalSupply()
      const totalSNXSupply = snxjs.utils.formatEther(totalSNX);
      console.log('snxTotalSupply', totalSNXSupply);
      return setStateya(totalSNXSupply)
      }
      catch(e) {
        console.log(e)
  
      }
    };

    ya()
  
  }, [])
  
  
  const snxjs = synthetix({ networkId: 1 });
  const { toBytes32 } = snxjs
  const { formatEther } = snxjs.utils;

  const yo = snxjs.contracts.Synthetix.totalSupply()





  return (
    <div>
       <strong>Value of Total Issued Synths:</strong>{' '}
      {result.isSuccess
        ? result.data[0].totalIssuedSynths.toNumber().toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })
        : 'Loading...'}
        {newTest.isSuccess
        ? newTest.data[1].id : 'hello'}
        <p>{stateya}</p>
    </div>
  )
}