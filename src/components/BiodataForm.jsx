import React, { useState } from 'react'

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { FiDelete, FiPlus } from 'react-icons/fi'
import tabDetailsForm from '../utils/TabDetails'

const tabMenu = [
    "Personal Details", "Family Details", " Contact Details", "Template"
]
const BiodataForm = () => {

    const [ activeTab, setActiveTab ] = useState( 0 )
    return (
        <div className="w-full h-max  rounded-l-[150px]   rounded-r-[150px]   shadow-lg shadow-[#A1347E] py-12  flex flex-col items-center mt-8">

            <h1 className="text-3xl font-semibold text-center  text-[#A1347E]  font-libre py-8">Create Your Biodata Now </h1>

            <div className="bg-gradient-to-r from-[#F2E5FF] to-[#F7C0D496]  w-[80%]  h-1/2   py-12 px-8  shadow-[12px_1px_18px_rgba(153,102,204,0.23)]     rounded-lg "  >

                {/* tab  */ }
                <div className='w-full flex justify-center  gap-8 '>
                    {
                        tabMenu.map( ( tab, index ) => {
                            return (
                                <motion.button key={ index }

                                    className={ ` text-black  text-sm cursor-pointer py-2  px-6    font-libre  rounded-full ${ activeTab === index ? "bg-[#751457] text-white" : "" } ` }
                                    onClick={ () => {
                                        setActiveTab( index )
                                    } }
                                >{ tab }</motion.button>
                            )
                        } )
                    }

                </div>


                {/* tab details  */ }

                <div className=" w-full py-8  flex gap-4 flex-col ">

                    {
                        tabDetailsForm.map( ( tab, index ) => {
                            return (
                                <div className="w-full flex   px-4  justify-center gap-2 " key={ index }>
                                    <label htmlFor="" className="border border-black  rounded-lg py-2 px-4  w-68">{ tab.label }</label>
                                    <input
                                        type={ tab.type }
                                        placeholder={ tab.placholder }
                                        className=" border-1 border-[#A1347EA1] rounded-lg  placeholder:text-gray-500  w-1/2  bg-white px-4  py-2 outline-none" />
                                    <div className="  flex  ">
                                        <FiDelete />
                                        <FiPlus />
                                    </div>
                                </div>
                            )
                        } )
                    }
                </div>

                {/* buttons  */ }
                <div className='w-[90%] flex  gap-4 justify-end '>
                    <button className=' py-2  px-4 w-48 border border-gray-600 cursor-pointer  rounded-md '>Resete Form</button>
                    <button className=' py-2  px-4 w-38 border border-gray-600 cursor-pointer bg-white rounded-md  '>Next</button>
                </div>
            </div>
        </div>
    )
}

export default BiodataForm