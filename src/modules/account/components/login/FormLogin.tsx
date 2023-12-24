'use client'

import BaseInputAuth from '@/src/lib/common/base/BaseInputAuth'
import useLoginController from '../../controller/login'

const FormLogin = () => {
  const { form } = useLoginController()

  return (
    <>
      <BaseInputAuth register={form.register} label='Email' name='email' errors='email' type='text' />
      <BaseInputAuth register={form.register} label='Password' name='password' errors='password' type='password' />
    </>
  )
}

export default FormLogin
