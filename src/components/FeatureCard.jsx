import React from 'react'
import { biotemp } from '../assets'
import { Card } from '../utils/TabDetails'

const FeatureCard = () => {



    return (
        <div className='flex  flex-col justify-center h-full py-4 md:py-8 items-center'>
            <div className='w-[95%] md:w-[90%] flex flex-col font-libre bg-[#FFD0E196] h-full mt-6 md:mt-12 items-center justify-between shadow py-6 md:py-12 px-4 md:px-8'>
                <h1 className='text-[#A1347E] text-lg md:text-xl font-bold mb-6 md:mb-8 py-2 text-center'>Essential features of our biodata maker app</h1>
                <div className='flex flex-col md:flex-row h-max justify-between gap-6 md:gap-12'>
                    {
                        Card.map( ( card, index ) => {
                            return (
                                <div key={ index } className='w-full md:w-68 bg-white h-auto md:h-58 py-6 md:py-8 px-4 shadow-xl flex flex-col items-center gap-3 md:gap-4'>
                                    <img src={ card.img } alt="img" className='w-8 md:w-10' />
                                    <h2 className='text-sm md:text-md text-[#B4246C] font-bold text-center'>{ card.title }</h2>
                                    <p className='text-[11px] md:text-[12px] text-center'>{ card.description }</p>
                                </div>
                            )
                        } )
                    }
                </div>
            </div>




            <div className='w-full h-full font-libre px-4 md:px-8 py-4 flex flex-col justify-center items-center'>
                <h1 className='text-xl md:text-2xl text-[#A1347E] py-6 md:py-12 my-6 md:my-12 font-bold text-center'>How to Create Free Marriage Biodata - A Detailed Guide</h1>
                <div className='flex flex-col  md:justify-center  lg:flex-row w-full justify-between px-4 md:px-8 gap-8 md:gap-12'>
                    <div className='w-full md:w-full'>
                        <img src={ biotemp } alt="img" className='w-full h-auto' />
                    </div>
                    <div className='flex flex-col justify-evenly gap-6 md:gap-8'>
                        <p className='text-sm'>Follow these 3 easy steps to create an attractive biodata with our free marriage biodata maker.</p>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-md font-semibold'>Step 1. Fill all your details in the language of your choice</h3>
                            <p className='text-sm text-gray-600'>Click on the Create My Biodata button. In the biodata form, select the language in which you want to create your biodata. Add your photograph and fill in your personal, family, and contact details.</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-md font-semibold'>Step 2. Choose the Free Template</h3>
                            <p className='text-sm text-gray-600'>Click on the Choose Template button at the bottom of the biodata form. Then, select a marriage biodata template for free from our template gallery.</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-md font-semibold'>Step 3. Download Free Marriage Biodata</h3>
                            <p className='text-sm text-gray-600'>Preview your photograph and all the information shown in the biodata. Now click on the Generate Biodata button. You will be directed to the Thank You page. Download your biodata by clicking on the Download Biodata button.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard