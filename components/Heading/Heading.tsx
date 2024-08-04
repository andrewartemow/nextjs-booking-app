import React, { ReactNode } from 'react'
import { Merriweather } from "next/font/google";

interface HeadingProps {
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    children: ReactNode,
    className?: string,
}

const merriweather = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700", "900"] });

const Heading = ({ type, children, className }: HeadingProps) => {
    switch (type) {
        case "h1":
            return <h1 className={`${merriweather.className} text-5xl text-dark-blue leading-[120%] font-bold ${className}`}>
                {children}
            </h1>
        case "h2":
            return <h2 className={`${merriweather.className} text-4xl text-dark-blue leading-[120%] font-bold ${className}`}>
                {children}
            </h2>
        case "h3":
            return <h3 className={`${merriweather.className} text-3xl text-dark-blue leading-[120%] font-bold ${className}`}>
                {children}
            </h3>
        case "h4":
            return <h4 className={`${merriweather.className} text-2xl text-dark-blue leading-[120%] font-bold ${className}`}>
                {children}
            </h4>
        case "h5":
            return <h5 className={`${merriweather.className} text-xl text-dark-blue leading-[120%] font-bold ${className}`}>
                {children}
            </h5>
        case "h6":
            return <h6 className={`${merriweather.className} text-lg text-dark-blue leading-[120%] font-bold ${className}`}>
                {children}
            </h6>
    }
}

export default Heading