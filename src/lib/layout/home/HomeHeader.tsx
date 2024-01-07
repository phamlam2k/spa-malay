import Link from 'next/link'
import dynamic from 'next/dynamic'
const topNavItems = [{ name: 'FormGPT', path: '/collect_form' }]

const UserInfo = dynamic(() => import('./UserInfo'), {
  ssr: false,
  loading: () => <div className='w-[100px] h-[40px] bg-white ml-3'></div>
})

const HomeHeader = () => {
  return (
    <header className='bg-[#22223649] text-white fixed w-full'>
      <div className='max-w-screen-xl mx-auto flex justify-between items-center p-4'>
        <h1 className='text-3xl font-bold'>SpaMalay</h1>
        <div className='flex items-center space-x-4 ml-auto'>
          {topNavItems.map(item => (
            <Link key={item.name} href={item.path} className='hover:text-gray-300'>
              {item.name}
            </Link>
          ))}
        </div>
        <UserInfo />
      </div>
    </header>
  )
}

export default HomeHeader
