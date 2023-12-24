import AuthHeader from '@/src/lib/layout/auth/AuthHeader'
import Providers from '@/src/modules/providers'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <div className='bg-blue-400 min-w-screen min-h-screen'>
            <AuthHeader />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
