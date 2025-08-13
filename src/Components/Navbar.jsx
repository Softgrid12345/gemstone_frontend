"use client"

import { useState } from "react"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import Logo from "../assets/Logo.svg"

export default function Navbar() {
  // State to manage the visibility of the mobile navigation menu
  const [isNavOpen, setIsNavOpen] = useState(false)

  // Function to toggle the mobile navigation menu
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <>
      {/* Top Header Section - NOT STICKY */}
      <div className="w-full h-[60px] sm:h-[70px] md:h-[80px] lg:h-[77px] rounded-lg bg-white flex items-center px-4 sm:px-6 md:px-8 lg:px-8 shadow-md">
        {/* Logo and GemRishi Title */}
        <div className="flex items-center flex-grow">
          <div className="flex items-center justify-center">
            <img
              src={Logo}
              alt="GemRishi Logo"
              className="w-[40px] h-[42px] sm:w-[48px] sm:h-[50px] md:w-[55px] md:h-[57px]"
            />
          </div>
          <div className="flex items-center justify-center ml-2 sm:ml-3 md:ml-4">
            <h1 className="text-black text-[24px] sm:text-[30px] md:text-[36px] font-serif">GemRishi</h1>
          </div>
        </div>

        {/* Icons for Search, Cart, Wishlist, Account */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-[#264A3F] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#1e3a30] transition-colors">
            <SearchIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
          </div>
          <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-[#264A3F] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#1e3a30] transition-colors">
            <ShoppingCartOutlinedIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
          </div>
          <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-[#264A3F] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#1e3a30] transition-colors">
            <FavoriteBorderOutlinedIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
          </div>
          <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-[#264A3F] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#1e3a30] transition-colors">
            <AccountCircleOutlinedIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Navigation Section - STICKY */}
      <div className="sticky top-0 z-50 flex w-full h-[92px] bg-[#CBCCCB] relative">
        {/* Contact Number */}
        <div className="w-full lg:w-[20%] flex items-center justify-start h-[92px] pl-4 lg:pl-10">
          <p className="text-gray-900">+91 1122334455</p>
        </div>

        {/* Hamburger Icon for Mobile View */}
        <div className="flex items-center justify-end h-[92px] pr-4 absolute right-0 top-0 lg:hidden">
          <button onClick={toggleNav} className="text-[#00001c] focus:outline-none">
            {isNavOpen ? <CloseIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
          </button>
        </div>

        {/* Navigation Menu (Hidden on mobile by default, shown when hamburger is clicked) */}
        <nav
          className={`w-full lg:w-[80%] lg:flex lg:items-center lg:justify-center ${isNavOpen ? "block absolute top-[92px] left-0 bg-[#CBCCCB] z-10 shadow-lg" : "hidden"} lg:static lg:shadow-none`}
        >
          <ul className="flex flex-col lg:flex-row items-center justify-around py-4 lg:py-0 w-full">
            <li className="text-[#00001c] text-[18px] cursor-pointer font-serif my-2 lg:my-0 hover:text-[#264A3F] transition-colors">
              Home
            </li>
            <li className="text-[#00001c] text-[18px] cursor-pointer font-serif flex items-center space-x-2 my-2 lg:my-0 hover:text-[#264A3F] transition-colors">
              <span>Gemstones</span>
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </li>
            <li className="text-[#00001c] text-[18px] cursor-pointer font-serif flex items-center space-x-2 my-2 lg:my-0 hover:text-[#264A3F] transition-colors">
              <span>Jewellery</span>
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </li>
            <li className="text-[#00001c] text-[18px] cursor-pointer font-serif flex items-center space-x-2 my-2 lg:my-0 hover:text-[#264A3F] transition-colors">
              <span>Rings</span>
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </li>
            <li className="text-[#00001c] text-[18px] cursor-pointer font-serif my-2 lg:my-0 hover:text-[#264A3F] transition-colors">
              Astrological Rings
            </li>
            <li className="text-[#00001c] text-[18px] cursor-pointer font-serif my-2 lg:my-0 hover:text-[#264A3F] transition-colors">
              Gem Suggestion
            </li>
            <li className="text-[#00001c] text-[18px] cursor-pointer font-serif my-2 lg:my-0 hover:text-[#264A3F] transition-colors">
              About Us
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
