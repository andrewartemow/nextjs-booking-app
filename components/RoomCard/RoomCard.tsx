import React from 'react'

import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'

const RoomCard = () => {
    return (
        <div className="w-[20rem] h-[22rem] bg-general shadow-lg rounded-md overflow-hidden">
            <div className="h-[12rem] bg-[url('/assets/room-picture.jpg')] bg-cover bg-no-repeat bg-center"></div>
            <div className="flex flex-col justify-between h-[10rem] p-4">
                <Heading type="h6">Large 4-room apartment with a beautiful terrace</Heading>
                <div>
                    <Paragraph className="font-bold text-blue mb-1">320000&#8364;</Paragraph>
                    <Paragraph>Barcelona IX.</Paragraph>
                </div>
            </div>
        </div>
    )
}

export default RoomCard;