import type { IngredientsInRecipeType } from './recipeInterface'
import {
  type UseFormRegister,
  type FieldErrors,
  type UseFormHandleSubmit,
  type UseFormReset,
  type UseFieldArrayRemove,
  type UseFieldArrayAppend,
  type FieldArrayWithId,
  Control,
} from 'react-hook-form'

import type { RecipeInterface } from './recipeInterface'

export interface ValidationTypes {
  id?: number | string
  name: string
  description: string
  label?: string
  cookingTime: number
  isFavorite?: boolean
  isPopular?: boolean
  isRecipeOfDay?: boolean
  ingredients: IngredientsInRecipeType[]
}

export interface RecipeValidationInterface {
  id?: number
  name: string
  description: string
  label?: string
  cookingTime: number | string
  isFavorite?: boolean
  isPopular?: boolean
  isRecipeOfDay?: boolean
  ingredients: IngredientsInRecipeType[]
}

export type ValidationType = {
  register: UseFormRegister<RecipeValidationInterface>
  errors: FieldErrors<RecipeValidationInterface>
  handleSubmit: UseFormHandleSubmit<RecipeInterface | RecipeValidationInterface>
  reset: UseFormReset<RecipeValidationInterface>
  remove: UseFieldArrayRemove
  append: UseFieldArrayAppend<RecipeValidationInterface, 'ingredients'>
  fields: FieldArrayWithId<RecipeValidationInterface, 'ingredients', 'id'>[]
  control: Control<RecipeValidationInterface>
}
