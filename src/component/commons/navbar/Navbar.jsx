"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ButtonPlain, Text2Xl } from '..';
import { useRouter } from 'next/navigation';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const router = useRouter();
    const links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Testimonials", link: "/testimonials" },
    ];

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <>
            <div className='fixed top-0 left-0 w-full flex flex-row justify-between items-center md:px-20 px-10 border border-bottom h-[100px] bg-white z-20'>
                <div>
                    <Text2Xl text={"Naufil Faisal"} classes={"font-syne"} />
                </div>
                <div className='md:flex flex-row justify-evenly md:w-[50%] hidden'>
                    {links.map((link, index) => (
                        <Link key={index} href={link.link} passHref className='font-syne text-nav hover:underline hover:text-black duration-1000 underline-offset-8'>
                            {link.name}
                        </Link>
                    ))}
                </div>
                <ButtonPlain text={"Hire me"} isRounded={true} classes={"bg-nav md:block hidden"} onClick={() => router.push('/contact')} />
                <div className='md:hidden' onClick={toggleMobileNav}>
                    {isMobileNavOpen ? <RxCross1 className='cursor-pointer' /> : <GiHamburgerMenu className='cursor-pointer' />}
                </div>
            </div>

            <div className={`fixed top-[110px] left-1/2 transform -translate-x-1/2 w-4/5 py-3 border border-nav bg-white z-20 rounded-lg shadow-lg transition-all duration-300 ${isMobileNavOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
                <div className='flex flex-col justify-center items-center pb-2'>
                    {links.map((link, index) => (
                        <Link key={index} href={link.link} passHref className='font-syne text-nav hover:underline hover:text-black duration-1000 underline-offset-8 py-2'>
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Navbar;
