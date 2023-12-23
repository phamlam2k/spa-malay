import { COOKIE_KEY } from '@/src/lib/common/cookies'

export type CookieType = Partial<Record<keyof typeof COOKIE_KEY, string>>
