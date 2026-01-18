"use client"

import { useState } from "react"
import Image from "next/image"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      {/* Hidden YouTube iframe for music */}
      {isPlaying && (
        <iframe
          src="https://www.youtube.com/embed/videoseries?list=PLWuVlTd0TuPjaWZNVZja6leleHxR_GOtk&autoplay=1&loop=1"
          allow="autoplay"
          className="hidden"
          title="ULTRAKILL OST"
        />
      )}

      <button
        onClick={togglePlay}
        className={`fixed bottom-6 right-6 z-50 w-20 h-20 rounded-full overflow-hidden transition-opacity duration-300 ${
          isPlaying ? "opacity-100" : "opacity-40"
        }`}
        aria-label={isPlaying ? "Pause music" : "Play ULTRAKILL music"}
      >
        <Image
          src="/ultrakill-vinyl.png"
          alt="ULTRAKILL Vinyl"
          width={80}
          height={80}
          className="object-cover w-full h-full"
        />
      </button>
    </>
  )
}
