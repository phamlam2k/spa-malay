'use client'

import React, { useState } from 'react'

import { InputProps } from '@/src/types/auth'

import EmailIcon from '~/svg/email.svg'
import PasswordIcon from '~/svg/password.svg'
import PersonIcon from '~/svg/person.svg'
import ShowPassIcon from '~/svg/visibility.svg'
import HidePassIcon from '~/svg/visibility_off.svg'

const BaseInputAuth = ({ label, register, errors, type, name, value, onChange, disabled }: InputProps) => {
  const [showPass, setShowPass] = useState<boolean>(false)

  function getInputIcon() {
    const iconProps = {
      width: '24',
      height: '24',
      className: errors[name] ? 'text-errorBorder' : 'text-gray-600'
    }

    const commonClasses = `absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-l-lg border-r ${
      errors[name]
        ? ' border border-red-700 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-700 focus:ring-red-500 '
        : ''
    }`

    let iconComponent

    switch (name) {
      case 'name':
      case 'account':
      case 'username':
        iconComponent = <PersonIcon {...iconProps} />
        break
      case 'email':
        iconComponent = <EmailIcon {...iconProps} />
        break
      case 'password':
      case 'oldPassword':
      case 'confirmPassword':
      case 'rePassword':
        iconComponent = <PasswordIcon {...iconProps} />
        break
      default:
        iconComponent = <div>Default content</div>
    }

    return <div className={commonClasses}>{iconComponent}</div>
  }

  return (
    <div className='mb-3'>
      <label
        htmlFor={name}
        className={`text-textPrimary h5 mb-2 block select-none after:ml-1 after:text-red-600 after:content-['*']`}
      >
        {label}
      </label>
      <div className='relative'>
        <input
          type={type !== 'password' ? type : showPass ? 'text' : 'password'}
          id={name}
          value={value}
          onChange={onChange}
          className={` focus:border-primary-500 focus:ring-primary-500 block w-full rounded-lg border-gray-300 bg-gray-50 py-2.5 pl-14 pr-2.5 font-medium focus-within:outline-none focus:outline-none ${
            errors[name]
              ? ' border border-red-700 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-700 focus:ring-red-500'
              : ''
          }`}
          {...register(name)}
          disabled={disabled}
        />
        {getInputIcon()}
        {type === 'password' ? (
          <div
            onClick={() => setShowPass(!showPass)}
            className='absolute right-0 top-0 flex h-11 w-11 cursor-pointer items-center justify-center rounded'
          >
            {showPass ? (
              <HidePassIcon width='24' height='24' className='text-gray-600' />
            ) : (
              <ShowPassIcon width='24' height='24' className='text-gray-600' />
            )}
          </div>
        ) : (
          ''
        )}
      </div>
      {errors[name] && (
        <p className=' text-errorBorder mt-2 select-none text-sm font-medium'>
          <span className='font-normal'>{errors[name].message}</span>
        </p>
      )}
    </div>
  )
}

export default BaseInputAuth
