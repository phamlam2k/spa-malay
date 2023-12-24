'use client'

import BaseInputAuth from '@/src/lib/common/base/BaseInputAuth'
import BaseButton from '@/src/lib/common/base/buttons/BaseButton'
import useLoginController from '../../controller/LoginController'

const FormLogin = () => {
  const { form, handleLoginSubmit } = useLoginController()

  return (
    <form onSubmit={form.handleSubmit(handleLoginSubmit)}>
      <BaseInputAuth register={form.register} label='Email' name='account' errors='account' type='text' />
      <BaseInputAuth register={form.register} label='Password' name='password' errors='password' type='password' />
      <BaseButton size='base' variant='dark' type='submit'>
        Gửi
      </BaseButton>
    </form>
  )
}

export default FormLogin
