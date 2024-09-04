import React from 'react'

interface CustomInputProps {
    type: "text" | "number",
    placeholder?: string,
    className?: string
}

const CustomInput = ({ type, placeholder, className }: CustomInputProps) => {
    return (
        <input className={`text-base px-5 py-3 focus:outline-none rounded-md ${className}`} type={type} placeholder={`${placeholder ? placeholder : ""}`} />
    )
}

export default CustomInput;