import Image from "next/image";

import Container from "@/components/Container/Container";
import Heading from "@/components/Heading/Heading";
import SubHeadline from "@/components/SubHeadline/SubHeadline";
import Section from "@/components/Section/Section";
import LocationForm from "@/components/LocationForm/LocationForm";
import SecondaryButton from "@/components/SecondaryButton/SecondaryButton";
import Card from "@/components/RoomCard/RoomCard";
import Slider from "@/components/Slider/Slider";
import Paragraph from "@/components/Paragraph/Paragraph";
import MemberCard from "@/components/MemberCard/MemberCard";
import CustomInput from "@/components/CustomInput/CustomInput";

export default function Home() {
  return (
    <main>
      <Section height="screen" className="pt-52 lg:pt-28">
        <Container>
          <div className="flex gap-10">
            <div className="flex flex-col text-center mx-auto gap-2 justify-center w-[40rem] pt-10 lg:w-1/2 lg:text-left lg:pt-0">
              <Heading type="h1">Modern living<br />for everyone</Heading>
              <SubHeadline>We provide a complete service for the sale, purchase or rental of real estate. We have been operating in Madrid and Barcelona more than 15 years.</SubHeadline>
              <LocationForm />
            </div>
            <div className="hidden lg:block lg:w-1/2">
              <Image src="/assets/hero-picture.png" width={0}
                height={0}
                sizes="100vw" alt="failed to load" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </Container>
      </Section>
      <Section height="auto" className="bg-light-blue py-20">
        <Container>
          <div className="flex flex-col justify-center items-end mb-10 lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-2 justify-center w-full mb-5 lg:w-[32rem] lg:mb-0">
              <Heading type="h2" className="text-center lg:text-left">Top offers</Heading>
              <SubHeadline className="text-center lg:text-left">Fulfill your career dreams, enjoy all the achievements of the city center and luxury housing to the fullest.</SubHeadline>
            </div>
            <div className="w-full flex justify-center lg:w-max">
              <SecondaryButton className="mb-2">
                Show all offers
              </SecondaryButton>
            </div>
          </div>
          <Slider />
        </Container>
      </Section>
      <Section height="auto" className="py-20 h-auto">
        <Container>
          <div className="flex gap-10">
            <div className="hidden lg:block lg:w-3/5">
              <Image src="/assets/max-pen-laptop.png" width={0}
                height={0}
                sizes="100vw" alt="failed to load" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="flex flex-col text-center mx-auto gap-2 justify-center w-[40rem] pt-10 lg:w-2/5 lg:text-left lg:pt-0">
              <Heading type="h2">About us</Heading>
              <Paragraph>We are a company that connects the world of real estate and finance. We provide a complete service for the sale, purchase or rental of real estate. <br /><br />Our advantage is more than 15 years of experience and soil in attractive locations in Slovakia with branches in Bratislava and Košice.
                We have a connection to all banks on the Slovak market, so we can solve everything under one roof. <br /><br />By constantly innovating our business activities, we move forward and we are able to offer truly above-standard services that set us apart from the competition.</Paragraph>
            </div>
          </div>
        </Container>
      </Section>
      <Section height="auto" className="py-20">
        <Container>
          <div className="flex flex-col items-center">
            <Heading type="h2" className="text-center mb-5">Our Team</Heading>
            <SubHeadline className="text-center max-w-[30rem]">Fulfill your career dreams, enjoy all the achievements of the city center and luxury housing to the fullest.</SubHeadline>
            <div className="flex flex-wrap justify-center gap-10 py-20 h-auto">
              <MemberCard imageUrl="/assets/profile-pic.png" name="Davis Carder" position="Director" />
              <MemberCard imageUrl="/assets/profile-pic2.png" name="Maren Press" position="Support" />
              <MemberCard imageUrl="/assets/profile-pic3.png" name="Randy Rosser" position="Marketing & Analytics" />
              <MemberCard imageUrl="/assets/profile-pic4.png" name="Haylie Donin" position="Manager" />
              <MemberCard imageUrl="/assets/profile-pic5.png" name="Miracle Bator" position="CEO" />
            </div>
          </div>
        </Container>
      </Section>
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
    </main>
  );
}
