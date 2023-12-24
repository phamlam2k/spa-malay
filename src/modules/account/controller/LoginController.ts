'use client'

import { ROUTES_NAME } from '@/src/lib/config/routes'
import { loginApi } from '@/src/lib/data/auth'
import { LoginPayload } from '@/src/types/auth'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

const useLoginController = () => {
  const form = useForm<LoginPayload>()
  const router = useRouter()

  const loginMutate = useMutation({
    mutationFn: (data: LoginPayload) => loginApi(data),
    onSuccess: data => {
      router.push(ROUTES_NAME.HOME)
    },
    onError: data => {
      console.log(data)
    }
  })

  const handleLoginSubmit: SubmitHandler<LoginPayload> = value => {
    loginMutate.mutate(value)
  }

  return {
    form,
    loginMutate,

    handleLoginSubmit
  }
}

export default useLoginController
