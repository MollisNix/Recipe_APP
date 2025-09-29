import { deleteFromLocalStorage } from '../utils/helpers'
import { useRequestProcessing } from './useRequestProcessing'

export const useDeleteCard = () => {
  const { error, handleError, handleResponseStatus } = useRequestProcessing()
  const deleteCard = async (id: number | string) => {
    try {
      const response = await fetch(`http://localhost:3000/recipes/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })

      handleResponseStatus(response)
      deleteFromLocalStorage(Number(id))
      return true
    } catch (error) {
      handleError(error)
      return false
    }
  }

  return { deleteCard, error }
}
