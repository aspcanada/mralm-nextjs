import DealListTable from '@/components/deals/list-table'
import Layout from '@/components/layout'
import useSWR from 'swr'

export default function DealsPage() {
  const { data, isLoading, error } = useSWR('/api/deals')

  // initialize deals to an empty array if data is undefined
  const deals = data ? [].concat(...data) : []
  
  const props = {
    deals: deals,
  }

  return (
    <>
      <Layout>
        <h1 className="text-2xl font-semibold text-gray-900">Deals</h1>
        <div className="mt-4">
          <DealListTable props={props} />
        </div>
      </Layout>
    </>
  )
}


