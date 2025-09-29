import { Action } from '../interfaces/recipeInterface'
import type { InitialStateInterface } from '../interfaces/recipeInterface'

export type RecipeReducer = (state: InitialStateInterface, action: Action) => InitialStateInterface
