import React from 'react'

import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'

interface RoomCardProps {
    room: { id: number, name: string, price: number, location: string, description: string, image: string }
}

const RoomCard = ({ room }: RoomCardProps) => {

    console.log(room.image);

    return (
        <div className="w-[20rem] h-[22rem] bg-general shadow-lg rounded-md overflow-hidden">
            <div className={`h-[12rem] bg-cover bg-no-repeat bg-center`} style={{ backgroundImage: `url('${room.image}')` }}></div>
            <div className="flex flex-col justify-between h-[10rem] p-4">
                <Heading type="h6">{room.name}</Heading>
                <div>
                    <Paragraph className="font-bold text-blue mb-1">{room.price}&#8364;</Paragraph>
                    <Paragraph>{room.location}</Paragraph>
                </div>
            </div>
        </div>
    )
}

export default RoomCard;