'use client'

import BaseInputAuth from '@/src/lib/common/base/BaseInputAuth'
import BaseButton from '@/src/lib/common/base/buttons/BaseButton'
import useLoginController from '../../controller/LoginController'
import Link from 'next/link'
import { ROUTES_NAME } from '@/src/lib/config/routes'

const FormRegister = () => {
  const { form, handleLoginSubmit } = useLoginController()

  return (
    <form onSubmit={form.handleSubmit(handleLoginSubmit)}>
      <BaseInputAuth register={form.register} label='Email' name='account' errors='account' type='text' />
      <BaseInputAuth register={form.register} label='Password' name='password' errors='password' type='password' />

      <div className='flex flex-col gap-4'>
        <Link href={ROUTES_NAME.LOGIN} className='text-right'>
          Đã có tài khoản?
        </Link>
        <BaseButton size='base' variant='dark' type='submit'>
          Gửi
        </BaseButton>
      </div>
    </form>
  )
}

export default FormRegister
