import { createContext, useEffect, useMemo, useReducer } from 'react'

const RECIPES_URL = import.meta.env.VITE_RECIPES_URL
const INGREDIENTS_URL = import.meta.env.VITE_INGREDIENTS_URL

import { recipeReducer } from '../../reducer'
import { useFetchData } from '../../hooks'
import { SET_INITIAL_STATE } from '../../constants/variables'

import { Error } from '../../components/Error'

import type {
  RecipeStateContextInterface,
  RecipeActionsContextInterface,
  RecipeInterface,
  IngredientsType,
  InitialStateInterface,
} from '../../interfaces/recipeInterface'

const initialState: InitialStateInterface = {
  ingredients: [],
  recipes: [],
}

export const RecipeStateContext = createContext<RecipeStateContextInterface | null>(null)
export const RecipeActionsContext = createContext<RecipeActionsContextInterface | null>(null)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(recipeReducer, initialState)

  const { response, error, loading } = useFetchData<RecipeInterface[]>(RECIPES_URL)

  const {
    response: ingredients,
    error: errorIngredients,
    loading: loadingIngredients,
  } = useFetchData<IngredientsType[]>(INGREDIENTS_URL)

  useEffect(() => {
    const isDataReady = !loading && !loadingIngredients && response && ingredients

    if (isDataReady) {
      dispatch({ type: SET_INITIAL_STATE, payload: { recipes: response, ingredients: ingredients } })
    }
  }, [response, ingredients, loading, loadingIngredients])

  const stateValue = useMemo(
    () => ({
      state,
    }),
    [state]
  )

  const actionsValue = useMemo(
    () => ({
      loading,
      loadingIngredients,
      errorIngredients,
      error,
      dispatch,
    }),
    [loading, loadingIngredients, errorIngredients, error]
  )

  if (error || errorIngredients) {
    return <Error errorMessage={error} />
  }

  return (
    <RecipeStateContext.Provider value={stateValue}>
      <RecipeActionsContext.Provider value={actionsValue}>{children}</RecipeActionsContext.Provider>
    </RecipeStateContext.Provider>
  )
}
