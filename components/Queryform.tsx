import React from 'react'

interface QueryformProps {
    modal?: boolean
}

export default function Queryform({ modal = false }: QueryformProps) {
    return (
        <div className={`bg-white w-fit self-stretch min-[707px]:self-center ${!modal && 'min-[1100px]:max-w-1/2'} p-4 min-[415px]:p-6 min-[490px]:p-8 rounded-xl flex flex-col`}>
            <h1 className='text-brand-secondary text-2xl font-bold mb-2 text-center'>Get Umrah Quote</h1>
            <p className='text-brand-secondary-800 text-base font-medium text-center'>We will contact you via whatsapp or email within a few minutes.</p>
            <form className='mt-10 flex flex-col'>
                {/* form content wrapper */}
                <div>
                    <div className='flex flex-col gap-y-6 text-base'>
                        <div>
                            <input type="text" name='name' placeholder='Passenger Name' className='rounded border border-gray-300 px-5 py-3 w-full' />
                        </div>
                        <div>
                            <input type="tel" name='phone' placeholder='Contact Number' className='rounded border border-gray-300 px-5 py-3 w-full' />
                        </div>
                        <div>
                            <input type="email" name='email' placeholder='Email Address' className='rounded border border-gray-300 px-5 py-3 w-full' />
                        </div>
                        <div>
                            <input type="number" min={1} max={20} name='num_of_passengers' placeholder='Total Number of Passengers' className='rounded border border-gray-300 px-5 py-3 w-full' />
                        </div>
                    </div>
                    <div className='flex items-center gap-3 mt-4.5'>
                        <input type="checkbox" name='privacy_policy_check' id='privacy_policy_checkbox' className='size-[20px]' />
                        <label htmlFor="terms" className='text-sm text-gray-500'>I accept the <span className='text-brand-primary font-semibold'>Privary Policy</span></label>
                    </div>
                    <button className='btn-secondary-mixed text-xl w-full mt-7'>Send Inquiry</button>
                </div>
            </form>
        </div>
    )
}
