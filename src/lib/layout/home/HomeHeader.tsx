import Link from 'next/link'
import { getUserInfo } from '@/src/modules/home/controllers/getUserInfo'
import { ROUTES_NAME } from '../../config/routes'

const topNavItems = [{ name: 'FormGPT', path: '/collect_form' }]

const HomeHeader = () => {
  const data = getUserInfo()

  return (
    <header className='bg-[#222236] text-white'>
      <div className='max-w-screen-xl mx-auto flex justify-between items-center p-4'>
        <h1 className='text-3xl font-bold'>LifesupGPT</h1>
        <div className='flex items-center space-x-4 ml-auto'>
          {topNavItems.map(item => (
            <Link key={item.name} href={item.path} className='hover:text-gray-300'>
              {item.name}
            </Link>
          ))}
        </div>
        <div>{data ? <span>Lam</span> : <Link href={ROUTES_NAME.LOGIN}>Login</Link>}</div>
      </div>
    </header>
  )
}

export default HomeHeader
