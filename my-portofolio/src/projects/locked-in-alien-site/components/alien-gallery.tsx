"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export function AlienGallery() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
    <section ref={sectionRef} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 alien-text">TRANSMISSIONS</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
            {"Visual artifacts from the digital realm where consciousness meets technology"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Original alien image */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="alien-border rounded-lg overflow-hidden group">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/locked-in-alien.png"
                  alt="The Original Locked In Alien"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">THE ORIGINAL</h3>
                <p className="opacity-80">{"The first manifestation of pure focus"}</p>
              </div>
            </div>
          </div>

          {/* Tech alien image */}
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="alien-border rounded-lg overflow-hidden group">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/alien-tech.png"
                  alt="Alien Technology Interface"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">TECHNOLOGICAL INTERFACE</h3>
                <p className="opacity-80">{"Where alien consciousness meets digital reality"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote section */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="alien-border p-8 rounded-lg max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light italic mb-6 alien-text">
              {
                "Fiction reflects reality and aids human consciousness in understanding the infinite possibilities of focused existence."
              }
            </blockquote>
            <cite className="text-lg opacity-70">— Hidden Message from the Void</cite>
          </div>
        </div>
      </div>
    </section>
  )
}
