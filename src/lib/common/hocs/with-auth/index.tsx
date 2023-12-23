import Cookies from 'js-cookie'
import { globalStore } from '../global-store'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { COOKIE_KEY } from '../../common/cookies'
import { checkAccessByRole, isPath } from '../../security/router-guard'

// const SpinContainer = dynamic<SpinContainerProps>(
//   () => import('rcs_common/frontend/shared/components/spin-container').then((mod) => mod.SpinContainer),
//   { ssr: false }
// )

export const withAuth = (Component: any) => {
  const WithAuthWrapper = (props: any) => {
    const { setLoading } = globalStore((state: any) => state) as any

    const route = useRouter()
    //@ts-ignore
    const { user, setUser } = globalStore(state => state.userStore)
    const email = user?.email || ''
    const onGetCurrentUser = async () => {
      setLoading(true)
      try {
        const pathname = location.pathname
        const loggedIn = Cookies.get(COOKIE_KEY.logged_in)
        if (isPath(pathname).isPrivatePath() && !email && loggedIn) {
          setUser(user)
          if (checkAccessByRole(route.pathname) && user?.role === 'guest') {
            return route.push('/401')
          }
        }
      } catch (error) {}
      setLoading(false)
    }

    useEffect(() => {
      onGetCurrentUser()
    }, [email])

    return Component({ ...props })
  }
  return WithAuthWrapper
}
