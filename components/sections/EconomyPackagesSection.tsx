import React from "react";
import {
  getPackages,
  packagesActionResponse,
} from "@/actions/packages.actions";
import { PackageCardSwiperContainer } from "./PackagesSection";

export default async function EconomyPackagesSection() {
  const packagesResponse: packagesActionResponse = await getPackages({
    db_query: { category: "economic" },
  });

  return (
    <section className="py-20 flex flex-col gap-y-20">
      <div>
        <div className="container mb-16 mx-auto px-cont py-6 rounded-xl bg-brand-secondary">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Affordable Economy{" "}
            <span className="text-brand-primary">Packages</span>
          </h2>
          <p className="text-center text-lg text-gray-200 max-w-2xl mx-auto">
            Explore our range of affordable economy packages designed to make
            your Umrah journey accessible and memorable.
          </p>
        </div>
        <div className="px-5 flex justify-center gap-6 relative">
          {/* Package Cards */}

          <div className="w-full h-[80%] top-[10%] min-[835px]:h-1/2 min-[835px]:top-[25%] bg-brand-secondary absolute"></div>

          <PackageCardSwiperContainer
            data={packagesResponse.data?.packages.filter(
              (pkg) => pkg.rating === 3 && pkg.category === "economic"
            )}
          />
        </div>
      </div>
    </section>
  );
}
