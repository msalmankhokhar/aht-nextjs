import React from 'react'
import { LuCircleCheck } from 'react-icons/lu'
import { SiTrustpilot } from 'react-icons/si'
import ReviewCardSwiper from '../swipers/ReviewCardSwiper'
import RealStoriesSwiper from '../swipers/RealStoriesSwiper';

const reviewsList: ReviewsCardProps[] = [
    {
        name: 'Ali Khan',
        review: 'Outstanding experience. Talked to their rep about my visa issue. They resolved it super quickly. Staff is amazing, polite, and knows what they are doing. Very impressed by their efficiency. Highly recommended to all friends and family.'
    },
    {
        name: 'Sara Ali',
        review: 'Incredible support from start to end. I booked an Umrah package and every step was smooth. Staff answered all questions kindly and quickly. I will definitely book again with them. They made everything stress-free. Truly grateful. Thank you.'
    },
    {
        name: 'Ahsan Raza',
        review: 'I’m beyond satisfied with the professionalism shown by the entire team. From consultation to completion, everything went flawlessly. The staff was courteous, informative, and super helpful. Will refer to friends and family. Thank you again.'
    },
    {
        name: 'Fatima Noor',
        review: 'A flawless travel experience! The representative I spoke to was very knowledgeable. All my doubts were addressed properly. My documents were handled with care. The overall service was very quick and well-organized. Truly worth recommending.'
    },
    {
        name: 'Zain Malik',
        review: 'Very polite and professional staff. I had an urgent issue regarding flight rescheduling and they resolved it the same day. Quick communication and transparent process. Couldn’t ask for more. One of the best experiences I’ve had so far. Thank you.'
    },
    {
        name: 'Hira Siddiqui',
        review: 'Brilliant service. I was unsure about the process, but their team guided me at each step with patience and accuracy. Everything was handled so smoothly. I’ve never had such a pleasant travel booking experience before. Highly recommended agency.'
    },
    {
        name: 'Usman Tariq',
        review: 'Top-quality service. I reached out late at night with an emergency and was surprised by the fast response. Everything was sorted out efficiently. Their commitment to customer care is remarkable. Definitely my go-to agency from now on. Much respect.'
    },
    {
        name: 'Sana Ahmed',
        review: 'Very supportive staff. They arranged my travel documents swiftly and double-checked every detail. No hidden fees or delays. The level of transparency and professionalism is rare these days. I’ll definitely use their service again in the future.'
    },
    {
        name: 'Hamza Iqbal',
        review: 'Wonderful experience. The booking was seamless and the support team was always available for my questions. The entire journey felt safe and well-managed. I would gladly recommend this service to everyone looking for a reliable travel agency.'
    },
    {
        name: 'Mehwish Khan',
        review: 'Exceptional service. Everything was organized perfectly and on time. They even reminded me of small details I had forgotten. Their customer care goes above and beyond. I felt like a priority client from the start. Highly appreciated and trusted.'
    },
    {
        name: 'Rehan Ali',
        review: 'Great job by the team. My family and I had no issues at all. From airport transfers to hotel check-ins, everything was flawless. It’s rare to find such professionalism and honesty. Will surely plan all my future trips through them. Well deserved.'
    },
    {
        name: 'Lubna Shaikh',
        review: "I'm very impressed with their dedication. Their timely updates and clear communication made the entire process stress-free. Even the smallest details were managed professionally. Excellent experience. I have full confidence in recommending them."
    },
];


export function ReviewsCardSwiperContainer() {
    return (
        <>
            <noscript>
                <div className="flex gap-7 flex-wrap justify-center">

                    {/* reviews */}

                    {reviewsList.map((review, index) => (
                        <ReviewsCard key={index} name={review.name} review={review.review} />
                    ))}

                </div>
            </noscript>
            <ReviewCardSwiper data={reviewsList} />
        </>
    )
}

export interface ReviewsCardProps {
    name?: string,
    review?: string
}
const defaultReviewsCardProps: ReviewsCardProps = {
    name: 'Imran Sohail',
    review: 'Excellent service. Spoke to Momina about my transaction with held. She helped me and my transaction was successful within no time. Highly recommended. Great staff. Very politeand skill full.'
}
export function ReviewsCard({ name = defaultReviewsCardProps.name, review = defaultReviewsCardProps.review }: ReviewsCardProps) {
    return (
        <div className="p-6 shadow-md shadow-brand-secondary-200/70 max-w-[450px] rounded-lg bg-teal-100/40 flex flex-col min-w-[300px]">
            <div className="flex gap-6 mb-7 items-center justify-between">
                <div className="flex gap-[2px]">
                    <div className="size-[20px] flex items-center justify-center bg-green-600 text-white">
                        <SiTrustpilot size={14} />
                    </div>
                    <div className="size-[20px] flex items-center justify-center bg-green-600 text-white">
                        <SiTrustpilot size={14} />
                    </div>
                    <div className="size-[20px] flex items-center justify-center bg-green-600 text-white">
                        <SiTrustpilot size={14} />
                    </div>
                    <div className="size-[20px] flex items-center justify-center bg-green-600 text-white">
                        <SiTrustpilot size={14} />
                    </div>
                    <div className="size-[20px] flex items-center justify-center bg-green-600 text-white">
                        <SiTrustpilot size={14} />
                    </div>
                    <div className="h-[20px] px-2 text-xs gap-1 font-medium flex items-center justify-center bg-white text-black">
                        <LuCircleCheck size={16} className="font-normal" />
                        <span>Verified</span>
                    </div>
                </div>
                <p className="text-sm text-gray-600 font-medium">12 July 2025</p>
            </div>
            <h3 className="text-base font-semibold text-brand-secondary-800 mb-3">{`${review?.slice(0, 42)}...`}</h3>
            <p className="text-sm mb-3">
                {review}
            </p>
            <p className='text-center font-semibold'>{name}</p>
        </div>
    )
}

function RealStoriesSwiperContainer() {
    return (
        <>
        <noscript>
            <div className="flex flex-col min-[565px]:flex-row items-center gap-6 justify-center">
                <video src={'/videos/video-reviews/1.mp4'} controls className="aspect-[9/16] w-[250px] rounded-xl"></video>
                <video src={'/videos/video-reviews/2.mp4'} controls className="aspect-[9/16] w-[250px] rounded-xl"></video>
                <video src={'/videos/video-reviews/3.mp4'} controls className="aspect-[9/16] w-[250px] rounded-xl"></video>
                <video src={'/videos/video-reviews/4.mp4'} controls className="aspect-[9/16] w-[250px] rounded-xl"></video>
            </div>
        </noscript>
        <RealStoriesSwiper />
        </>
    )
}

export default function ReviewsSection() {
    return (
        <>
            <div className="py-16 px-cont">
                <h2 className="text-3xl font-bold text-brand-secondary text-center mb-16">
                    Our Happy <span className="text-brand-primary mb-20">Pilgrims</span>
                </h2>
                <ReviewsCardSwiperContainer />
            </div>

            <div className="border-t border-brand-secondary-200 py-16 px-cont">
                <h2 className="text-brand-secondary text-3xl mb-14 font-bold text-center">Watch Real Stories!</h2>
                <RealStoriesSwiperContainer />
            </div>
        </>
    )
}
