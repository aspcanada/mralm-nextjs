import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useProfile } from "@/utils/hooks";
import Image from "next/image";

export default function ProfileSection() {
  const { profile, isLoading, isError } = useProfile()
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error...</div>

  return (
    <>
      <div className="space-y-10 divide-y divide-gray-900/10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
          <div className="px-4 sm:px-0">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Public Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
            <div className="px-4 py-6 sm:p-8">
              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Website
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-600 sm:max-w-md">
                      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                        http://
                      </span>
                      <input
                        type="text"
                        name="website"
                        id="website"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="www.example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    About
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:py-1.5 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about yourself.
                  </p>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Photo
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                  {(profile.avatar && (
                    <Image
                      className="h-12 w-12 rounded-full"
                      src={profile.avatar}
                      alt=""
                      width={32}
                      height={32}
                    />
                  )) || (
                    <UserCircleIcon
                      className="h-12 w-12 text-gray-400"
                      aria-hidden="true"
                    />
                  )}
                    <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Change
                    </button>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Investor Status
                  </label>
                  <fieldset>
                    <div className="mt-6 space-y-6">
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="lender"
                            name="lender"
                            type="checkbox"
                            defaultChecked={profile.isLender}
                            className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label
                            htmlFor="lender"
                            className="font-medium text-gray-900"
                          >
                            I&apos;m a Lender
                          </label>
                          <p className="text-gray-500">
                            Let others know that I am interested in lending.
                          </p>
                        </div>
                      </div>

                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="lender"
                            name="lender"
                            type="checkbox"
                            defaultChecked={profile.isBorrower}
                            className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label
                            htmlFor="lender"
                            className="font-medium text-gray-900"
                          >
                            I&apos;m a Borrower
                          </label>
                          <p className="text-gray-500">
                            Let others know that I am interested in borrowing.
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
              {/* <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button> */}
              <button
                type="submit"
                className="rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
