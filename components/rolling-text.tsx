"use client"

import { useEffect, useState } from "react"

export function RollingTextAnimation() {
  const [currentText, setCurrentText] = useState<string | null>(null)
  const [animationState, setAnimationState] = useState<"entering" | "visible" | "exiting" | "hidden">("hidden")

  // Sequence of texts to display
  const texts = ["Remember", "We just need a pet to pamper!"]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const animationCycle = async () => {
      // Loop through each text in sequence
      for (let i = 0; i < texts.length; i++) {
        // Set current text and start entering animation
        setCurrentIndex(i)
        setCurrentText(texts[i])
        setAnimationState("entering")

        // Wait for entering animation to complete
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Keep text visible for a moment
        setAnimationState("visible")
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Start exiting animation
        setAnimationState("exiting")
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Hide text before showing next one
        setAnimationState("hidden")
        await new Promise((resolve) => setTimeout(resolve, 500))
      }
    }

    // Start the animation cycle
    animationCycle()

    // Set up interval to repeat the animation cycle
    const interval = setInterval(() => {
      animationCycle()
    }, 9000) // Total duration of one complete cycle

    return () => clearInterval(interval)
  }, [])

  // Determine text color based on current index
  const textColor = currentIndex === 0 ? "text-blue-600" : "text-pink-600"

  return (
    <div className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="h-32 flex items-center justify-center">
          {currentText && (
            <h2
              className={`text-4xl md:text-6xl font-extrabold ${textColor} transition-all duration-1000 transform
                ${animationState === "entering" ? "translate-y-0 opacity-100 scale-100" : ""}
                ${animationState === "visible" ? "translate-y-0 opacity-100 scale-100" : ""}
                ${animationState === "exiting" ? "translate-y-20 opacity-0 scale-95" : ""}
                ${animationState === "hidden" ? "translate-y-20 opacity-0 scale-90" : ""}
              `}
            >
              {currentText}
              <span className="animate-pulse">!</span>
            </h2>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full pointer-events-none">
          <div className="absolute left-4 w-16 h-16 rounded-full bg-blue-200 opacity-20 animate-pulse"></div>
          <div
            className="absolute right-4 w-16 h-16 rounded-full bg-pink-200 opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Paw print decorations */}
        <div className="absolute top-0 left-10 text-3xl opacity-20 transform rotate-45">🐾</div>
        <div className="absolute bottom-0 right-10 text-3xl opacity-20 transform -rotate-12">🐾</div>
      </div>
    </div>
  )
}

