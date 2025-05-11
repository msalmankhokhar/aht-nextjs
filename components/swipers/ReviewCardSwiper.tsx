'use client';
import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

// Import Swiper styles
import 'swiper/css';
import { ReviewsCard } from '../sections/ReviewsSection';

// Create navigation buttons component
function SwiperNavButtons() {
    const swiper = useSwiper();
    
    return (
        <div className="flex gap-5 items-center justify-center mt-4">
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

export default function ReviewCardSwiper() {
    return (
        <div>
            <Swiper
                modules={[Navigation]}
                className='max-w-[1200px]'
                spaceBetween={24}
                slidesPerView={1}
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
                
                <SwiperNavButtons />
            </Swiper>
        </div>
    )
}
