import React from 'react'
import Cards from './Cards'
import { featurBioData, sectionBioData } from '../utils/TabDetails'


const BiodataMakerCard = () => {
    return (
        <div className='bg-[#F4E4FD] w-full h-max flex justify-center py-6 md:py-8 lg:py-12 '>

            <div className='w-[95%] md:w-[90%] bg-white h-full shadow-2xl rounded-md py-6 md:py-8 lg:py-12 flex flex-col gap-6 md:gap-8 lg:gap-12 '>

                <Cards data={ featurBioData } />
                <Cards data={ sectionBioData } />
            </div>
        </div>
    )
}

export default BiodataMakerCard