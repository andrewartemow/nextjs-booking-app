import React, { ReactNode } from 'react'

interface ParagraphProps {
    children: ReactNode,
    className?: string,
}

const Paragraph = ({ children, className }: ParagraphProps) => {
    return (
        <p className={`text-dark-blue text-md leading-[150%] ${className}`}>{children}</p>
    )
}

export default Paragraph