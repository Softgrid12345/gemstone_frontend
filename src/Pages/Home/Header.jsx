"use client"
import { useState, useEffect, useRef } from "react"
import Navbar from "../../Components/Navbar"
import GlassStone from "../../assets/GlassStone.svg"
import chain from "../../assets/chain.svg"
import Stone01 from "../../assets/Stone01.svg"
import Stone02 from "../../assets/Stone02.svg"
import Stone03 from "../../assets/Stone03.svg"
import Stone04 from "../../assets/Stone04.svg"
import Stone05 from "../../assets/Stone05.svg"
import Stone06 from "../../assets/Stone06.svg"
import Stone07 from "../../assets/Stone07.svg"
import Stone08 from "../../assets/Stone08.svg"
import Stone09 from "../../assets/Stone09.svg"

const RotatingStone = ({ chain }) => {
  const stones = [Stone01, Stone02, Stone03, Stone04, Stone05, Stone06, Stone07, Stone08, Stone09]
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % stones.length)
    }, 800)
    return () => clearInterval(interval)
  }, [stones.length])

  return (
    <div className="w-[140px] h-full flex flex-col items-center relative">
      <img src={chain || "/placeholder.svg"} alt="chain" className="z-20 h-[159px] w-[139.39px]" />
      <img
        src={stones[index] || "/placeholder.svg"}
        alt="stone"
        className="z-10 -mt-8 w-[99.66px] h-[139px] transition-all duration-500"
      />
    </div>
  )
}

const CustomSelect = ({ options, defaultValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(defaultValue || options[0])
  const selectRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleOptionClick = (value) => {
    setSelectedValue(value)
    setIsOpen(false)
    if (onChange) {
      onChange(value)
    }
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative w-full" ref={selectRef}>
      <div
        className="w-full h-[45px] sm:h-[49px] bg-[#EFF2F1] text-black font-semibold py-2 px-4 pr-10 rounded-2xl shadow-sm focus:outline-none cursor-pointer flex items-center justify-between"
        onClick={toggleDropdown}
      >
        <span>{selectedValue}</span>
        <span className="text-black ml-2">▼</span>
      </div>
      {isOpen && (
        <ul className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-20 mt-1 max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <li
              key={index}
              className={`py-2 px-4 cursor-pointer text-black font-semibold
                          ${option === selectedValue ? "bg-[#264A3F] text-white" : "bg-white hover:bg-gray-400 hover:text-white"}
                          ${index === 0 ? "rounded-t-lg" : ""}
                          ${index === options.length - 1 ? "rounded-b-lg" : ""}
                          transition-colors duration-200 ease-in-out`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Header() {
  const gemstoneOptions = [
    "Blue Sapphire(Pukhraj)",
    "Cats Eye",
    "Emerald(Panna)",
    "Hessonite(Gomed)",
    "Pearl(Moti)",
    "Ruby(Manik)",
    "Yellow Sapphire(Pukhraj)",
    "Red Coral(Moonga)",
  ]

  const caratWeightOptions = ["Any", "Below 3 Carat", "3-5 Carat", "5-7 Carat", "7-8 Carat", "8 Carat+"]

  const priceOptions = ["Any", "Under Rs.10,000", "Rs.10,000 - Rs.25,000", "Rs.25,000 - Rs.50,000", "Above Rs.50,000"]

  const handleGemstoneChange = (value) => {
    console.log("Selected Gemstone:", value)
  }

  const handleCaratChange = (value) => {
    console.log("Selected Carat Weight:", value)
  }

  const handlePriceChange = (value) => {
    console.log("Selected Price:", value)
  }

  return (
    <>
      <Navbar />

      <div className="w-full h-auto mt-0 flex flex-col lg:flex-row lg:h-[550px]">
        <div className="w-full lg:w-[55%] h-auto lg:h-[110vh]">
          <div className="w-full h-auto flex flex-col items-center lg:items-end justify-center pt-8 lg:pt-0 lg:mt-[60px]">
            <div className="w-[calc(100%-40px)] max-w-[700px] h-auto flex items-center justify-center text-center lg:text-right">
              <h1 className="text-black text-[28px] md:text-[35px] font-serif font-normal leading-tight">
                More Than Beauty — A Legacy in Stone.
              </h1>
            </div>
            <div className="w-[calc(100%-40px)] max-w-[662px] h-auto mt-4">
              <p className="text-gray-700 text-[18px] md:text-[22px] leading-[1.3] font-serif">
                Every gem has a past, and every piece tells a story. Find the one that <br />
                matches yours — radiant, powerful, and entirely unique.
              </p>
            </div>
          </div>
          <div className="w-full h-auto flex flex-col items-center lg:flex-row mt-8 lg:mt-10 lg:h-[330px] md:flex-row">
            <div
              className="w-[90%] lg:w-[85%] min-h-[200px]  lg:min-h-[300px] bg-no-repeat bg-contain bg-start lg:bg-left flex flex-col items-center lg:flex-row p-4 lg:p-0 lg:items-start mt-9 md:flex-col"
              style={{ backgroundImage: `url(${GlassStone})` }}
            >
              <div className="w-full lg:w-[53%] h-[150px] lg:h-[290px] "></div>
              <div className="w-full lg:w-[47%] h-[80px] flex justify-center items-end lg:justify-start mt-8 lg:mt-[-10px] lg:h-auto">
                <button className="w-[268px] h-[61px] bg-[#264A3F] text-white rounded-[10px] shadow-md hover:bg-[#245344] transition text-[22px] ">
                  Explore Collections
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center lg:w-[140px] lg:h-[290px] h-full items-center  relative mt-8 lg:mt-0">
              <RotatingStone chain={chain} className="mt-[20px]" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[45%] h-auto flex items-center justify-center py-8 lg:py-0">
          <div className="w-[90%] max-w-[493px] h-auto rounded-2xl shadow-2xl flex flex-col items-center justify-center bg-white mt-[20px] lg:mt-[35px] p-4">
            <div className="w-[90%] max-w-[450px] h-auto">
              <div className="w-full flex text-center lg:text-right ml-2">
                <p className="text-black text-[20px] font-normal font-serif">Find Your Right Gemstone</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-col md:flex-row items-center justify-between mt-6 w-full max-w-[392px]">
                  <div className="flex items-center justify-center my-2">
                    <label className="flex items-center cursor-pointer">
                      <input type="radio" name="filter" value="gemstone" className="sr-only peer" defaultChecked />
                      <span className="w-6 h-6 rounded-full border-2 border-gray-300 peer-checked:border-[#264A3F] bg-white flex items-center justify-center transition-colors">
                        <span className="w-3 h-3 rounded-full bg-transparent peer-checked:bg-[#264A3F] transition-colors"></span>
                      </span>
                      <p className="text-black font-black ml-2">By Gemstone</p>
                    </label>
                  </div>
                  <div className="flex items-center justify-center my-2">
                    <label className="flex items-center cursor-pointer">
                      <input type="radio" name="filter" value="purpose" className="sr-only peer" />
                      <span className="w-6 h-6 rounded-full border-2 border-gray-300 peer-checked:border-[#264A3F] bg-white flex items-center justify-center transition-colors">
                        <span className="w-3 h-3 rounded-full bg-transparent peer-checked:bg-[#264A3F] transition-colors"></span>
                      </span>
                      <p className="text-black font-black ml-2">By Purpose</p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full h-auto flex flex-col items-center justify-center mt-6">
                <div className="w-full max-w-[386px] h-auto p-4 rounded-[10px] shadow-xl space-y-3 bg-white">
                  <CustomSelect
                    options={gemstoneOptions}
                    defaultValue={gemstoneOptions[0]}
                    onChange={handleGemstoneChange}
                  />
                  <CustomSelect
                    options={caratWeightOptions}
                    defaultValue={caratWeightOptions[0]}
                    onChange={handleCaratChange}
                  />
                  <CustomSelect options={priceOptions} defaultValue={priceOptions[0]} onChange={handlePriceChange} />
                </div>
                <div className="w-full mt-4 flex justify-center">
                  <button className="w-full max-w-[386px] h-[69px] bg-[linear-gradient(to_right,_#264A3F,_#5AB096,_#336455,_#407D6A)] text-white font-semibold rounded-[20px] shadow hover:opacity-90 transition text-[24px] mt-[10px]">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
