"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import GemsrishiRing from "../../assets/ExclusiveJewellery/GemsrishiRing.svg"
import GemrishiEarring from "../../assets/ExclusiveJewellery/GemrishiEarring.svg"
import GemrishiRing2 from "../../assets/ExclusiveJewellery/GemrishiRing2.svg"

function ExclusiveJewellery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const blogCards = [
    {
      videoId: "JYodEWUdIso",
      title: "Emerald for gemini astrological meaning",
      date: "April 26 2025",
    },
    {
      videoId: "6VT45cCpQyg",
      title: "Why Emerald is a luxury Symbol?",
      date: "April 26 2025",
    },
    {
      videoId: "gqQRpQOtNG4",
      title: "Emerald - in Vedic Astrology",
      date: "April 26 2025",
    },
    {
      videoId: "JYodEWUdIso",
      title: "Ruby - The King of Gemstones",
      date: "April 25 2025",
    },
    {
      videoId: "6VT45cCpQyg",
      title: "Sapphire Benefits in Astrology",
      date: "April 24 2025",
    },
    {
      videoId: "gqQRpQOtNG4",
      title: "Diamond - Symbol of Purity",
      date: "April 23 2025",
    },
    {
      videoId: "JYodEWUdIso",
      title: "Pearl - Moon's Gemstone",
      date: "April 22 2025",
    },
    {
      videoId: "6VT45cCpQyg",
      title: "Coral - Mars Energy Stone",
      date: "April 21 2025",
    },
  ]

  const nextSlide = () => {
    if (currentIndex < blogCards.length - 3) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const nextSlideMobile = () => {
    setCurrentIndex((prev) => (prev + 1) % blogCards.length)
  }

  const prevSlideMobile = () => {
    setCurrentIndex((prev) => (prev - 1 + blogCards.length) % blogCards.length)
  }

  return (
    <>
      <div className="w-full">
        <div className="w-full h-[100px] flex justify-center items-center">
          <p className="text-3xl font-serif text-[#0B1D3A]">Exclusive Jewellery</p>
        </div>

        {/* Jewelry Section - Responsive */}
        <div className="w-full min-h-[400px] flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-8 lg:gap-4 px-4 lg:px-[100px] py-8">
          <div className="w-full max-w-[350px] lg:w-[350px] h-full flex flex-col items-center">
            <div>
              <img
                src={GemsrishiRing || "/placeholder.svg"}
                alt="Blue Sapphire Ring"
                className="pb-8 w-full max-w-[300px]"
              />
            </div>
            <div>
              <p className="text-xl lg:text-2xl font-serif text-center">Blue Saffire Jewellery</p>
            </div>
          </div>
          <div className="w-full max-w-[350px] lg:w-[350px] h-full flex flex-col items-center">
            <div>
              <img
                src={GemrishiEarring || "/placeholder.svg"}
                alt="Blue Sapphire Earrings"
                className="pb-8 w-full max-w-[300px]"
              />
            </div>
            <div>
              <p className="text-xl lg:text-2xl font-serif text-center">Blue Saffire Jewellery</p>
            </div>
          </div>
          <div className="w-full max-w-[350px] lg:w-[350px] h-full flex flex-col items-center">
            <div>
              <img
                src={GemrishiRing2 || "/placeholder.svg"}
                alt="Blue Sapphire Ring Design"
                className="pb-8 w-full max-w-[300px]"
              />
            </div>
            <div>
              <p className="text-xl lg:text-2xl font-serif text-center">Blue Saffire Jewellery</p>
            </div>
          </div>
        </div>

        <div className="w-full h-[50px] lg:h-[100px]"></div>

        {/* Blog Section - Responsive Carousel */}
        <div className="w-full min-h-[410px] bg-gray-100 flex flex-col">
          <div className="w-full h-[90px] font-serif flex items-center justify-center">
            <p className="text-2xl lg:text-3xl text-[#0B1D3A]">Our Blogs</p>
          </div>

          {/* Desktop View - 3 cards with partial next card visible */}
          <div className="hidden lg:flex w-full h-[260px] justify-center items-center gap-4 px-4">
            <div>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`rounded-full w-[50px] h-[50px] flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  currentIndex === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-[#264A3F] hover:bg-[#1a3329]"
                }`}
              >
                <ChevronLeft size={30} className="text-white" />
              </button>
            </div>

            {/* Carousel Container with overflow hidden */}
            <div className="w-[1300px] overflow-hidden">
              <div
                className="flex gap-4 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 420}px)`,
                }}
              >
                {blogCards.map((card, index) => (
                  <div key={index} className="w-[400px] h-[260px] rounded-md flex-shrink-0 shadow-2xl">
                    <div className="w-full h-[130px] shadow-2xl">
                      <iframe
                        className="w-full h-full rounded-t-md"
                        src={`https://www.youtube.com/embed/${card.videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="w-full h-[130px] bg-white flex flex-col justify-center shadow-2xl rounded-b-md">
                      <p className="font-bold font-serif pl-6 pr-2 text-[19px] leading-[0.9] text-gray-900">
                        {card.title}
                      </p>
                      <p className="font-serif pl-6 text-gray-900 mt-2">{card.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <button
                onClick={nextSlide}
                disabled={currentIndex >= blogCards.length - 3}
                className={`rounded-full w-[50px] h-[50px] flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  currentIndex >= blogCards.length - 3
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#264A3F] hover:bg-[#1a3329]"
                }`}
              >
                <ChevronRight size={30} className="text-white" />
              </button>
            </div>
          </div>

          {/* Mobile/Tablet View - Single card with smooth transition */}
          <div className="lg:hidden flex w-full h-[260px] justify-center items-center gap-4 px-4">
            <div>
              <button
                onClick={prevSlideMobile}
                className="rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer bg-[#264A3F] hover:bg-[#1a3329] transition-colors duration-300"
              >
                <ChevronLeft size={24} className="text-white" />
              </button>
            </div>

            <div className="w-full max-w-[350px] overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {blogCards.map((card, index) => (
                  <div key={index} className="w-full min-w-full h-[260px] rounded-md flex-shrink-0 shadow-2xl">
                    <div className="w-full h-[130px] shadow-2xl">
                      <iframe
                        className="w-full h-full rounded-t-md"
                        src={`https://www.youtube.com/embed/${card.videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="w-full h-[130px] bg-white flex flex-col justify-center shadow-2xl rounded-b-md">
                      <p className="font-bold font-serif pl-6 pr-2 text-[17px] leading-[0.9] text-gray-900">
                        {card.title}
                      </p>
                      <p className="font-serif pl-6 text-gray-900 mt-2">{card.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <button
                onClick={nextSlideMobile}
                className="rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer bg-[#264A3F] hover:bg-[#1a3329] transition-colors duration-300"
              >
                <ChevronRight size={24} className="text-white" />
              </button>
            </div>
          </div>

          {/* Dots indicator for mobile */}
          <div className="lg:hidden flex justify-center mt-4 gap-2">
            {blogCards.map((_, index) => (
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
      </div>
    </>
  )
}

export default ExclusiveJewellery
