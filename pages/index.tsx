// import { Inter } from '@next/font/google'
import Layout from '@/components/layout'

// const inter = Inter({ subsets: ['latin'] })

export default function DashboardPage() {
  return (
    <>
      <Layout>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
          </div>
        </div>
      </Layout>
    </>
  )
}
