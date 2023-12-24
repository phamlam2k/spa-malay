'use client'

import Cookies from 'js-cookie'
import { ROUTES_NAME } from '../../config/routes'
import { useMemo, useState } from 'react'
import { COOKIE_KEY } from '../../common/cookies'
import { jwtDecode } from 'jwt-decode'
import { logoutApi } from '../../data/auth'

const UserInfo = () => {
  const [isLogout, setIsLogout] = useState(false)

  const data = useMemo(() => {
    if (isLogout) return null

    let decodedData = null

    const myCookie = Cookies.get(COOKIE_KEY.csrfToken)

    if (myCookie) {
      decodedData = jwtDecode(myCookie)
    }

    return decodedData
  }, [isLogout])

  const handleLogoutUser = async () => {
    const response = await logoutApi()

    if (response) {
      Cookies.remove(COOKIE_KEY.csrfToken)
      Cookies.remove(COOKIE_KEY.logged_in)
      setIsLogout(true)
    }
  }

  return (
    <div className='ml-3'>
      {data ? (
        <div className='w-[100px] h-[40px] bg-white text-black text-center' onClick={() => handleLogoutUser()}>
          Lam
        </div>
      ) : (
        <div
          onClick={() => {
            window.location.href = ROUTES_NAME.LOGIN
          }}
        >
          Login
        </div>
      )}
    </div>
  )
}

export default UserInfo
