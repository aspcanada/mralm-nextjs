import Layout from '@/components/layout'
import useSWR from 'swr'
import { useRouter } from "next/router"
import DealDetail from '@/components/deals/deal-detail'
import KeyMetrics from '@/components/deals/key-metrics'
import PropertyDetail from '@/components/deals/property-detail'
import { Deal, PropertyInfo } from '@/interfaces'
import { useDeal } from '@/utils/hooks'

export default function DealDetailPage() {
  const router = useRouter()
  const { id } = router.query
  const { deal, isLoading, isError } = useDeal(id)
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error...</div>

  // console.log("deal: ", JSON.stringify(deal, null, 2))

  return (
    <>
      <Layout>
        <h1 className="text-2xl font-semibold text-gray-900">Deal #{deal.id}</h1>
        <div className="mt-4">
          <KeyMetrics />
          <DealDetail />
          <PropertyDetail />
        </div>
      </Layout>
    </>
  )
}


