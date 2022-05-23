import {synthetix, NetworkId, NetworkNameById} from '@synthetixio/contracts-interface'
import { useEffect } from 'react';
import styled from 'styled-components'
import hello from './hello';

type Props = {

}

const contract = (props: Props) => {
/*
    const snxjs = synthetix({ network: 'mainnet' });

    // If you want to interact with a contract, simply follow the convention:
    // await snxjs[contractName].methodName(arguments)
 
    const owner = snxjs.contracts.Synthetix.owner();

    console.log(owner)
    
    // many arguments require being formatted toBytes32, which we also provide with the library
    
    const { toBytes32 } = snxjs;
    
    const totalIssuedSynths = snxjs.contracts.Synthetix.totalIssuedSynths(toBytes32('sUSD'));
    
    // We also expose ethers utils which provides handy methods for formatting responses to queries.
    const { formatEther } = snxjs.utils;
    
    formatEther( snxjs.contracts.SynthsUSD.totalSupply());
    
    formatEther( snxjs.contracts.ExchangeRates.rateForCurrency(snxjs.toBytes32('SNX')));
    
    // Note can optionally pass in a { blockTag: someBlockNumber } to get data from a specific block instead of {}
    const snxAtBlock12m =  snxjs.contracts.ExchangeRates.rateForCurrency(snxjs.toBytes32('SNX'), {
      blockTag: 12e6,
    });

    
    useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third])
    */
    




  return (
      <Background>
    <div>contract</div>
    <p> 
      
    </p>
    </Background>
  )
}

export default contract

const Background = styled.div`
  background-color: white;
`