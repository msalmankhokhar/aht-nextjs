import React from 'react'
import PackageCard from '../PackageCard'
import { getPackages, packagesActionResponse } from '@/actions/packages.actions';

export default async function EconomyPackagesSection() {

    const packagesResponse: packagesActionResponse = await getPackages({ db_query: { category: 'economic' } });

    return (
        <section className="py-20 flex flex-col gap-y-20">
            <div>
                <div className='container mb-16 mx-auto px-cont py-6 rounded-xl bg-brand-secondary'>
                    <h1 className="text-3xl font-bold text-white mb-12 text-center">Affordable Economy <span className="text-brand-primary">Packages</span></h1>
                    <p className="text-center text-lg text-gray-200 max-w-2xl mx-auto">Explore our range of affordable economy packages designed to make your Umrah journey accessible and memorable.</p>
                </div>
                <div className="px-5 flex justify-center gap-6 relative">
                    {/* Package Cards */}

                    <div className="w-full h-[80%] top-[10%] min-[835px]:h-1/2 min-[835px]:top-[25%] bg-brand-secondary absolute"></div>

                    <div className="grid grid-cols-1 min-[835px]:grid-cols-2 min-[1235px]:grid-cols-3 justify-center max-w-[90%] mx-auto content-center flex-wrap gap-6">
                        {
                            packagesResponse.success ? (
                                packagesResponse.data?.packages.filter((pkg) => pkg.rating === 3 && pkg.category === 'economic').map((pkg) => (
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
