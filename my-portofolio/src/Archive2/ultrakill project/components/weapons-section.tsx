"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const weapons = [
  {
    name: "REVOLVER",
    type: "PRECISION",
    variant: "MARKSMAN",
    image: "/ultrakill-revolver-gun-weapon-red-glow.jpg",
  },
  {
    name: "SHOTGUN",
    type: "CLOSE RANGE",
    variant: "CORE EJECT",
    image: "/ultrakill-shotgun-weapon-pump-action-red.jpg",
  },
  {
    name: "NAILGUN",
    type: "SUPPRESSION",
    variant: "ATTRACTOR",
    image: "/ultrakill-nailgun-weapon-industrial-red-glow.jpg",
  },
  {
    name: "RAILCANNON",
    type: "OBLITERATION",
    variant: "ELECTRIC",
    image: "/ultrakill-railcannon-electric-weapon-blue-red.jpg",
  },
  {
    name: "ROCKET LAUNCHER",
    type: "EXPLOSIVE",
    variant: "FREEZEFRAME",
    image: "/ultrakill-rocket-launcher-weapon-explosive-red.jpg",
  },
]

export default function WeaponsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredWeapon, setHoveredWeapon] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

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

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <section
      ref={sectionRef}
      className="relative z-10 min-h-screen py-24 px-6 bg-black/90"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-4xl md:text-6xl font-mono text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-white">TOOLS OF </span>
          <span className="text-[#DC0000]">DESTRUCTION</span>
        </h2>

        <div className="w-full">
          {/* Header row */}
          <div className="border-t border-[#DC0000]/40 py-4 grid grid-cols-12 gap-4 text-gray-500 font-mono text-sm">
            <div className="col-span-2"></div>
            <div className="col-span-4">WEAPON</div>
            <div className="col-span-3">TYPE</div>
            <div className="col-span-3">VARIANT</div>
          </div>

          {/* Weapon rows */}
          {weapons.map((weapon, index) => (
            <div
              key={weapon.name}
              onMouseEnter={() => setHoveredWeapon(index)}
              onMouseLeave={() => setHoveredWeapon(null)}
              className={`border-t border-[#DC0000]/40 py-6 grid grid-cols-12 gap-4 cursor-pointer transition-all duration-300 ${
                hoveredWeapon === index ? "bg-[#DC0000]/10" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`col-span-2 font-mono text-xl transition-colors duration-300 ${
                  hoveredWeapon === index ? "text-[#DC0000]" : "text-gray-600"
                }`}
              >
                #{String(index + 1).padStart(2, "0")}
              </div>
              <div
                className={`col-span-4 font-mono text-lg md:text-xl transition-colors duration-300 ${
                  hoveredWeapon === index ? "text-[#DC0000]" : "text-gray-300"
                }`}
              >
                {weapon.name}
              </div>
              <div
                className={`col-span-3 font-mono text-lg transition-colors duration-300 ${
                  hoveredWeapon === index ? "text-white" : "text-gray-500"
                }`}
              >
                {weapon.type}
              </div>
              <div
                className={`col-span-3 font-mono text-lg transition-colors duration-300 ${
                  hoveredWeapon === index ? "text-white" : "text-gray-500"
                }`}
              >
                {weapon.variant}
              </div>
            </div>
          ))}

          {/* Bottom border */}
          <div className="border-t border-[#DC0000]/40"></div>
        </div>
      </div>

      {hoveredWeapon !== null && (
        <div
          className="fixed pointer-events-none z-50 transition-opacity duration-200"
          style={{
            left: mousePos.x + 20,
            top: mousePos.y - 100,
          }}
        >
          <div className="relative w-64 h-40 border border-[#DC0000]/50 shadow-lg shadow-[#DC0000]/20">
            <Image
              src={weapons[hoveredWeapon].image || "/placeholder.svg"}
              alt={weapons[hoveredWeapon].name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      )}
    </section>
  )
}
