'use client'

import { useRouter } from 'next/navigation'

const BlogItem = ({ item }: { item: any }) => {
  const router = useRouter()
  const onClick = (id: string) => {
    router.push(`/blog/${id}`)
  }

  return (
    <div
      className='bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2 my-20'
      key={item.useId}
      onClick={() => onClick(item.id)}
    >
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <div className='md:w-1/2'>
          <div className='max-w-md'>
            <h2 className='text-gray-800 text-3xl font-semibold'>{item.title}</h2>
            <p className='mt-2 text-gray-600'>{item.description}</p>
          </div>
        </div>
        <div className='md:w-1/2'>
          <img
            src={item.photo_url}
            className='w-full h-64 object-cover mt-6 rounded-md shadow-lg md:mt-0'
            alt={item.title}
          />
        </div>
      </div>
    </div>
  )
}

export default BlogItem
