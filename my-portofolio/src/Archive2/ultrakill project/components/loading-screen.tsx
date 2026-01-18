"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface LoadingScreenProps {
  isVisible: boolean
}

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
  const [mascotVisible, setMascotVisible] = useState(false)

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isVisible])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setMascotVisible((prev) => !prev)
      }, 800)

      return () => clearInterval(interval)
    }
  }, [isVisible])

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#0a0a0a] flex items-center justify-center transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className={`transition-opacity duration-500 ${mascotVisible ? "opacity-100" : "opacity-30"}`}>
        <Image src="/v2-mascot.webp" alt="V2 Mascot" width={120} height={120} className="object-contain" priority />
      </div>
    </div>
  )
}
