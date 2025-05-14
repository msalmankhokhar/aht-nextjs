'use client';
import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
// Import Swiper styles
import 'swiper/css';

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

export default function RealStoriesSwiper() {
    return (
        <div className='w-full'>
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
                    <video src={'/videos/video-reviews/1.mp4'} controls className="aspect-[9/16] min-w-[250px] max-h-[700px] rounded-xl"></video>
                </SwiperSlide>
                <SwiperSlide className='pb-5'>
                    <video src={'/videos/video-reviews/2.mp4'} controls className="aspect-[9/16] min-w-[250px] max-h-[700px] rounded-xl"></video>
                </SwiperSlide>
                <SwiperSlide className='pb-5'>
                    <video src={'/videos/video-reviews/3.mp4'} controls className="aspect-[9/16] min-w-[250px] max-h-[700px] rounded-xl"></video>
                </SwiperSlide>
                <SwiperSlide className='pb-5'>
                    <video src={'/videos/video-reviews/4.mp4'} controls className="aspect-[9/16] min-w-[250px] max-h-[700px] rounded-xl"></video>
                </SwiperSlide>

                <SwiperNavButtons />
            </Swiper>
        </div>
    )
}