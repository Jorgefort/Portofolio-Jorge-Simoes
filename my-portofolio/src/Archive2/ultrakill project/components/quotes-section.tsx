"use client"

import { useEffect, useRef, useState } from "react"

const styleRanks = [
  { rank: "D", name: "DESTRUCTIVE", color: "#666666" },
  { rank: "C", name: "CHAOTIC", color: "#888888" },
  { rank: "B", name: "BRUTAL", color: "#AAAAAA" },
  { rank: "A", name: "ANARCHIC", color: "#CCCCCC" },
  { rank: "S", name: "SUPREME", color: "#FFFFFF" },
  { rank: "SS", name: "SSADISTIC", color: "#DC0000" },
  { rank: "SSS", name: "SSSHITSTORM", color: "#DC0000" },
  { rank: "P", name: "PERFECT", color: "#FFD700" },
]

export default function QuotesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative z-10 min-h-screen flex items-center justify-center py-24 px-6 bg-black/90"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2
          className={`text-center text-3xl md:text-5xl font-mono text-white mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-[#DC0000]">STYLE</span> RANKS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {styleRanks.map((style, index) => (
            <div
              key={style.name}
              className={`group relative border border-[#DC0000]/20 p-6 md:p-8 transition-all duration-500 cursor-default
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                ${hoveredIndex === index ? "bg-[#DC0000]/10" : "bg-transparent"}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-6">
                <span
                  className="text-4xl md:text-6xl font-mono font-bold transition-all duration-300"
                  style={{
                    color: hoveredIndex === index ? style.color : "#333333",
                    textShadow: hoveredIndex === index ? `0 0 20px ${style.color}` : "none",
                  }}
                >
                  {style.rank}
                </span>
                <div className="flex flex-col">
                  <span
                    className="text-xl md:text-2xl font-mono tracking-wider transition-colors duration-300"
                    style={{ color: hoveredIndex === index ? style.color : "#666666" }}
                  >
                    {style.name}
                  </span>
                  <div
                    className="h-0.5 mt-2 transition-all duration-500"
                    style={{
                      width: hoveredIndex === index ? "100%" : "0%",
                      backgroundColor: style.color,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          className={`text-center text-gray-500 font-mono mt-12 text-sm md:text-base transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          CHAIN KILLS. MIX WEAPONS. ASCEND.
        </p>
      </div>
    </section>
  )
}
