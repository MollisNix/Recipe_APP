import type { IngredientsInRecipeType } from '../interfaces/recipeInterface'

export type RecipeTypes = {
  id: number
  img?: string
  name: string
  ingredients: IngredientsInRecipeType[]
  timings: number
  isFavorite: boolean
}
