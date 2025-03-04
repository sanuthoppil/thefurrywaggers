"use client"

import Image from "next/image"
import { HandMetal } from "lucide-react"

export function GoldenTouchSection() {
  return (
    <section className="relative py-16 mb-16 overflow-hidden">
      {/* Golden gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-100" />

      {/* Sparkle animations */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <div className="w-1 h-1 bg-yellow-300 rounded-full transform rotate-45" />
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with decorative elements */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4 space-x-2">
            <HandMetal className="w-8 h-8 text-amber-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-amber-800 italic">Hands that handle your pet…</h2>
            <HandMetal className="w-8 h-8 text-amber-600" />
          </div>
          <p className="text-2xl md:text-3xl font-light text-amber-700">they really have the golden touch!</p>
          <div className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 rounded-full" />
        </div>

        {/* Images with golden frame effect */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white p-2 rounded-lg">
              <Image
                src="/images/golden-touch1.png"
                alt="Professional pet grooming - Golden Retriever"
                width={500}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white p-2 rounded-lg">
              <Image
                src="/images/golden-touch2.png"
                alt="Professional pet grooming - Long-haired dog"
                width={500}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Decorative bottom element */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-24 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 rounded-full blur-lg opacity-50 animate-pulse" />
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
              <HandMetal className="w-12 h-12 text-amber-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

