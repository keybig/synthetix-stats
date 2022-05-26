import { NetworkId } from '@synthetixio/contracts-interface'
import { useState } from 'react'

type Props = {
    net: NetworkId
}

const useNetwork = (props:NetworkId) => {

  const [netId, setNetId] = useState<NetworkId>(10)

  const updateNetId = () => {
    setNetId(props)
  }  

  return netId
}

export default useNetwork