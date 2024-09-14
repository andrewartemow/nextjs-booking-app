'use client'

import React, { ReactNode, useState } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'

import SecondaryButton from '../SecondaryButton/SecondaryButton'

interface DropdownButton {
    children: ReactNode,
    list: string[],
    className?: string,
    type: "location" | "rooms_amount" | "price_filter"
}

const DropdownButton = ({ children, list, className, type }: DropdownButton) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState('');

    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const handleQueries = (value: string) => {
        const params = new URLSearchParams(searchParams);

        if (value) {
            params.set(type, value)
        } else {
            params.delete(type)
        }

        replace(`${pathname}?${params.toString()}`)
    }



    return (
        <div className={`relative w-48 ${className}`}>
            <SecondaryButton className="bg-general flex items-center justify-between gap-4 border-[1px] w-full py-[12px]" onClick={() => setIsOpen(!isOpen)}>
                {selectedProperty ? selectedProperty : children} <img src="/assets/icons/arrow-down.png" width={15} alt="icon" />
            </SecondaryButton>
            {isOpen && <ul className="flex flex-col items-center gap-2 shadow-md p-2 rounded-md absolute z-50 top-[3rem] bg-general">
                {list.map((item: string) => <li className="cursor-pointer hover:text-hover" key={item} onClick={(e) => {
                    setSelectedProperty(item);
                    handleQueries(item);
                }}>{item}</li>)}
            </ul>}
        </div>
    )
}

export default DropdownButton;