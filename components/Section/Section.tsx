import React, { ReactNode } from 'react'

interface SectionProps {
    children: ReactNode,
    className?: string,
    height: "screen" | "auto"
}

const Section = ({ children, className, height }: SectionProps) => {
    return (
        <section className={`h-${height} w-full ${className}`}>{children}</section>
    )
}

export default Section