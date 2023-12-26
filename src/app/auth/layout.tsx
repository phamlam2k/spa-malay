import AuthHeader from '@/src/lib/layout/auth/AuthHeader'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='bg-blue-400 min-h-screen'>
      <AuthHeader />
      <div className='bg-white container lg:w-[600px] p-4 rounded-md absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
        {children}
      </div>
    </main>
  )
}
