'use client'

import React, { FC } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

import CustomInput from '../CustomInput/CustomInput'
import Image from 'next/image'

interface SearchInputProps {
    className?: string,
    placeholder?: string
}

const SearchInput: FC<SearchInputProps> = ({ className, placeholder }) => {

    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const handleQueries = (value: string) => {
        const params = new URLSearchParams(searchParams);

        if (value) {
            params.set('name', value)
        } else {
            params.delete('name')
        }

        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <CustomInput type="text" placeholder={placeholder} className={className ? className : ''} onChange={(e) => handleQueries(e.target.value)} defaultValue={searchParams.get('query')?.toString()} />
    )
}

export default SearchInput;