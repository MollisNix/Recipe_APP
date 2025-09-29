import { useCallback, useState } from 'react'

export const useRequestProcessing = () => {
  const [error, setError] = useState<string | null>(null)
  const handleResponseStatus = useCallback((response: Response) => {
    if (!response.ok) {
      throw new Error(`Error occurred! Error code is - ${response.status}, status - ${response.statusText}`)
    }
  }, [])

  const handleError = useCallback((error: unknown) => {
    if (error instanceof Error) {
      setError(error.message)
    } else {
      setError('Unknown error occurred')
    }
  }, [])

  return { error, handleResponseStatus, handleError }
}
