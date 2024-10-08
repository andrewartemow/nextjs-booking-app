import React, { ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode,
    className?: string,
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={`container max-w-[1280px] mx-auto px-5 ${className}`}>{children}</div>
    )
}

export default Container