'use client'

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import RoomCard from '../RoomCard/RoomCard';


const Slider = () => {
    return (
        <div className="flex gap-5">
            <Swiper
                spaceBetween={100}
                slidesPerView={4}
                className="w-[22rem] mx-auto sm:w-full"
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    920: {
                        slidesPerView: 3,
                        spaceBetween: 100,
                    },
                    1230: {
                        slidesPerView: 4,
                        spaceBetween: 100,
                    },
                }}
            >
                <SwiperSlide style={{ "width": "20rem" }}><RoomCard /></SwiperSlide>
                <SwiperSlide style={{ "width": "20rem" }}><RoomCard /></SwiperSlide>
                <SwiperSlide style={{ "width": "20rem" }}><RoomCard /></SwiperSlide>
                <SwiperSlide style={{ "width": "20rem" }}><RoomCard /></SwiperSlide>
                <SwiperSlide style={{ "width": "20rem" }}><RoomCard /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider