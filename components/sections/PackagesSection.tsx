import { getPackages, packagesActionResponse } from '@/actions/packages.actions'
import React from 'react'
import PackageCard from '../PackageCard'

export default async function PackagesSection() {

    const packagesResponse: packagesActionResponse = await getPackages({});
    console.log(packagesResponse);

    return (
        <section className="py-20 flex flex-col gap-y-20">

            {/* 5 Star Packages */}
            <div>
                <h1 className="px-5 text-4xl font-bold text-center mb-16 text-brand-secondary">5 Star Umrah Packages</h1>
                <div className="px-5 flex justify-center relative">

                    {/* Package Cards */}

                    <div className="w-full h-[80%] top-[10%] min-[835px]:h-1/2 min-[835px]:top-[25%] bg-brand-secondary absolute"></div>
                    <div className="grid grid-cols-1 min-[835px]:grid-cols-2 min-[1235px]:grid-cols-3 justify-center max-w-[90%] mx-auto content-center flex-wrap gap-6">
                    {
                        packagesResponse.success ? (
                            packagesResponse.data?.packages.filter((pkg) => pkg.rating === 5).map((pkg) => (
                                <PackageCard key={pkg._id} {...pkg} />
                            ))
                        ) : (
                            <div className="text-center text-lg text-red-500 bg-white z-[1] w-full px-5 py-6 border border-gray-200 rounded-xl">{packagesResponse.message}</div>
                        )
                    }
                    </div>

                </div>
            </div>

            {/* 4 Star Packages */}
            <div>
                <h1 className="px-5 text-4xl font-bold text-center mb-16 text-brand-secondary">4 Star Umrah Packages</h1>
                <div className="px-5 flex justify-center gap-6 relative">
                    {/* Package Cards */}

                    <div className="w-full h-[80%] top-[10%] min-[835px]:h-1/2 min-[835px]:top-[25%] bg-brand-secondary absolute"></div>

                    <div className="grid grid-cols-1 min-[835px]:grid-cols-2 min-[1235px]:grid-cols-3 justify-center max-w-[90%] mx-auto content-center flex-wrap gap-6">
                    {
                        packagesResponse.success ? (
                            packagesResponse.data?.packages.filter((pkg) => pkg.rating === 4).map((pkg) => (
                                <PackageCard key={pkg._id} {...pkg} />
                            ))
                        ) : (
                            <div className="text-center text-lg text-red-500 bg-white z-[1] w-full px-5 py-6 border border-gray-200 rounded-xl">{packagesResponse.message}</div>
                        )
                    }
                    </div>

                </div>
            </div>

            {/* 3 Star Packages */}
            <div>
                <h1 className="px-5 text-4xl font-bold text-center mb-16 text-brand-secondary">3 Star Umrah Packages</h1>
                <div className="px-5 flex justify-center gap-6 relative">
                    {/* Package Cards */}

                    <div className="w-full h-[80%] top-[10%] min-[835px]:h-1/2 min-[835px]:top-[25%] bg-brand-secondary absolute"></div>

                    <div className="grid grid-cols-1 min-[835px]:grid-cols-2 min-[1235px]:grid-cols-3 justify-center max-w-[90%] mx-auto content-center flex-wrap gap-6">
                    {
                        packagesResponse.success ? (
                            packagesResponse.data?.packages.filter((pkg) => pkg.rating === 3 && pkg.category === 'popular').map((pkg) => (
                                <PackageCard key={pkg._id} {...pkg} />
                            ))
                        ) : (
                            <div className="text-center text-lg text-red-500 bg-white z-[1] w-full px-5 py-6 border border-gray-200 rounded-xl">{packagesResponse.message}</div>
                        )
                    }
                    </div>

                </div>
            </div>

        </section>
    )
}
