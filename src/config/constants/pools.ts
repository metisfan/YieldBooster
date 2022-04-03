import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 2,
    tokenName: 'WAVAX',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0xF66279e277b7Ad640081272080E77c496edb1C1f',
    contractAddress: {
      43114: '',
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.yieldbooster.finance/',
    harvest: true,
    tokenPerBlock: '0.00001', // TODO: To be updated
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  // {
  //   sousId: 1,
  //   tokenName: 'TWT',
  //   stakingTokenName: QuoteToken.SYRUP,
  //   stakingTokenAddress: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
  //   contractAddress: {
  //     97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //     56: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://trustwallet.com/',
  //   harvest: true,
  //   tokenPerBlock: '20',
  //   sortOrder: 999,
  //   isFinished: true,
  //   tokenDecimals: 18,
  // },
]

export default pools
