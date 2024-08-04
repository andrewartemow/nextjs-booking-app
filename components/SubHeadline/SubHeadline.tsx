import React, { ReactNode } from 'react'

interface SubHeadlineProps {
    children: ReactNode,
    className?: string,
}

const SubHeadline = ({ children, className }: SubHeadlineProps) => {
    return (
        <h4 className={`text-dark-blue leading-[150%] ${className}`}>{children}</h4>
    )
}

export default SubHeadline