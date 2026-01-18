"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AlienHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.15),transparent_70%)] opacity-20 transition-all duration-300"
          style={
            {
              "--mouse-x": `${mousePosition.x}%`,
              "--mouse-y": `${mousePosition.y}%`,
            } as React.CSSProperties
          }
        />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%)] bg-[length:20px_20px]" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-px bg-white opacity-20 alien-scan" />
        <div className="absolute w-full h-px bg-white opacity-10 alien-scan-slow" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Title */}
        <div
          className={`transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 alien-text tracking-wider glitch-text">
            LOCKED IN
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-12 opacity-80">ALIEN</h2>
        </div>

        <div
          className={`relative mb-12 transition-all duration-2000 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="relative w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] mx-auto alien-float">
            <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl alien-pulse" />
            <Image
              src="/images/locked-in-alien.png"
              alt="The Locked In Alien - An otherworldly being in a state of intense focus"
              fill
              className="object-cover rounded-full alien-glow border-2 border-white/20"
              priority
            />
            <div className="absolute inset-0 border border-white/10 rounded-full alien-orbit" />
            <div className="absolute inset-4 border border-white/5 rounded-full alien-orbit-reverse" />
          </div>
        </div>

        {/* Subtitle */}
        <div
          className={`transition-all duration-2000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            {"A state of unwavering concentration transcending human understanding"}
          </p>

          <Button
            size="lg"
            className="alien-border bg-transparent hover:bg-white hover:text-black transition-all duration-300 text-lg px-8 py-6 glitch relative overflow-hidden group"
          >
            <span className="relative z-10">ENTER THE VOID</span>
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          </Button>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full alien-pulse opacity-60" />
      <div
        className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full alien-pulse opacity-40"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-32 left-20 w-3 h-3 bg-white rounded-full alien-pulse opacity-30"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-1 h-1 bg-white rounded-full alien-pulse opacity-50"
        style={{ animationDelay: "0.5s" }}
      />
      <div className="absolute top-1/3 left-1/4 w-px h-8 bg-white/20 alien-float" style={{ animationDelay: "3s" }} />
      <div
        className="absolute top-2/3 right-1/3 w-px h-12 bg-white/30 alien-float"
        style={{ animationDelay: "1.5s" }}
      />
    </section>
  )
}
