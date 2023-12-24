export const menus = [
  { name: 'Product', id: 'home' },
  { name: 'Inventory', id: 'testnet', link: 'https://app.titanhunters.io/my-inventory' },
  { name: 'Video Reviews', id: 'videoReviews' },
  { name: 'Gameplay', id: 'gamePlay' },
  { name: 'Blog', id: 'blog', path: '/blog', link: '/blog' },
  {
    name: 'More',
    subMenus: [
      { name: 'About us', id: 'aboutUs' },
      { name: 'Game Teaser', id: 'gameTeaser' },
      { name: 'Character', id: 'characters' },
      { name: 'Game Token', id: 'gameToken' },
      { name: 'Invest To earn', id: 'invest' },
      { name: 'Roadmap', id: 'roadMap' },
      { name: 'Tokenomics', id: 'tokenomics' },
      { name: 'Vesting', id: 'vesting' },
      { name: 'Token Allocation', id: 'tokenAllocation' },
      { name: 'Team', id: 'team' },
      { name: 'Partners', id: 'partners' }
    ]
  }
]
