"use client"

import { useEffect, useRef, useState } from "react"

const galleryImages = [
  {
    src: "/gallery/bloodrain.jpg",
    alt: "V1 Blood Rain",
  },
  {
    src: "/gallery/int.webp",
    alt: "Insufficient Blood",
  },
  {
    src: "/gallery/skull.jpg",
    alt: "Machine in the Mouth",
  },
  {
    src: "/gallery/leviathan.jpg",
    alt: "Leviathan",
  },
]

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBlackBg, setShowBlackBg] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionTop = sectionRef.current.offsetTop
      const sectionHeight = sectionRef.current.offsetHeight
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      const sectionStart = sectionTop - windowHeight
      const sectionEnd = sectionTop + sectionHeight - windowHeight
      const progress = Math.max(0, Math.min(1, (scrollY - sectionStart) / (sectionEnd - sectionStart)))

      setScrollProgress(progress)
      setShowBlackBg(progress > 0.02 && progress < 0.98)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Black overlay that appears during gallery */}
      <div
        className={`fixed inset-0 z-5 bg-[#0a0a0a] transition-opacity duration-500 pointer-events-none ${
          showBlackBg ? "opacity-95" : "opacity-0"
        }`}
      />

      <section ref={sectionRef} className="relative z-10 min-h-[600vh]">
        {/* Gallery Images Container - Sticky viewport */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Section title */}
          <div
            className={`absolute top-8 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-500 ${
              showBlackBg ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-2xl md:text-4xl font-mono text-[#DC0000] tracking-widest">
              THE <span className="text-white">ART</span> OF VIOLENCE
            </h2>
          </div>

          {/* Images flowing from bottom to top, alternating left/right */}
          {galleryImages.map((image, index) => {
            const imageSegment = 1 / galleryImages.length
            const imageStart = index * imageSegment * 0.7
            const imageEnd = imageStart + imageSegment * 1.8

            const imageProgress = Math.max(0, Math.min(1, (scrollProgress - imageStart) / (imageEnd - imageStart)))

            const yPosition = 120 - imageProgress * 140

            const opacity =
              imageProgress < 0.1 ? imageProgress * 10 : imageProgress > 0.9 ? (1 - imageProgress) * 10 : 1

            const isLeft = index % 2 === 0
            const xPosition = isLeft ? 5 + (index % 3) * 5 : 55 + (index % 3) * 5

            const rotation = isLeft ? -3 - (index % 3) : 3 + (index % 3)

            return (
              <div
                key={index}
                className="absolute w-[40vw] md:w-[35vw] lg:w-[30vw] aspect-video transition-none"
                style={{
                  left: `${xPosition}%`,
                  top: `${yPosition}%`,
                  transform: `rotate(${rotation}deg)`,
                  opacity: imageProgress > 0 && imageProgress < 1 ? opacity : 0,
                  zIndex: 10 + index,
                }}
              >
                <div className="relative w-full h-full group">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover border-2 border-[#DC0000]/60 shadow-2xl shadow-[#DC0000]/30"
                  />
                  {/* Red glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#DC0000]/20 to-transparent" />
                  {/* Caption */}
                  <p className="absolute bottom-2 left-2 text-[#DC0000] font-mono text-xs tracking-widest bg-black/90 px-2 py-1">
                    {image.alt.toUpperCase()}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
