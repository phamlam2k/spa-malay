'use client'

import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'

import { setSessionCookie } from '@/src/lib/common/cookies'
import { ROUTES_NAME } from '@/src/lib/config/routes'
import { loginApi } from '@/src/lib/data/auth'

import { LoginPayload } from '@/src/types/auth'
import { useSnackbarWithContext } from '@/src/lib/common/snackbar'

const useLoginController = () => {
  const form = useForm<LoginPayload>()
  const snackbar = useSnackbarWithContext()

  const loginMutate = useMutation({
    mutationFn: (data: LoginPayload) => loginApi(data),
    onSuccess: (data: any) => {
      snackbar.success(data.data.message)
      setSessionCookie(data.data.metadata.accessToken)
      window.location.href = ROUTES_NAME.HOME
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
