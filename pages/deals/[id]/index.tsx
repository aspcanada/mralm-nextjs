import Layout from '@/components/layout'
import useSWR from 'swr'
import { useRouter } from "next/router"
import DealDetail from '@/components/deals/deal-detail'
import KeyMetrics from '@/components/deals/key-metrics'
import PropertyDetail from '@/components/deals/property-detail'
import { PropertyInfo } from '@/interfaces'

export default function DealDetailPage() {
  const router = useRouter()
  const { id } = router.query

  const url = `/api/deals/${id}`
  const { data, isLoading, error } = useSWR(url)

  // initialize deals to an empty array if data is undefined
  const deal = data ? data : {}

  const property: PropertyInfo = {
    title: "Freehold",
    address: {
      street: "123 Main St",
      city: "Toronto",
      province: "ON",
      postalCode: "M5V 2T6"
    },
    annualPropertyTax: 5000,
    legalDescription: "ABC123",
    zoning: "R4",
    style: "Detached",
    taxArrears: 0,
    occupancy: "Owner Occupied",
  }
  
  const props = {
    deal: deal,
    property: property
  }

  console.log("deal: ", JSON.stringify(deal, null, 2))

  return (
    <>
      <Layout>
        <h1 className="text-2xl font-semibold text-gray-900">Deal #{deal.id}</h1>
        <div className="mt-4">
          <KeyMetrics props={props} />
          <DealDetail props={props} />
          <PropertyDetail props={props} />
        </div>
      </Layout>
    </>
  )
}


