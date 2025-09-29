import { useMemo } from 'react'
import { useGetState } from '../context'

export const useRecipesOfTheDay = () => {
  const { state } = useGetState()

  return useMemo(() => state.recipes.filter((recipe) => recipe.isRecipeOfDay === true), [state])
}
