import { Deal } from "@/interfaces"
import Link from "next/link"
import { currencyFormat, percentFormat } from "@/utils/helpers"

type DealListTableProps = {
  // user?: any
  // loading?: boolean
  deals: Deal[]
}

export default function DealListTable({ props }: { props: DealListTableProps }) {
  const { deals } = props

  return (
    <>
    {/* <div className="px-4 sm:px-6 lg:px-8"> */}
      {/* <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Transactions</h1>
          <p className="mt-2 text-sm text-gray-700">
            A table of placeholder stock market data that does not make any sense.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-sky-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Export
          </button>
        </div>
      </div> */}
      <div className="flow-root">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Purpose
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Rate
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    LTV
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Term
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Closing
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    City
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Mtg Position
                  </th>
                  <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-6 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {deals.map((deal) => (
                  <tr key={deal.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500">{deal.dealInfo.purpose}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{currencyFormat(deal.dealInfo.amount)}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{deal.dealInfo.rate}%</td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{percentFormat((deal.dealInfo.amount / deal.valuation.appraisedValue) * 100)}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{deal.dealInfo.term} years</td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{deal.dealInfo.closingDate.split('T')[0]}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{deal.propertyInfo.address.city}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{deal.dealInfo.position}</td>
                    <td className="relative whitespace-nowrap py-2 pl-3 pr-6 text-right text-sm font-medium sm:pr-0">
                      <Link href="/deals/[id]" as={`/deals/${deal.id}`} className="text-sky-600 hover:text-sky-900">
                        <button type="button" className="block rounded-md bg-sky-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"> Details<span className="sr-only">, {deal.id}</span></button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    {/* </div> */}
    </>
  )
}
