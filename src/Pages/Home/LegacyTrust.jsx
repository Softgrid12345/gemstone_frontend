import React from 'react'
import GlobalShipping from "../../assets/PeaceMind/GlobalShipping.svg"
import EasyReturns from "../../assets/PeaceMind/EasyReturns.svg"
import CertifiedGems from "../../assets/PeaceMind/CertifiedGems.svg"
import AuthenticStones from "../../assets/PeaceMind/AuthenticStones.svg"

function LegacyTrust() {
    return (
        <>
            <div className='w-full'>
                {/* Header Section - Responsive */}
                <div className='w-full h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] flex flex-col justify-end items-center px-4'>
                    <p className='text-[#0B1D3A] text-xl sm:text-2xl md:text-3xl lg:text-3xl font-serif text-center'>Our Legacy of Trust</p>
                    <p className='font-serif text-base sm:text-lg md:text-xl lg:text-xl pb-[20px] sm:pb-[25px] md:pb-[30px] lg:pb-[35px] text-center px-2'>120 years of trust, authencity, and craftsmanship</p>
                </div>

                {/* Gray Background Spacer */}
                <div className='w-full h-[20px] sm:h-[25px] md:h-[30px] lg:h-[30px] bg-gray-100'>
                </div>

                {/* Three Columns Section - Responsive */}
                <div className='w-full min-h-[200px] bg-gray-100 flex flex-col lg:flex-row px-4 sm:px-8 md:px-16 lg:px-[150px] py-8 lg:py-0'>
                    <div className='w-full lg:w-[420px] h-auto lg:h-full flex flex-col items-center mb-8 lg:mb-0'>
                        <p className='text-xl sm:text-2xl lg:text-2xl text-[#0B1D3A] font-serif font-bold text-center'>Gemrishi Foundation</p>
                        <p className='text-base sm:text-lg lg:text-[18px] font-serif text-gray-700 text-center pt-4 lg:pt-[22px] max-w-[350px] lg:max-w-none'>With the Gemrishi Foundation, your purchase gives back - sharing profits with you through exclusive rewards and community support</p>
                    </div>
                    <div className='w-full lg:w-[420px] h-auto lg:h-full flex flex-col items-center mb-8 lg:mb-0'>
                        <p className='text-xl sm:text-2xl lg:text-2xl text-[#0B1D3A] font-serif font-bold text-center'>Our Process</p>
                        <p className='text-base sm:text-lg lg:text-[19px] font-serif text-gray-700 text-center pt-4 lg:pt-[22px] max-w-[350px] lg:max-w-none'>From sourcing authentic gemstones to handcrafting each piece, we ensure quality, authenticity, and timeless elegance at every step.</p>
                    </div>
                    <div className='w-full lg:w-[420px] h-auto lg:h-full flex flex-col items-center'>
                        <p className='text-xl sm:text-2xl lg:text-2xl text-[#0B1D3A] font-serif font-bold text-center'>Over 120 Years of Legacy</p>
                        <p className='text-base sm:text-lg lg:text-[19px] font-serif text-gray-700 text-center pt-4 lg:pt-[22px] max-w-[350px] lg:max-w-none'>Since 1904, this fifth-generation jeweller has crafted timeless gemstone and jewellery pieces with heritage and authenticity.</p>
                    </div>
                </div>

                {/* Videos Section - Responsive */}
                <div className='w-full min-h-[280px] flex flex-col lg:flex-row px-4 sm:px-8 md:px-16 lg:px-[150px] py-8 lg:py-0 gap-6 lg:gap-0 justify-center items-center'>
                    <div className='w-full lg:w-[420px] h-auto lg:h-full flex justify-center items-center'>
                        <iframe
                            className='w-full max-w-[350px] h-[200px] sm:h-[220px] md:h-[240px] lg:h-[250px] rounded-lg'
                            src="https://www.youtube.com/embed/cutPNCaLPg0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className='w-full lg:w-[420px] h-auto lg:h-full flex justify-center items-center'>
                        <iframe
                            className='w-full max-w-[350px] h-[200px] sm:h-[220px] md:h-[240px] lg:h-[250px] rounded-lg'
                            src="https://www.youtube.com/embed/bzW9fmwcmG4"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className='w-full lg:w-[420px] h-auto lg:h-full flex justify-center items-center'>
                        <iframe
                            className='w-full max-w-[350px] h-[200px] sm:h-[220px] md:h-[240px] lg:h-[250px] rounded-lg'
                            src="https://www.youtube.com/embed/JYodEWUdIso"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Peace of Mind Header - Responsive */}
                <div className='w-full h-[80px] sm:h-[100px] md:h-[120px] lg:h-[130px] flex justify-center items-end px-4'>
                    <p className='text-[#0B1D3A] text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold font-serif text-center'>Shop with Peace of Mind</p>
                </div>

                {/* Features Section - Responsive */}
                <div className='w-full h-auto lg:h-[250px] grid grid-cols-2 lg:flex lg:flex-nowrap py-8 lg:py-0 gap-4 lg:gap-0'>
                    <div className='flex flex-col flex-1 h-auto lg:h-full items-center justify-center mb-6 sm:mb-8 lg:mb-0 px-4'>
                        <img src={GlobalShipping || "/placeholder.svg"} alt="Global Shipping" className='w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px]'/>
                        <p className='text-gray-800 pt-4 lg:pt-6 text-center text-sm sm:text-base lg:text-base'>Global Shipping</p>
                    </div>
                    <div className='flex flex-col flex-1 h-auto lg:h-full items-center justify-center mb-6 sm:mb-8 lg:mb-0 px-4'>
                        <img src={EasyReturns || "/placeholder.svg"} alt="Easy Returns" className='w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px]'/>
                        <p className='text-gray-800 pt-4 lg:pt-6 text-center text-sm sm:text-base lg:text-base'>Easy Returns</p>
                    </div>
                    <div className='flex flex-col flex-1 h-auto lg:h-full items-center justify-center mb-6 sm:mb-8 lg:mb-0 px-4'>
                        <img src={CertifiedGems || "/placeholder.svg"} alt="Certified Gems" className='w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px]'/>
                        <p className='text-gray-800 pt-4 lg:pt-6 text-center text-sm sm:text-base lg:text-base'>Certified Gems</p>
                    </div>
                    <div className='flex flex-col flex-1 h-auto lg:h-full items-center justify-center px-4'>
                        <img src={AuthenticStones || "/placeholder.svg"} alt="Authentic Stones" className='w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px]'/>
                        <p className='text-gray-800 pt-4 lg:pt-6 text-center text-sm sm:text-base lg:text-base'>Authentic Stones</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LegacyTrust
