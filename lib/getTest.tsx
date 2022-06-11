import { getSynthetixById } from "../subgraph-ovm";


const mainnet_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/mainnet-main"
const optimism_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main"

export const snxIssuers = async () => {
    

  const snxAll = await getSynthetixById(
    optimism_url,
    {
        id:"1"
    }, {
        issuers:true
    }
  );
  const numStake = snxAll.issuers.toNumber() * 2

  return numStake
  
}
  
