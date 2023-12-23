import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { navigateCheck, unRoutes } from './lib/common/security/router-guard'

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  const pathName = getPagePathName(req)

  if (pathName && !unRoutes.some(route => pathName.includes(route))) {
    const cookie = req.cookies
    const redirect = navigateCheck({ pathname: pathName, cookie })

    if (pathName !== redirect) {
      return NextResponse.redirect(new URL(redirect, process.env.APP_FE).toString(), 307)
    }
  }

  return NextResponse.next()
}

const getPagePathName = (req: NextRequest) => {
  try {
    return req.url ? new URL(req.url, process.env.APP_FE).pathname : undefined
  } catch (error) {
    console.error('Invalid URL:', process.env.APP_FE, error)
    return undefined
  }
}
