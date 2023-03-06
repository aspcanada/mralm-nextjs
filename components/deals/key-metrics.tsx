

type KeyMetricsProps = {
  // user?: any
  // loading?: boolean
  deal: any
}


export default function KeyMetrics({props }: { props: KeyMetricsProps }) {
  const { deal } = props

  const stats = [
    { name: 'LTV', stat: `${deal.ltv}%` },
    { name: 'Interest Rate', stat: `${deal.rate}%` },
    { name: 'Mortgage Position', stat: deal.position },
  ]

  return (
    <div>
      <h3 className="text-lg font-semibold leading-6 text-gray-900">Key Metrics</h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
