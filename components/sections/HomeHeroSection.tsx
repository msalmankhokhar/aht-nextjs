import Image from 'next/image'
import React from 'react'
import { LuArrowRight } from 'react-icons/lu'

export default function HomeHeroSection() {
    return (
        <div className="pl-24 pr-7 pb-24 pt-10 flex items-center justify-center">
            <div className="max-w-[660px] w-full flex flex-col">
                <h1 className="tracking-wide leading-14 mb-6 text-[2.7rem] font-bold text-brand-secondary">All Inclusive Umrah Packages with Guided Tour.</h1>
                <p className="tracking-wide mb-16 text-brand-secondary-600 text-2xl font-medium">
                    Our all packages include flights, visa processing, accommodation near Haram, ground transport and a guided tour. Meals are optional.
                </p>
                <div className="flex gap-3 flex-wrap items-center">
                    <button className="btn-primary text-lg self-start min-w-[220px] font-semibold space-x-3">
                        <span>Get Quote</span>
                        <LuArrowRight />
                    </button>
                    <button className="btn-secondary-white text-lg border border-brand-secondary-200 min-w-[220px] font-semibold space-x-3">
                        <span>Explore Umrah Packages</span>
                    </button>
                </div>
            </div>
            <Image
                alt='umrah images'
                src={'/images/hero/hero_group.png'}
                width={450}
                height={450}
            />
        </div>
    )
}
