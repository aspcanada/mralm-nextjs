import { useRouter } from "next/router"
import React, { useEffect } from "react"

export default function IndexPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/dashboard")
  }, [router])

  return (
    <>
      {/* <Loader /> */}
    </>
  )
  
}
