'use client'

import { useRouter } from 'next/navigation'

const AuthHeader = () => {
  const router = useRouter()

  return (
    <header>
      <p className='p-2' onClick={() => router.back}>
        Back
      </p>
    </header>
  )
}

export default AuthHeader
