"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export function ServicesProducts() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [selectedItem, setSelectedItem] = useState<{ name: string; image: string; description: string } | null>(null)

  const cards = [
    {
      id: "services",
      title: "Pet Services",
      description: "Grooming, training, and daycare services for your furry friends.",
      items: [
        {
          name: "Grooming",
          image: "/images/pet-servicespics/dog_grooming.jpeg?height=300&width=300",
          description:
            "Professional grooming services to keep your pet looking and feeling their best. Our experienced groomers offer baths, haircuts, nail trims, and more.",
        },
        {
          name: "Training",
          image: "/images/pet-servicespics/dog_training.jpeg?height=300&width=300",
          description:
            "Expert training sessions to help your pet learn new skills and improve behavior. We offer both group classes and private lessons.",
        },
        {
          name: "Daycare",
          image: "/images/pet-servicespics/dog_daycare.jpeg?height=300&width=300",
          description:
            "A safe and fun environment for your pet to socialize and play while you're away. Our supervised daycare includes indoor and outdoor activities.",
        },
        {
          name: "Veterinary Care",
          image: "/placeholder.svg?height=300&width=300",
          description:
            "Comprehensive veterinary services to keep your pet healthy. We offer routine check-ups, vaccinations, and treatment for illnesses and injuries.",
        },
        {
          name: "Pet Sitting",
          image: "/placeholder.svg?height=300&width=300",
          description:
            "Reliable in-home pet sitting services. Our sitters provide personalized care, including feeding, walking, and playtime, in the comfort of your home.",
        },
      ],
    },
    {
      id: "products",
      title: "Pet Products",
      description: "High-quality food, toys, and accessories for all types of pets.",
      items: [
        {
          name: "Premium Pet Food",
          image: "/placeholder.svg?height=300&width=300",
          description:
            "Nutritionally balanced, high-quality pet food for all life stages. We offer a variety of brands and formulas to meet your pet's specific needs.",
        },
        {
          name: "Toys & Enrichment",
          image: "/placeholder.svg?height=300&width=300",
          description:
            "A wide selection of toys and enrichment items to keep your pet entertained and mentally stimulated. From chew toys to puzzle feeders, we have it all.",
        },
        {
          name: "Beds & Furniture",
          image: "/placeholder.svg?height=300&width=300",
          description:
            "Comfortable beds and stylish furniture for your pet. Our range includes cozy beds, scratching posts for cats, and durable dog houses.",
        },
        {
          name: "Leashes & Collars",
          image: "/placeholder.svg?height=300&width=300",
          description:
            "High-quality leashes, collars, and harnesses for safe and comfortable walks. We offer a variety of styles, sizes, and materials to suit every pet.",
        },
        {
          name: "Health & Wellness",
          image: "/placeholder.svg?height=300&width=300",
          description:
            "A comprehensive range of health and wellness products including supplements, dental care items, and grooming supplies to keep your pet in top condition.",
        },
      ],
    },
  ]

  const handleSectionToggle = (id: string) => {
    setOpenSection(openSection === id ? null : id)
  }

  const handleItemClick = (item: { name: string; image: string; description: string }) => {
    setSelectedItem(item)
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/doggie_back.jpg')" }}
    >
      <div className="container mx-auto px-4 py-8 max-w-7xl bg-white/80 backdrop-blur-md">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services & Products</h1>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {cards.map((card) => (
            <div key={card.id} className="w-full md:w-1/2">
              <div
                className="relative h-64 rounded-lg shadow-lg cursor-pointer overflow-hidden"
                onClick={() => handleSectionToggle(card.id)}
              >
                <div className="absolute inset-0 bg-sky-200 p-6 flex flex-col justify-center items-center transition-opacity duration-300 hover:opacity-0">
                  <h2 className="text-2xl font-bold text-sky-800 mb-4">{card.title}</h2>
                  <div className="text-6xl mb-4">{card.id === "services" ? "🐾" : "🎁"}</div>
                  <p className="text-sky-700 text-center">Click to learn more</p>
                </div>
                <div className="absolute inset-0 bg-white p-6 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-2xl font-bold text-sky-800 mb-4">{card.title}</h2>
                  <p className="text-sky-700 text-center">{card.description}</p>
                </div>
              </div>

              <div
                className={`mt-4 overflow-hidden transition-all duration-500 ${openSection === card.id ? "max-h-[800px]" : "max-h-0"}`}
              >
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-sky-800 mb-4">Our {card.title}</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {card.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 bg-sky-50 rounded-lg p-4 cursor-pointer hover:bg-sky-100 transition-colors duration-200"
                        onClick={() => handleItemClick(item)}
                      >
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={100}
                          height={100}
                          className="rounded-lg flex-shrink-0"
                        />
                        <span className="text-sky-700 text-center sm:text-left">{item.name}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="mt-6 w-full bg-sky-200 text-sky-800 hover:bg-sky-300"
                    onClick={() => handleSectionToggle(card.id)}
                  >
                    {openSection === card.id ? (
                      <>
                        <ChevronUp className="mr-2 h-4 w-4" /> Close
                      </>
                    ) : (
                      <>
                        <ChevronDown className="mr-2 h-4 w-4" /> Learn More
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedItem?.name}</DialogTitle>
            <DialogDescription>
              <div className="mt-4 flex flex-col items-center">
                <Image
                  src={selectedItem?.image || "/placeholder.svg"}
                  alt={selectedItem?.name || "Item"}
                  width={300}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <p className="text-center">{selectedItem?.description}</p>
              </div>
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setSelectedItem(null)} className="mt-4">
            <X className="mr-2 h-4 w-4" /> Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}

