import { getBlogDetail } from '@/src/lib/data/blog'

const BlogDetailTemplate = async ({ id }: { id: string }) => {
  const { blog } = await getBlogDetail(id)

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
