import React from 'react'
import Arrow from '../Arrow'

const data = [
    {
        step: 1,
        title: "Inquiry & Consultation",
        description: "Discuss your Umrah needs & get a personalized quote.",
    },
    {
        step: 2,
        title: "Select Your Package",
        description: "Choose from 3-Star, 4-Star or 5-Star packages.",
    },
    {
        step: 3,
        title: "Pay the initial deposit",
        description: "Secure your booking with just £99 per person.",
    },
    {
        step: 4,
        title: "Visa & Ticket Processing",
        description: "We handle your Saudi visa, flights & hotel reservations.",
    },
    {
        step: 5,
        title: "Receive Confirmation",
        description: " Get your tickets, visa & travel itinerary ready.",
    },
    {
        step: 6,
        title: " Embark on Your Journey",
        description: "Travel stress-free & experience a smooth pilgrimage.",
    },
]

export default function BookingProcessSection() {
    return (
        <div className="py-10 px-cont">
            <h1 className="text-3xl font-bold text-brand-secondary mb-12 text-center">Our Booking <span className="text-brand-primary">Process</span></h1>
            
            {/* Main container with grid for larger screens and column for mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-5 max-w-6xl mx-auto">
                
                {data.map((item, index) => (
                    <div key={index} className="relative flex flex-col items-center">
                        {/* Step card */}
                        <div className="w-full max-w-[280px] rounded-xl shadow-md shadow-brand-secondary-300/40 border border-brand-secondary-100 p-6 flex flex-col items-center bg-white">
                            <div className="bg-brand-secondary size-[45px] rounded-full flex items-center justify-center font-bold text-lg text-white mb-8">
                                <span>{item.step}</span>
                            </div>
                            <h2 className="text-center text-base font-semibold text-brand-secondary mb-3">{item.title}</h2>
                            <p className="text-brand-secondary-600 text-sm text-center">
                                {item.description}
                            </p>
                        </div>

                        {/* Arrow pointing to next step - don't show after last item or at the end of a row */}
                        {index < data.length - 1 && (
                            <>
                                {/* Right arrow for end of row items on large screens */}
                                {(index + 1) % 3 !== 0 && (
                                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                                        <Arrow variant='right' />
                                    </div>
                                )}
                                
                                {/* Right arrow for medium screens, 2 columns */}
                                {(index + 1) % 2 !== 0 && (
                                    <div className="hidden sm:flex lg:hidden absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                                        <Arrow variant='right' />
                                    </div>
                                )}
                                
                                {/* Down arrow for end of row items */}
                                {/* {((index + 1) % 3 === 0 && index < data.length - 1) && (
                                    <div className="hidden lg:flex justify-center my-2">
                                        <Arrow variant='down' />
                                    </div>
                                )} */}
                                
                                {/* Down arrow for medium screens at end of rows */}
                                {/* {((index + 1) % 2 === 0 && index < data.length - 1) && (
                                    <div className="hidden sm:flex lg:hidden justify-center my-2">
                                        <Arrow variant='down' />
                                    </div>
                                )} */}
                                
                                {/* Down arrow for mobile - after every item except last */}
                                <div className="flex sm:hidden justify-center my-2">
                                    <Arrow variant='down' />
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
