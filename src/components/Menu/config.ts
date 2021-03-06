import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'xYieldbooster LOCK',
   icon: 'TradeIcon',
   items: [
     {
       label: 'Comming Soon',
        href: '#',
      },
   //   {
   //     label: 'Liquidity',
   //     href: 'https://spookyswap.finance/',
   //   },
    ],
  },
  {
    label: 'Boosted Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Boosted Pools',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
 // {
 //   label: 'Play 2 Earn & AirDrop',
 //   icon: 'InfoIcon',
  //  items: [
  //    {
  //      label: 'PreSale',
  //      href: '',
  //    },
  //    {
  //      label: 'Play 2 Earn coming soon',
  //      href: '#',
  //    },
   //   {
  //      label: 'AirDrop',
   //     href: '#',
  //    },
 //   ],
 // },
  {
    label: 'Docs',
    icon: 'MoreIcon',
    items: [
      {
        label: 'DexScreener',
        href: ' ',
      },
      {
        label: 'Docs',
        href: 'https://gitbook.yieldbooster.finance/',
      },
    ],
  },
]

export default config
