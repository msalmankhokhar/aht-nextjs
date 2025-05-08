import BgPattern from '@/components/BgPattern'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Rating from '@/components/Rating'
import FaqsSection from '@/components/sections/FaqsSection'
import Image from 'next/image'
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { LuCheck, LuChevronRight, LuUser } from 'react-icons/lu'

export default function PackagePage() {
    return (
        <>
            <Navbar />

            <main className='flex flex-col gap-y-7 py-7'>
                <div className='px-cont'>
                    <p className='text-sm text-gray-600'>Home - Package Details</p>
                </div>
                <section className='flex flex-col gap-y-7 px-cont max-w-[1100px] w-full mx-auto'>
                    <div className='px-7 sm:px-10 md:px-24 py-12 rounded-xl border border-gray-200 shadow-lg shadow-brand-secondary-200/40'>
                        <h1 className='mb-10 text-3xl leading-none text-center text-brand-secondary/93 font-bold'>10 Nights 5 Star Umrah package</h1>
                        <div className='flex flex-col min-[707px]:flex-row gap-[15px]'>
                            <div className='overflow-hidden relative rounded-xl flex-1 aspect-video min-[707px]:aspect-auto min-h-[200px] min-[707px]:min-h-auto'>
                                <Image
                                    alt='package gallery image'
                                    src={'/images/packages/gallery/default/1.png'}
                                    fill
                                    className='object-cover object-center'
                                />
                            </div>
                            <div className='w-full grid grid-cols-2 grid-rows-1 min-[707px]:grid-cols-1 min-[707px]:grid-rows-2 h-1/4 min-[707px]:w-1/4 gap-[15px]'>
                                <div className='overflow-hidden aspect-square relative rounded-xl w-full h-full'>
                                    <Image
                                        alt='package gallery image'
                                        src={'/images/packages/gallery/default/2.png'}
                                        fill
                                        className='object-cover object-center'
                                    />
                                </div>
                                <div className='overflow-hidden aspect-square relative rounded-xl w-full h-full'>
                                    <div className='bg-[#004045]/70 absolute top-0 bottom-0 right-0 left-0 z-[1] flex justify-center items-center'>
                                        <span className='text-white font-bold text-4xl'>3+</span>
                                    </div>
                                    <Image
                                        alt='package gallery image'
                                        src={'/images/packages/gallery/default/1.png'}
                                        fill
                                        className='object-cover object-center'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Package features */}
                    <div className='px-4 py-6 sm:px-7 rounded-xl border-2 border-gray-200'>
                        <h1 className='mb-10 text-3xl leading-none text-brand-secondary/93 font-semibold'>Package Features</h1>
                        <div className='flex flex-wrap items-center justify-between gap-5 sm:gap-10'>

                            <div className="flex flex-col items-center">
                                <div className='mb-2.5 size-[50px] p-3 sm:p-0 sm:size-[70px] text-brand-secondary-700 rounded-full bg-[#BCDEE0] flex items-center justify-center'>
                                    <Image
                                        alt='flight icon'
                                        src={'/images/icons/png/flight.png'}
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <p className='leading-none text-center text-base font-medium text-brand-secondary'>Flights</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className='mb-2.5 size-[50px] p-3 sm:p-0 sm:size-[70px] text-brand-secondary-700 rounded-full bg-[#BCDEE0] flex items-center justify-center'>
                                    <Image
                                        alt='flight icon'
                                        src={'/images/icons/png/visa.png'}
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <p className='leading-none text-center text-base font-medium text-brand-secondary'>Visa</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className='mb-2.5 size-[50px] p-3 sm:p-0 sm:size-[70px] text-brand-secondary-700 rounded-full bg-[#BCDEE0] flex items-center justify-center'>
                                    <Image
                                        alt='flight icon'
                                        src={'/images/icons/png/transport.png'}
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <p className='leading-none text-center text-base font-medium text-brand-secondary'>Transport</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className='mb-2.5 size-[50px] p-3 sm:p-0 sm:size-[70px] text-brand-secondary-700 rounded-full bg-[#BCDEE0] flex items-center justify-center'>
                                    <Image
                                        alt='flight icon'
                                        src={'/images/icons/png/hotel.png'}
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <p className='leading-none text-center text-base font-medium text-brand-secondary'>Hotel</p>
                            </div>

                        </div>
                    </div>

                    {/* Hotel details */}
                    <div>
                        <h1 className='text-brand-secondary text-4xl font-medium mb-5'>Hotel details</h1>
                        <div className='grid grid-cols-1 min-[707px]:grid-cols-2 gap-8'>

                            {/* hotel cards */}

                            <div className='rounded-xl border-2 border-gray-100 p-4'>
                                <div className='relative w-full h-[200px] overflow-hidden rounded-[17px]'>
                                    <Image
                                        alt='hotel thumbnail'
                                        src={'/images/hotels/default.png'}
                                        fill
                                        className='object-cover object-center'
                                    />
                                </div>
                                <div className='pt-4 flex flex-col'>
                                    <div className='bg-brand-secondary rounded-sm px-5 py-0.5 mb-1 w-fit self-start'>
                                        <span className='text-white'>Makkah ( 1 Night )</span>
                                    </div>
                                    <div className='flex flex-col gap-y-2 mt-4'>
                                        <h2 className='text-3xl leading-none mb-2 font-bold text-brand-secondary'>Anjum Makkah</h2>
                                        <div className='flex items-center gap-5'>
                                            <Rating value={4} />
                                            <div className='flex gap-1 text-brand-secondary'>
                                                <FaLocationDot size={24} />
                                                <p className='text-xl font-medium'>Makkah</p>
                                            </div>
                                        </div>
                                        <div className='mt-3 mb-5 flex items-center gap-3'>
                                            <Image
                                                alt='hotel icon'
                                                src={'/images/icons/png/hotel.png'}
                                                width={25}
                                                height={25}
                                            />
                                            <p className='leading-none text-lg font-light'>2.95km from Haram (Kaaba)</p>
                                        </div>
                                        <div className='mx-[7%] mt-2'>
                                            <div className='mb-5 h-[2px] bg-brand-secondary-300' />
                                            <button className='btn-secondary text-xl w-full'>Inquire Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='rounded-xl border-2 border-gray-100 p-4'>
                                <div className='relative w-full h-[200px] overflow-hidden rounded-[17px]'>
                                    <Image
                                        alt='hotel thumbnail'
                                        src={'/images/hotels/default.png'}
                                        fill
                                        className='object-cover object-center'
                                    />
                                </div>
                                <div className='pt-4 flex flex-col'>
                                    <div className='bg-brand-secondary rounded-sm px-5 py-0.5 mb-1 w-fit self-start'>
                                        <span className='text-white'>Makkah ( 1 Night )</span>
                                    </div>
                                    <div className='flex flex-col gap-y-2 mt-4'>
                                        <h2 className='text-3xl leading-none mb-2 font-bold text-brand-secondary'>Anjum Makkah</h2>
                                        <div className='flex items-center gap-5'>
                                            <Rating value={4} />
                                            <div className='flex gap-1 text-brand-secondary'>
                                                <FaLocationDot size={24} />
                                                <p className='text-xl font-medium'>Makkah</p>
                                            </div>
                                        </div>
                                        <div className='mt-3 mb-5 flex items-center gap-3'>
                                            <Image
                                                alt='hotel icon'
                                                src={'/images/icons/png/hotel.png'}
                                                width={25}
                                                height={25}
                                            />
                                            <p className='leading-none text-lg font-light'>2.95km from Haram (Kaaba)</p>
                                        </div>
                                        <div className='mx-[7%] mt-2'>
                                            <div className='mb-5 h-[2px] bg-brand-secondary-300' />
                                            <button className='btn-secondary text-xl w-full'>Inquire Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Transfer details */}
                    <div>
                        <h1 className='text-brand-secondary text-4xl font-medium mb-5'>Transfer details</h1>
                        <div className='grid gap-8 grid-cols-1 min-[707px]:grid-cols-2'>

                            {/* Transfer card */}
                            <div className='rounded-xl border-2 border-gray-100 p-4'>
                                <div className='relative w-full h-[200px] bg-[#D9F2F4] rounded-xl overflow-hidden'>
                                    <Image
                                        alt='car image'
                                        src={'/images/sedan_car.png'}
                                        fill
                                        className='object-cover object-center'
                                    />
                                </div>
                                <div className='pt-4 flex flex-col'>
                                    <div className='flex flex-col gap-y-2 mt-4 px-4'>
                                        <h2 className='text-3xl leading-none mb-2 font-light text-brand-secondary'>Transfer via <span className='font-medium'>Sedan Car</span></h2>
                                        <div className='text-lg px-4 py-1 flex items-center gap-2 rounded-full bg-[#D9F2F4] font-medium self-start w-fit'>
                                            <LuUser size={20} />
                                            <span>3 Passengers</span>
                                        </div>

                                        {/* transfer card tracks */}

                                        <div className='flex flex-col mt-10 gap-8'>
                                            <div className='flex items-center gap-4'>
                                                <span>Jeddah Airport</span>
                                                <div className='flex flex-col flex-1 w-full gap-0.5'>
                                                    <div className='flex items-center'>
                                                        <div className='size-[5px] bg-brand-secondary rounded-full'></div>
                                                        <div className='flex-1 w-full h-[1px] bg-brand-secondary'></div>
                                                        <div className='size-[5px] bg-brand-secondary rounded-full'></div>
                                                    </div>
                                                </div>
                                                <span>Makkah</span>
                                            </div>

                                            <div className='flex items-center gap-4'>
                                                <span>Makkah</span>
                                                <div className='flex flex-col flex-1 w-full gap-0.5'>
                                                    <div className='flex items-center'>
                                                        <div className='size-[5px] bg-brand-secondary rounded-full'></div>
                                                        <div className='flex-1 w-full h-[1px] bg-brand-secondary'></div>
                                                        <div className='size-[5px] bg-brand-secondary rounded-full'></div>
                                                    </div>
                                                </div>
                                                <span>Madinah</span>
                                            </div>

                                            <div className='flex items-center gap-4'>
                                                <span>Madinah</span>
                                                <div className='flex flex-col flex-1 w-full gap-0.5'>
                                                    <div className='flex items-center'>
                                                        <div className='size-[5px] bg-brand-secondary rounded-full'></div>
                                                        <div className='flex-1 w-full h-[1px] bg-brand-secondary'></div>
                                                        <div className='size-[5px] bg-brand-secondary rounded-full'></div>
                                                    </div>
                                                </div>
                                                <span>Jeddah Airport</span>
                                            </div>
                                        </div>


                                        <div className='mx-[7%] mt-2'>
                                            <div className='my-8 h-[2px] bg-brand-secondary-300' />
                                            <p>Toyota Camry, Hyundai Sonata or similar</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-3 px-4 min-[707px]:px-0'>
                                <h2 className='text-2xl font-medium mb-1.5 text-brand-secondary'>Description</h2>
                                <p className='text-base text-brand-secondary-400'>
                                    Experience the blessings and immerse yourself in the spiritual atmosphere with our Umrah package.
                                </p>
                                <p className='text-base text-brand-secondary-400'>
                                    This curated experience offers excellent value for money with comfortable stays in carefully selected accommodations, flight options, along with private transfers and Ziarah. This way, you can wholeheartedly focus on your spiritual journey.
                                </p>
                                <p className='text-base text-brand-secondary-400'>
                                    To cater to your preferences and comfort, we offer three types of packages: Standard, Premium & Luxury. All our packages offer customization options to meet your specific needs.
                                </p>
                                <p className='text-base text-brand-secondary-400'>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Inclusions and Exclusions */}
                    <div className='grid grid-cols-1 min-[707px]:grid-cols-2 gap-8'>
                        <div className='flex flex-col'>
                            <div className='flex-1 px-4 mb-3 py-7 border-2 border-gray-200 rounded-xl'>
                                <h1 className='text-3xl font-medium text-brand-secondary mb-6'>Inclusions</h1>
                                <ul className='flex flex-col gap-y-4 font-light text-base'>
                                    <li><LuCheck className='text-green-500 inline font-bold mr-2' size={20} strokeWidth={3} /> Flights (Optional)</li>
                                    <li><LuCheck className='text-green-500 inline font-bold mr-2' size={20} strokeWidth={3} /> Activities (Optional)</li>
                                    <li><LuCheck className='text-green-500 inline font-bold mr-2' size={20} strokeWidth={3} /> Transfers | Airport & Intercity</li>
                                    <li><LuCheck className='text-green-500 inline font-bold mr-2' size={20} strokeWidth={3} /> Accomodation | In Makkah & Madinah</li>
                                </ul>
                            </div>
                            <button className='btn-secondary text-2xl w-full'>Book Now</button>
                        </div>
                        <div className='px-4 mb-3 py-7 border-2 border-gray-200 rounded-xl'>
                            <h1 className='text-3xl font-medium text-brand-secondary mb-6'>Exclusions</h1>
                            <ul className='flex flex-col gap-y-4 font-light text-base'>
                                <li><LuChevronRight className='text-green-500 inline font-bold mr-2' size={20} strokeWidth={3} /> Room extras</li>
                                <li><LuChevronRight className='text-green-500 inline font-bold mr-2' size={20} strokeWidth={3} /> Hotel Parking</li>
                                <li><LuChevronRight className='text-green-500 inline font-bold mr-2' size={20} strokeWidth={3} /> Personal Expenses</li>
                                <li><LuChevronRight className='text-green-500 inline font-bold mr-2' size={20} strokeWidth={3} /> Add-ons not included</li>
                                <li><LuChevronRight className='text-green-500 inline font-bold mr-2' size={20} strokeWidth={3} /> Additional meals</li>
                                <li><LuChevronRight className='text-green-500 inline font-bold mr-2' size={20} strokeWidth={3} /> Anything not mentioned in inclusions</li>
                                <li><LuChevronRight className='text-green-500 inline font-bold mr-2' size={20} strokeWidth={3} /> Early check-in and late check-out charges</li>
                            </ul>
                        </div>
                    </div>

                    {/* Query form */}
                    <div className='p-5 min-[415px]:p-7 min-[490px]:p-12 rounded-xl bg-brand-secondary relative'>
                        <BgPattern />
                        <div className='relative z-[1]'>
                            {/* Content */}
                            <div className='flex flex-col'>
                                <div className='bg-white self-stretch min-[707px]:self-center min-[1100px]:max-w-1/2 p-4 min-[415px]:p-6 min-[490px]:p-8 rounded-xl flex flex-col'>
                                    <h1 className='text-brand-secondary text-2xl font-bold mb-2 text-center'>Get Umrah Quote</h1>
                                    <p className='text-brand-secondary-800 text-base font-medium text-center'>We will contact you via whatsapp or email within a few minutes.</p>
                                    <form className='mt-10 flex flex-col'>
                                        {/* form content wrapper */}
                                        <div>
                                            <div className='flex flex-col gap-y-6 text-base'>
                                                <div>
                                                    <input type="text" name='name' placeholder='Passenger Name' className='rounded border border-gray-300 px-5 py-3 w-full' />
                                                </div>
                                                <div>
                                                    <input type="tel" name='phone' placeholder='Contact Number' className='rounded border border-gray-300 px-5 py-3 w-full' />
                                                </div>
                                                <div>
                                                    <input type="email" name='email' placeholder='Email Address' className='rounded border border-gray-300 px-5 py-3 w-full' />
                                                </div>
                                                <div>
                                                    <input type="number" min={1} max={20} name='num_of_passengers' placeholder='Total Number of Passengers' className='rounded border border-gray-300 px-5 py-3 w-full' />
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3 mt-4.5'>
                                                <input type="checkbox" name='privacy_policy_check' id='privacy_policy_checkbox' className='size-[20px]' />
                                                <label htmlFor="terms" className='text-sm text-gray-500'>I accept the <span className='text-brand-primary font-semibold'>Privary Policy</span></label>
                                            </div>
                                            <button className='btn-secondary-mixed text-xl w-full mt-7'>Send Inquiry</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>


                <FaqsSection />

            </main>

            <Footer />
        </>
    )
}
