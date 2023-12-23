import { parse } from 'cookie'
import Cookies from 'js-cookie'

export const COOKIE_KEY = {
  logged_in: 'logged_in',
  redirect_client: 'redirect_client',
  csrfToken: 'csrfToken'
}

export const parseCookie = (cookie: string | Record<string, string>) => {
  if (!cookie) {
    cookie = {}
  } else if (typeof cookie === 'string') {
    cookie = parse(cookie)
  }
  return cookie
}

export const setSessionCookie = (session: any) => {
  const csrfToken = session?.csrf_token
  localStorage.setItem(COOKIE_KEY.csrfToken, csrfToken)
  const oneDay = 86400
  const expires = (session?.cookie_max_age || oneDay) / oneDay
  Cookies.set(COOKIE_KEY.logged_in, `${true}`, {
    expires
  })
}

export const clearSessionCookie = () => {
  Object.keys(COOKIE_KEY)
    .filter(key => key !== 'NEXT_LOCALE')
    .forEach(key => Cookies.remove(key))
  localStorage.removeItem('csrfToken')
}
