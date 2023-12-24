'use client'

import { useForm } from 'react-hook-form'

const useLoginController = () => {
  const form = useForm()

  return {
    form
  }
}

export default useLoginController
