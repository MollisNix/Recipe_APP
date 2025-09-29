import { useMemo } from 'react'
import { useGetState } from '../context'
import { RecipeInterface } from '../interfaces/recipeInterface'

export const useRecipeById = (id: number): RecipeInterface | null => {
  const { state } = useGetState()
  return useMemo(() => {
    if (!state.recipes.length) return null
    const selectedCard = state.recipes.find((recipe) => recipe.id === id)
    return selectedCard || null
  }, [id, state.recipes])
}
