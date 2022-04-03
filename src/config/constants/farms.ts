import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'YIELDBOOSTER-WAVAX LP',
    lpAddresses: {
      43114: '0xc6Cd70AdD4525B7750C7185fDE77193E8CD082C4',
      97: '',
    },
    tokenSymbol: 'YIELDBOOSTER',
    tokenAddresses: {
      43114: '0xF66279e277b7Ad640081272080E77c496edb1C1f',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WAVAX,
    quoteTokenAdresses: contracts.wavax,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'YIELDBOOSTER-USDC.e LP',
    lpAddresses: {
      43114: '0x30EfC95a11d6ed30184fb81C124C5d8E7Ef490f3',
      97: '',
    },
    tokenSymbol: 'YIELDBOOSTER',
    tokenAddresses: {
      43114: '0xF66279e277b7Ad640081272080E77c496edb1C1f',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
   {
    pid: 2,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'WAVAX',
    lpAddresses: {
      43114: '0xA389f9430876455C36478DeEa9769B7Ca4E3DDB1',
      97: '', // WAVAX-USDC.e
    },
    tokenSymbol: 'WAVAX',
    tokenAddresses: {
      43114: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
]

export default farms
