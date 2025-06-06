import React from 'react';
import Navbar from './Navbar';
import { flower, sflower, leftflower, hands, template, biotemp } from '../assets';

const Hero = () => {
    return (
        <div className="w-full min-h-screen font-libre">
            <Navbar />

            {/* Decorative flowers - hidden on mobile */ }
            <div className="hidden md:flex justify-center items-center mt-12 relative">
                <img src={ flower } alt="Main Flower" className="absolute top-1 right-5 w-24 md:w-32" />
                <img
                    src={ sflower }
                    alt="Small Flower"
                    className="absolute top-9 -right-8 transform -translate-x-1/2 -translate-y-1/2 w-16 md:w-20"
                />
            </div>

            <div className="hidden md:flex justify-center items-center mt-12 relative">
                <img src={ leftflower } alt="Flower" className="absolute top-50 left-5 w-24 md:w-32" />
            </div>

            <div className='w-full flex flex-col md:flex-row px-4 md:px-8'>
                {/* Left text section */ }
                <div className='w-full md:w-1/2 flex flex-col items-center text-center md:text-left'>
                    <h1 className='text-3xl md:text-4xl font-libre text-black font-semibold mt-12 md:mt-20'>
                        Create your <br />
                        <span className='text-[#A1347E]'>Marriage Biodata</span>
                    </h1>

                    <div className="w-48 md:w-64">
                        <img src={ hands } alt="hands" className="w-full" />
                    </div>

                    <h2 className='text-[#A1347E] text-base md:text-lg py-4'>
                        "Where families meet, hearts <br /> connect, and stories begin."
                    </h2>

                    <p className='text-sm font-forum py-1 max-w-md'>
                        Design your marriage bio data easily with our free templates and online maker.
                        Find the perfect biodata format for your ideal match!
                    </p>

                    <button className='cursor-pointer py-2 px-6 text-white bg-[#872267] hover:bg-[#c36999] rounded-full text-sm w-40 my-4'>
                        Create Biodata
                    </button>
                </div>

                {/* Right templates section */ }
                <div className='w-full md:w-1/2 flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center mt-8 md:mt-0'>
                    <div className='w-64 md:w-78'>
                        <img src={ template } alt="template" className='w-full' />
                    </div>
                    <div className='w-64 md:w-78 pt-8 md:pt-12'>
                        <img src={ biotemp } alt="biotemp" className='w-full shadow-lg shadow-[#B12B8782]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
