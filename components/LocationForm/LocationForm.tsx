'use client'

import React, { FormEvent } from 'react'

import DropdownButton from '../DropdownButton/DropdownButton'
import CustomInput from '../CustomInput/CustomInput'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

const LocationForm = () => {

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    }

    return (
        <form className="flex items-center justify-center flex-wrap gap-2 p-5 bg-light-blue rounded-md" onSubmit={handleSubmit}>
            <DropdownButton list={["House", "Office", "Townhouse", "Flat"]}>
                Property Type
            </DropdownButton>
            <div className="relative">
                <img src="/assets/icons/location-mark.svg" className="absolute z-50 w-6 h-6 top-1/2 left-1 transform -translate-y-1/2" alt="icon" />
                <CustomInput className="pl-10" type="text" placeholder="Search Locations" />
            </div>
            <PrimaryButton className="flex-1" type="submit">
                Search
            </PrimaryButton>
        </form>
    )
}

export default LocationForm;