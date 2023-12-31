import type { Metadata } from 'next'
import LoginTemplate from '@/src/modules/account/templates/login-template'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Generated by create next app'
}

export default function Login() {
  return <LoginTemplate />
}
