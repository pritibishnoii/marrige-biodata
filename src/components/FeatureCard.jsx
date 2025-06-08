import React from 'react'
import { whiteFlower, leftFlower, pen, tick, stars } from '../assets'


const FeatureCard = () => {
    return (
        <div className='flex flex-col justify-center h-full py-4 md:py-8 items-center'>
            {/* Features Section */ }
            <div className='w-[95%] md:w-[90%] flex flex-col font-libre bg-[#FFD0E196] h-full mt-6 md:mt-12 items-center justify-between shadow py-6 md:py-12 px-4 md:px-8 relative'>
                <div className='absolute top-0 right-8 '>
                    <img src={ whiteFlower } alt="img" className='hidden md:inline' />
                </div>
                <div className='absolute -top-4 left-4 rotate-90 '>
                    <img src={ leftFlower } alt="img" className='' />
                </div>
                <h1 className='text-[#A1347E] text-lg md:text-xl font-bold mb-6 md:mb-8 py-2 text-center z-10'>Essential features of our biodata maker app</h1>
                <div className='flex flex-col md:flex-row h-max justify-between gap-6 md:gap-12  md:flex-wrap md:justify-center'>
                    <div className='w-full md:w-68 bg-white h-auto md:h-58 py-6 md:py-8 px-4 shadow-xl flex flex-col items-center gap-3 md:gap-4 z-10'>
                        <img src={ tick } alt="img" className='w-12' />
                        <h3 className='text-[#B4246C] text-md font-bold '>Easy to use</h3>
                        <p className='text-[12px] text-center'>Enter your details, choose template and voila! your Biodata in pdf format is ready.</p>
                    </div>
                    <div className='w-full md:w-68 bg-white h-auto md:h-58 py-6 md:py-8 px-4 shadow-xl flex flex-col items-center gap-3 md:gap-4  z-10'>
                        <img src={ pen } alt="img" className='w-12' />
                        <h3 className='text-[#B4246C] text-md font-bold '>Customization made simple</h3>
                        <p className='text-[12px] text-center'>You have full control of what you want in your marriage biodata. You can add new fields and delete or rename the existing fields.</p>
                    </div>
                    <div className='w-full md:w-68 bg-white h-auto md:h-58 py-6 md:py-8 px-4 shadow-xl flex flex-col items-center gap-3 md:gap-4 z-10'>
                        <img src={ stars } alt="img" className='w-12' />
                        <h3 className='text-[#B4246C] text-md font-bold '>Great looking tamplates </h3>
                        <p className='text-[12px] text-center'>Enter your details, choose template and voila! your Biodata in pdf format is ready...</p>
                    </div>
                    <div className='absolute bottom-0 left-5 rotate-180 '>
                        <img src={ whiteFlower } alt="img" className='hidden md:inline' />
                    </div>
                    <div className='absolute -bottom-4 right-4 -rotate-90'>
                        <img src={ leftFlower } alt="img" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default FeatureCard



// import React from 'react'
// import { biotemp } from '../assets'
// import { featurBioData, sectionBioData } from '../utils/TabDetails'

// const FeatureCard = () => {
//     return (
//         <div className='flex flex-col justify-center h-full py-4 md:py-8 items-center'>
//             {/* Features Section */ }
//             <div className='w-[95%] md:w-[90%] flex flex-col font-libre bg-[#FFD0E196] h-full mt-6 md:mt-12 items-center justify-between shadow py-6 md:py-12 px-4 md:px-8'>
//                 <h1 className='text-[#A1347E] text-lg md:text-xl font-bold mb-6 md:mb-8 py-2 text-center'>{ featurBioData.header.title }</h1>
//                 <p className='text-sm md:text-base text-center mb-8'>{ featurBioData.header.description }</p>
//                 <div className='flex flex-col md:flex-row h-max justify-between gap-6 md:gap-12  md:flex-wrap md:justify-center'>
//                     { featurBioData.features.map( ( card ) => (
//                         <div key={ card.id } className='w-full md:w-68 bg-white h-auto md:h-58 py-6 md:py-8 px-4 shadow-xl flex flex-col items-center gap-3 md:gap-4'>
//                             <h2 className='text-sm md:text-md text-[#B4246C] font-bold text-center'>{ card.cardTitle }</h2>
//                             <p className='text-[11px] md:text-[12px] text-center'>{ card.cardDes }</p>
//                         </div>
//                     ) ) }
//                 </div>
//             </div>

//             {/* Sections Guide */ }
//             <div className='w-full h-full font-libre px-4 md:px-8 py-4 flex flex-col justify-center items-center'>
//                 <h1 className='text-xl md:text-2xl text-[#A1347E] py-6 md:py-12 my-6 md:my-12 font-bold text-center'>{ sectionBioData.header.title }</h1>
//                 <p className='text-sm md:text-base text-center mb-8 max-w-3xl'>{ sectionBioData.header.description }</p>
//                 <div className='flex flex-col md:justify-center lg:flex-row w-full justify-between px-4 md:px-8 lg:px-18 gap-8'>
//                     <div className='w-full md:w-[90%] lg:w-[50%] mx-auto flex justify-center items-center'>
//                         <img src={ biotemp } alt="img" className='w-full min-w-[300px] max-w-[600px] h-auto object-contain' />
//                     </div>
//                     <div className='flex flex-col justify-around gap-6 md:gap-8'>
//                         { sectionBioData.features.map( ( section ) => (
//                             <div key={ section.id } className='flex flex-col gap-6'>
//                                 <h3 className='text-md font-semibold'>{ section.cardTitle }</h3>
//                                 <p className='text-sm text-gray-600'>{ section.cardDes }</p>
//                             </div>
//                         ) ) }
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default FeatureCard