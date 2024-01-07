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

export const commonJson = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'Tiki',
  image: {
    '@type': 'ImageObject',
    url: 'https://salt.tikicdn.com/cache/w500/ts/upload/c0/8b/46/c3f0dc850dd93bfa7af7ada0cbd75dc0.png',
    width: 1080,
    height: 1080
  },
  telephone: '19006035',
  url: 'https://tiki.vn/',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '52 Ut Tich, Ward 4, Tan Binh District, Ho Chi Minh City',
    addressLocality: 'Ho Chi Minh',
    postalCode: '700000',
    addressRegion: 'Ho Chi Minh',
    addressCountry: 'VN'
  },
  priceRange: '1000 - 1000000000',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '21:00'
    }
  ],
  geo: { '@type': 'GeoCoordinates', latitude: '10.79664498748942', longitude: '106.65856519879867' }
}
