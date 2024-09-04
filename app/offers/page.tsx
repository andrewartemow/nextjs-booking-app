import React from 'react'

import Section from '@/components/Section/Section'
import Heading from '@/components/Heading/Heading';
import SubHeadline from '@/components/SubHeadline/SubHeadline';
import Container from '@/components/Container/Container';
import CustomInput from '@/components/CustomInput/CustomInput';
import Form from '@/components/Form/Form';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import DropdownButton from '@/components/DropdownButton/DropdownButton';
import RoomCard from '@/components/RoomCard/RoomCard';

const Offers = async () => {
    let rooms = [];

    try {
        rooms = await fetch('http://localhost:3000/api/get-rooms', {
            method: 'GET',
            cache: 'no-store',
        }).then((res) => res.json()).then(data => {
            if (data.rooms) return data.rooms.rows
        });
    } catch (err) {
        console.error(err);
    }

    return (
        <main>
            <Section height="auto" className="pt-36 pb-10 lg:pt-28">
                <Container>
                    <div className='text-center pt-20 pb-10'>
                        <Heading type="h1">Search for an offer</Heading>
                        <SubHeadline>Choose from the most advantageous offers</SubHeadline>
                    </div>
                    <Form className="relative w-screen left-1/2 -translate-x-1/2 py-[2rem]">
                        <div className="flex items-center gap-3">
                            <CustomInput type="text" placeholder="Enter key words" />
                            <PrimaryButton>Search</PrimaryButton>
                        </div>
                        <div className="flex items-center justify-center py-4 bg-gray-50 w-full">
                            <div className="flex-grow border-t border-[#bdbdbd]"></div>
                            <span className="mx-4 text-[#bdbdbd]">Filter settings</span>
                            <div className="flex-grow border-t border-[#bdbdbd]"></div>
                        </div>
                        <div className='w-full lg:w-auto flex flex-col lg:flex-row items-center gap-3'>
                            <DropdownButton list={["From high to low prices", "From low to high prices"]} className="w-full lg:w-auto">Price Filter</DropdownButton>
                            <DropdownButton list={[
                                "Paris",
                                "Berlin",
                                "Rome",
                                "Madrid",
                                "Amsterdam",
                                "Vienna",
                                "Prague",
                                "Lisbon",
                                "Budapest",
                                "Copenhagen"
                            ]} className="w-full lg:w-auto">Location</DropdownButton>
                            <DropdownButton list={["1 room", "2 rooms", "3 rooms"]} className="w-full lg:w-auto">Amount of Room</DropdownButton>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-gray-50 w-full">
                            <div className="w-full max-w-lg px-4">
                                <input type="range" min="0" max="980000" value="0" className="w-full h-2 bg-blue-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-0 focus:shadow-none" />
                                <div className="flex justify-between mt-2 text-gray-700">
                                    <span>0 €</span>
                                    <span>980 000 €</span>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Container>
            </Section>
            <Section height='auto' className="pb-10">
                <Container>
                    <div className='flex justify-center gap-10 flex-wrap'>
                        {rooms && rooms.length ?
                            rooms.map((room: { id: number, name: string, price: number, location: string, description: string, image: string }) => <RoomCard key={room.id} room={room} />) : <Heading type="h2">Failed to load</Heading>}
                    </div>
                </Container>
            </Section>
        </main >
    )
}

export default Offers;