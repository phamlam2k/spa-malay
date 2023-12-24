'use client'

import { useRouter } from 'next/navigation'
import { ROUTES_NAME } from '../../config/routes'

const AuthHeader = () => {
  const router = useRouter()

  return (
    <header>
      <p className='p-2' onClick={() => router.push(ROUTES_NAME.HOME)}>
        Back
      </p>
    </header>
  )
}

export default AuthHeader
