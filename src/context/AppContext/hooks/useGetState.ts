import { RecipeStateContext } from '../AppContext'
import { useGetContext } from '../../../hooks'
export const useGetState = () => {
  const state = useGetContext(RecipeStateContext)

  return state
}
