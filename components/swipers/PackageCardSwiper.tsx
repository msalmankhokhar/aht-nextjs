'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { packageInterface } from '@/actions/packages.actions';

// Import Swiper styles
import 'swiper/css';
import PackageCard from '../PackageCard';

interface PackageCardSwiperProps {
    data?: packageInterface[]
}

export default function PackageCardSwiper({ data = [] }: PackageCardSwiperProps) {
    return (
        <>
            <Swiper
                className='max-w-[1200px]'
                spaceBetween={24}
                slidesPerView={1}
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
                {data.map((pkg) => (
                    <SwiperSlide key={pkg._id} className='pb-5'>
                        <PackageCard data={pkg} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
