"use client"

import React from 'react'

import { useRouter } from 'next/navigation'

import Image from 'next/image'

interface LogoProps {
    imageUrl: string,
    width?: number
}

const Logo = ({ imageUrl, width }: LogoProps) => {

    const router = useRouter();

    return (
        <div className="cursor-pointer" onClick={() => router.push('/')}>
            <Image src={imageUrl} width={width ? width : 50} height={0} alt='logo' />
        </div>
    )
}

export default Logo