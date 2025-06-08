import React from 'react'
import { biotemp, bottomFlower } from '../assets'


const DetailedGuied = () => {
    return (
        <div className='flex flex-col justify-center h-full py-4 md:py-8 items-center relative'>
            <div className=" absolute top-0 -right-8  -rotate-70   ">
                <img src={ bottomFlower } alt="img" className='w-48 md:w-98' />
            </div>

            {/* Sections Guide */ }
            <div className='w-full h-full font-libre px-4 md:px-8 py-4 flex flex-col justify-center items-center'>
                <h1 className='text-xl md:text-2xl text-[#A1347E] py-6 md:py-12 my-6 md:my-12 font-bold text-center'>How to Create Free Marriage Biodata - A Detailed Guide</h1>

                <div className='flex flex-col md:justify-center lg:flex-row w-full justify-between px-4 md:px-8 lg:px-18 gap-8'>
                    <div className='w-full md:w-[90%] lg:w-[50%] mx-auto flex justify-center items-center'>
                        <img src={ biotemp } alt="img" className='w-full min-w-[300px] max-w-[600px] h-auto object-contain ' />
                    </div>
                    <div className='flex flex-col justify-around gap-6 md:gap-8 z-10'>
                        <p className='text-sm md:text-base text-center mb-8 max-w-3xl '>Follow these 3 easy steps to create an attractive biodata with our free marriage biodata maker.</p>
                        <div className='flex flex-col gap-5'>
                            <h3 className='text-lg font-bold '>Step 1. Fill all your details in the language of your choice</h3>
                            <p className='text-sm text-gray-900'>Click on the Create My Biodata button. In the biodata form, select the language in which you want to create your biodata. Add your photograph and fill in your personal, family, and contact details.</p>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h3 className='text-lg font-bold '>Step 2. Choose the Free Template</h3>
                            <p className='text-sm text-gray-900'>Click on the Choose Template button at the bottom of the biodata form. Then, select a marriage biodata template for free from our template gallery..</p>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h3 className='text-lg font-bold '>Step 3. Download Free Marriage Biodata</h3>
                            <p className='text-sm text-gray-900'>Preview your photograph and all the information shown in the biodata. Now click on the Generate Biodata button. You will be directed to the Thank You page. Download your biodata by clicking on the Download Biodata button.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailedGuied