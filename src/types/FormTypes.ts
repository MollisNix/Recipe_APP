import { useValidation } from '../context'
import { IngredientsType } from '../interfaces/recipeInterface'
export type FormModalProps = {
  id: number
  onClose: () => void
}

export type onChangeTypes = (index: number, updated: IngredientsType) => void

export type FormTypes = {
  children: React.ReactNode
  onSubmit: () => void
}

export type FieldItemPropsType = {
  styles: { [key: string]: string }
  index: number
  ingredients: IngredientsType[]
  register?: ReturnType<typeof useValidation>['register']
  defaultValue?: string
}
