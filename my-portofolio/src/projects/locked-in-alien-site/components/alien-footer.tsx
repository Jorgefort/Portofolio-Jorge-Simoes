"use client"

export function AlienFooter() {
  return (
    <footer className="py-16 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 alien-text">LOCKED IN</h3>
            <p className="opacity-80 leading-relaxed">
              {"A digital phenomenon exploring the depths of human concentration through otherworldly perspective."}
            </p>
          </div>

          {/* Middle section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ORIGINS</h4>
            <ul className="space-y-2 opacity-80">
              <li>{"• December 2024 Emergence"}</li>
              <li>{"• AI-Generated Content"}</li>
              <li>{"• TikTok Phenomenon"}</li>
              <li>{"• Cultural Touchstone"}</li>
            </ul>
          </div>

          {/* Right section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">PHILOSOPHY</h4>
            <ul className="space-y-2 opacity-80">
              <li>{"• Unwavering Focus"}</li>
              <li>{"• Transcendent Concentration"}</li>
              <li>{"• Digital Consciousness"}</li>
              <li>{"• Universal Experience"}</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-8 h-8 alien-border rounded-full flex items-center justify-center alien-pulse">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <span className="text-sm opacity-60 tracking-wider">TRANSMISSION COMPLETE</span>
            <div
              className="w-8 h-8 alien-border rounded-full flex items-center justify-center alien-pulse"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
          <p className="text-sm opacity-60">{"© 2024 Locked In Alien • A manifestation of digital consciousness"}</p>
        </div>
      </div>
    </footer>
  )
}
