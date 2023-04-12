import Layout from '@/components/layout'
import { useRouter } from "next/router"
import DealDetail from '@/components/deals/deal-detail'
import KeyMetrics from '@/components/deals/key-metrics'
import ValuationDetail from '@/components/deals/valuation-detail'
import PropertyDetail from '@/components/deals/property-detail'
import { useDeal } from '@/utils/hooks'
import { currencyFormat } from '@/utils/helpers'
import BorrowerDetail from '@/components/deals/borrower-detail'

export default function DealDetailPage() {
  const router = useRouter()
  const { id } = router.query
  const { deal, isLoading, isError } = useDeal(id)
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error...</div>

  return (
    <>
      <Layout>
        <h1 className="text-2xl font-semibold text-gray-900">Deal: {currencyFormat(deal.dealInfo.amount)} {deal.dealInfo.purpose} for {deal.dealInfo.term} year(s)</h1>
        <div className="mt-4">
          <KeyMetrics />
          <DealDetail />
          <ValuationDetail />
          <PropertyDetail />
          <BorrowerDetail />
        </div>
      </Layout>
    </>
  )
}


