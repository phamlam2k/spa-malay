import { Metadata, ResolvingMetadata } from 'next'
import BlogDetailTemplate from '@/src/modules/blog/templates/blog-detail-template'
import { getBlogDetail } from '@/src/lib/data/blog'
import { getIdItemBySlug } from '@/src/lib/utils/functions'
import { title } from 'process'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const id = getIdItemBySlug(params.slug)

  const { blog } = await getBlogDetail(id)

  if (blog) {
    return {
      title: blog.title,
      description: blog.description,
      openGraph: {
        title: 'Spa Malay',
        description: 'Help you to relax and feel better',
        type: 'website',
        images: ['https://raw.githubusercontent.com/phamlam2k/spa-malay/main/public/images/spa_intro.webp']
      }
    }
  } else {
    return {
      title: 'Spa Malay',
      description: 'Spa Malay',
      openGraph: {
        title: 'Spa Malay',
        description: 'Help you to relax and feel better',
        type: 'website',
        images: ['https://raw.githubusercontent.com/phamlam2k/spa-malay/main/public/images/spa_intro.webp']
      }
    }
  }
}

export default function BlogDetail({ params }: { params: { slug: string } }) {
  return <BlogDetailTemplate id={getIdItemBySlug(params.slug)} />
}
