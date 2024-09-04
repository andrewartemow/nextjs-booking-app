import React from 'react'

import Image from 'next/image';
import Section from '../Section/Section';
import Heading from '../Heading/Heading';
import SubHeadline from '../SubHeadline/SubHeadline';
import Container from '../Container/Container';
import CustomInput from '../CustomInput/CustomInput';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

const SubscribeForm = () => {
    return (
        <Section height="auto" className="bg-light-blue py-20">
            <Container>
                <div className="flex justify-center items-center gap-10">
                    <div className="hidden lg:block">
                        <Image src="/assets/paper-plane.png" width={150}
                            height={0}
                            alt="failed to load" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Heading type="h4">Subscribe to newsletter</Heading>
                        <SubHeadline>Get the latest news and interesting offers and real estate</SubHeadline>
                        <div className="flex gap-4">
                            <CustomInput placeholder="Your email address" type="text" className="w-full" />
                            <SecondaryButton>Subscribe</SecondaryButton>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default SubscribeForm