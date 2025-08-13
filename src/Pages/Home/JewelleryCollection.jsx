import React from 'react';

import Ring from "../../assets/Jwellery/Ring.svg";
import Pendants from "../../assets/Jwellery/Pendants.svg";
import Bracelets from "../../assets/Jwellery/Bracelets.svg";
import Earrings from "../../assets/Jwellery/Earrings.svg";
import Necklace from "../../assets/Jwellery/Necklace.svg";

function JwelleryCollection() {
  const Jewellery = [
    { name: "Ring", image: Ring },
    { name: "Pendants", image: Pendants },
    { name: "Bracelets", image: Bracelets },
    { name: "Earrings", image: Earrings },
    { name: "Necklace", image: Necklace },
  ];

  return (
    <div className='w-full py-6 px-4'>
      {/* Heading */}
      <div className='w-full h-[100px] flex items-center justify-center mb-4'>
        <p className='text-3xl font-serif text-gray-800 text-center'>Explore Gemrishi Jewellery</p>
      </div>

      {/* Jewellery Items */}
      <div className='w-full flex flex-wrap justify-center gap-6'>
        {Jewellery.map((item, index) => (
          <div
            key={index}
            className='w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] flex flex-col items-center'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[120px] md:h-[150px] lg:h-[180px] object-contain'
            />
            <p className='text-sm sm:text-base md:text-lg lg:text-xl font-serif text-gray-700 text-center mt-2'>
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JwelleryCollection;
