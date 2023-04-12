import useSWR from 'swr'

export function useDeal (id: any) {
  const { data, error, isLoading } = useSWR(`/api/deals/${id}`)
 
  return {
    deal: data,
    isLoading,
    isError: error
  }
}
