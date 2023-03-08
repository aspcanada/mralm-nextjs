import MembersListGrid from '@/components/members/list-grid'
import Layout from '@/components/layout'
import useSWR from 'swr'

export default function MembersPage() {
  const { data, isLoading, error } = useSWR('/api/members')

  // initialize members to an empty array if data is undefined
  const members = data ? [].concat(...data) : []
  
  const props = {
    members: members,
  }

  return (
    <>
      <Layout>
          <h1 className="text-2xl font-semibold text-gray-900">Members</h1>
          <div className="mt-4">
            <MembersListGrid props={props} />
          </div>
      </Layout>
    </>
  )
}


