import Layout from '@/components/layout'
import useSWR from 'swr'
import { useRouter } from "next/router"

export default function DealDetailPage() {
  const router = useRouter()
  const { id } = router.query

  const url = `/api/deals/${id}`
  const { data, isLoading, error } = useSWR(url)

  // initialize deals to an empty array if data is undefined
  const deal = data ? data : {}
  
  // const props = {
  //   deals: deal,
  // }

  return (
    <>
      <Layout>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Deal Detail</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="py-4">
            {/* Deal Table List or Deal Card List */}
            <pre>
              {JSON.stringify(deal, null, 2)}
            </pre>
            {/* <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" /> */}
          </div>
        </div>
      </Layout>
    </>
  )
}


