import React from 'react'

interface CustomInputProps {
    type: "text" | "number",
    placeholder?: string,
    className?: string,
    defaultValue?: string | number,
    onChange: (value: any) => void,

}

const CustomInput = ({ type, placeholder, className, defaultValue, onChange }: CustomInputProps) => {
    return (
        <input className={`text-base px-5 py-3 focus:outline-none rounded-md ${className}`} type={type} placeholder={`${placeholder ? placeholder : ""}`} onChange={onChange} defaultValue={defaultValue ? defaultValue : ''} />
    )
}

export default CustomInput;