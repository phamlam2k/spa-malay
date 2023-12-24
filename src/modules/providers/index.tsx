'use client'

import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/src/lib/common/config'
import { SnackbarProvider } from 'notistack'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>{children}</SnackbarProvider>
    </QueryClientProvider>
  )
}
