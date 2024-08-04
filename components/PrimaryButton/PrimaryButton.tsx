import React, { ReactNode } from 'react'

interface PrimaryButtonProps {
    children: ReactNode,
    className?: string,
    type?: "submit"
}

const PrimaryButton = ({ children, className, type }: PrimaryButtonProps) => {
    return (
        <button className={`text-general bg-blue text-md px-4 py-3 hover:bg-hover rounded-md ${className}`} type={`${type ? type : "button"}`}>{children}</button>
    )
}

export default PrimaryButton;