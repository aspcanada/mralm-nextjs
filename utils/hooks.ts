import useSWR from 'swr'
import { Deal } from '@/interfaces'

export function useDeal (id: any) {
  const { data, error, isLoading } = useSWR(`/api/deals/${id}`)
 
  return {
    deal: data as Deal,
    isLoading,
    isError: error
  }
}
