"use client"

import { useState, useEffect } from "react"

export function AlienTerminal() {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const terminalMessages = [
    "INITIALIZING ALIEN CONSCIOUSNESS...",
    "SCANNING DIMENSIONAL FREQUENCIES...",
    "LOCKED IN STATE: ACTIVATED",
    "FOCUS LEVEL: MAXIMUM",
    "REALITY DISTORTION: 97.3%",
    "HUMAN COMPREHENSION: LIMITED",
    "TRANSCENDENCE PROTOCOL: ENGAGED",
    "VOID CONNECTION: ESTABLISHED",
  ]

  useEffect(() => {
    let messageIndex = 0
    let charIndex = 0

    const typeMessage = () => {
      if (messageIndex >= terminalMessages.length) {
        setTimeout(() => {
          setLines([])
          messageIndex = 0
        }, 3000)
        return
      }

      setIsTyping(true)
      const message = terminalMessages[messageIndex]

      const typeChar = () => {
        if (charIndex < message.length) {
          setCurrentLine(message.slice(0, charIndex + 1))
          charIndex++
          setTimeout(typeChar, 50 + Math.random() * 50)
        } else {
          setLines((prev) => [...prev, message])
          setCurrentLine("")
          charIndex = 0
          messageIndex++
          setIsTyping(false)
          setTimeout(typeMessage, 1000)
        }
      }

      typeChar()
    }

    const initialDelay = setTimeout(typeMessage, 2000)
    return () => clearTimeout(initialDelay)
  }, [])

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 border border-white/20 p-4 rounded font-mono text-sm max-w-md backdrop-blur-sm z-50">
      <div className="text-white/60 mb-2">ALIEN_TERMINAL_v2.1</div>
      <div className="space-y-1">
        {lines.map((line, index) => (
          <div key={index} className="text-white/80">
            {">"} {line}
          </div>
        ))}
        {isTyping && (
          <div className="text-white/80">
            {">"} {currentLine}
            <span className="animate-pulse">_</span>
          </div>
        )}
      </div>
    </div>
  )
}
