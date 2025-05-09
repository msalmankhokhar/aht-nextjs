'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { AccomodationItem } from '../sections/AccomodationSection';
import { hotelInterface } from '@/actions/hotels.actions';

export default function HotelCardSwiper({ data }: { data?: hotelInterface[] }) {
    return (
        <>
            <Swiper
                className='max-w-[1200px]'
                spaceBetween={24}
                slidesPerView={1}
                freeMode
                breakpoints={{
                    640: {  // sm
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    768: {  // md
                        slidesPerView: 2.5,
                        spaceBetween: 24,
                    },
                    1024: { // lg
                        slidesPerView: 3.5,
                        spaceBetween: 24,
                    },
                }}
            >

                {
                    data ? (
                        data.map((hotel) => (
                            <SwiperSlide key={hotel._id} className='pb-5'>
                                <AccomodationItem hotel={hotel} />
                            </SwiperSlide>
                        ))
                    ) : (
                        <>
                            <SwiperSlide className='pb-5'>
                                <AccomodationItem />
                            </SwiperSlide>
                            <SwiperSlide className='pb-5'>
                                <AccomodationItem />
                            </SwiperSlide>
                            <SwiperSlide className='pb-5'>
                                <AccomodationItem />
                            </SwiperSlide>
                            <SwiperSlide className='pb-5'>
                                <AccomodationItem />
                            </SwiperSlide>
                        </>
                    )
                }

            </Swiper>
        </>
    )
}
