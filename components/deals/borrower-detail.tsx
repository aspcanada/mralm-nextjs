import { PaperClipIcon } from "@heroicons/react/20/solid";
import { Deal, PropertyInfo } from "@/interfaces";
import { currencyFormat } from "@/utils/helpers";
import { useRouter } from "next/router";
import { useDeal } from "@/utils/hooks";
import Image from "next/image";

export default function BorrowerDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { deal, isLoading, isError } = useDeal(id);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div>
      <h3 className="mt-5 mb-5 text-lg font-semibold leading-6 text-gray-900">
        Borrower Info
      </h3>

      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <ul
          role="list"
          className="px-4 py-5 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <li>
            <Image
              className="aspect-[3/2] w-full rounded-2xl object-cover"
              src={deal.borrower.profile.avatar}
              alt=""
              width={640}
              height={480}
            />
          </li>
        </ul>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-2 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {deal.borrower.profile.firstName} {deal.borrower.profile.lastName}
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-2 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Occupation</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {deal.borrower.profile.occupation}
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-2 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {deal.borrower.profile.email}
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-2 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Phone</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {deal.borrower.profile.phone}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
