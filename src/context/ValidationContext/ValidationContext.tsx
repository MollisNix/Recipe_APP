import { createContext } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { DEFAULT_FORM_DATA } from '../../constants/variables'
import { VALIDATION_SCHEMA } from './schema'

import type { RecipeValidationInterface, ValidationType } from '../../interfaces/validationInterface'

export const ValidationContext = createContext<ValidationType | null>(null)

export const ValidationProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RecipeValidationInterface>({
    mode: 'onSubmit',
    resolver: yupResolver(VALIDATION_SCHEMA),
    reValidateMode: 'onChange',
    defaultValues: DEFAULT_FORM_DATA,
  })
  const { remove, append, fields } = useFieldArray<RecipeValidationInterface>({
    control,
    name: 'ingredients',
  })
  return (
    <ValidationContext.Provider value={{ register, handleSubmit, reset, remove, append, control, fields, errors }}>
      {children}
    </ValidationContext.Provider>
  )
}
