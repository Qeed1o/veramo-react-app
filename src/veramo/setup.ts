import { createAgent, IResolver } from '@veramo/core'

import { DIDResolverPlugin } from '@veramo/did-resolver'
import { Resolver } from 'did-resolver'
import { getResolver as ethrDidResolver } from 'ethr-did-resolver'
import { getResolver as webDidResolver } from 'web-did-resolver'

// You will need to get a project ID from infura https://www.infura.io
const INFURA_PROJECT_ID = 'c82ba24802674b399347e2f5a55f4799'

export const agent = createAgent<IResolver>({
  plugins: [
    new DIDResolverPlugin({
      resolver: new Resolver({
        ethr: ethrDidResolver({
          networks: [{ name: 'rinkeby', rpcUrl: 'https://rinkeby.infura.io/v3/' + INFURA_PROJECT_ID }],
        }).ethr,
        web: webDidResolver().web,
      }),
    }),
  ],
})
