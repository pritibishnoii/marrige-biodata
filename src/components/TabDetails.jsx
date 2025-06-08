import React, { useState } from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlinePlusCircle, HiOutlinePlus } from "react-icons/hi";
import { PersonalInfo, FamilyInfo, ContactInfo } from '../utils/TabDetails';
import { BiSolidImageAdd } from "react-icons/bi";

const TabDetails = ( { activeTab } ) => {
    const [ sections, setSections ] = useState( [ { id: 1, fields: ContactInfo } ] );
    const [ selectedImage, setSelectedImage ] = useState( null );

    // Function to handle image upload
    const handleImageUpload = ( event ) => {
        const file = event.target.files[ 0 ];
        if ( file ) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage( reader.result );
            };
            reader.readAsDataURL( file );
        }
    };

    // Function to add new section
    const addSection = () => {
        const newSection = {
            id: sections.length + 1,
            fields: ContactInfo
        };
        setSections( [ ...sections, newSection ] );
    };

    // Function to remove section
    const removeSection = ( sectionId ) => {
        if ( sections.length > 1 ) {
            setSections( sections.filter( section => section.id !== sectionId ) );
        }
    };

    // Function to reset form
    const resetForm = () => {
        setSections( [ { id: 1, fields: ContactInfo } ] );
        setSelectedImage( null );
    };

    // Function to render form fields
    const renderFormFields = ( fields ) => {
        return fields.map( ( field, index ) => (
            <div className="w-full flex flex-col md:flex-row px-2 md:px-4 justify-center gap-2 py-2 z-10" key={ index }>
                <label htmlFor="" className="border border-black rounded-lg py-2 px-4 w-full md:w-68">{ field.label }</label>
                <input
                    type={ field.type }
                    placeholder={ field.placholder }
                    className="border-1 border-[#A1347EA1] rounded-lg placeholder:text-gray-500 w-full md:w-1/2 bg-white px-4 py-2 outline-none" />
                { activeTab == 0 && (
                    <div className="flex gap-2 px-2 items-center">
                        <HiOutlinePlusCircle
                            className="text-[#B35796] text-xl cursor-pointer"
                            onClick={ addSection }
                        />
                        <RiDeleteBinLine
                            className="text-[#970606] text-xl cursor-pointer"
                            onClick={ () => removeSection( sections[ 0 ].id ) }
                        />
                    </div>
                ) }
            </div>
        ) );
    };

    // Function to get the appropriate data based on active tab
    const getTabData = () => {
        switch ( activeTab ) {
            case 0:
                return PersonalInfo;
            case 1:
                return FamilyInfo;
            case 2:
                return sections;
            case 3:
                return [];
            default:
                return PersonalInfo;
        }
    };

    return (
        <div className="w-full py-4 md:py-8 flex gap-4 flex-col">
            { activeTab === 2 ? (
                <>
                    { sections.map( ( section ) => (
                        <div key={ section.id } className="border-b border-gray-200 pb-4">
                            { renderFormFields( section.fields ) }
                        </div>
                    ) ) }
                    <div className="flex w-3/4 justify-center gap-4 items-center mt-4">
                        <button
                            onClick={ addSection }
                            className="px-4 py-2 border flex items-center gap-2 border-black rounded-md bg-white cursor-pointer"
                        >
                            <HiOutlinePlus className="text-xl" />
                            Add Another Contact
                        </button>

                        <button
                            onClick={ resetForm }
                            className="px-4 py-2 border border-black rounded-md bg-white cursor-pointer"
                        >
                            Reset Form
                        </button>
                    </div>

                    {/* Image Upload Section */ }
                    <div className="mt-8 w-full flex flex-col items-center">
                        <div className="w-full md:w-1/2 h-68 flex flex-col gap-4 border-2 border-gray-400 rounded-lg bg-[#EFE8FD] py-4 px-8 relative">
                            <label className="text-sm font-medium font-libre">Upload Image</label>
                            <div className="flex flex-col gap-4 items-center justify-center h-full">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={ handleImageUpload }
                                    className="rounded-lg placeholder:text-gray-500 bg-white px-4 py-2 outline-none w-full h-full hidden"
                                    id="file-upload"
                                />

                                { selectedImage ? (
                                    <div className="flex justify-center">
                                        <img
                                            src={ selectedImage }
                                            alt="Preview"
                                            className="w-48 h-48 object-cover rounded-lg shadow-lg"
                                        />
                                    </div>
                                ) : (
                                    <label
                                        htmlFor="file-upload"
                                        className="flex flex-col items-center justify-center gap-2 px-1 py-2 bg-white rounded-lg cursor-pointer hover:bg-gray-50 transition-colors w-48 h-48"
                                    >
                                        <BiSolidImageAdd className="text-4xl text-[#751457]" />
                                        <span className="text-sm text-gray-700 items-center">Click here to add your photo</span>
                                    </label>
                                ) }
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                renderFormFields( getTabData() )
            ) }
        </div>
    );
};

export default TabDetails;