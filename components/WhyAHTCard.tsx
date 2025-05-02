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
        <div className="max-w-[320px] px-3.5 py-4 overflow-hidden z-[1] bg-white flex flex-col justify-between rounded-lg ring ring-brand-secondary-100">
            <div className='mb-6'>
                <h2 className="text-brand-secondary font-semibold text-lg mb-3">{heading}</h2>
                <p className="text-sm text-brand-secondary tracking-wide">
                    {description}
                </p>
                {extra}
            </div>
            <div className="relative w-full min-h-[200px] rounded-lg overflow-hidden">
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
