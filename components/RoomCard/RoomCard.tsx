import React from 'react'

import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'

interface RoomCardProps {
    room: { room_id: number, title: string, price: number, location: string, description: string, image: { data: ArrayBuffer, type: string } }
}

const RoomCard = ({ room }: RoomCardProps) => {

    console.log(room.image);

    const uint8array = new Uint8Array(room.image.data);
    // URL.createObjectURL(
    //     new Blob([uint8array], { type: 'image/jpeg' })
    // );
    console.log(uint8array);

    return (
        <div className="w-[20rem] h-[22rem] bg-general shadow-lg rounded-md overflow-hidden">
            <div className={`h-[12rem] bg-[url('/assets/room-picture.jpg')] bg-cover bg-no-repeat bg-center`}></div>
            <div className="flex flex-col justify-between h-[10rem] p-4">
                <Heading type="h6">{room.title}</Heading>
                <div>
                    <Paragraph className="font-bold text-blue mb-1">{room.price}&#8364;</Paragraph>
                    <Paragraph>{room.location}</Paragraph>
                </div>
            </div>
        </div>
    )
}

export default RoomCard;