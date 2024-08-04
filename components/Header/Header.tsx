'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import Container from '../Container/Container'
import Logo from '../Logo/Logo'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

const breakpoint = 768 as number;

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isDropDownMeneOpen, setIsDropDownMeneOpen] = useState(false);

    useEffect(() => {
        setIsMobile((window as Window).innerWidth <= breakpoint)
    })

    return (
        <header className="w-full py-10 absolute top-0 left-0 bg-general">
            <Container>
                <div className='flex items-center justify-between'>
                    <div className="flex items-center gap-10">
                        <Logo imageUrl="/assets/logo.png" />
                        {!isMobile && <nav>
                            <ul className="flex items-center gap-5">
                                <Link href="#">Top offers</Link>
                                <Link href="#">Search in offers</Link>
                                <Link href="#">References</Link>
                                <Link href="#">About us</Link>
                                <Link href="#">Our team</Link>
                            </ul>
                        </nav>}
                    </div>
                    <div className='flex items-center gap-10' >
                        {isMobile && <>
                            <div className="w-6 h-6 flex flex-col justify-between relative" onClick={() => setIsDropDownMeneOpen(!isDropDownMeneOpen)}>
                                <span className='w-full h-1 bg-dark-blue'></span>
                                <span className='w-full h-1 bg-dark-blue'></span>
                                <span className='w-full h-1 bg-dark-blue'></span>
                            </div>
                            {isDropDownMeneOpen && <ul className="flex flex-col items-center gap-5 shadow-md p-5 rounded-md absolute z-50 top-[6rem] right-[6rem] bg-general">
                                <Link href="#">Top offers</Link>
                                <Link href="#">Search in offers</Link>
                                <Link href="#">References</Link>
                                <Link href="#">About us</Link>
                                <Link href="#">Our team</Link>
                            </ul>}
                        </>}
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