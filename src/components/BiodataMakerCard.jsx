import React from 'react'
import Cards from './Cards'
import { featurBioData, sectionBioData } from '../utils/TabDetails'
import { flw, slflower } from '../assets'


const BiodataMakerCard = () => {
    return (
        <div className='bg-[#F4E4FD] w-full h-max flex justify-center py-6 md:py-8 lg:py-12 '>

            <div className='w-[95%] md:w-[90%] bg-white h-full shadow-2xl rounded-md py-6 md:py-8 lg:py-12 flex flex-col gap-6 md:gap-8 lg:gap-12 relative  '>

                <div className=" absolute md:-top-14  md:-left-10 -rotate-360   w-38  -top-8   -left-5  md:w-68 ">
                    <img src={ slflower } alt="flw" className=' ' />
                </div>
                <div className=" absolute md:-top-10  md:-right-16 rotate-90  md:w-68 w-38  -top-4  -right-8">
                    <img src={ slflower } alt="flw" />
                </div>
                <Cards data={ featurBioData } />
                <Cards data={ sectionBioData } />
                <div className=" absolute md:-bottom-15 md:-right-40 w-38 -bottom-10  md:w-98 -right-4 ">
                    <img src={ flw } alt="flw" />
                </div>
            </div>
        </div>
    )
}

export default BiodataMakerCard