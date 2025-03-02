"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export function CuteWaggersGalleryComponent() {
  const [facilitySlide, setFacilitySlide] = useState(0)
  const [servicesSlide, setServicesSlide] = useState(0)
  const [productsSlide, setProductsSlide] = useState(0)

  const galleryItems = [
    {
      category: "Facility",
      images: [
        { src: "/images/pet-servicespics/furry_shop.jpg?height=300&width=400", alt: "Reception area" },
        { src: "/images/pet-servicespics/products_shop.jpg?height=300&width=400", alt: "Play area" },
        { src: "/images/pet-servicespics/doggie_bed.jpg?height=300&width=400", alt: "Grooming station" },
      ],
    },
    {
      category: "Pet Services",
      images: [
        { src: "/images/doggie_back.jpg?height=300&width=400", alt: "Dog grooming" },
        { src: "/images/doggie_back.jpg?height=300&width=400", alt: "Dog training" },
        { src: "/images/doggie-bg.jpg?height=300&width=400", alt: "Dog daycare" },
      ],
    },
    {
      category: "Pet Products",
      images: [
        { src: "/images/doggie.jpg?height=300&width=400", alt: "Dog food" },
        { src: "/images/dogimage.jpg?height=300&width=400", alt: "Dog toys" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Dog accessories" },
      ],
    },
  ]

  const nextSlide = (category: string, currentSlide: number, setSlide: (slide: number) => void) => {
    setSlide((currentSlide + 1) % galleryItems.find((item) => item.category === category)!.images.length)
  }

  const prevSlide = (category: string, currentSlide: number, setSlide: (slide: number) => void) => {
    setSlide(
      (currentSlide - 1 + galleryItems.find((item) => item.category === category)!.images.length) %
        galleryItems.find((item) => item.category === category)!.images.length,
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-5xl font-bold text-center mb-16">Gallery</h1>

        {galleryItems.map((item, index) => {
          const [currentSlide, setCurrentSlide] =
            item.category === "Facility"
              ? [facilitySlide, setFacilitySlide]
              : item.category === "Pet Services"
                ? [servicesSlide, setServicesSlide]
                : [productsSlide, setProductsSlide]

          return (
            <section key={index} className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">{item.category}</h2>
              <div className="relative w-full max-w-4xl mx-auto">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {item.images.map((image, imageIndex) => (
                      <div key={imageIndex} className="w-full flex-shrink-0">
                        <div className="bg-white overflow-hidden">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            width={400}
                            height={300}
                            className="w-full h-64 object-cover"
                          />
                          <div className="p-4">
                            <p className="text-center text-lg font-semibold">{image.alt}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => prevSlide(item.category, currentSlide, setCurrentSlide)}
                  className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white text-blue-600 hover:bg-blue-50 rounded-full p-2 z-20 shadow-md"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => nextSlide(item.category, currentSlide, setCurrentSlide)}
                  className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white text-blue-600 hover:bg-blue-50 rounded-full p-2 z-20 shadow-md"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </section>
          )
        })}

        <section className="flex justify-center gap-12 mb-16">
          <Button
            size="lg"
            className="w-40 h-40 rounded-full text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 flex flex-col items-center justify-center shadow-lg"
          >
            <span className="text-2xl mb-2">🐾</span>
            Book a Service
          </Button>
          <Button
            size="lg"
            className="w-40 h-40 rounded-full text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 flex flex-col items-center justify-center shadow-lg"
          >
            <span className="text-2xl mb-2">🐾</span>
            Shop Products
          </Button>
        </section>
      </div>
    </div>
  )
}

