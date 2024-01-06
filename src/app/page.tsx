import HomeFooter from '../lib/layout/home/HomeFooter'
import HomeHeader from '../lib/layout/home/HomeHeader'
import HomeTemplate from '../modules/home/templates/home-template'

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeTemplate />
      <HomeFooter />
    </>
  )
}
