import { useGetIngredients } from '../../../hooks'

export const IngredientItem = ({ id }: { id: number }) => {
  const ingredient = useGetIngredients(id)
  return <span>{ingredient}</span>
}
