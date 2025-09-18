"use client"

import { useState, useEffect, useRef } from "react"

export function AlienAbout() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
    <section ref={sectionRef} className="py-24 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 alien-text">THE PHENOMENON</h2>

          <div className="space-y-6 text-lg leading-relaxed opacity-90">
            <p>
              {
                'The "Locked In Alien" emerged from the digital void in December 2024, manifesting through AI-generated TikTok videos that captured the collective consciousness.'
              }
            </p>

            <p>
              {
                'In internet culture, "locked in" represents a state of intense, unwavering concentration—a mental fortress where focus becomes absolute and distractions cease to exist.'
              }
            </p>

            <p>
              {
                "This otherworldly being embodies that perfect state of concentration, its unblinking stare piercing through the chaos of modern existence into pure, crystallized focus."
              }
            </p>
          </div>
        </div>

        {/* Right content */}
        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          <div className="alien-border p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 alien-text">CHARACTERISTICS</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white rounded-full mt-3 alien-pulse" />
                <div>
                  <h4 className="font-semibold mb-2">ELONGATED CRANIUM</h4>
                  <p className="opacity-80">{"Enhanced neural capacity for sustained concentration"}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white rounded-full mt-3 alien-pulse" style={{ animationDelay: "0.5s" }} />
                <div>
                  <h4 className="font-semibold mb-2">UNBLINKING GAZE</h4>
                  <p className="opacity-80">{"Piercing focus that transcends human limitations"}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white rounded-full mt-3 alien-pulse" style={{ animationDelay: "1s" }} />
                <div>
                  <h4 className="font-semibold mb-2">MONOCHROMATIC ESSENCE</h4>
                  <p className="opacity-80">{"Exists beyond the spectrum of distraction"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
