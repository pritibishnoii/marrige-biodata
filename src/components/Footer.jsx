import React from 'react'
import { fb, insta, slflower, twiter, whatsup } from '../assets'

const Footer = () => {
    return (
        <div className='w-full h-max bg-[#FFD0E196] rounded-tl-[100px] rounded-tr-[100px] flex flex-col lg:flex-row flex-wrap justify-between font-libre md:flex-col  px-4 md:px-12 gap-8 lg:py-8 relative  overflow-hidden py-8 '  >


            <div className="absolute -bottom-8 -left-12 -rotate-90 md:w-48 ">
                <img src={ slflower } alt="flw" />
            </div>
            <div className="absolute -bottom-2  -left-18 -rotate-120 md:w-48 ">
                <img src={ slflower } alt="flw" />
            </div>

            <div className="w-full md:w-1/3 py-4 mt-8 px-2 md:px-6">
                <h1 className='font-bold text-md'>About Us</h1>
                <p className='text-[12px] text-gray-800 mt-4'>Welcome to our online matrimonial biodata maker! We are a team of dedicated professionals with a passion for making the process of creating a biodata simple, easy, and enjoyable.
                    We understand the importance of finding the right match and believe that a great biodata is the first step in that journey. That's why we have made our tool easy to use and customizable, allowing you to create a beautiful biodata that truly represents you.</p>
            </div>

            <div className="w-full md:w-auto py-4 px-2 md:px-6">
                <h1 className='font-bold text-md'>Follow on</h1>
                <ul className="list-none mt-4">
                    <li className='text-[12px] text-gray-800 cursor-pointer'>YouTube</li>
                    <li className='text-[12px] text-gray-800 cursor-pointer'>Facebook</li>
                    <li className='text-[12px] text-gray-800 cursor-pointer'>Pinterest</li>
                    <li className='text-[12px] text-gray-800 cursor-pointer'>Twitter</li>
                    <li className='text-[12px] text-gray-800 cursor-pointer'>Instagram</li>
                </ul>
            </div>

            <div className='w-full md:w-auto py-4 px-2 md:px-6'>
                <h1 className='text-md font-bold'>Connect with us</h1>
                <ul className='mt-4 flex gap-4 items-center'>
                    <li className='cursor-pointer'>
                        <img className='w-6' src={ insta } alt="social-icons" />
                    </li>
                    <li className='cursor-pointer'>
                        <img className='w-6' src={ fb } alt="social-icons" />
                    </li>
                    <li className='cursor-pointer'>
                        <img className='w-6' src={ twiter } alt="social-icons" />
                    </li>
                    <li className='cursor-pointer'>
                        <img className='w-6' src={ whatsup } alt="social-icons" />
                    </li>
                </ul>
            </div>

            <div className='w-full md:w-auto py-4 px-2 md:px-6'>
                <h1 className='font-bold text-md'>Support</h1>
                <ul className='mt-4'>
                    <li className='text-[12px] text-gray-800 cursor-pointer'>Terms of Service</li>
                    <li className='text-[12px] text-gray-800 cursor-pointer'>Privacy Policy</li>
                    <li className='text-[12px] text-gray-800 cursor-pointer'>Refund Policy</li>
                    <li className='text-[12px] text-gray-800 cursor-pointer'>Shipping and Delivery Policy</li>
                    <li className='text-[12px] text-gray-800 cursor-pointer'>Contact Us</li>
                </ul>
            </div>

        </div>
    )
}

export default Footer