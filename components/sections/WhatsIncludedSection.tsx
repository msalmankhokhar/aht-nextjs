import Image from "next/image";
import { LuChevronDown, LuPlaneTakeoff } from "react-icons/lu";
import React from 'react'

export function WhatsIncludedItem() {
    return (
        <div className="flex sm:min-w-fit items-center justify-between gap-10 px-6 py-4 cursor-pointer rounded-xl bg-brand-secondary text-white">
            <div className="flex items-center justify-center  gap-2">
                <LuPlaneTakeoff size={24} />
                <h3 className="text-xl text-nowrap font-semibold">Flights for Umrah</h3>
            </div>
            <LuChevronDown size={24} />
        </div>
    )
}

export default function WhatsIncludedSection() {
    return (
        <div className="px-5 sm:px-7 md:px-24 py-16 bg-brand-primary-50/60 border-t-2 border-b-2 border-brand-secondary/30">
            <div className="flex justify-center gap-16">
                <div>
                    <h2 className="max-w-[500px] mx-auto text-center mb-12 text-4xl font-bold text-brand-secondary">What&apos;s included in your package?</h2>
                    <div className="grid grid-cols-1 gap-x-10 gap-y-7 items-start place-content-center">
                        <WhatsIncludedItem />
                        <WhatsIncludedItem />
                        <WhatsIncludedItem />
                        <WhatsIncludedItem />
                    </div>
                </div>
                <div className="self-center hidden lg:block">
                    <Image
                        alt='kaaba image'
                        src={'/images/kaaba.png'}
                        width={400}
                        height={400}
                        className="rounded-xl shadow-lg shadow-brand-secondary/30 max-h-[400px]"
                    />
                </div>
            </div>
        </div>
    )
}
