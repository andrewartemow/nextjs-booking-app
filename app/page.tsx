import Image from "next/image";

import Container from "@/components/Container/Container";
import Heading from "@/components/Heading/Heading";
import SubHeadline from "@/components/SubHeadline/SubHeadline";
import Section from "@/components/Section/Section";
import SecondaryButton from "@/components/SecondaryButton/SecondaryButton";
import Slider from "@/components/Slider/Slider";
import Paragraph from "@/components/Paragraph/Paragraph";
import MemberCard from "@/components/MemberCard/MemberCard";
import Form from "@/components/Form/Form";
import DropdownButton from "@/components/DropdownButton/DropdownButton";
import SearchInput from "@/components/SearchInput/SearchInput";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";

export default async function Home() {
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
      <Section height="auto" className="py-36 lg:py-28">
        <Container>
          <div className="flex gap-10">
            <div className="flex flex-col text-center mx-auto gap-5 justify-center w-[40rem] pt-10 lg:w-1/2 lg:text-left lg:pt-0 lg:gap-2">
              <Heading type="h1">Modern living<br />for everyone</Heading>
              <SubHeadline>We provide a complete service for the sale, purchase or rental of real estate. We have been operating in Madrid and Barcelona more than 15 years.</SubHeadline>
              <Form>
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
                ]} type="location" className="w-full lg:w-48">
                  Location
                </DropdownButton>
                <div className="flex w-full lg:w-min gap-2">
                  <SearchInput className="w-full lg:w-min" placeholder='Enter key word' />
                  <PrimaryButton redirectTo="/offers">Search</PrimaryButton>
                </div>
              </Form>
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
              <SecondaryButton className="mb-2" redirectTo="/offers">
                Show all offers
              </SecondaryButton>
            </div>
          </div>
          {rooms && rooms.length ? <Slider rooms={rooms} /> : <Heading type="h2">Failed to load</Heading>}
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
    </main>
  );
}
