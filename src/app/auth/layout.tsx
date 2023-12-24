import AuthHeader from '@/src/lib/layout/auth/AuthHeader'
import Providers from '@/src/modules/providers'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <AuthHeader />
          {children}
        </Providers>
      </body>
    </html>
  )
}
