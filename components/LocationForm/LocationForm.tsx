import React from 'react'

import DropdownButton from '../DropdownButton/DropdownButton'
import CustomInput from '../CustomInput/CustomInput'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import Form from '../Form/Form'

const LocationForm = () => {

    return (
        <Form>
            <DropdownButton list={["House", "Office", "Townhouse", "Flat"]} className="w-full lg:w-48">
                Property Type
            </DropdownButton>
            <div className="relative w-full lg:w-auto">
                <img src="/assets/icons/location-mark.svg" className="absolute z-20 w-6 h-6 top-1/2 left-1 transform -translate-y-1/2" alt="icon" />
                <CustomInput className="pl-10 w-full" type="text" placeholder="Search Locations" />
            </div>
            <PrimaryButton className="flex-1 w-full lg:w-auto" type="submit">
                Search
            </PrimaryButton>
        </Form>
    )
}

export default LocationForm;