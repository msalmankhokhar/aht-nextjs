import Image from 'next/image'
import React from 'react'
import HotelCardSwiper from '../swipers/HotelCardSwiper'
import { getHotels, hotelInterface, hotelsActionResponse } from '@/actions/hotels.actions';

export function getLocalHotelImagePath(hotelName: string) {
    return `/images/hotels/${hotelName?.trim().toLowerCase().replaceAll(' ', '-')}/default.jpg`;
}

export function AccomodationItem({hotel, image= '/images/hotels/makkah/pullman-zamzam-makkah/default.jpg'}: {hotel?: hotelInterface, image?: string}) {

    const localImagePath = getLocalHotelImagePath(hotel?.name || 'Pullman Zamzam');
    console.log(localImagePath);

    return (
        <div className="bg-white rounded-xl p-4 flex-col border border-brand-secondary-100">
            <div className='relative w-full aspect-video mb-4 rounded-xl overflow-hidden'>
                <Image
                    alt={hotel?.name || 'Pullman Zamzam'}
                    src={hotel?.images?.[0] || localImagePath || image}
                    fill
                />
            </div>
            <h3 className="text-lg font-medium text-brand-secondary text-center no-swipe">
                {hotel?.name || 'Pullman Zamzam'}
            </h3>
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

        </div>
    )
}
