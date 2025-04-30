import Image from 'next/image'
import React from 'react'
import { FaFlag } from 'react-icons/fa'
import { LuPhone } from 'react-icons/lu'

export default function PackagesSection() {
    return (
        <section className="py-20 flex flex-col gap-y-20">

            {/* 5 Star Packages */}
            <div>
                <h1 className="px-5 text-4xl font-bold text-center mb-16 text-brand-secondary">5 Star Umrah Packages</h1>
                <div className="px-5 flex justify-center gap-6 relative">
                    {/* Package Cards */}

                    <div className="w-full h-1/2 top-[25%] bg-brand-secondary absolute"></div>

                    <div className="z-[1] rounded-xl overflow-hidden bg-white shadow-lg shadow-brand-secondary/20">
                        <div className="relative w-[310px] aspect-[16/10]">
                            <Image
                                alt='umrah package thumnail'
                                src={'/images/packages/default_saad.jpg'}
                                fill
                                className="rounded-xl object-cover object-center"
                            />
                        </div>
                        <div className="py-4 px-6">
                            <h2 className="text-base text-center font-semibold pb-1.5">07 Nights 3 Star Umrah Package</h2>
                            <div className="h-[2px] w-[92%] bg-yellow-500 mx-auto rounded-full"></div>
                            <div className="my-4 text-[0.8rem] flex flex-col gap-1.5">
                                <p className="text-gray-700">
                                    <strong className="font-medium text-brand-primary">Makkah: </strong>Jabal Omar Marriott (5N)
                                </p>
                                <p className="text-gray-700">
                                    <strong className="font-medium text-brand-primary">Madinah: </strong>Al Agee Madinah (5N)
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
                                <button className="btn-primary text-sm flex-1 rounded-lg">View Price</button>
                                <button className="btn-secondary-mixed text-sm flex-1 rounded-lg gap-2">
                                    <LuPhone size={16} />
                                    <span>Call Us</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="z-[1] rounded-xl overflow-hidden bg-white shadow-lg shadow-brand-secondary/20">
                        <div className="relative w-[310px] aspect-[16/10]">
                            <Image
                                alt='umrah package thumnail'
                                src={'/images/packages/default_saad.jpg'}
                                fill
                                className="rounded-xl object-cover object-center"
                            />
                        </div>
                        <div className="py-4 px-6">
                            <h2 className="text-base text-center font-semibold pb-1.5">07 Nights 3 Star Umrah Package</h2>
                            <div className="h-[2px] w-[92%] bg-yellow-500 mx-auto rounded-full"></div>
                            <div className="my-4 text-[0.8rem] flex flex-col gap-1.5">
                                <p className="text-gray-700">
                                    <strong className="font-medium text-brand-primary">Makkah: </strong>Jabal Omar Marriott (5N)
                                </p>
                                <p className="text-gray-700">
                                    <strong className="font-medium text-brand-primary">Madinah: </strong>Al Agee Madinah (5N)
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
                                <button className="btn-primary text-sm flex-1 rounded-lg">View Price</button>
                                <button className="btn-secondary-mixed text-sm flex-1 rounded-lg gap-2">
                                    <LuPhone size={16} />
                                    <span>Call Us</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="z-[1] rounded-xl overflow-hidden bg-white shadow-lg shadow-brand-secondary/20">
                        <div className="relative w-[310px] aspect-[16/10]">
                            <Image
                                alt='umrah package thumnail'
                                src={'/images/packages/default_saad.jpg'}
                                fill
                                className="rounded-xl object-cover object-center"
                            />
                        </div>
                        <div className="py-4 px-6">
                            <h2 className="text-base text-center font-semibold pb-1.5">07 Nights 3 Star Umrah Package</h2>
                            <div className="h-[2px] w-[92%] bg-yellow-500 mx-auto rounded-full"></div>
                            <div className="my-4 text-[0.8rem] flex flex-col gap-1.5">
                                <p className="text-gray-700">
                                    <strong className="font-medium text-brand-primary">Makkah: </strong>Jabal Omar Marriott (5N)
                                </p>
                                <p className="text-gray-700">
                                    <strong className="font-medium text-brand-primary">Madinah: </strong>Al Agee Madinah (5N)
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
                                <button className="btn-primary text-sm flex-1 rounded-lg">View Price</button>
                                <button className="btn-secondary-mixed text-sm flex-1 rounded-lg gap-2">
                                    <LuPhone size={16} />
                                    <span>Call Us</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* 4 Star Packages */}
            <div>
                <h1 className="px-5 text-4xl font-bold text-center mb-16 text-brand-secondary">4 Star Umrah Packages</h1>
                <div className="px-5 flex justify-center gap-6 relative">
                    {/* Package Cards */}

                    <div className="w-full h-1/2 top-[25%] bg-brand-secondary absolute"></div>

                    <div className="z-[1] rounded-xl overflow-hidden bg-white shadow-lg shadow-brand-secondary/20">
                        <div className="relative w-[310px] aspect-[16/10]">
                            <Image
                                alt='umrah package thumnail'
                                src={'/images/packages/default_saad.jpg'}
                                fill
                                className="rounded-xl object-cover object-center"
                            />
                        </div>
                        <div className="py-4 px-6">
                            <h2 className="text-base text-center font-semibold pb-1.5">07 Nights 3 Star Umrah Package</h2>
                            <div className="h-[2px] w-[92%] bg-yellow-500 mx-auto rounded-full"></div>
                            <div className="my-4 text-[0.8rem] flex flex-col gap-1.5">
                                <p className="text-gray-700">
                                    <strong className="font-medium text-brand-primary">Makkah: </strong>Jabal Omar Marriott (5N)
                                </p>
                                <p className="text-gray-700">
                                    <strong className="font-medium text-brand-primary">Madinah: </strong>Al Agee Madinah (5N)
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
                                <button className="btn-primary text-sm flex-1 rounded-lg">View Price</button>
                                <button className="btn-secondary-mixed text-sm flex-1 rounded-lg gap-2">
                                    <LuPhone size={16} />
                                    <span>Call Us</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="z-[1] rounded-xl overflow-hidden bg-white shadow-lg shadow-brand-secondary/20">
                        <div className="relative w-[310px] aspect-[16/10]">
                            <Image
                                alt='umrah package thumnail'
                                src={'/images/packages/default_saad.jpg'}
                                fill
                                className="rounded-xl object-cover object-center"
                            />
                        </div>
                        <div className="py-4 px-6">
                            <h2 className="text-base text-center font-semibold pb-1.5">07 Nights 3 Star Umrah Package</h2>
                            <div className="h-[2px] w-[92%] bg-yellow-500 mx-auto rounded-full"></div>
                            <div className="my-4 text-[0.8rem] flex flex-col gap-1.5">
                                <p className="text-gray-700">
                                    <strong className="font-medium text-brand-primary">Makkah: </strong>Jabal Omar Marriott (5N)
                                </p>
                                <p className="text-gray-700">
                                    <strong className="font-medium text-brand-primary">Madinah: </strong>Al Agee Madinah (5N)
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
                                <button className="btn-primary text-sm flex-1 rounded-lg">View Price</button>
                                <button className="btn-secondary-mixed text-sm flex-1 rounded-lg gap-2">
                                    <LuPhone size={16} />
                                    <span>Call Us</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="z-[1] rounded-xl overflow-hidden bg-white shadow-lg shadow-brand-secondary/20">
                        <div className="relative w-[310px] aspect-[16/10]">
                            <Image
                                alt='umrah package thumnail'
                                src={'/images/packages/default_saad.jpg'}
                                fill
                                className="rounded-xl object-cover object-center"
                            />
                        </div>
                        <div className="py-4 px-6">
                            <h2 className="text-base text-center font-semibold pb-1.5">07 Nights 3 Star Umrah Package</h2>
                            <div className="h-[2px] w-[92%] bg-yellow-500 mx-auto rounded-full"></div>
                            <div className="my-4 text-[0.8rem] flex flex-col gap-1.5">
                                <p className="text-gray-700">
                                    <strong className="font-medium text-brand-primary">Makkah: </strong>Jabal Omar Marriott (5N)
                                </p>
                                <p className="text-gray-700">
                                    <strong className="font-medium text-brand-primary">Madinah: </strong>Al Agee Madinah (5N)
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
                                <button className="btn-primary text-sm flex-1 rounded-lg">View Price</button>
                                <button className="btn-secondary-mixed text-sm flex-1 rounded-lg gap-2">
                                    <LuPhone size={16} />
                                    <span>Call Us</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* 3 Star Packages */}
            <div>
                <h1 className="px-5 text-4xl font-bold text-center mb-16 text-brand-secondary">3 Star Umrah Packages</h1>
                <div className="px-5 flex justify-center gap-6 relative">
                    {/* Package Cards */}

                    <div className="w-full h-1/2 top-[25%] bg-brand-secondary absolute"></div>

                    <div className="z-[1] rounded-xl overflow-hidden bg-white shadow-lg shadow-brand-secondary/20">
                        <div className="relative w-[310px] aspect-[16/10]">
                            <Image
                                alt='umrah package thumnail'
                                src={'/images/packages/default_saad.jpg'}
                                fill
                                className="rounded-xl object-cover object-center"
                            />
                        </div>
                        <div className="py-4 px-6">
                            <h2 className="text-base text-center font-semibold pb-1.5">07 Nights 3 Star Umrah Package</h2>
                            <div className="h-[2px] w-[92%] bg-yellow-500 mx-auto rounded-full"></div>
                            <div className="my-4 text-[0.8rem] flex flex-col gap-1.5">
                                <p className="text-gray-700">
                                    <strong className="font-medium text-brand-primary">Makkah: </strong>Jabal Omar Marriott (5N)
                                </p>
                                <p className="text-gray-700">
                                    <strong className="font-medium text-brand-primary">Madinah: </strong>Al Agee Madinah (5N)
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
                                <button className="btn-primary text-sm flex-1 rounded-lg">View Price</button>
                                <button className="btn-secondary-mixed text-sm flex-1 rounded-lg gap-2">
                                    <LuPhone size={16} />
                                    <span>Call Us</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="z-[1] rounded-xl overflow-hidden bg-white shadow-lg shadow-brand-secondary/20">
                        <div className="relative w-[310px] aspect-[16/10]">
                            <Image
                                alt='umrah package thumnail'
                                src={'/images/packages/default_saad.jpg'}
                                fill
                                className="rounded-xl object-cover object-center"
                            />
                        </div>
                        <div className="py-4 px-6">
                            <h2 className="text-base text-center font-semibold pb-1.5">07 Nights 3 Star Umrah Package</h2>
                            <div className="h-[2px] w-[92%] bg-yellow-500 mx-auto rounded-full"></div>
                            <div className="my-4 text-[0.8rem] flex flex-col gap-1.5">
                                <p className="text-gray-700">
                                    <strong className="font-medium text-brand-primary">Makkah: </strong>Jabal Omar Marriott (5N)
                                </p>
                                <p className="text-gray-700">
                                    <strong className="font-medium text-brand-primary">Madinah: </strong>Al Agee Madinah (5N)
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
                                <button className="btn-primary text-sm flex-1 rounded-lg">View Price</button>
                                <button className="btn-secondary-mixed text-sm flex-1 rounded-lg gap-2">
                                    <LuPhone size={16} />
                                    <span>Call Us</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="z-[1] rounded-xl overflow-hidden bg-white shadow-lg shadow-brand-secondary/20">
                        <div className="relative w-[310px] aspect-[16/10]">
                            <Image
                                alt='umrah package thumnail'
                                src={'/images/packages/default_saad.jpg'}
                                fill
                                className="rounded-xl object-cover object-center"
                            />
                        </div>
                        <div className="py-4 px-6">
                            <h2 className="text-base text-center font-semibold pb-1.5">07 Nights 3 Star Umrah Package</h2>
                            <div className="h-[2px] w-[92%] bg-yellow-500 mx-auto rounded-full"></div>
                            <div className="my-4 text-[0.8rem] flex flex-col gap-1.5">
                                <p className="text-gray-700">
                                    <strong className="font-medium text-brand-primary">Makkah: </strong>Jabal Omar Marriott (5N)
                                </p>
                                <p className="text-gray-700">
                                    <strong className="font-medium text-brand-primary">Madinah: </strong>Al Agee Madinah (5N)
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
                                <button className="btn-primary text-sm flex-1 rounded-lg">View Price</button>
                                <button className="btn-secondary-mixed text-sm flex-1 rounded-lg gap-2">
                                    <LuPhone size={16} />
                                    <span>Call Us</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
