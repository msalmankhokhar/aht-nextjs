import Image from 'next/image'
import React from 'react'
import BgPattern from '../BgPattern'

export default function PartnersSection() {
    return (
        <div className="bg-brand-secondary relative max-w-cont mx-5 sm:mx-10 xl:max-w-cont rounded-lg py-16 my-16">
            <BgPattern />
            <h2 className="text-white text-center text-3xl font-bold mb-10">We proudly cooperate with</h2>
            <div className="grid grid-cols-[170px] min-[500px]:grid-cols-[170px_170px] min-[700px]:grid-cols-[170px_170px_170px] gap-7 justify-center items-center relative">

                <Image
                    alt='aeroplane background'
                    src={'/images/bg/bg-aeroplane.png'}
                    className="object-contain object-center opacity-60"
                    fill
                />

                {/* Airlines logos */}

                <div className="rounded-lg overflow-hidden relative aspect-video bg-white flex items-center justify-center">
                    <Image
                        alt='umrah package thumnail'
                        src={'/images/airlines_logos/emirates-logo.png'}
                        className="object-center object-cover"
                        width={110}
                        height={110}
                    />
                </div>

                <div className="rounded-lg overflow-hidden relative aspect-video bg-white flex items-center justify-center">
                    <Image
                        alt='umrah package thumnail'
                        src={'/images/airlines_logos/qatar-airways-logo.png'}
                        className="object-center object-cover"
                        width={110}
                        height={110}
                    />
                </div>

                <div className="rounded-lg overflow-hidden relative aspect-video bg-white flex items-center justify-center">
                    <Image
                        alt='umrah package thumnail'
                        src={'/images/airlines_logos/british-airways-logo.png'}
                        className="object-center object-cover"
                        width={110}
                        height={110}
                    />
                </div>

                <div className="rounded-lg overflow-hidden relative aspect-video bg-white flex items-center justify-center">
                    <Image
                        alt='umrah package thumnail'
                        src={'/images/airlines_logos/etihad-airways-logo.png'}
                        className="object-center object-cover"
                        width={110}
                        height={110}
                    />
                </div>

                <div className="rounded-lg overflow-hidden relative aspect-video bg-white flex items-center justify-center">
                    <Image
                        alt='umrah package thumnail'
                        src={'/images/airlines_logos/Saudi-Arabian-Airlines-logo.png'}
                        className="object-center object-cover"
                        width={110}
                        height={110}
                    />
                </div>

                <div className="rounded-lg overflow-hidden relative aspect-video bg-white flex items-center justify-center">
                    <Image
                        alt='umrah package thumnail'
                        src={'/images/airlines_logos/gulf-air-logo.png'}
                        className="object-center object-cover"
                        width={110}
                        height={110}
                    />
                </div>

            </div>
        </div>
    )
}
