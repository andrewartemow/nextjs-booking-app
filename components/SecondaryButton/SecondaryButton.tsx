import React, { ReactNode } from 'react'

interface SecondaryButtonProps {
    children: ReactNode,
    className?: string,
    onClick?: () => void;
}

const SecondaryButton = ({ children, className, onClick }: SecondaryButtonProps) => {
    return (
        <button className={`text-blue border-2 border-blue text-md px-4 py-[calc(0.75rem-2px)] hover:text-hover hover:border-hover rounded-md ${className}`} onClick={onClick}>{children}</button>
    )
}

export default SecondaryButton;