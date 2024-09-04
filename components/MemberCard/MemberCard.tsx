import React from 'react'
import Image from 'next/image'

import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'

interface MemberCardProps {
    imageUrl: string,
    name: string,
    position: string
}

const MemberCard = ({ imageUrl = '', name, position }: MemberCardProps) => {
    return (
        <div className="w-[20rem] h-[20rem] bg-general rounded-md overflow-hidden p-4 flex gap-2 flex-col items-center justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <Image src={imageUrl} width={0}
                height={0}
                sizes="100vw" alt="failed to load" style={{ width: '50%', height: 'auto' }} />
            <Heading type="h6">{name}</Heading>
            <Paragraph>{position}</Paragraph>
        </div>
    )
}

export default MemberCard;