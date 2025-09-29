import { useMemo } from 'react'
import { useGetState } from '../context'
export const useNonDailyRecipes = () => {
  const { state } = useGetState()
  return useMemo(() => state.recipes.filter((recipe) => recipe.isRecipeOfDay !== true), [state])
}
