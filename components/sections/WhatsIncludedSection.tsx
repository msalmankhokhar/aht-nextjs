'use client'
import Image from "next/image";
import React, { useState } from 'react'
import WhatsIncludedItem from "../WhatsIncludedItem";
import { LuCar, LuHotel, LuPlaneTakeoff, LuTicket } from "react-icons/lu";

export default function WhatsIncludedSection() {
    const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setOpenItemIndex(index);
    };

    const handleMouseLeave = () => {
        setOpenItemIndex(null);
    };

    return (
        <div className="px-5 sm:px-7 md:px-24 py-16 bg-brand-primary-50/60 border-t-2 border-b-2 border-brand-secondary/30">
            <h2 className="max-w-[500px] mx-auto text-center mb-12 text-4xl font-bold text-brand-secondary">What&apos;s included in your package?</h2>
            <div className="flex flex-col lg:flex-row justify-center gap-16">
                <div className="w-full max-w-[700px]">
                    <div className="grid grid-cols-1 gap-x-10 gap-y-7 items-start place-content-center">
                        <WhatsIncludedItem
                            title="Flights"
                            description="Round trip flights from your departure city to Jeddah and back with premium airlines for a comfortable journey."
                            icon={<LuPlaneTakeoff size={24} />}
                            isOpen={openItemIndex === 0}
                            onToggle={() => { }}
                            onMouseEnter={() => handleMouseEnter(0)}
                            onMouseLeave={handleMouseLeave}
                        />
                        <WhatsIncludedItem
                            title="Accommodation"
                            description="Stay in quality hotels near the Haram in both Makkah and Madinah, providing convenience for your prayers and rituals."
                            icon={<LuHotel size={24} />}
                            isOpen={openItemIndex === 1}
                            onToggle={() => { }}
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={handleMouseLeave}
                        />
                        <WhatsIncludedItem
                            title="Transportation"
                            description="Private air-conditioned vehicles for all your ground transportation needs, including airport transfers and ziyarat tours."
                            icon={<LuCar size={24} />}
                            isOpen={openItemIndex === 2}
                            onToggle={() => { }}
                            onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={handleMouseLeave}
                        />
                        <WhatsIncludedItem
                            title="Visa Processing"
                            description="Complete Umrah visa processing service with all necessary documentation handled by our experienced staff."
                            icon={<LuTicket size={24} />}
                            isOpen={openItemIndex === 3}
                            onToggle={() => { }}
                            onMouseEnter={() => handleMouseEnter(3)}
                            onMouseLeave={handleMouseLeave}
                        />
                    </div>
                </div>
                <div className="lg:self-auto hidden lg:block">
                    <Image
                        alt='kaaba image'
                        src={'/images/kaaba.png'}
                        width={800}
                        height={800}
                        className="rounded-xl shadow-lg shadow-brand-secondary/30 max-h-[400px]"
                    />
                </div>
            </div>
        </div>
    )
}
