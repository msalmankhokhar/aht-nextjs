import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QueryFormSection from "@/components/sections/QueryFormSection";
import SeoTextSection from "@/components/sections/SeoTextSection";
import {
  getPackages,
  packagesActionResponse,
} from "@/actions/packages.actions";
import React from "react";
import { PackageCardSwiperContainer } from "@/components/sections/PackagesSection";
import WhatsIncludedSection from "@/components/sections/WhatsIncludedSection";
import AccomodationSection from "@/components/sections/AccomodationSection";
import MonthHeroSection from "@/components/sections/MonthHeroSection";

export default async function Page() {
  const packagesResponse: packagesActionResponse = await getPackages({});
  console.log(packagesResponse);
  return (
    <>
      <Navbar />
      <MonthHeroSection />
      <QueryFormSection />
      <section>
        <SeoTextSection height={250}>
          <div>
            <p>
              Al Habib Travel offers organized Umrah packages based on the
              duration of stay and accommodation preferences. Check some of the
              best packages offered by us and choose your’s based on your budget
              and preference:
            </p>
          </div>
          <div>
            <h2>5 Star December Umrah Package Deals</h2>
            <p>
              For pilgrims seeking utmost comfort, our 5-star Umrah package for
              December includes luxury hotels within walking distance of the
              Haram Sharif. You will be pampered with top-class hospitality,
              including nonstop flights, private transport, and concierge
              service. This package ensures that you perform Umrah in the
              highest comfort and peace.
            </p>
          </div>
        </SeoTextSection>
        <div>
          <h2 className="px-5 text-4xl font-bold text-center mb-16 text-brand-secondary">
            5 Star Umrah Packages
          </h2>
          <div className="px-5 flex justify-center relative">
            {/* Package Cards */}

            <div className="w-full h-[80%] top-[10%] min-[835px]:h-1/2 min-[835px]:top-[25%] bg-brand-secondary absolute"></div>

            <PackageCardSwiperContainer
              data={packagesResponse.data?.packages.filter(
                (pkg) => pkg.rating === 5
              )}
            />
          </div>
        </div>
        <SeoTextSection height={250}>
          <div>
            <p>
              Al Habib Travel offers organized Umrah packages based on the
              duration of stay and accommodation preferences. Check some of the
              best packages offered by us and choose your’s based on your budget
              and preference:
            </p>
          </div>
          <div>
            <h2>4 Star December Umrah Package Deals</h2>
            <p>
              For pilgrims seeking utmost comfort, our 5-star Umrah package for
              December includes luxury hotels within walking distance of the
              Haram Sharif. You will be pampered with top-class hospitality,
              including nonstop flights, private transport, and concierge
              service. This package ensures that you perform Umrah in the
              highest comfort and peace.
            </p>
          </div>
        </SeoTextSection>
        <div>
          <h2 className="px-5 text-4xl font-bold text-center mb-16 text-brand-secondary">
            4 Star Umrah Packages
          </h2>
          <div className="px-5 flex justify-center relative">
            {/* Package Cards */}

            <div className="w-full h-[80%] top-[10%] min-[835px]:h-1/2 min-[835px]:top-[25%] bg-brand-secondary absolute"></div>

            <PackageCardSwiperContainer
              data={packagesResponse.data?.packages.filter(
                (pkg) => pkg.rating === 4
              )}
            />
          </div>
        </div>
        <SeoTextSection height={250}>
          <div>
            <p>
              Al Habib Travel offers organized Umrah packages based on the
              duration of stay and accommodation preferences. Check some of the
              best packages offered by us and choose your’s based on your budget
              and preference:
            </p>
          </div>
          <div>
            <h2>3 Star December Umrah Package Deals</h2>
            <p>
              For pilgrims seeking utmost comfort, our 5-star Umrah package for
              December includes luxury hotels within walking distance of the
              Haram Sharif. You will be pampered with top-class hospitality,
              including nonstop flights, private transport, and concierge
              service. This package ensures that you perform Umrah in the
              highest comfort and peace.
            </p>
          </div>
        </SeoTextSection>
        <div>
          <h2 className="px-5 text-4xl font-bold text-center mb-16 text-brand-secondary">
            3 Star Umrah Packages
          </h2>
          <div className="px-5 flex justify-center relative">
            {/* Package Cards */}

            <div className="w-full h-[80%] top-[10%] min-[835px]:h-1/2 min-[835px]:top-[25%] bg-brand-secondary absolute"></div>

            <PackageCardSwiperContainer
              data={packagesResponse.data?.packages.filter(
                (pkg) => pkg.rating === 3
              )}
            />
          </div>
        </div>
      </section>
      <section>
        <WhatsIncludedSection />
        <SeoTextSection height={250}>
          <div>
            <p>
              An Umrah journey is one of the most spiritually touching journeys
              that requires choosing the right package for Umrah for
              seamlessness in the entire pilgrimage. Al Habib Travel offers
              several Umrah packages in December 2025 with different budgets and
              preferences so that every pilgrim finds the one just right for
              them. Cheap December Umrah packages or a luxurious
              experience-perfectly designed packages are found with Al Habib
              Travel. December Umrah packages 2025 offer direct flights,
              comfortable accommodations, and excellent services for journeying
              to the Holy Land as smoothly as possible. We offer 4-star December
              Umrah packages, economy, and luxury packages for a comfortable
              stay at hotels.
            </p>
            <p>
              In addition, for pilgrims from the UK, Al Habib Travel also has
              Umrah packages for December 2025 UK so that they can travel
              without any stress. From visa processing to guided attention,
              every small aspect is taken care of by Al Habib Travel, so that
              you only focus on prayers and devotion. Whether traveling alone,
              with family, or in a group, our December Umrah packages offer
              customised spending based on your specific requirements. Spiritual
              feeling experience through the Umrah in packages for December
              2025, and from there, Al Habib Travel will become your trusted
              partner in this sacred journey. 
            </p>
          </div>
        </SeoTextSection>
        <SeoTextSection height={230}>
          <div>
            <h2>What's included in your package?</h2>
            <p>
              Choosing the right Umrah package for December 2025 is critical for
              a fulfilling pilgrimage. Al Habib Travel offers three major
              categories: Economy, 4-star, and Luxury Umrah packages. All of
              these packages cater to the needs of all pilgrims. Cheap December
              Umrah packages give great affordability with no compromise in the
              quality and comfort of the desired services. Our 4-star December
              Umrah packages include the finest accommodation with direct
              flights and no stopovers for those who are looking for affordable
              packages with benefits from the service. For an extra special
              experience, our luxury Umrah packages for December 2025 provide
              the highest standards of comfort with high-end hotels.
            </p>
          </div>
        </SeoTextSection>
      </section>
      <AccomodationSection />
      <section>
        <SeoTextSection height={230}>
          <div>
            <h2>Visa and Entry Requirements for Umrah Package December</h2>
            <p>
              Opting for visa and entry requirements is vital for UK citizens
              planning to undertake the Umrah pilgrimage in December 2025. For
              these, helping and facilitating in obtaining necessary travel
              documents to make the journey of the pilgrim hassle-free is what
              Al Habib Travel intends to do. Currently, the process of procuring
              visas for UK citizens is either through an Umrah visa from an
              authorized travel agency such as Al Habib Travel or by using the
              Saudi eVisa, which is purely for religious and tourism entry into
              the Kingdom. Unlike the timeless Umrah visa, which is only for the
              pilgrimage, the eVisa can be more comfortable for a person because
              it offers flexibility.
            </p>
          </div>
        </SeoTextSection>
      </section>
      <Footer />
    </>
  );
}
