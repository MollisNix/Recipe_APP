import { SET_INITIAL_STATE, TOGGLE_BOOKMARK, DELETE_CARD, ADD_CARD, CHANGE_CARD } from '../constants/variables'
import type { RecipeReducer } from './types'

export const recipeReducer: RecipeReducer = (state, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      return {
        ...state,
        recipes: action.payload.recipes,
        ingredients: action.payload.ingredients,
      }

    case CHANGE_CARD:
      return {
        ...state,
        recipes: state.recipes.map((recipe) => (recipe.id === action.payload.id ? action.payload : recipe)),
      }

    case ADD_CARD:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      }

    case DELETE_CARD:
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
      }

    case TOGGLE_BOOKMARK:
      return {
        ...state,
        recipes: state.recipes.map((recipe) => (recipe.id === action.payload.id ? action.payload.newRecipe : recipe)),
      }

    default:
      return state
  }
}
