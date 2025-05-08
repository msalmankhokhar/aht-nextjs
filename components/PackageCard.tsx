import { packageInterface } from '@/actions/packages.actions'
import Image from 'next/image'
import React from 'react'
import { FaFlag } from 'react-icons/fa'
import { LuPhone } from 'react-icons/lu'

interface PackageCardProps {
    data?: packageInterface
}

export default function PackageCard({ data = defaultPackage }: PackageCardProps) {
    return (
        <div className="z-[1] rounded-xl overflow-hidden bg-white shadow-lg shadow-brand-secondary/20">
            {/* aspect-[16/10] */}
            <div className="relative min-w-[310px] w-full h-[200px]">
                <Image
                    alt='umrah package thumnail'
                    src={'/images/packages/default_saad.jpg'}
                    fill
                    className="rounded-xl object-cover object-center"
                />
            </div>
            <div className="py-4 px-6">
                <h3 className="text-base text-center font-semibold pb-1.5">{data.title}</h3>
                <div className="h-[2px] w-[92%] bg-yellow-500 mx-auto rounded-full"></div>
                <div className="my-4 text-[0.8rem] flex flex-col gap-1.5">
                    <p className="text-gray-700">
                        <strong className="font-medium text-brand-primary">Makkah: </strong>{data.makkahHotel.name} ({data.makkahNights}N)
                    </p>
                    <p className="text-gray-700">
                        <strong className="font-medium text-brand-primary">Madinah: </strong>{data.madinahHotel.name} ({data.madinahNights}N)
                    </p>
                </div>
                <div className="px-5 py-1.5 rounded-full bg-gray-200/70 mb-3 text-xs text-brand-secondary-700 font-medium w-fit">Package Includes</div>
                <p className="text-[0.8rem] text-brand-secondary">Flight | Visa | Transport | Accomodation</p>
                <div className="flex justify-end my-4">
                    <div className="py-1.5 text-[0.70rem] flex items-center gap-1.5 font-medium text-brand-secondary-700 px-5 rounded-full bg-brand-primary-200 w-fit">
                        <FaFlag />
                        <span>All Inclusive Package</span>
                    </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                    <button className="text-nowrap btn-primary text-sm flex-1 rounded-lg">View Price</button>
                    <button className="text-nowrap btn-secondary-mixed text-sm flex-1 rounded-lg gap-2">
                        <LuPhone size={16} />
                        <span>Call Us</span>
                    </button>
                </div>
            </div>
        </div>
    )
}


const defaultPackage: packageInterface = {
    "_id": "67f8bf9dc92bb12e7f8ad15a",
    "title": "07 Nights 3 Star Umrah Package",
    "purpose": "Umrah",
    "category": "popular",
    "labels": [],
    "makkahNights": 4,
    "madinahNights": 3,
    "inclusions": [
    "Flight",
    "Visa",
    "Transport",
    "Accomodation"
    ],
    "exclusions": [
    "Meals",
    "Insurance"
    ],
    "accomType": "Quad",
    "price": 755,
    "makkahHotel": {
    "name": "Emaar Al Khalil",
    },
    "madinahHotel": {
    "name": "Emaar Taibah",
    },
    "rating": 3
    }