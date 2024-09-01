'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import Container from '../Container/Container'
import Logo from '../Logo/Logo'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

const Header = () => {
    const [isDropDownMeneOpen, setIsDropDownMeneOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleDropdown = () => {
        if (isDropDownMeneOpen) {
            // Start closing animation
            setIsAnimating(true);
            setTimeout(() => {
                setIsAnimating(false);
                setIsDropDownMeneOpen(false);
            }, 280); // Match this duration with the fadeOut animation
        } else {
            // Open the dropdown
            setIsDropDownMeneOpen(true);
        }
    };

    return (
        <header className="w-full py-10 absolute top-0 left-0 bg-general">
            <Container>
                <div className='flex items-center justify-between'>
                    <div className="flex items-center gap-10">
                        <Logo imageUrl="/assets/logo.png" />
                        <nav className='hidden lg:block'>
                            <ul className="flex items-center gap-5">
                                <Link href="#">Top offers</Link>
                                <Link href="#">Search in offers</Link>
                                <Link href="#">References</Link>
                                <Link href="#">About us</Link>
                                <Link href="#">Our team</Link>
                            </ul>
                        </nav>
                    </div>
                    <div className='flex items-center gap-5' >
                        <>
                            <div className="lg:hidden w-6 h-6 flex flex-col justify-between relative" onClick={toggleDropdown}>
                                <span className='w-full h-1 bg-dark-blue'></span>
                                <span className='w-full h-1 bg-dark-blue'></span>
                                <span className='w-full h-1 bg-dark-blue'></span>
                            </div>
                            {(isDropDownMeneOpen || isAnimating) && <div className={`bg-general w-screen absolute z-50 top-[6rem] right-0 p-5 ${isDropDownMeneOpen && !isAnimating
                                ? 'animate-fadeIn'
                                : 'animate-fadeOut'
                                }`}>
                                <ul className="flex flex-col items-center gap-5">
                                    <Link href="#">Top offers</Link>
                                    <Link href="#">Search in offers</Link>
                                    <Link href="#">References</Link>
                                    <Link href="#">About us</Link>
                                    <Link href="#">Our team</Link>
                                </ul>
                            </div>}
                        </>
                        <PrimaryButton>
                            Contact us
                        </PrimaryButton>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header