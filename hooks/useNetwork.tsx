import { NetworkId } from '@synthetixio/contracts-interface'
import { useState } from 'react'
import { synthetix } from '@synthetixio/contracts-interface';

type Props = {
    net: NetworkId
}

const useNetwork = () => {

  const snxjs = synthetix({ network: 'mainnet-ovm' });

// If you want to interact with a contract, simply follow the convention:
// await snxjs[contractName].methodName(arguments)


  async function name(params:any) {
    
  

const owner = await snxjs.contracts.Synthetix.owner();

// many arguments require being formatted toBytes32, which we also provide with the library

const { toBytes32 } = snxjs;

const totalIssuedSynths = await snxjs.contracts.Synthetix.totalIssuedSynths(toBytes32('sUSD'));

// We also expose ethers utils which provides handy methods for formatting responses to queries.
const { formatEther } = snxjs.utils;

const totalsupa = formatEther(await snxjs.contracts.SynthsUSD.totalSupply());
const totalsup = console.log(totalsupa)

const exchangerate = formatEther(await snxjs.contracts.ExchangeRates.rateForCurrency(snxjs.toBytes32('SNX')));
const ecx = console.log(exchangerate)
// Note can optionally pass in a { blockTag: someBlockNumber } to get data from a specific block instead of {}
const snxAtBlock12m = await snxjs.contracts.ExchangeRates.rateForCurrency(snxjs.toBytes32('SNX'), {
  blockTag: 12e6,
});
  return {
    totalsup,
    ecx
  }
  }

  return {

  name

  }
}

export default useNetwork