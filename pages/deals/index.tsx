import DealListTable from "@/components/deals/list-table";
import Layout from "@/components/layout";
import useSWR from "swr";

export default function DealsPage() {
  const { data, isLoading, error } = useSWR("/api/deals");

  // initialize deals to an empty array if data is undefined
  const deals = data ? [].concat(...data) : [];

  const props = {
    deals: deals,
  };

  return (
    <>
      <Layout>
        {/* <h1 className="text-2xl font-semibold text-gray-900">Deals</h1> */}
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold text-gray-900">Deals</h1>
            {/* <p className="mt-2 text-sm text-gray-700">
              A table of placeholder stock market data that does not make any
              sense.
            </p> */}
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-sky-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Add Deal
            </button>
          </div>
        </div>
        <div className="mt-4">
          <DealListTable props={props} />
        </div>
      </Layout>
    </>
  );
}
