"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PawPrint } from "lucide-react"
import { useState } from "react"

export function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/90 py-4 px-6 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative flex items-center">
            <PawPrint className="h-6 w-6 text-black mr-2" />
            <span className="text-xl font-bold text-black">TheFurryWaggers</span>
            <span className="absolute -bottom-3 right-0 text-xs font-bold text-black">pet stop</span>
          </div>
          <Image
            src="/images/kodava_symbol.png?height=40&width=40"
            alt="Logo symbol"
            width={30}
            height={30}
            className="ml-2"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          <Link href="/" className="text-black hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link href="/gallery" className="text-black hover:text-blue-600 font-medium">
            Gallery
          </Link>
          <Link href="/contact" className="text-black hover:text-blue-600 font-medium">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="bg-blue-100/50 text-blue-700 hover:bg-blue-200 border-blue-200">
            Sign In
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Book Now</Button>
        </div>
      </div>
    </header>
  )
}

