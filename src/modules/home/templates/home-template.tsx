import { Blog, Intro } from '../components'

const HomeTemplate = () => {
  return (
    <main className='flex min-h-screen min-w-screen flex-col items-center'>
      <section id='home' className='features'>
        <Intro />
      </section>
      <section id='blog' className='features'>
        <Blog />
      </section>
    </main>
  )
}

export default HomeTemplate
