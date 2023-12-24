import { ROUTES_NAME } from '@/src/lib/config/routes'
import { parseCookie } from '../../cookies'

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

export const navigateCheck = ({ pathname, cookie }: { pathname: string; cookie: string | any }) => {
  const cookieObject = parseCookie(cookie) as any

  const isLoggedIn = cookieObject.logged_in === 'true' && !!cookieObject.crfToken

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
