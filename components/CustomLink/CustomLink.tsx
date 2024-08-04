import Link from 'next/link'
import React, { ReactNode } from 'react'

interface CustomLinkProps {
    link: string,
    children: ReactNode
}

const CustomLink = ({ link, children }: CustomLinkProps) => {
    return (
        <Link href={link} className="text-md text-blue underline">
            {children}
        </Link>
    )
}

export default CustomLink