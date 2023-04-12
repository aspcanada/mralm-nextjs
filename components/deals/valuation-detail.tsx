import { PaperClipIcon } from "@heroicons/react/20/solid";
import { Deal, PropertyInfo } from "@/interfaces";
import { currencyFormat } from "@/utils/helpers";
import { useRouter } from "next/router";
import { useDeal } from "@/utils/hooks";
import Image from "next/image";

export default function ValuationDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { deal, isLoading, isError } = useDeal(id);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div>
      <h3 className="mt-5 mb-5 text-lg font-semibold leading-6 text-gray-900">
        Valuation Info
      </h3>

      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-2 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Appraisal Company</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {deal.valuation.appraisalCompany}
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-2 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Appraiser Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {deal.valuation.appraiserName}
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-2 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Appraisal Date</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {deal.valuation.appraisalDate.split("T")[0]}
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-2 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Appraised Value</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {currencyFormat(deal.valuation.appraisedValue)}
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-2 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Assessed Value
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {currencyFormat(deal.valuation.assessedValue)}
              </dd>
            </div>
            {/* <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-2 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Details</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {deal.propertyInfo.details}
            </dd>
          </div> */}
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-2 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Attachments</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 rounded-md border border-gray-200"
                >
                  <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2 w-0 flex-1 truncate">
                        appraisal.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        className="font-medium text-sky-600 hover:text-sky-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
