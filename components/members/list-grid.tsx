import { Profile } from '@/interfaces'
import { EnvelopeIcon, PhoneIcon, BanknotesIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

type MemberListGridProps = {
  members: Profile[]
}

export default function MemberListGrid({ props }: { props: MemberListGridProps }) {
  const { members } = props

  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {members.map((member) => (
        <li
          key={member.email}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <Image className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={member.avatar} alt="" width={128} height={128} />
            <h3 className="mt-6 text-sm font-medium text-gray-900">{member.firstName} {member.lastName}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{member.occupation}</dd>

              {(member.isLender) ? (
                <>
                <dt className="sr-only">IsLender</dt>
                <dd className="mt-3">
                  <span className="rounded-full bg-sky-100 px-2 py-1 text-xs font-medium text-sky-800">
                    Lender
                  </span>
                </dd>
              </>
              ) : ''}

            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${member.email}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Email
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${member.phone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Call
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
