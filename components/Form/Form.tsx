'use client'

import React, { FormEvent, ReactNode } from 'react'

interface FormProps {
    children: ReactNode
    className?: string
}

const Form = ({ children, className }: FormProps) => {

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    }

    return (
        <form className={`flex flex-col items-center justify-center flex-wrap gap-2 p-5 bg-light-blue rounded-md lg:flex-row ${className}`} onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

export default Form;