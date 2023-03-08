import { Fragment, useState } from 'react'
import Sidebar from './sidebar'
import Header from './header'

type LayoutProps = {
  user?: any
  loading?: boolean
  children: React.ReactNode
}


export default function Layout({ user, loading = false, children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex flex-col md:pl-64">
          <Header setSidebarOpen={setSidebarOpen} />
         
          {/* MAIN CONTENT */}
          <main className="flex-1">
            <div className="mx-auto max-w-7xl px-6 py-6">
              { children }
            </div>
          </main>
        </div>
    </>
  )
}
