'use client'

import React, { ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface SecondaryButtonProps {
    children: ReactNode,
    className?: string,
    redirectTo?: string;
    onClick?: () => void;
}

const SecondaryButton = ({ children, className, redirectTo, onClick }: SecondaryButtonProps) => {

    const router = useRouter();

    const handleOnClick = () => {
        onClick && onClick();
        if (redirectTo) {
            router.push(redirectTo)
        };
    }

    return (
        <button className={`text-blue border-2 border-blue text-md px-4 py-[calc(0.75rem-2px)] hover:text-hover hover:border-hover rounded-md ${className}`} onClick={handleOnClick}>{children}</button>
    )
}

export default SecondaryButton;