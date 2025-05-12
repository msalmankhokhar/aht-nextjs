'use client'
import Image from 'next/image'
import { LuArrowRight } from 'react-icons/lu'
import Link from 'next/link'

export default function HomeHeroSection() {

    return (
        <>
        <div className="px-5 sm:px-10 min-[1070px]:pl-24 min-[1070px]:pr-7 pb-24 pt-10 flex flex-col min-[1070px]:flex-row items-center justify-center">
            <div className="max-w-[660px] w-full flex flex-col">
                <h1 className="tracking-wide leading-12 md:leading-14 mb-6 text-4xl md:text-[2.7rem] font-bold text-brand-secondary">All Inclusive Umrah Packages with Guided Tour.</h1>
                <p className="tracking-wide mb-7 md:mb-16 text-brand-secondary-600 text-base md:text-2xl font-light md:font-medium">
                    Our all packages include flights, visa processing, accommodation near Haram, ground transport and a guided tour. Meals are optional.
                </p>
                <div className="flex gap-3 flex-wrap items-center">
                    <Link
                        className="btn-primary text-lg self-start min-w-[220px] font-semibold space-x-3"
                        href={'#query-form-section'}
                    >
                        <span>Get Quote</span>
                        <LuArrowRight />
                    </Link>
                    <Link href={'#packages-section'} className="btn-secondary-white text-lg border border-brand-secondary-200 min-w-[220px] font-semibold space-x-3">
                        <span>Explore Umrah Packages</span>
                    </Link>
                </div>
            </div>
            <Image
                alt='umrah images'
                src={'/images/hero/hero_group.png'}
                width={450}
                height={450}
                />
        </div>

        </>
    )
}
