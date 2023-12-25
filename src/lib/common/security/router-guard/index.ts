import { ROUTES_NAME } from '@/src/lib/config/routes'
import { COOKIE_KEY, parseCookie } from '../../cookies'
import { cookies } from 'next/headers'

export const unRoutes = ['/api', '/_next', 'favicon']
const rolePaths = ['/']

export const isPath = (pathname: string) => {
  const relativeWith = (...others: string[]) => others.some(each => isChildPath(pathname, each))
  const isEmpty = () => ['', '/', null, undefined].includes(pathname)
  const isPrivatePath = () => !relativeWith(...publicPath) && pathname !== ROUTES_NAME.HOME
  return {
    isEmpty,
    relativeWith,
    isPrivatePath,
    isChildPath
  }
}

export const isChildPath = (child?: string, parent?: string) => {
  if (!child || !parent) {
    return false
  }
  const s1 = child.split('/')
  const s2 = parent.split('/')

  return s2.every(e => s1.includes(e))
}

export const checkAccessByRole = (pathName: string) => {
  return rolePaths.some(r => pathName.includes(r))
}

export const publicPath = [
  ROUTES_NAME.LOGIN,
  ROUTES_NAME.REGISTER,
  ROUTES_NAME._404,
  ROUTES_NAME._500,
  ROUTES_NAME._401
]

export const navigateCheck = ({ pathname }: { pathname: string }) => {
  const loggedInCookies = cookies().get(COOKIE_KEY.logged_in)

  const isLoggedIn = loggedInCookies && loggedInCookies.value === 'true' && cookies().has(COOKIE_KEY.csrfToken)

  if (isLoggedIn) {
    pathname = ROUTES_NAME.HOME
  }

  if (!isLoggedIn) {
    if (isPath(pathname).isPrivatePath()) {
      pathname = ROUTES_NAME.LOGIN
    }

    return pathname
  }

  return pathname
}
