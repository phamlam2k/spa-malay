import { ROUTES_NAME } from '@/src/lib/config/routes'
import { getBlogDetail } from '@/src/lib/data/blog'
import { redirect } from 'next/navigation'

const BlogDetailTemplate = async ({ id }: { id: string }) => {
  const { blog } = await getBlogDetail(id)

  if (!blog) {
    return redirect(ROUTES_NAME.HOME)
  }

  return (
    <div>
      <img src={blog.photo_url} style={{ objectFit: 'cover' }} alt={blog.image} width={500} height={500} />
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <p>{blog.content_text}</p>
    </div>
  )
}

export default BlogDetailTemplate
