import useSWR from 'swr'
import { Profile } from '@/interfaces'
import axios from 'axios'

export function useMembers () {
  const { data, error, isLoading, mutate } = useSWR(`/api/members/`)
 
  return {
    profile: data as Profile,
    isLoading,
    isError: error,
    mutate
  }
}

async function addMember(profile: Profile) {
  let resp = await axios.post('/api/members', profile);
  return resp.data;
}

async function deleteMember(profile: Profile) {
  let resp = await axios.delete(`/api/members/${profile.id}`);
  return resp.data;
}

async function updateMember(profile: Profile) {
  let resp = await axios.put(`/api/members/${profile.id}`, profile);
  return resp.data;
}