import { useState } from 'react'

import { useGetActions } from '../context'
import { ADD_CARD } from '../constants/variables'
import { useRequestProcessing } from './useRequestProcessing'

import type { RecipeInterface } from '../interfaces/recipeInterface'

export const usePostRecipe = () => {
  const { error, handleError, handleResponseStatus } = useRequestProcessing()
  const [loading, setLoading] = useState(false)

  const { dispatch } = useGetActions()

  const postRecipe = async (data: RecipeInterface) => {
    try {
      setLoading(true)

      const response = await fetch('http://localhost:3000/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      handleResponseStatus(response)
      const result: RecipeInterface = await response.json()

      if (result) {
        dispatch({ type: ADD_CARD, payload: result })
      }
    } catch (error) {
      handleError(error)
    } finally {
      setLoading(false)
    }
  }

  return { postRecipe, error, loading }
}
