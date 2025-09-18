import { AlienHero } from "@/components/alien-hero"
import { AlienAbout } from "@/components/alien-about"
import { AlienGallery } from "@/components/alien-gallery"
import { AlienFooter } from "@/components/alien-footer"
import { AlienMatrix } from "@/components/alien-matrix"
import { AlienTerminal } from "@/components/alien-terminal"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <AlienMatrix />
      <AlienHero />
      <AlienAbout />
      <AlienGallery />
      <AlienFooter />
      <AlienTerminal />
    </main>
  )
}
