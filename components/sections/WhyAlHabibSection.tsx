import React from 'react'
import WhyAHTCard from '../WhyAHTCard'
import BgPattern from '../BgPattern'

export default function WhyAlHabibSection() {
    return (
        <section className="py-24 flex flex-col gap-20">

            <div>
                {/* <h2 className="text-4xl font-bold mb-16 text-brand-secondary text-center">Why Al Habib Travel ?</h2> */}
                <div className="relative">
                    <div className="gradient-brand-teal bg-gradient-to-t to-brand-secondary-400 w-full h-[70%] top-[15%] absolute">
                        <BgPattern />
                    </div>
                    <div className="px-cont flex flex-wrap gap-5 justify-center">
                        <WhyAHTCard
                            heading="Welcome to Superb Umrah Package"
                            description="Al Habib Travel is a reowned company
                        in the field of Umrah travels. We organize
                        Umrah tours for potential pilgrims meeting international standards. Our Umrah Packages are inclusive and cater the needs of all types of Pilgrims."
                            imagePath="/images/why_alhabib/makkah_city_1.png"
                            extra={
                                <p className="font-semibold text-brand-secondary text-sm mt-5">
                                    For more info call us at: 0123 456 789
                                </p>
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
