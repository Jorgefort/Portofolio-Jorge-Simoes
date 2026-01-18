"use client"

import { useState, useEffect } from "react"
import LoadingScreen from "@/components/loading-screen"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import GallerySection from "@/components/gallery-section"
import MusicPlayer from "@/components/music-player"
import LoreSection from "@/components/lore-section"
import WeaponsSection from "@/components/weapons-section"
import QuotesSection from "@/components/quotes-section"
import FinalSection from "@/components/final-section"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => setShowContent(true), 100)
    }, 3000)

    return () => clearTimeout(loadingTimer)
  }, [])

  return (
    <main className="relative min-h-screen">
      <LoadingScreen isVisible={isLoading} />

      <div className={`transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`}>
        <Header />
        <HeroSection />
        <GallerySection />
        <LoreSection />
        <WeaponsSection />
        <QuotesSection />
        <FinalSection />
        <MusicPlayer />
      </div>
    </main>
  )
}
