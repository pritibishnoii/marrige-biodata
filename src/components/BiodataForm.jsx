import React, { useState } from 'react'
import { AnimatePresence } from "motion/react"
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlinePlusCircle } from "react-icons/hi";
import TabDetails from './TabDetails';

const tabMenu = [
    "Personal Details", "Family Details", " Contact Details", "Template"
]
const BiodataForm = () => {
    const [ activeTab, setActiveTab ] = useState( 0 )

    // Function to render buttons based on active tab
    const renderButtons = () => {
        if ( activeTab === 2 ) { // Contact Details tab
            return (
                <div className='w-full md:w-[90%] flex justify-end'>
                    <button className='py-2 px-4 w-full md:w-38 bg-white text-black cursor-pointer rounded-md border border-[#A1347EA1]  shadow-2xl '>Save</button>
                </div>
            );
        }

        return (
            <div className='w-full md:w-[90%] flex flex-col md:flex-row gap-4 justify-end'>
                <button className='py-2 px-4 w-full md:w-48 border border-gray-600 cursor-pointer rounded-md'>Reset Form</button>
                <button className='py-2 px-4 w-full md:w-38 border border-gray-600 cursor-pointer bg-white rounded-md'>Next</button>
            </div>
        );
    };

    return (
        <div className="w-full h-3/4 rounded-l-[50px] md:rounded-l-[150px] rounded-r-[50px] md:rounded-r-[150px] shadow-lg shadow-[#A1347E] py-6 md:py-12 flex flex-col items-center mt-4 md:mt-8 px-4 md:px-0">
            <h1 className="text-2xl md:text-3xl font-semibold text-center text-[#A1347E] font-libre py-4 md:py-8">Create Your Biodata Now</h1>

            <div className="bg-gradient-to-r from-[#F2E5FF] to-[#F7C0D496] w-[95%] md:w-[80%] py-6 md:py-12 px-4 md:px-8 shadow-[12px_1px_18px_rgba(153,102,204,0.23)] rounded-lg  h-full">
                {/* tab */ }
                <div className='w-full flex flex-wrap justify-center gap-2 md:gap-8'>
                    {
                        tabMenu.map( ( tab, index ) => {
                            return (
                                <button key={ index }
                                    className={ `text-black text-xs md:text-sm cursor-pointer py-1 md:py-2 px-3 md:px-6 font-libre rounded-full ${ activeTab === index ? "bg-[#751457] text-white" : "" }` }
                                    onClick={ () => {
                                        setActiveTab( index )
                                    } }
                                >{ tab }</button>
                            )
                        } )
                    }
                </div>

                {/* tab details */ }
                <TabDetails activeTab={ activeTab } />

                {/* buttons */ }
                { renderButtons() }
            </div>
        </div>
    )
}

export default BiodataForm