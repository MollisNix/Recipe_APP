import { useContext, Context } from 'react'

export const useGetContext = <T>(contextProvider: Context<T | null>): T => {
  const context = useContext(contextProvider)

  if (!context) {
    throw new Error('useContext should be within its provider')
  }

  return context
}
