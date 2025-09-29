import { TOGGLE_BOOKMARK } from '../constants/variables'
import { useGetActions } from '../context'
import { useRequestProcessing } from './useRequestProcessing'

import type { RecipeInterface } from '../interfaces/recipeInterface'
import { patchData, updateLocalStorage } from '../utils/helpers'

export const useToggleFavorites = () => {
  const { error, handleError, handleResponseStatus } = useRequestProcessing()
  const { dispatch } = useGetActions()

  const toggleFavorites = async (id: number, isFavorite: boolean | undefined) => {
    try {
      const response = await patchData<RecipeInterface>(`http://localhost:3000/recipes/${id}`, {
        isFavorite: !isFavorite,
      })

      handleResponseStatus(response)
      const result: RecipeInterface = await response.json()

      if (result) {
        dispatch({ type: TOGGLE_BOOKMARK, payload: { id, newRecipe: result } })
        updateLocalStorage(result, !isFavorite)
      }
    } catch (error) {
      handleError(error)
    }
  }

  return { toggleFavorites, error }
}
