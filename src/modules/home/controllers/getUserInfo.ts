import { cookies } from 'next/headers'
import { jwtDecode } from 'jwt-decode'
import { COOKIE_KEY } from '@/src/lib/common/cookies'

const getUserInfo = () => {
  let decodedData = null
  const cookieStore = cookies()
  const myCookie = cookieStore.get(COOKIE_KEY.csrfToken)

  if (myCookie) {
    decodedData = jwtDecode(myCookie.value)
  }

  return decodedData
}

export { getUserInfo }
