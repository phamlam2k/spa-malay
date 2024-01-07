import slugify from 'slugify'

export const convertSlugUrl = (slug: string) => {
  if (!slug) return ''

  return slugify(slug, {
    lower: true,
    locale: 'en'
  })
}

export const getIdItemBySlug = (slug: string) => {
  const temp = slug.split('.html')

  const temp1 = temp[0].split('-')

  return temp1[temp1.length - 1]
}
