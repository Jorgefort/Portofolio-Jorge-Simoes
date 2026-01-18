"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function LoreSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative z-10 min-h-screen bg-black/95 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-6xl font-mono text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-white">THE</span>
          <span className="text-[#DC0000]"> MACHINE</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content on left */}
          <div className="flex-1 space-y-8">
            <p
              className={`text-lg md:text-xl text-gray-300 font-mono leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              You are <span className="text-[#DC0000]">V1</span>, a combat machine fueled by blood. After the extinction
              of humanity, you descend into Hell seeking the only remaining source of sustenance.
            </p>

            <p
              className={`text-lg md:text-xl text-gray-300 font-mono leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              Hell is vast. Hell is ancient. And Hell is <span className="text-[#DC0000]">full</span> of blood - demons,
              angels, and tormented souls ready to be torn apart for fuel.
            </p>

            <p
              className={`text-lg md:text-xl text-gray-300 font-mono leading-relaxed transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              The deeper you go, the more <span className="text-[#DC0000]">violent</span> it becomes.
            </p>

            <div
              className={`mt-8 transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="w-32 h-1 bg-[#DC0000]" />
            </div>
          </div>

          {/* V2 mascot image on right */}
          <div
            className={`flex-shrink-0 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div className="relative w-48 h-64 md:w-64 md:h-80">
              <Image
                src="/v2-mascot.webp"
                alt="V2 Machine"
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(220,0,0,0.5)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
