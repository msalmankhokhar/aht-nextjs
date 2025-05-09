'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { ReviewsCard } from '../sections/ReviewsSection';

export default function ReviewCardSwiper() {
    return (
        <>
            <Swiper
                className='max-w-[1200px]'
                spaceBetween={24}
                slidesPerView={1}
                freeMode
                breakpoints={{
                    640: {  // sm
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {  // md
                        slidesPerView: 1.5,
                        spaceBetween: 24,
                    },
                    1024: { // lg
                        slidesPerView: 2.5,
                        spaceBetween: 24,
                    },
                }}
            >

                <SwiperSlide className='pb-5'>
                    <ReviewsCard />
                </SwiperSlide>
                <SwiperSlide className='pb-5'>
                    <ReviewsCard />
                </SwiperSlide>
                <SwiperSlide className='pb-5'>
                    <ReviewsCard />
                </SwiperSlide>

            </Swiper>
        </>
    )
}
