import React, { useEffect, useState } from 'react'
import './App.css'

import { agent } from './veramo/setup'

interface didUrl {
  namespace: string,
  network?: string,
  id: string,
}
const createDIDUri = ({namespace, network, id} : didUrl) => network ? `did:${namespace}:${network}:${id}` : `did:${namespace}:${id}`


function App() {
  const [didDoc, setDidDoc] = useState<any>()

  const resolve = async () => {
    const doc = await agent.resolveDid({
      didUrl: createDIDUri({namespace: "ethr", network: "rinkeby", id: "0x6acf3bb1ef0ee84559de2bc2bd9d91532062a730"}),
      //'did:ethr:rinkeby:0x6acf3bb1ef0ee84559de2bc2bd9d91532062a730',
      
      // didUrl: createDIDUri({namespace: "web", id: "alice", network: "did.actor"})
      //"did:web:did.actor:alice",
    })

    setDidDoc(doc)
  }

  useEffect(() => {
    resolve()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <pre id="result">{didDoc && JSON.stringify(didDoc, null, 2)}</pre>
      </header>
    </div>
  )
}

export default App
