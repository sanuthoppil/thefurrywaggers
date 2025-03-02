"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Mail, Phone, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CuteWaggersHomeComponent() {
  const [offset, setOffset] = useState(0)
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [openCard, setOpenCard] = useState<"services" | "supplies" | null>(null)

  const customers = [
    {
      name: "Meliza",
      comment: "CuteWaggers is the best! My dog loves their treats.",
      image: "/images/a_single_woman_profile_picture.jpeg?height=50&width=50",
      dogImage: "/images/doggie_back.jpg?height=200&width=300",
    },
    {
      name: "Rashmi",
      comment: "Great service and friendly staff. Highly recommended!",
      image: "/images/a_single_woman_profile_picture (1).jpeg?height=50&width=50",
      dogImage: "/images/doggie.jpg?height=200&width=300",
    },
    {
      name: "Sanu",
      comment: "The grooming service is top-notch. My pup looks amazing!",
      image: "/images/a_single_profile_picture.jpeg?height=50&width=50",
      dogImage: "/images/doggie.jpg?height=200&width=300",
    },
    {
      name: "John",
      comment: "Excellent products and knowledgeable staff. A must-visit for pet owners!",
      image: "/placeholder.svg?height=50&width=50",
      dogImage: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Emma",
      comment: "The variety of pet supplies is impressive. Found everything I needed!",
      image: "/placeholder.svg?height=50&width=50",
      dogImage: "/placeholder.svg?height=200&width=300",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset
        const elementPosition = parallaxRef.current.offsetTop
        const viewportHeight = window.innerHeight
        const elementHeight = parallaxRef.current.offsetHeight

        if (scrollPosition + viewportHeight > elementPosition && scrollPosition < elementPosition + elementHeight) {
          setOffset((scrollPosition - elementPosition) * 0.5)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (customers.length - 2))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + customers.length - 2) % (customers.length - 2))
  }

  const services = [
    {
      name: "Shampoo & Conditioning",
      description: "Generous and well lathered application of the best shampoo and conditioners for your lived ones",
      image: "/images/pet-servicespics/dog_shampoo.jpeg?height=100&width=100",
    },
    {
      name: "Blow drying",
      description: "The gentlest and fun filled blow drying experiece for your cuties",
      image: "/images/pet-servicespics/dog_blowdry.jpeg?height=100&width=100",
    },
    {
      name: "Hygine Trim",
      description: "Gentle trimming for your furry friends to make them impecable",
      image: "/images/pet-servicespics/dog_trim.jpeg?height=100&width=100",
    },
    {
      name: "Teeth Cleaning",
      description: "Time to shine those canines. The best canine paste and the gentlest hands.",
      image: "/images/pet-servicespics/dog_teeth.jpeg?height=100&width=100",
    },
    {
      name: "Nails Clipping",
      description: "Those paws gotta be dirty, lets pamper our loved ones with a manicure",
      image: "/images/pet-servicespics/dog_nails.jpeg?height=100&width=100",
    },
    {
      name: "Ear Cleaning",
      description: "Let's clean up those ears, maybe now they will listen to us better??",
      image: "/images/pet-servicespics/dog_ears.jpeg?height=100&width=100",
    },
  ]

  const supplies = [
    {
      name: "Premium Dog Food",
      description: "High-quality nutrition for your furry friend",
      image: "/placeholder.svg?height=100&width=100",
    },
    { name: "Toys", description: "Durable and fun toys for all sizes", image: "/placeholder.svg?height=100&width=100" },
    {
      name: "Beds",
      description: "Comfortable beds for a good night's sleep",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Leashes and Collars",
      description: "Stylish and sturdy walking gear",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const ServiceCard = () => (
    <Card className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl max-h-[80vh] overflow-y-auto z-50">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>Our Pet Services</CardTitle>
        <Button variant="ghost" size="icon" onClick={() => setOpenCard(null)}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.name}
                width={100}
                height={100}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )

  const SuppliesCard = () => (
    <Card className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl max-h-[80vh] overflow-y-auto z-50">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>Our Pet Supplies</CardTitle>
        <Button variant="ghost" size="icon" onClick={() => setOpenCard(null)}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {supplies.map((supply, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
              <Image
                src={supply.image || "/placeholder.svg"}
                alt={supply.name}
                width={100}
                height={100}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold">{supply.name}</h3>
                <p className="text-sm text-muted-foreground">{supply.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <>
      {/* Hero Section with Promotion */}
      <div className="bg-sky-200 rounded-lg overflow-hidden mb-12">
        <div className="py-8 px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold text-sky-800 mb-6">WOOF! 25% OFF ALL TREATS</h2>
          <div className="bg-white rounded-lg overflow-hidden max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 bg-pink-100 p-8 flex items-center justify-center">
                <div className="text-center relative">
                  <div className="absolute -z-10 opacity-20">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute rounded-full bg-pink-300"
                        style={{
                          width: `${Math.random() * 60 + 20}px`,
                          height: `${Math.random() * 60 + 20}px`,
                          top: `${Math.random() * 200 - 100}px`,
                          left: `${Math.random() * 200 - 100}px`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="relative z-10">
                    <p className="text-2xl font-medium text-pink-500">Flat</p>
                    <p className="text-7xl font-bold text-pink-500 my-2">25%</p>
                    <p className="text-2xl font-medium text-pink-500">Off</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/doggie.jpg?height=400&width=500"
                  alt="Dog grooming promotion"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-16">
        <h1 className="text-5xl font-bold text-center">TheFurryWaggers</h1>

        <section className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/doggie.jpg?height=400&width=500"
              alt="Cute dog"
              width={500}
              height={400}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-6">Welcome to TheFurryWaggers</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At TheFurryWaggers, we're passionate about providing the best care and products for your furry friends.
              From top-quality pet supplies to professional grooming services, we've got everything your dog needs to
              stay happy, healthy, and adorable!
            </p>
          </div>
        </section>

        <section className="flex justify-center gap-12 mb-16">
          <Button
            size="lg"
            className="w-40 h-40 rounded-full text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 flex flex-col items-center justify-center shadow-lg"
            onClick={() => setOpenCard("services")}
          >
            <span className="text-2xl mb-2 animate-paw inline-block">🐾</span>
            Grooming Service
          </Button>
          <Button
            size="lg"
            className="w-40 h-40 rounded-full text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 flex flex-col items-center justify-center shadow-lg"
            onClick={() => setOpenCard("supplies")}
          >
            <span className="text-2xl mb-2 animate-paw inline-block">🐾</span>
            Pet Supplies
          </Button>
        </section>

        <section ref={parallaxRef} className="relative h-[400px] overflow-hidden rounded-lg mb-16">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/doggie_back.jpg')",
              transform: `translateY(${offset * 0.5}px)`,
            }}
          />
        </section>

        <section className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-bold">About Us</h2>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg text-gray-600 leading-relaxed">
              TheFurryWaggers was founded with a simple mission: to provide the best possible care and products for your
              beloved pets. Our team of passionate animal lovers is dedicated to ensuring that every tail that walks
              through our doors leaves wagging. From our carefully curated selection of premium pet supplies to our
              professional grooming services, we strive to make every visit to TheFurryWaggers a delightful experience
              for both pets and their owners.
            </p>
          </div>
        </section>

        <section className="mb-16 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-8">Happy Customers</h2>
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
              >
                {customers.map((customer, index) => (
                  <div
                    key={index}
                    className={`w-1/3 flex-shrink-0 px-2 ${index === currentSlide + 1 ? "scale-110 z-10" : "scale-90"}`}
                  >
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <Image
                        src={customer.dogImage || "/placeholder.svg"}
                        alt={`${customer.name}'s dog`}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <div className="flex items-center mb-2">
                          <Image
                            src={customer.image || "/placeholder.svg"}
                            alt={customer.name}
                            width={40}
                            height={40}
                            className="rounded-full mr-2"
                          />
                          <h3 className="font-semibold">{customer.name}</h3>
                        </div>
                        <p className="text-sm text-gray-600">{customer.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white text-blue-600 hover:bg-blue-50 rounded-full p-2 z-20 shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white text-blue-600 hover:bg-blue-50 rounded-full p-2 z-20 shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </section>

        <section id="contact-section" className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2733702274636!2d77.64834809999999!3d13.018255699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17000325cb6d%3A0xa1f5f900af0aeb6a!2sThe%20Furry%20Waggers%20Pet%20Stop!5e0!3m2!1sen!2sin!4v1731246386324!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
            <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 mr-2 text-blue-600" />
                <p>info@thefurrywaggers.com</p>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 mr-2 text-blue-600" />
                <p>+1 (555) 123-4567</p>
              </div>
              <p className="text-gray-600">Visit us at: 123 Pet Street, Dogtown, CA 90210</p>
            </div>
          </div>
        </section>
      </div>
      {openCard === "services" && <ServiceCard />}
      {openCard === "supplies" && <SuppliesCard />}
    </>
  )
}

