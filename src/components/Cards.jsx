import React from 'react'

const Cards = ( { data } ) => {
    return (
        <>
            <div className='w-full flex flex-col items-center font-libre gap-4 sm:gap-6 py-6 sm:py-8 px-4 md:px-0  z-10 '>
                <h1 className="text-[#A1347E] text-xl sm:text-2xl font-bold text-center">{ data.header.title }</h1>
                <p className="text-[12px] sm:text-sm text-center w-full sm:w-3/4  text-gray-800 font-light">{ data.header.description }</p>
                <div className="w-full flex flex-col lg:flex-row px-2 sm:px-4 md:px-12 gap-4 sm:gap-8 md:gap-12">
                    {
                        data.features.map( fData => {
                            return (
                                <div key={ fData.id } className="p-4 sm:p-6 md:p-9 flex flex-col justify-between items-start bg-[#DFA0CC80] md:bg-[#DFA0CC63] rounded-sm shadow-2xl hover:shadow-lg transition-shadow duration-300 ">
                                    <h3 className="text-sm sm:text-md font-bold text-[#A1347E]">{ fData.cardTitle }</h3>
                                    <p className='text-[11px] sm:text-[12px] text-left mt-2'>{ fData.cardDes }</p>
                                </div>
                            )
                        } )
                    }
                </div>
            </div>
        </>
    )
}

export default Cards