import { Metadata, ResolvingMetadata } from 'next'
import BlogDetailTemplate from '@/src/modules/blog/templates/blog-detail-template'
import { getBlogDetail } from '@/src/lib/data/blog'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const id = params.slug

  const { blog } = await getBlogDetail(id)

  return {
    title: blog.title,
    description: blog.description
  }
}

export default function BlogDetail({ params }: { params: { slug: string } }) {
  return <BlogDetailTemplate id={params.slug} />
}
