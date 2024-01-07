import { getBlogPosts } from '@/src/lib/data/blog'
import BlogItem from '../BlogItem'

interface Props {
  className?: string | undefined
}

const Blog = async ({ className }: Props) => {
  const res = await getBlogPosts()

  return (
    <div className={className}>
      <div className='min-h-screen flex items-center'>
        <div className='container mx-auto px-6 flex flex-col justify-center items-center relative'>
          {res.blogs.map((item: any, index: number) => {
            return <BlogItem item={item} key={`${item.user_id}_${index}`} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Blog
