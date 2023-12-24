import AuthHeader from '@/src/lib/layout/auth/AuthHeader'
import Providers from '@/src/modules/providers'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <main className='bg-blue-400 min-h-screen'>
        <AuthHeader />
        {children}
      </main>
    </Providers>
  )
}
