import { useMemo } from 'react'
import { useGetState } from '../context'
export const useFavoriteRecipes = () => {
  const { state } = useGetState()
  const stored = localStorage.getItem('favoriteRecipes')
  const ids = JSON.parse(String(stored))
  const favorites = useMemo(
    () => state.recipes.filter((recipe) => (ids ? ids.includes(recipe.id) : [])),
    [ids, state.recipes]
  )
  return favorites
}
