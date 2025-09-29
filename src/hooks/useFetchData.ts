import { useState, useEffect } from 'react'
import { useRequestProcessing } from './useRequestProcessing'

export function useFetchData<T>(url: string) {
  const { error, handleError, handleResponseStatus } = useRequestProcessing()
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<T | undefined>(undefined)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url)

        handleResponseStatus(response)
        const result = (await response.json()) as T
        setResponse(result)
      } catch (error) {
        handleError(error)
      } finally {
        setLoading(false)
      }
    }

    void fetchData()
  }, [url, handleError, handleResponseStatus])
  return { response, loading, error }
}
