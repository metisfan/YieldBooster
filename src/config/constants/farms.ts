import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'WEAVE-WAVAX LP',
    lpAddresses: {
      43114: '0xc6Cd70AdD4525B7750C7185fDE77193E8CD082C4',
      97: '',
    },
    tokenSymbol: 'WEAVE',
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
    isTokenOnly: true,
    lpSymbol: 'WEAVE',
    lpAddresses: {
      43114: '0xc6Cd70AdD4525B7750C7185fDE77193E8CD082C4', // TODO
      97: '', // WEAVE-WAVAX LP
    },
    tokenSymbol: 'WEAVE',
    tokenAddresses: {
      43114: '0xF66279e277b7Ad640081272080E77c496edb1C1f',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WAVAX,
    quoteTokenAdresses: contracts.wavax,
  },
  {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'WEAVE',
    lpAddresses: {
      43114: '0xc6Cd70AdD4525B7750C7185fDE77193E8CD082C4', // TODO
      97: '', // WEAVE-WAVAX LP
    },
    tokenSymbol: 'WEAVE',
    tokenAddresses: {
      43114: '0xF66279e277b7Ad640081272080E77c496edb1C1f',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WAVAX,
    quoteTokenAdresses: contracts.wavax,
  },
  {
    pid: 3,
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
  {
    pid: 4,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'USDC.e',
    lpAddresses: {
      43114: '0xA389f9430876455C36478DeEa9769B7Ca4E3DDB1',
      97: '', // WAVAX-USDC.e
    },
    tokenSymbol: 'USDC.e',
    tokenAddresses: {
      43114: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WAVAX,
    quoteTokenAdresses: contracts.wavax,
  },

  {
    pid: 5,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT.e',
    lpAddresses: {
      43114: '0xed8cbd9f0ce3c6986b22002f03c6475ceb7a6256',
      97: '', // WAVAX-USDT
    },
    tokenSymbol: 'USDT.e',
    tokenAddresses: {
      43114: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WAVAX,
    quoteTokenAdresses: contracts.wavax,
  },
  {
    pid: 6,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      43114: '0x87dee1cc9ffd464b79e058ba20387c1984aed86a',
      97: '', // WAVAX-DAI LP
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      43114: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WAVAX,
    quoteTokenAdresses: contracts.wavax,
  },
  {
    pid: 7,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'MIM',
    lpAddresses: {
      43114: '0x781655d802670bba3c89aebaaea59d3182fd755d',
      97: '', // WAVAX-MIM LP
    },
    tokenSymbol: 'MIM',
    tokenAddresses: {
      43114: '0x130966628846bfd36ff31a822705796e8cb8c18d',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WAVAX,
    quoteTokenAdresses: contracts.wavax,
  },
  {
    pid: 8,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'JOE',
    lpAddresses: {
      43114: '0x454e67025631c065d3cfad6d71e6892f74487a15',
      97: '', // WAVAX-JOE LP
    },
    tokenSymbol: 'JOE',
    tokenAddresses: {
      43114: '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WAVAX,
    quoteTokenAdresses: contracts.wavax,
  },
  {
    pid: 9,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'WBTC.e',
    lpAddresses: {
      43114: '0xd5a37dc5c9a396a03dd1136fc76a1a02b1c88ffa',
      97: '', // WAVAX-WBTC.e LP
    },
    tokenSymbol: 'WBTC.e',
    tokenAddresses: {
      43114: '0x50b7545627a5162F82A992c33b87aDc75187B218',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WAVAX,
    quoteTokenAdresses: contracts.wavax,
  },
  {
    pid: 10,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'WETH.e',
    lpAddresses: {
      43114: '0xfe15c2695f1f920da45c30aae47d11de51007af9',
      97: '', // WAVAX-WETH.e LP
    },
    tokenSymbol: 'WETH.e',
    tokenAddresses: {
      43114: '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WAVAX,
    quoteTokenAdresses: contracts.wavax,
  },
]

export default farms
