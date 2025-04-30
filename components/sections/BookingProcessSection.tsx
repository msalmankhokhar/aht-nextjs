import React from 'react'

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
        title: " Embark on Your Umrah Journey",
        description: "Travel stress-free & experience a smooth pilgrimage.",
    },
]

export default function BookingProcessSection() {
    return (
        <div className="py-10 px-cont">
            <h1 className="text-3xl font-bold text-brand-secondary mb-12 text-center">Our Booking <span className="text-brand-primary">Process</span></h1>
            <div className="flex gap-5 flex-wrap justify-center">

                {/* Booking process cards */}

                {data.map((item) => (
                    <div key={item.step} className="max-w-[280px] rounded-xl shadow-md shadow-brand-secondary-300/40 border border-brand-secondary-100 p-6 flex flex-col items-center">
                        <div className="bg-brand-secondary size-[45px] rounded-full flex items-center justify-center font-bold text-lg text-white mb-8">
                            <span>{item.step}</span>
                        </div>
                        <h2 className="text-center text-lg font-semibold text-brand-secondary mb-3">{item.title}</h2>
                        <p className="text-brand-secondary-600 text-sm text-center">
                            {item.description}
                        </p>
                    </div>
                ))}

            </div>
        </div>
    )
}
