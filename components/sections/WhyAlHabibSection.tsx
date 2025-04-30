import React from 'react'
import WhyAHTCard from '../WhyAHTCard'
import { LuPhone } from 'react-icons/lu'
import BgPattern from '../BgPattern'

export default function WhyAlHabibSection() {
    return (
        <section className="py-24 flex flex-col gap-20">

            <div>
                <h1 className="text-4xl font-bold mb-16 text-brand-secondary text-center">Why Al Habib Travel ?</h1>
                <div className="relative">
                    <div className="gradient-brand-teal bg-gradient-to-t to-brand-secondary-400 w-full h-[70%] top-[15%] absolute">
                        <BgPattern />
                    </div>
                    <div className="px-cont flex flex-col gap-8 justify-center items-center">

                        {/* Why Al Habib Travel */}

                        <WhyAHTCard
                            heading="Welcome to Superb Umrah Package"
                            description="Al Habib Travel is a reowned company
                        in thefield of Umrah travels. We organize
                        Umrah tours for potential pilgrims meeting international standards. Our Umrah Packages are inclusive and cater the needs of all types of Pilgrims."
                            imagePath="/images/why_alhabib/makkah_city_1.png"
                            extra={
                                <button type="button" className="btn-secondary-mixed min-w-[180px] space-x-2 mt-5 font-semibold">
                                    <LuPhone />
                                    <span>Call Now</span>
                                </button>
                            }
                        />
                        <WhyAHTCard
                            heading="More than just Umrah Packages"
                            description="Al Habib Travel offers Umrah Packages with best services fulfil your Umrah aspirations as per your budget, comfort, convenience and other requirements."
                            imagePath="/images/why_alhabib/makkah_city_2.png"
                        />
                        <WhyAHTCard
                            heading="More than just Umrah Packages"
                            description="Al Habib Travel offers Umrah Packages with best services fulfil your Umrah aspirations as per your budget, comfort, convenience and other requirements."
                            imagePath="/images/why_alhabib/makkah_city_3.png"
                        />

                    </div>
                </div>
            </div>

        </section>
    )
}
