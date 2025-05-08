import Image from 'next/image'
import React from 'react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

export function AccomodationItem() {
    return (
        <div className="bg-white rounded-xl p-4 flex-col border border-brand-secondary-100">
            <Image
                alt='pullman zamzam hotel'
                src={'/images/hotels/makkah/pullman-zamzam-makkah/default.jpg'}
                className="rounded-xl mb-4"
                width={270}
                height={270}
            />
            <h3 className="text-lg font-medium text-brand-secondary text-center">Pullman Zamzam</h3>
        </div>
    )
}

export default function AccomodationSection() {
    return (
        <div className='py-12'>
            <div className="py-16 px-cont bg-brand-secondary text-center">
                <h2 className="text-4xl font-bold text-white mb-5">Our Accomodation</h2>
                <p className="text-xl text-brand-primary-400 font-medium">Stay near the Haram</p>
            </div>
            <div className="py-16 px-cont flex justify-center gap-8 flex-wrap">

                {/* Hotel Cards */}

                <AccomodationItem />
                <AccomodationItem />
                <AccomodationItem />

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
