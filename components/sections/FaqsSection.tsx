import React from 'react'
import Faq, { FaqProps } from '../Faq'
import { LuPhone } from 'react-icons/lu'

interface FaqsSectionProps {
    faqs?: FaqProps[]
}

const defaultFaqs: FaqProps[] = [
    {
        question: 'What is the total cost of Umrah?',
        answer: 'It all depends on the type of package, duration of stay and travel season. For example, with Al Habib Travel, a low-cost Umrah package from the UK would cost about £730 per person, while luxurious 5-star packages would cost even more. You can choose accordingly and discuss any customisation or queries related to the package cost.'
    },
    {
        question: 'How much is a package of Umrah?',
        answer: 'The price range for our UK Umrah package varies between <strong>£800</strong> and <strong>£2500</strong>, depending on the requirements incorporated. We provide an array of options to suit varied budgets. Each package offers a different price range. You can check and choose your budget and affordability accordingly. '
    },
    {
        question: 'Which month is Umrah cheap?',
        answer: 'The cheapest months for Umrah are traditionally in the months following the Hajj season, typically in the time frame between Muharram and Rajab. Therefore, the {getYear()} London Umrah packages include affordable options within this time frame. If you are visiting during this period you will receive a cheap package compared to other months. So, choose accordingly keeping in mind the month you feel will be suitable for your time.'
    },
    {
        question: 'What is the cost of the Umrah package from UK?',
        answer: 'The starting price of a typical <strong>Umrah package from UK</strong> in {getYear()} is <strong>£730</strong>, while a luxury five-star Umrah package may constitute a person-to-person cost of  <strong>£1700</strong>. Each package has a different price range If you can afford it, then you can choose the luxury package for your comfort and safety.'
    },
    {
        question: 'Which month is best for Umrah?',
        answer: 'The spiritually most fulfilling season for the Umrah pilgrimage is during Ramadan, while the September - November - January stretch is ideal for those looking for a more affordable trip with less crowds. If you want to visit a place with fewer visitors and stay within your budget, you should attend Umrah during these months. Avoid visiting during the holiday season such as midterms, summer vacations, October vacations, and the last ten days of December or October.'
    },
    {
        question: 'What is 5 star Umrah package?',
        answer: 'The 5 star Umrah package includes luxury hotels situated conveniently within walking distance of the Haram Sharif with private transportation and guided Ziyarat with bespoke services to make for a truly memorable experience.'
    },
]

export default function FaqsSection({ faqs= defaultFaqs }: FaqsSectionProps) {
    return (
        <section className="px-cont py-20">
            <h2 className="text-2xl sm:text-4xl font-bold text-center text-brand-secondary mb-16">Frequently Asked Questions</h2>
            {/* Section Content */}
            <div className="flex flex-wrap gap-5">
                <div className='flex-1'>
                    <div className="border-l border-r border-b border-gray-300">
                        {
                            faqs?.map((faq, index) => (
                                <Faq
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="self-start px-7 sm:px-10 py-10 rounded-xl bg-brand-secondary-400 flex flex-col gap-5 items-center">
                    <div className="size-[65px] rounded-full bg-white flex items-center justify-center">
                        <LuPhone size={24} className="text-brand-secondary-400" />
                    </div>
                    <h2 className="text-center font-bold text-white text-2xl">Have a different question?</h2>
                    <div className="h-[5px] rounded max-w-[100px] w-full bg-brand-primary-400"></div>
                    <p className="text-white max-w-[300px] text-center">
                        Our team will answer all your questions.
                        We ensure a quick response.
                    </p>
                    <button className="btn-secondary-white w-full">Call Now</button>
                </div>
            </div>
        </section>
    )
}
