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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Deals</h1>
        </div>
        {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8"> */}
          <div className="py-4">
            {/* Deal Table List or Deal Card List */}
            <DealListTable props={props} />
            {/* <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" /> */}
          </div>
        {/* </div> */}
      </Layout>
    </>
  )
}


