import React, { useState } from 'react'
import { RxChevronDown, RxChevronUp } from "react-icons/rx";

const FAQ = () => {
    const [ activeIndex, setActiveIndex ] = useState( null );

    const faqData = [
        {
            question: "Why should I make a creative / Professional biodata in 2025",
            answer: "A creative and professional biodata helps you stand out in the competitive marriage market. It showcases your personality, achievements, and aspirations in a visually appealing way, making a strong first impression on potential matches and their families."
        },
        {
            question: "Which is the best website to create a marriage biodata?",
            answer: "Our platform offers the best tools and templates to create a professional marriage biodata. We provide customizable designs, easy-to-use interface, and high-quality output formats to help you create an impressive biodata."
        },
        {
            question: "Can I create and download marriage biodata for free?",
            answer: "Yes, we offer a free tier that allows you to create and download basic marriage biodata. However, for access to premium templates and advanced features, we offer affordable subscription plans."
        },
        {
            question: "Are all your template designs of high quality?",
            answer: "Absolutely! All our templates are professionally designed with attention to detail, ensuring high-quality output. We regularly update our collection with modern designs that cater to various preferences and cultural backgrounds."
        }
    ];

    const toggleAccordion = ( index ) => {
        setActiveIndex( activeIndex === index ? null : index );
    };

    return (
        <div className='w-full h-max py-12 font-libre flex flex-col'>
            <h1 className='text-[#A1347E] text-xl font-bold text-center'>Frequently Asked Questions</h1>
            <div className="w-full py-12 my-12">
                { faqData.map( ( faq, index ) => (
                    <div key={ index } className="border-b-3 border-[#F4EFFE]">
                        <button
                            className="w-full text-left text-md font-semibold py-6 px-8 flex justify-between items-center"
                            onClick={ () => toggleAccordion( index ) }
                        >
                            { faq.question }
                            <span className="transform transition-transform duration-300">
                                { activeIndex === index ? <RxChevronDown className='text-gray-500 cursor-pointer ' /> : <RxChevronUp className='text-gray-500 cursor-pointer ' /> }
                            </span>
                        </button>
                        { activeIndex === index && (
                            <div className="px-8 pb-6 text-gray-600">
                                { faq.answer }
                            </div>
                        ) }
                    </div>
                ) ) }
            </div>
        </div>
    )
}

export default FAQ