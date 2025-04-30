import Image from "next/image";
import { LuChevronDown, LuPlaneTakeoff } from "react-icons/lu";

import React from 'react'

export default function WhatsIncludedSection() {
    return (
        <div className="px-24 py-16 bg-brand-primary-50/60 border-t-2 border-b-2 border-brand-secondary/30">
            <div className="flex justify-center gap-16">
                <div>
                    <h1 className="max-w-[500px] mx-auto text-center mb-12 text-4xl font-bold text-brand-secondary">What&apos;s included in your package?</h1>
                    <div className="grid grid-cols-2 gap-10 items-start place-content-center">
                        <div className="flex items-center justify-between gap-10 px-6 py-4 cursor-pointer rounded-xl bg-brand-secondary text-white">
                            <div className="flex items-center justify-center  gap-2">
                                <LuPlaneTakeoff size={24} />
                                <h2 className="text-xl text-nowrap font-semibold">Flights for Umrah</h2>
                            </div>
                            <LuChevronDown size={24} />
                        </div>
                        <div className="flex items-center justify-between gap-10 px-6 py-4 cursor-pointer rounded-xl bg-brand-secondary text-white">
                            <div className="flex items-center gap-2">
                                <LuPlaneTakeoff size={24} />
                                <h2 className="text-xl text-nowrap font-semibold">Flights for Umrah</h2>
                            </div>
                            <LuChevronDown size={24} />
                        </div>
                        <div className="flex items-center justify-between gap-10 px-6 py-4 cursor-pointer rounded-xl bg-brand-secondary text-white">
                            <div className="flex items-center gap-2">
                                <LuPlaneTakeoff size={24} />
                                <h2 className="text-xl text-nowrap font-semibold">Flights for Umrah</h2>
                            </div>
                            <LuChevronDown size={24} />
                        </div>
                        <div className="flex items-center justify-between gap-10 px-6 py-4 cursor-pointer rounded-xl bg-brand-secondary text-white">
                            <div className="flex items-center gap-2">
                                <LuPlaneTakeoff size={24} />
                                <h2 className="text-xl text-nowrap font-semibold">Flights for Umrah</h2>
                            </div>
                            <LuChevronDown size={24} />
                        </div>
                    </div>
                </div>
                <Image
                    alt='kaaba image'
                    src={'/images/kaaba.png'}
                    width={300}
                    height={300}
                    className="rounded-xl shadow-lg shadow-brand-secondary/30"
                />
            </div>
        </div>
    )
}
