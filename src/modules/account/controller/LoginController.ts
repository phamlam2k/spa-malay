'use client'

import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'

import { setSessionCookie } from '@/src/lib/common/cookies'
import { ROUTES_NAME } from '@/src/lib/config/routes'
import { loginApi } from '@/src/lib/data/auth'

import { LoginPayload } from '@/src/types/auth'
import { useSnackbarWithContext } from '@/src/lib/common/snackbar'
import { useRouter } from 'next/navigation'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginValidationSchema } from '@/src/lib/validations/authValidation'

const useLoginController = () => {
  const form = useForm<LoginPayload>({
    resolver: yupResolver(loginValidationSchema)
  })

  const router = useRouter()
  const snackbar = useSnackbarWithContext()

  const loginMutate = useMutation({
    mutationFn: (data: LoginPayload) => loginApi(data),
    onSuccess: (data: any) => {
      snackbar.success(data.data.message)
      setSessionCookie(data.data.metadata.accessToken)
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
