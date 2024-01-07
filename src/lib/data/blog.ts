import { API_BLOGS } from '../config/endpointApi'

export const getBlogPosts = async () => {
  const res = await fetch(API_BLOGS)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}