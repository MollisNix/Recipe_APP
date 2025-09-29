import { useContext } from 'react'

import { ValidationContext } from '../ValidationContext'

export const useValidation = () => {
  const context = useContext(ValidationContext)

  if (!context) {
    throw new Error('Somthing went wrong with Form validation')
  }
  return context
}
