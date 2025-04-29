import BgPattern from "@/components/BgPattern";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FaqsSection from "@/components/sections/FaqsSection";
import WhyAHTCard from "@/components/WhyAHTCard";
import { getYear } from "@/lib/utils";
import Head from "next/head";
import Image from "next/image";
import { FaFlag } from "react-icons/fa";
import { LuArrowRight, LuChevronDown, LuChevronLeft, LuChevronRight, LuCircleCheck, LuPhone, LuPlaneTakeoff } from "react-icons/lu";
import { SiTrustpilot } from "react-icons/si";

export default function Home() {
  return (
    <>
      <Head>
        <title>Best Umrah Packages {getYear()} - Umrah Travel Agency</title>
        <meta name="description" content="Book Your Umrah Package in UK with AL Habib Travel,  We have all inclusive packages for you next umrah journey. We brings exclusive Umrah deals including flights, hotels, visa etc." />
      </Head>

      <Navbar variant="navbar-colored" />
      <div className="pl-24 pr-7 pb-24 pt-10 flex items-center justify-center">
        <div className="max-w-[660px] w-full flex flex-col">
          <h1 className="tracking-wide leading-14 mb-6 text-[2.7rem] font-bold text-brand-secondary">All Inclusive Umrah Packages with Guided Tour.</h1>
          <p className="tracking-wide mb-16 text-brand-secondary-600 text-2xl font-medium">
            Our all packages include flights, visa processing, accommodation near Haram, ground transport and a guided tour. Meals are optional.
          </p>
          <div className="flex gap-3 flex-wrap items-center">
            <button className="btn-primary text-lg self-start min-w-[220px] font-semibold space-x-3">
              <span>Get Quote</span>
              <LuArrowRight />
            </button>
            <button className="btn-secondary-white text-lg border border-brand-secondary-200 min-w-[220px] font-semibold space-x-3">
              <span>Explore Umrah Packages</span>
            </button>
          </div>
        </div>
        <Image
          alt='umrah images'
          src={'/images/hero/hero_group.png'}
          width={450}
          height={450}
        />
      </div>

      <main>

        {/* Whats included in your Package */}
        <div className="px-24 py-16 bg-brand-primary-50/60 border-t-2 border-b-2 border-brand-secondary/30">
          <div className="flex justify-center gap-16">
            <div>
              <h1 className="max-w-[500px] mx-auto text-center mb-12 text-4xl font-bold text-brand-secondary">What&apos;s included in your package?</h1>
              <div className="grid grid-cols-2 gap-10 items-start place-content-center">
                <div className="flex items-center justify-between gap-10 px-6 py-4 cursor-pointer rounded-xl bg-brand-secondary text-white">
                  <div className="flex items-center justify-center  gap-2">
                    <LuPlaneTakeoff size={24} />
                    <h2 className="text-xl text-nowrap font-semibold">Flights for Umrah</h2>
                  </div>
                  <LuChevronDown size={24} />
                </div>
                <div className="flex items-center justify-between gap-10 px-6 py-4 cursor-pointer rounded-xl bg-brand-secondary text-white">
                  <div className="flex items-center gap-2">
                    <LuPlaneTakeoff size={24} />
                    <h2 className="text-xl text-nowrap font-semibold">Flights for Umrah</h2>
                  </div>
                  <LuChevronDown size={24} />
                </div>
                <div className="flex items-center justify-between gap-10 px-6 py-4 cursor-pointer rounded-xl bg-brand-secondary text-white">
                  <div className="flex items-center gap-2">
                    <LuPlaneTakeoff size={24} />
                    <h2 className="text-xl text-nowrap font-semibold">Flights for Umrah</h2>
                  </div>
                  <LuChevronDown size={24} />
                </div>
                <div className="flex items-center justify-between gap-10 px-6 py-4 cursor-pointer rounded-xl bg-brand-secondary text-white">
                  <div className="flex items-center gap-2">
                    <LuPlaneTakeoff size={24} />
                    <h2 className="text-xl text-nowrap font-semibold">Flights for Umrah</h2>
                  </div>
                  <LuChevronDown size={24} />
                </div>

              </div>
            </div>
            <Image
              alt='kaaba image'
              src={'/images/kaaba.png'}
              width={300}
              height={300}
              className="rounded-xl shadow-lg shadow-brand-secondary/30"
            />
          </div>
        </div>

        {/* Packages Section */}
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

        <div>
          <div className="py-16 px-cont bg-brand-secondary text-center">
            <h1 className="text-4xl font-bold text-white mb-5">Our Accomodation</h1>
            <p className="text-xl text-brand-primary-400 font-medium">Stay near the Haram</p>
          </div>
          <div className="py-16 px-cont flex justify-center gap-8">

            {/* Hotel Cards */}
            <div className="bg-white rounded-xl p-4 flex-col border border-brand-secondary-100">
              <Image
                alt='pullman zamzam hotel'
                src={'/images/hotels/makkah/pullman-zamzam-makkah/default.jpg'}
                className="rounded-xl mb-4"
                width={270}
                height={270}
              />
              <h2 className="text-lg font-medium text-brand-secondary text-center">Pullman Zamzam</h2>
            </div>
            <div className="bg-white rounded-xl p-4 flex-col border border-brand-secondary-100">
              <Image
                alt='pullman zamzam hotel'
                src={'/images/hotels/makkah/pullman-zamzam-makkah/default.jpg'}
                className="rounded-xl mb-4"
                width={270}
                height={270}
              />
              <h2 className="text-lg font-medium text-brand-secondary text-center">Pullman Zamzam</h2>
            </div>
            <div className="bg-white rounded-xl p-4 flex-col border border-brand-secondary-100">
              <Image
                alt='pullman zamzam hotel'
                src={'/images/hotels/makkah/pullman-zamzam-makkah/default.jpg'}
                className="rounded-xl mb-4"
                width={270}
                height={270}
              />
              <h2 className="text-lg font-medium text-brand-secondary text-center">Pullman Zamzam</h2>
            </div>

          </div>

          <div className="flex gap-3 items-center justify-center">
            <button className="rounded-full size-[35px] flex items-center justify-center text-lg border border-brand-secondary-200 text-brand-secondary-400">
              <LuChevronLeft />
            </button>
            <div className="flex gap-1">
              <div className="size-[7px] rounded-full bg-gray-300"></div>
              <div className="size-[7px] rounded-full bg-gray-300"></div>
              <div className="size-[7px] rounded-full bg-gray-300"></div>
              <div className="size-[7px] rounded-full bg-gray-300"></div>
            </div>
            <button className="rounded-full size-[35px] flex items-center justify-center text-xl border border-brand-secondary-200 text-brand-secondary-400">
              <LuChevronRight />
            </button>
          </div>

        </div>

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

        <div className="pb-16 px-cont">
          <h1 className="text-3xl font-bold text-brand-secondary text-center mb-16">
            Our Happy <span className="text-brand-primary mb-20">Pilgrims</span>
          </h1>
          <div className="flex gap-7 flex-wrap justify-center">

            {/* reviews */}

            <div className="p-6 shadow-md shadow-brand-secondary-200/70 max-w-[450px] rounded-lg bg-teal-100/40 flex flex-col min-w-[400px]">
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
              <h2 className="text-base font-semibold text-brand-secondary-800 mb-3">Excellent service. Spoke to Momina about my...</h2>
              <p className="text-sm">
                Excellent service. Spoke to Momina about my
                transaction with held. She helped me and my
                transaction was successful within no time. Highly
                recommended. Great staff. Very politeand skill full.
              </p>
            </div>

            <div className="p-6 shadow-md shadow-brand-secondary-200/70 max-w-[450px] rounded-lg bg-teal-100/40 flex flex-col min-w-[400px]">
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
              <h2 className="text-base font-semibold text-brand-secondary-800 mb-3">Excellent service. Spoke to Momina about my...</h2>
              <p className="text-sm">
                Excellent service. Spoke to Momina about my
                transaction with held. She helped me and my
                transaction was successful within no time. Highly
                recommended. Great staff. Very politeand skill full.
              </p>
            </div>

            <div className="p-6 shadow-md shadow-brand-secondary-200/70 max-w-[450px] rounded-lg bg-teal-100/40 flex flex-col min-w-[400px]">
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
              <h2 className="text-base font-semibold text-brand-secondary-800 mb-3">Excellent service. Spoke to Momina about my...</h2>
              <p className="text-sm">
                Excellent service. Spoke to Momina about my
                transaction with held. She helped me and my
                transaction was successful within no time. Highly
                recommended. Great staff. Very politeand skill full.
              </p>
            </div>

            <div className="p-6 shadow-md shadow-brand-secondary-200/70 max-w-[450px] rounded-lg bg-teal-100/40 flex flex-col min-w-[400px]">
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
              <h2 className="text-base font-semibold text-brand-secondary-800 mb-3">Excellent service. Spoke to Momina about my...</h2>
              <p className="text-sm">
                Excellent service. Spoke to Momina about my
                transaction with held. She helped me and my
                transaction was successful within no time. Highly
                recommended. Great staff. Very politeand skill full.
              </p>
            </div>

          </div>
        </div>

        <div className="border-t border-brand-secondary-200 py-16 px-cont">
          <h1 className="text-brand-secondary text-3xl mb-14 font-bold text-center">Watch Real Stories!</h1>
          <div className="flex gap-6 justify-center">
            <div className="aspect-[9/16] w-[250px] rounded-xl bg-gray-300"></div>
            <div className="aspect-[9/16] w-[250px] rounded-xl bg-gray-300"></div>
            <div className="aspect-[9/16] w-[250px] rounded-xl bg-gray-300"></div>
          </div>
        </div>

        <div className="bg-brand-secondary relative px-cont mx-auto rounded-lg container py-16 my-16">
          <BgPattern />
          <h1 className="text-white text-center text-3xl font-bold mb-10">We proudly cooperate with</h1>
          <div className="grid grid-cols-[170px_170px_170px] gap-7 justify-center items-center relative">

            <Image
              alt='aeroplane background'
              src={'/images/bg/bg-aeroplane.png'}
              className="object-contain object-center opacity-60"
              fill
            />

            {/* Airlines logos */}

            <div className="rounded-lg overflow-hidden relative aspect-video bg-white flex items-center justify-center">
              <Image
                alt='umrah package thumnail'
                src={'/images/airlines_logos/emirates-logo.png'}
                className="object-center object-cover"
                width={110}
                height={110}
              />
            </div>

            <div className="rounded-lg overflow-hidden relative aspect-video bg-white flex items-center justify-center">
              <Image
                alt='umrah package thumnail'
                src={'/images/airlines_logos/qatar-airways-logo.png'}
                className="object-center object-cover"
                width={110}
                height={110}
              />
            </div>

            <div className="rounded-lg overflow-hidden relative aspect-video bg-white flex items-center justify-center">
              <Image
                alt='umrah package thumnail'
                src={'/images/airlines_logos/british-airways-logo.png'}
                className="object-center object-cover"
                width={110}
                height={110}
              />
            </div>

            <div className="rounded-lg overflow-hidden relative aspect-video bg-white flex items-center justify-center">
              <Image
                alt='umrah package thumnail'
                src={'/images/airlines_logos/etihad-airways-logo.png'}
                className="object-center object-cover"
                width={110}
                height={110}
              />
            </div>

            <div className="rounded-lg overflow-hidden relative aspect-video bg-white flex items-center justify-center">
              <Image
                alt='umrah package thumnail'
                src={'/images/airlines_logos/Saudi-Arabian-Airlines-logo.png'}
                className="object-center object-cover"
                width={110}
                height={110}
              />
            </div>

            <div className="rounded-lg overflow-hidden relative aspect-video bg-white flex items-center justify-center">
              <Image
                alt='umrah package thumnail'
                src={'/images/airlines_logos/gulf-air-logo.png'}
                className="object-center object-cover"
                width={110}
                height={110}
              />
            </div>

          </div>
        </div>

        <FaqsSection
          faqs={
            [
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
          }
        />

      </main>

      <Footer />
    </>
  );
}
