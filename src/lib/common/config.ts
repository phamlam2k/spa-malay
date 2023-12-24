import { QueryClient } from '@tanstack/react-query'
import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Merge classes with tailwind-merge with clsx full feature */
function clsxm(...classes: ClassValue[]) {
  return twMerge(clsx(...classes))
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24,
      retry: 1
    }
  }
})

export { queryClient, clsxm }
