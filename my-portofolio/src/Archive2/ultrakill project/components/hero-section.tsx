"use client"

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/ultrakill-bg.webp')`,
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* Main Title - made "IS" red */}
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-mono tracking-wider text-center">
          <span className="text-white">MANKIND </span>
          <span className="text-[#DC0000]">IS DEAD</span>
        </h1>

        {/* Subtitle taglines - made "IS" red in both lines */}
        <div className="mt-8 space-y-2 text-center">
          <p className="text-xl md:text-2xl lg:text-3xl font-mono tracking-widest">
            <span className="text-[#DC0000]">BLOOD IS FUEL</span>
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#DC0000] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#DC0000] rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
