import { SET_INITIAL_STATE, CHANGE_CARD, DELETE_CARD, TOGGLE_BOOKMARK, ADD_CARD } from '../constants/variables'

export type Action =
  | { type: typeof SET_INITIAL_STATE; payload: { recipes: RecipeInterface[]; ingredients: IngredientsType[] } }
  | { type: typeof CHANGE_CARD; payload: RecipeInterface }
  | { type: typeof DELETE_CARD; payload: number }
  | { type: typeof TOGGLE_BOOKMARK; payload: { id: number; newRecipe: RecipeInterface } }
  | { type: typeof ADD_CARD; payload: RecipeInterface }

export type IngredientsType = {
  id: number
  name: string
}

export type IngredientsInRecipeType = {
  ingredientId: number
  amount: number | string
  amountType: string
}

export interface RecipeInterface {
  id: number
  img?: string
  name: string
  description: string
  label: string
  cookingTime: number
  isFavorite: boolean
  isPopular: boolean
  isRecipeOfDay: boolean
  ingredients: IngredientsInRecipeType[]
}

export interface InitialStateInterface {
  ingredients: IngredientsType[]
  recipes: RecipeInterface[]
}

export interface RecipeStateContextInterface {
  state: InitialStateInterface
}

export interface RecipeActionsContextInterface {
  dispatch: React.Dispatch<Action>
  error: string | null
  loading: boolean
  loadingIngredients: boolean
  errorIngredients: string | null
}
