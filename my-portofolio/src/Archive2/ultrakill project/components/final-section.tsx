"use client"

import { useEffect, useRef, useState } from "react"

export default function FinalSection() {
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
    <section
      ref={sectionRef}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center py-24 px-6"
    >
      <div className="text-center">
        <h2
          className={`text-4xl md:text-7xl font-mono mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-white">ENTER </span>
          <span className="text-[#DC0000]">HELL</span>
        </h2>

        <p
          className={`text-xl md:text-2xl text-gray-400 font-mono mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          The blood awaits.
        </p>

        <a
          href="https://store.steampowered.com/app/1229490/ULTRAKILL/"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block px-12 py-6 border-2 border-[#DC0000] text-[#DC0000] font-mono text-xl md:text-2xl 
            hover:bg-[#DC0000] hover:text-black transition-colors duration-150
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: isVisible ? "0ms" : "400ms" }}
        >
          GET ULTRAKILL ON STEAM
        </a>

        <div
          className={`mt-24 text-gray-600 font-mono text-sm transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p>Fan tribute to ULTRAKILL by New Blood Interactive</p>
          <p className="mt-2">
            MANKIND IS <span className="text-[#DC0000]">DEAD</span>. BLOOD IS{" "}
            <span className="text-[#DC0000]">FUEL</span>. HELL IS <span className="text-[#DC0000]">FULL</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
