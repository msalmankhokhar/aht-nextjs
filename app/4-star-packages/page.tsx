import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  getPackages,
  packagesActionResponse,
} from "@/actions/packages.actions";
import React from "react";
import { PackageCardSwiperContainer } from "@/components/sections/PackagesSection";
import Queryform from "@/components/Queryform";

export default async function Page() {
  const packagesResponse: packagesActionResponse = await getPackages({});
  console.log(packagesResponse);
  return (
    <>
      <Navbar />
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
      <section className="w-full flex items-center flex-col">
        <Queryform />
      </section>
      <Footer />
    </>
  );
}