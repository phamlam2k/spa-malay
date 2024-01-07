interface Props {
  className?: string | undefined
}

const Intro = ({ className }: Props) => {
  return (
    <div className={className}>
      <div className="min-h-screen flex items-center bg-cover bg-[url('/images/spa_intro.webp')]">
        <div className='container mx-auto px-6 flex flex-col justify-center items-center relative'>
          <h1 className='font-bold text-5xl text-white text-center'>SpaMalay</h1>
          <h2 className='font-bold text-2xl text-white text-center mb-8'>Booking để có trải nghiệm tốt hơn</h2>
          <a
            className='bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-gray-200'
            href='#'
          >
            Tìm hiểu thêm
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro
