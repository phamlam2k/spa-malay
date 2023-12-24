import clsx from 'clsx'
import React, { FC, InputHTMLAttributes, ReactNode } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactNode
  endIcon?: ReactNode
  classCustom?: string
  classInput?: string
}

const BaseInput: FC<InputProps> = ({ startIcon, endIcon, classCustom, classInput, ...props }) => {
  return (
    <label className={clsx('flex items-center gap-[10px] rounded-md bg-[#F6F6F9] px-[10px]', classCustom || '')}>
      {startIcon && startIcon}
      <input
        {...props}
        className={`flex-1 border-none bg-transparent outline-none ${classInput ?? ''} focus:border-none focus:ring-0`}
      />
      {endIcon && endIcon}
    </label>
  )
}

export default BaseInput
