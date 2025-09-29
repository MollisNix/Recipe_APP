import { RecipeActionsContext } from '../AppContext'
import { useGetContext } from '../../../hooks'

export const useGetActions = () => {
  const actions = useGetContext(RecipeActionsContext)

  return actions
}
