import Link from "next/link";
import BgPattern from "./BgPattern";

export default function Footer() {
    return (
        <>
            <footer className="bg-brand-secondary relative flex flex-col px-cont">
                <BgPattern />
                <div className="z-[1] flex flex-wrap gap-5 justify-between pt-8 pb-5 border-b border-brand-secondary-300">
                    <div className="font-semibold text-white text-3xl">Let&apos;s <span className="text-brand-primary-400">Connect</span> there</div>
                    <button className="btn-primary-white w-full max-w-[200px]">Call Now</button>
                </div>
                <div className="flex flex-col min-[840px]:grid min-[840px]:grid-cols-2 min-[1200px]:flex min-[1200px]:flex-row gap-6 justify-between py-6 z-[1]">
                    <div>
                        <h3 className="text-brand-primary-400 font-semibold text-lg mb-2">About Us</h3>
                        <p className="text-white tracking-wider max-w-[250px] text-sm">Al Habib Travel is the most trusted & reliable agency among UK Muslims. We provide bespoke Umrah travel solutions & package designing services to meet budget range and facilities requirements of pilgrims.</p>
                    </div>
                    <div>
                        <h3 className="text-brand-primary-400 font-semibold text-lg mb-2">Travel</h3>
                        <ul className="flex flex-col">
                            <li><Link className="text-white text-sm" href={'#'}>Home</Link></li>
                            <li><Link className="text-white text-sm" href={'#'}>Umrah Packages</Link></li>
                            <li><Link className="text-white text-sm" href={'#'}>Ramadan Umrah Packages</Link></li>
                            <li><Link className="text-white text-sm" href={'#'}>Contact Us</Link></li>
                            <li><Link className="text-white text-sm" href={'#'}>About Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-brand-primary-400 font-semibold text-lg mb-2">Our Terms</h3>
                        <ul className="flex flex-col">
                            <li><Link className="text-white text-sm" href={'#'}>Travel Insurance</Link></li>
                            <li><Link className="text-white text-sm" href={'#'}>Terms and Conditions</Link></li>
                            <li><Link className="text-white text-sm" href={'#'}>Safi Assurance</Link></li>
                            <li><Link className="text-white text-sm" href={'#'}>Privacy Policy</Link></li>
                            <li><Link className="text-white text-sm" href={'#'}>Payment Security</Link></li>
                            <li><Link className="text-white text-sm" href={'#'}>Our Responsibility</Link></li>
                            <li><Link className="text-white text-sm" href={'#'}>Download</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <h3 className="text-brand-primary-400 font-semibold text-lg mb-2">Contact Us</h3>
                            <p className="text-sm tracking-wider font-semibold mb-1 text-white">0203 504 2344</p>
                            <p className="text-sm tracking-wider text-white">info@alhabibtravel.com</p>
                        </div>
                        <div>
                            <h3 className="text-brand-primary-400 font-semibold text-lg mb-2">Office</h3>
                            <p className="text-sm tracking-wider max-w-[220px] text-white">
                                Office 10378 182-184 High Street
                                North East Ham London
                                England E6 2JA
                            </p>
                        </div>
                    </div>
                </div>
                <p className="text-center text-sm py-5 text-brand-secondary-100 border-t border-brand-secondary-300">Copyright © 2025 | Al Habib Travel Ltd UK</p>
            </footer>
            <div className="bg-white text-xs font-light text-center px-5 py-3">
                Most/Many of the flight-inclusive holidays on this website are financially protected by the ATOL scheme. When you pay you will be supplied with an ATOL Certificate. Please ask for it and check to ensure that everything you booked (flights, hotels and other services) is listed on it. If you do receive an ATOL Certificate but all the parts of your trip are not listed on it, those parts will not be ATOL protected. Some of the flights on this website are also financially protected by the ATOL scheme, but ATOL protection does not apply to all flights.
            </div>
        </>
    )
}
