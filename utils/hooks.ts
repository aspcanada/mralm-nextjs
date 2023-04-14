import useSWR from 'swr'
import { Deal, Profile } from '@/interfaces'

export function useDeal (id: any) {
  const { data, error, isLoading } = useSWR(`/api/deals/${id}`)
 
  return {
    deal: data as Deal,
    isLoading,
    isError: error
  }
}

export function useProfile () {
  const { data, error, isLoading, mutate } = useSWR(`/api/me`)
 
  return {
    profile: data as Profile,
    isLoading,
    isError: error,
    mutate
  }
}

export function useMember (id: string) {
  const { data, error, isLoading, mutate } = useSWR(`/api/members/${id}`)
 
  return {
    profile: data as Profile,
    isLoading,
    isError: error,
    mutate
  }
}