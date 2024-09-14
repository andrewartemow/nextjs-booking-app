'use client'

import React, { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { Url } from 'next/dist/shared/lib/router/router';

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
        <button className={`text-general bg-blue text-md px-4 py-3 hover:bg-hover rounded-md ${className}`} onClick={handleOnClick}>{children}</button>
    )
}

export default SecondaryButton;