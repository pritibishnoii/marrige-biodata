import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const navItems = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Templates",
        path: "/templates"
    },
    {
        name: "Contact us",
        path: "/contact-us"
    },
    {
        name: "Preview",
        path: "/preview"
    },
];

const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState( false );

    const toggleMenu = () => {
        setIsOpen( !isOpen );
    };

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, y: 20 },
        open: ( i ) => ( {
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.3
            }
        } )
    };

    return (
        <nav className='bg-[#FFFFFF] w-full h-22 shadow-2xl font-libre pb-3 relative'>
            {/* Desktop Navigation */ }
            <div className='hidden md:flex justify-end md:py-12 px-8'>
                <ul className='text-[#751457] flex justify-evenly items-end list-none space-x-8'>
                    { navItems.map( ( item, index ) => (
                        <motion.li
                            key={ index }
                            whileHover={ { scale: 1.1 } }
                            whileTap={ { scale: 0.95 } }
                        >
                            <NavLink
                                to={ item.path }
                                className={ ( { isActive } ) =>
                                    `text-md transition-all no-underline duration-200 delay-200 ${ isActive ? 'border-b-2 border-[#751457] pb-1' : ''
                                    }` }
                            >
                                { item.name }
                            </NavLink>
                        </motion.li>
                    ) ) }
                </ul>
            </div>

            {/* Mobile Menu Button */ }
            <div className='md:hidden flex justify-end p-4'>
                <motion.button
                    whileTap={ { scale: 0.95 } }
                    onClick={ toggleMenu }
                    className='text-[#751457] text-2xl'
                >
                    { isOpen ? <IoClose /> : <CiMenuFries /> }
                </motion.button>
            </div>

            {/* Mobile Navigation */ }
            <AnimatePresence>
                { isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={ menuVariants }
                        className='md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50'
                    >
                        <ul className='text-[#751457] flex flex-col items-center py-4 space-y-4'>
                            { navItems.map( ( item, index ) => (
                                <motion.li
                                    key={ index }
                                    custom={ index }
                                    variants={ itemVariants }
                                    whileHover={ { scale: 1.1 } }
                                    whileTap={ { scale: 0.95 } }
                                    className='w-full text-center'
                                >
                                    <NavLink
                                        to={ item.path }
                                        onClick={ () => setIsOpen( false ) }
                                        className={ ( { isActive } ) =>
                                            `text-md transition-all no-underline duration-200 delay-200 ${ isActive ? 'border-b-2 border-[#751457] pb-1' : ''
                                            }` }
                                    >
                                        { item.name }
                                    </NavLink>
                                </motion.li>
                            ) ) }
                        </ul>
                    </motion.div>
                ) }
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;