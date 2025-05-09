import Image from 'next/image'
import React from 'react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import HotelCardSwiper from '../swipers/HotelCardSwiper'
import { getHotels, hotelInterface, hotelsActionResponse } from '@/actions/hotels.actions';

export function AccomodationItem({hotel, image= '/images/hotels/makkah/pullman-zamzam-makkah/default.jpg'}: {hotel?: hotelInterface, image?: string}) {

    const localImagePath = `/images/hotels/${hotel?.name.toLowerCase().replaceAll(' ', '-')}/default.jpg`;
    console.log(localImagePath);

    return (
        <div className="bg-white rounded-xl p-4 flex-col border border-brand-secondary-100">
            <div className='relative w-full aspect-video mb-4 rounded-xl overflow-hidden'>
                <Image
                    alt={hotel?.name || 'Pullman Zamzam'}
                    src={hotel?.images[0] || localImagePath || image}
                    fill
                />
            </div>
            <h3 className="text-lg font-medium text-brand-secondary text-center">{hotel?.name || 'Pullman Zamzam'}</h3>
        </div>
    )
}

export function AccomodationSwiperContainer({ data }: { data?: hotelInterface[] | undefined }) {
    return (
        <>
            <noscript>
                <div className="py-16 px-cont flex justify-center gap-8 flex-wrap">

                    {/* Hotel Cards */}
                    {
                        data?.map((hotel) => (
                            <AccomodationItem key={hotel._id} {...hotel} />
                        ))
                    }

                </div>
            </noscript>

            <HotelCardSwiper data={data} />
        </>
    )
}

export default async function AccomodationSection() {

    const hotelsResponse: hotelsActionResponse = await getHotels({});
    console.log(hotelsResponse);

    return (
        <div className='py-12'>
            <div className="py-16 px-cont bg-brand-secondary text-center">
                <h2 className="text-4xl font-bold text-white mb-5">Our Accomodation</h2>
                <p className="text-xl text-brand-primary-400 font-medium">Stay near the Haram</p>
            </div>

            <div className='py-16 px-cont flex justify-center'>
                <AccomodationSwiperContainer data={hotelsResponse.data?.hotels} />
            </div>

            <div className="flex gap-3 items-center justify-center">
                <button className="rounded-full size-[35px] flex items-center justify-center text-lg border border-brand-secondary-200 text-brand-secondary-400">
                    <LuChevronLeft />
                </button>
                <div className="flex gap-1">
                    <div className="size-[7px] rounded-full bg-gray-300"></div>
                    <div className="size-[7px] rounded-full bg-gray-300"></div>
                    <div className="size-[7px] rounded-full bg-gray-300"></div>
                    <div className="size-[7px] rounded-full bg-gray-300"></div>
                </div>
                <button className="rounded-full size-[35px] flex items-center justify-center text-xl border border-brand-secondary-200 text-brand-secondary-400">
                    <LuChevronRight />
                </button>
            </div>

        </div>
    )
}
