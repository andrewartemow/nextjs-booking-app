import React from 'react'
import Image from 'next/image'

interface LogoProps {
    imageUrl: string,
    width?: number
}

const Logo = ({ imageUrl, width }: LogoProps) => {
    return (
        <div>
            <Image src={imageUrl} width={width ? width : 50} height={0} alt='logo' />
        </div>
    )
}

export default Logo