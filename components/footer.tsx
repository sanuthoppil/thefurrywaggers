import Link from "next/link"
import { PawPrint } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <PawPrint className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-blue-600">TheFurryWaggers</span>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <Link href="/" className="text-sm text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <Link href="/gallery" className="text-sm text-gray-600 hover:text-blue-600">
              Gallery
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} TheFurryWaggers. All rights reserved.</p>
          <p className="mt-1">123 Pet Street, Dogtown, CA 90210 | info@thefurrywaggers.com | +1 (555) 123-4567</p>
        </div>
      </div>
    </footer>
  )
}

