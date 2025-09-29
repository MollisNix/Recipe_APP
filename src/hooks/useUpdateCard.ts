import { useState } from 'react'

import { useGetActions } from '../context'
import { CHANGE_CARD } from '../constants/variables'
import { useRequestProcessing } from './useRequestProcessing'

import type { RecipeInterface } from '../interfaces/recipeInterface'
import { patchData } from '../utils/helpers'

export const useUpdateCard = () => {
  const [loading, setLoading] = useState(false)
  const { error, handleError, handleResponseStatus } = useRequestProcessing()
  const { dispatch } = useGetActions()

  const updateRecipe = async (id: number | string, data: RecipeInterface) => {
    try {
      setLoading(true)
      const response = await patchData<RecipeInterface>(`http://localhost:3000/recipes/${id}`, data)

      handleResponseStatus(response)

      const result: RecipeInterface = await response.json()
      dispatch({ type: CHANGE_CARD, payload: result })
    } catch (error) {
      handleError(error)
    } finally {
      setLoading(false)
    }
  }

  return { updateRecipe, error, loading }
}
