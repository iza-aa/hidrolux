'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    // replace() is better for redirects as it doesn't clutter the history stack
    router.replace('/')
  }, [router])

  // Return null or a minimal loader while the redirect fires
  return null 
}