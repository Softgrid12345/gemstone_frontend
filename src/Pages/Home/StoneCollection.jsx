import React from 'react';
import Ruby from "../../assets/Stone/Ruby.svg";
import BlueSapphire from "../../assets/Stone/BlueSapphire.svg";
import YellowSapphire from "../../assets/Stone/YellowSapphire.svg";
import Hessonite from "../../assets/Stone/Hessonite.svg";
import Coral from "../../assets/Stone/Coral.svg";
import Pearl from "../../assets/Stone/Pearl.svg";
import Diamond from "../../assets/Stone/Diamond.svg";
import Emerald from "../../assets/Stone/Emerald.svg";
import catsEye from "../../assets/Stone/catsEye.svg";

function StoneCollection() {
    const gemstonesRow1 = [
        { name: "Ruby(Manik)", image: Ruby },
        { name: "Blue Saffire", image: BlueSapphire },
        { name: "Yellow Saffire", image: YellowSapphire },
        { name: "Hessonite", image: Hessonite },
        { name: "Coral", image: Coral }
    ];

    const gemstonesRow2 = [
        { name: "Pearl(Moti)", image: Pearl },
        { name: "Diamond(Heera)", image: Diamond },
        { name: "Emerald", image: Emerald },
        { name: "Cat's Eye(Lehsunia)", image: catsEye }
    ];

    return (
        <>
            <div className='w-full lg:h-[750px] flex flex-col'>
                <div className='w-full lg:h-[500px]'>
                    <div className='w-full h-auto lg:h-[150px] py-8 lg:py-0 flex items-end justify-center'>
                        <p className='text-2xl md:text-3xl font-serif text-gray-800 text-center lg:text-left'>Explore Our Gemstone Collection</p>
                    </div>
                    {/* First row of gemstones, now with Grid */}
                    <div className='w-full lg:h-[350px] px-4 grid grid-cols-2 lg:grid-cols-5 gap-y-8 lg:gap-0 place-items-center'>
                        {gemstonesRow1.map((Stone, index) => (
                            <div key={index} className='flex flex-col items-center justify-center w-full'>
                                <img src={Stone.image} alt={Stone.name} className='w-[150px] h-[150px] lg:w-[170px] lg:h-[170px] transition-transform duration-300 transform hover:scale-110'/>
                                <p className='text-lg lg:text-xl font-serif text-gray-700 mt-2 text-center'>{Stone.name}</p>
                            </div>
                        ))}
                    </div>
                </div> 
                {/* Second row of gemstones, also with Grid */}
                <div className='w-full lg:h-[250px] px-4 grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-0 place-items-center'>
                    {gemstonesRow2.map((Stone, index) => (
                        <div key={index} className='flex flex-col w-full h-[250px] items-center justify-center'>
                            <img src={Stone.image} alt={Stone.name} className='w-[150px] h-[150px] lg:w-[170px] lg:h-[170px] transition-transform duration-300 transform hover:scale-110'/>
                            <p className='text-lg lg:text-xl font-serif text-gray-700 mt-2 text-center'>{Stone.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default StoneCollection;