import React from 'react'
import Header from './Header'
import StoneCollection from './StoneCollection'
import JewelleryCollection from './JewelleryCollection'
import LegacyTrust from './LegacyTrust'
import ExclusiveJewellery from './ExclusiveJewellery'
import TestimonialReview from './TestimonialReview'
import Footer from "../../Components/Footer"

function Home() {
  return (
    <>
        <div className='flex flex-col'>
          <Header/>
          <StoneCollection/>
          <JewelleryCollection/>
          <LegacyTrust/>
          <ExclusiveJewellery/>
          <TestimonialReview/>
          <Footer/>
        </div>
    </>
  )
}

export default Home