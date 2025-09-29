import { useMemo } from 'react'
import { useGetState } from '../context'

export const useGetIngredients = (id: number) => {
  const { state } = useGetState()
  const response = useMemo(() => {
    return state.ingredients.find((item) => item.id === id)
  }, [id, state.ingredients])

  return response?.name
}
