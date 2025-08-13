import Twitter from "../assets/SocialMedia/Twitter.svg"
import Insta from "../assets/SocialMedia/Insta.svg"
import facebook from "../assets/SocialMedia/facebook.svg"
import Linkedin from "../assets/SocialMedia/Linkedin.svg"

function Footer() {
  return (
    <>
      <div className="w-full h-auto lg:h-[620px] bg-[#2E2E2E]">
        <div className="w-full h-auto lg:h-[390px] flex items-center justify-center py-8 lg:py-0">
          {/* Desktop Layout */}
          <div className="hidden lg:flex w-[1200px] justify-center gap-20">
            <div className="w-[300px] h-[280px] flex flex-col">
              <div>
                <p className="text-white font-serif text-[24px] font-bold">Our Company</p>
              </div>
              <div className="flex flex-col text-white gap-1 mt-5">
                <a href="">About Us</a>
                <a href="">Our Story</a>
                <a href="">Blog</a>
                <a href="">Careers</a>
                <a href="">Our Location</a>
                <a href="">Certification</a>
                <a href="">Photo Gallery</a>
                <a href="">Ethical Sourcing</a>
              </div>
            </div>
            <div className="w-[300px] h-[280px] flex flex-col">
              <div>
                <p className="text-white font-serif text-[24px] font-bold">Customer Support</p>
              </div>
              <div className="flex flex-col text-white gap-1 mt-5">
                <a href="">FAQs</a>
                <a href="">Gemstone Guide</a>
                <a href="">Ring Size Guide</a>
              </div>
            </div>
            <div className="w-[300px] h-[280px]">
              <div>
                <p className="text-white font-serif text-[24px] font-bold">About Gemstone</p>
              </div>
              <div className="flex flex-col text-white gap-1 mt-5">
                <a href="">Gemstone Buying</a>
                <a href="">Payment Methods</a>
                <a href="">Shipping & Returns</a>
                <a href="">Packaging and Insert</a>
                <a href="">Track Order</a>
              </div>
            </div>
            <div className="w-[300px] h-[280px]">
              <div>
                <p className="text-white font-serif text-[24px] font-bold">Contact Us</p>
              </div>
              <div className="flex flex-col text-white text-[16px] gap-1 mt-5">
                <a href="">Business address</a>
                <a href="">Email address</a>
                <a href="">Store hours</a>
                <a href="">Phone number</a>
              </div>
            </div>
          </div>

          <div className="lg:hidden w-full px-4">
            <div className="flex gap-8 mb-8">
              <div className="flex-1">
                <div>
                  <p className="text-white font-serif text-[20px] font-bold">Our Company</p>
                </div>
                <div className="flex flex-col text-white gap-1 mt-5 text-sm">
                  <a href="">About Us</a>
                  <a href="">Our Story</a>
                  <a href="">Blog</a>
                  <a href="">Careers</a>
                  <a href="">Our Location</a>
                  <a href="">Certification</a>
                  <a href="">Photo Gallery</a>
                  <a href="">Ethical Sourcing</a>
                </div>
              </div>
              <div className="flex-1">
                <div>
                  <p className="text-white font-serif text-[20px] font-bold">About Gemstone</p>
                </div>
                <div className="flex flex-col text-white gap-1 mt-5 text-sm">
                  <a href="">Gemstone Buying</a>
                  <a href="">Payment Methods</a>
                  <a href="">Shipping & Returns</a>
                  <a href="">Packaging and Insert</a>
                  <a href="">Track Order</a>
                </div>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-1">
                <div>
                  <p className="text-white font-serif text-[20px] font-bold">Customer Support</p>
                </div>
                <div className="flex flex-col text-white gap-1 mt-5 text-sm">
                  <a href="">FAQs</a>
                  <a href="">Gemstone Guide</a>
                  <a href="">Ring Size Guide</a>
                </div>
              </div>
              <div className="flex-1">
                <div>
                  <p className="text-white font-serif text-[20px] font-bold">Contact Us</p>
                </div>
                <div className="flex flex-col text-white gap-1 mt-5 text-sm">
                  <a href="">Business address</a>
                  <a href="">Email address</a>
                  <a href="">Store hours</a>
                  <a href="">Phone number</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[1130px] mx-auto border-b border-white hidden lg:block"></div>
        <div className="w-full px-4 lg:hidden">
          <div className="border-b border-white"></div>
        </div>

        <div className="w-full h-auto lg:h-[230px] flex flex-col lg:flex-row py-8 lg:py-0">
          <div className="w-full lg:w-[49%] h-auto lg:h-full flex flex-col items-center lg:items-end justify-center lg:justify-end order-2 lg:order-1">
            <div>
              <div className="pb-4">
                <p className="text-[12px] lg:text-[15px] text-white text-center lg:text-left">
                  Copyright @2025 (GemRishi) | Venture by Fateh Chand Bansi Lal Jewellers Private Limited
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-7 pb-8 items-center">
                <a href="" className="text-[16px] lg:text-[18px] text-white">
                  Terms of Service
                </a>
                <a href="" className="text-[16px] lg:text-[18px] text-white">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[51%] h-auto lg:h-full flex flex-col items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="w-full lg:w-[600px] h-auto lg:h-[50px] flex items-center px-4 lg:px-0">
              <p className="text-[14px] lg:text-[16px] font-bold font-serif text-white text-center lg:text-left">
                Subscribe to get exclusive offers and new arrivals
              </p>
            </div>
            <div className="w-full lg:w-[600px] h-auto lg:h-[60px] flex flex-col lg:flex-row gap-3 px-4 lg:px-0 mt-4 lg:mt-0">
              <input
                type="text"
                className="w-full lg:w-[356px] h-[50px] lg:h-[60px] bg-white rounded-[10px] text-[14px] lg:text-[16px] font-serif font-bold text-[#1E1E1E] pl-[20px] lg:pl-[40px]"
                placeholder="Enter Email Address"
              />
              <button className="w-full lg:w-[157px] h-[50px] lg:h-[60px] bg-white rounded-[10px] text-[16px] lg:text-[19px] font-bold font-serif text-[#264A3F]">
                Subscribe
              </button>
            </div>
            <div className="w-full lg:w-[600px] h-auto lg:h-[90px] flex items-center justify-center mt-6 lg:mt-0">
              <div className="w-full lg:w-[500px] h-full flex justify-center lg:justify-end items-center gap-6">
                <div className="w-[35px] h-[35px]">
                  <img src={Twitter || "/placeholder.svg"} alt="" className="w-[29.17px] h-[29.17px]" />
                </div>
                <div className="w-[35px] h-[35px]">
                  <img src={facebook || "/placeholder.svg"} alt="" className="w-[29.17px] h-[29.17px]" />
                </div>
                <div className="w-[35px] h-[35px]">
                  <img src={Insta || "/placeholder.svg"} alt="" className="w-[29.17px] h-[29.17px]" />
                </div>
                <div className="w-[35px] h-[35px]">
                  <img src={Linkedin || "/placeholder.svg"} alt="" className="w-[29.17px] h-[29.17px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
