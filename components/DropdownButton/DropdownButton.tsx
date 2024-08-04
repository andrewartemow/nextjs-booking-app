'use client'

import React, { ReactNode, useState } from 'react'

import SecondaryButton from '../SecondaryButton/SecondaryButton'

interface DropdownButton {
    children: ReactNode,
    list: string[],
    className?: string,
}

const DropdownButton = ({ children, list, className }: DropdownButton) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState('');

    return (
        <div className={`relative w-48 ${className}`}>
            <SecondaryButton className="bg-general flex items-center justify-between gap-4 border-[1px] w-full py-[11px]" onClick={() => setIsOpen(!isOpen)}>
                {selectedProperty ? selectedProperty : children} <img src="/assets/icons/arrow-down.png" width={15} alt="icon" />
            </SecondaryButton>
            {isOpen && <ul className="flex flex-col items-center gap-2 shadow-md p-2 rounded-md absolute z-50 top-[3rem] bg-general">
                {list.map((item: string) => <li className="cursor-pointer hover:text-hover" key={item} onClick={() => setSelectedProperty(item)}>{item}</li>)}
            </ul>}
        </div>
    )
}

export default DropdownButton;