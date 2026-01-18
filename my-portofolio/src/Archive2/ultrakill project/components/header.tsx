"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Header() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const seconds = now.getSeconds().toString().padStart(2, "0")
      setTime(`${hours}:${minutes}:${seconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3 group cursor-pointer">
        <Image
          src="/v2-mascot.webp"
          alt="V2 Mascot"
          width={48}
          height={48}
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="text-[#DC0000] font-mono text-xl tracking-widest">{time}</div>
    </header>
  )
}
