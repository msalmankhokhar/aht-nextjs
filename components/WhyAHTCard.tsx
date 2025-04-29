import Image from 'next/image'
import React from 'react'

interface WhyAHTCardProps {
    heading: string,
    description: string,
    imagePath: string,
    extra?: React.ReactNode;
}

export default function WhyAHTCard({ heading, description, imagePath, extra }: WhyAHTCardProps) {
    return (
        <div className="max-w-[1200px] min-h-[300px] overflow-hidden z-[1] bg-white flex rounded-xl ring ring-brand-secondary-100">
            <div className="p-10 max-w-3/5">
                <h2 className="text-brand-secondary font-bold text-3xl mb-5">{heading}</h2>
                <p className="text-lg mb-10 text-brand-secondary tracking-wide">
                    {description}
                </p>
                {extra}
            </div>
            <div className="relative w-full">
                <Image
                    alt='makkah city'
                    src={imagePath}
                    fill
                    className="object-center object-cover"
                />
            </div>
        </div>
    )
}
