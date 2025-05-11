'use client';
import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import { AccomodationItem } from '../sections/AccomodationSection';
import { hotelInterface } from '@/actions/hotels.actions';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

// Create navigation buttons component
function SwiperNavButtons() {
    const swiper = useSwiper();
    
    return (
        <div className="flex gap-3 items-center justify-center mt-4">
            <button 
                onClick={() => swiper.slidePrev()} 
                className="cursor-pointer rounded-full size-[35px] flex items-center justify-center text-lg border border-brand-secondary-200 text-brand-secondary-400 hover:bg-brand-secondary hover:text-white transition-colors"
            >
                <LuChevronLeft />
            </button>
            <button 
                onClick={() => swiper.slideNext()} 
                className="cursor-pointer rounded-full size-[35px] flex items-center justify-center text-xl border border-brand-secondary-200 text-brand-secondary-400 hover:bg-brand-secondary hover:text-white transition-colors"
            >
                <LuChevronRight />
            </button>
        </div>
    );
}

export default function HotelCardSwiper({ data }: { data?: hotelInterface[] }) {
    return (
        <div>
            <Swiper
                modules={[Navigation]}
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
                <SwiperNavButtons />
            </Swiper>
        </div>
    )
}
