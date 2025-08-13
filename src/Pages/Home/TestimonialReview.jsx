"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

function TestimonialReview() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const carouselRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    handleResize() // Set initial state
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const testimonials = [
    {
      id: 0,
      type: "social-proof",
      title: "Social Proof Summary",
      text: "Accusamus et iusto odi ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    },
    {
      id: 1,
      rating: 5,
      text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and.",
      name: "Serhiy Hipskyy",
      title: "CEO Universal",
      avatar: "https://placehold.co/50x50/264A3F/FFFFFF?text=SH",
    },
    {
      id: 2,
      rating: 5,
      text: "Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
      name: "Justus Menke",
      title: "CEO Economan",
      avatar: "https://placehold.co/50x50/0B1D3A/FFFFFF?text=JM",
    },
    {
      id: 3,
      rating: 5,
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
      name: "Sarah Johnson",
      title: "Marketing Director",
      avatar: "https://placehold.co/50x50/0B1D3A/FFFFFF?text=SJ",
    },
    {
      id: 4,
      rating: 5,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      name: "Michael Chen",
      title: "Product Manager",
      avatar: "https://placehold.co/50x50/0B1D3A/FFFFFF?text=MC",
    },
    {
      id: 5,
      rating: 5,
      text: "Accusamus et iusto odi ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      name: "Emily Davis",
      title: "Creative Director",
      avatar: "https://placehold.co/50x50/0B1D3A/FFFFFF?text=ED",
    },
  ]

  const nextSlide = () => {
    if (isMobile) {
      if (currentIndex < testimonials.length - 1) {
        setCurrentIndex((prev) => prev + 1)
      }
    } else {
      if (currentIndex < testimonials.length - 3) {
        setCurrentIndex((prev) => prev + 1)
      }
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-lg ${index < rating ? "text-red-400" : "text-gray-300"}`}>
        ★
      </span>
    ))
  }

  // Effect to handle smooth scrolling for desktop
  useEffect(() => {
    if (carouselRef.current && !isMobile) {
      const cardWidth = 360 // Updated width of a card
      const gap = 24 // gap between cards
      const scrollPosition = currentIndex * (cardWidth + gap)
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
    }
  }, [currentIndex, isMobile])

  return (
    <div
      className="w-full min-h-[800px] bg-cover bg-center"
      style={{ backgroundImage: `url(/placeholder.svg?height=800&width=1200&query=light background pattern)` }}
    >
      {/* Header Section */}
      <div className="w-full h-[150px] flex justify-center items-end">
        <p className="text-2xl md:text-3xl font-serif text-center px-4">TESTIMONIAL</p>
      </div>

      {/* Title Section */}
      <div className="w-full h-[200px] flex flex-col">
        <div className="w-full h-[80px] flex justify-center items-end px-4">
          <p className="text-xl md:text-3xl font-bold font-serif text-center">What Our Happy User Says</p>
        </div>

        {/* Filter Buttons */}
        <div className="w-full h-[100px] flex justify-center items-end gap-2 md:gap-5 px-4 overflow-x-auto">
          {["Company", "Saffire", "Ring", "Stone", "Quality", "Customer", "Company"].map((filter, index) => (
            <button
              key={index}
              className="w-[120px] md:w-[155px] h-[44px] border border-gray-500 rounded-3xl text-gray-900 cursor-pointer flex-shrink-0 hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full min-h-[400px] flex flex-col justify-center items-center px-4 py-8">
        {/* Desktop View - 3 testimonials with external arrows */}
        <div className="hidden lg:flex w-full max-w-[1400px] justify-center items-start gap-8">
          {/* Left Arrow - Outside the cards */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="rounded-full w-[50px] h-[50px] bg-[#264A3F] hover:bg-[#1a3329] disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer transition-colors duration-300 flex-shrink-0 mt-[150px]"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          {/* Cards Container - Fixed width with proper spacing */}
          <div ref={carouselRef} className="flex gap-6 w-[1080px] overflow-hidden">
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className="w-[360px] h-[340px] bg-white rounded-lg shadow-lg flex-shrink-0 flex flex-col"
              >
                {item.type === "social-proof" ? (
                  // Social Proof Card
                  <>
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="text-xl font-bold text-[#0B1D3A] mb-4">{item.title}</h2>
                      <p className="text-gray-700 leading-relaxed flex-1">{item.text}</p>
                    </div>
                    {/* Profile section aligned at bottom */}
                    <div className="p-6 pt-0">
                      <div className="flex -space-x-2">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="User 1"
                          className="w-10 h-10 rounded-full border-2 border-white object-cover"
                        />
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center">
                          <span className="text-white font-bold text-sm">N</span>
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-yellow-600 flex items-center justify-center">
                          <span className="text-white font-bold text-sm">M</span>
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-red-600 flex items-center justify-center">
                          <span className="text-white font-bold text-sm">N</span>
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-800 flex items-center justify-center">
                          <span className="text-white font-bold text-xs">+234</span>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  // Regular Testimonial Card
                  <>
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Quote Icon */}
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-[#264A3F] rounded-full flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">"</span>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex justify-center mb-4">{renderStars(item.rating)}</div>

                      {/* Text content */}
                      <p className="text-gray-700 text-center leading-relaxed flex-1">{item.text}</p>
                    </div>

                    {/* Profile section aligned at bottom */}
                    <div className="p-6 pt-0">
                      <div className="flex items-center justify-center gap-3">
                        <img
                          src={item.avatar || "/placeholder.svg"}
                          alt={item.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="text-center">
                          <p className="font-semibold text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-600">{item.title}</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Right Arrow - Outside the cards */}
          <button
            onClick={nextSlide}
            disabled={currentIndex >= testimonials.length - 3}
            className="rounded-full w-[50px] h-[50px] bg-[#264A3F] hover:bg-[#1a3329] disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer transition-colors duration-300 flex-shrink-0 mt-[150px]"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>

        {/* Mobile/Tablet View - 1 testimonial with smooth scroll */}
        <div className="lg:hidden flex w-full max-w-md justify-center items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="rounded-full w-[45px] h-[45px] bg-[#264A3F] hover:bg-[#1a3329] disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer transition-colors duration-300 flex-shrink-0"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          {/* Single Testimonial */}
          <div className="w-full overflow-hidden">
            <div className="bg-white rounded-lg p-6 shadow-lg min-h-[320px] flex flex-col">
              {testimonials[currentIndex].type === "social-proof" ? (
                // Social Proof Card
                <>
                  <h2 className="text-xl font-bold text-[#0B1D3A] mb-4">{testimonials[currentIndex].title}</h2>
                  <p className="text-gray-700 leading-relaxed mb-6 flex-1">{testimonials[currentIndex].text}</p>
                  <div className="flex -space-x-2">
                    <img
                      src="https://placehold.co/50x50/264A3F/FFFFFF?text=SH"
                      alt="User 1"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">N</span>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-yellow-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">M</span>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-red-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">N</span>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-800 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">+234</span>
                    </div>
                  </div>
                </>
              ) : (
                // Regular Testimonial Card
                <>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-[#264A3F] rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">"</span>
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">{renderStars(testimonials[currentIndex].rating)}</div>
                  <p className="text-gray-700 text-center mb-6 leading-relaxed text-sm flex-1">
                    {testimonials[currentIndex].text}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <img
                      src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-center">
                      <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
                      <p className="text-sm text-gray-600">{testimonials[currentIndex].title}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentIndex >= testimonials.length - 1}
            className="rounded-full w-[45px] h-[45px] bg-[#264A3F] hover:bg-[#1a3329] disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer transition-colors duration-300 flex-shrink-0"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>

        {/* Dots Indicator for Mobile */}
        <div className="lg:hidden flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#264A3F] scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="w-full h-[100px]">

      </div>
    </div>
  )
}

export default TestimonialReview