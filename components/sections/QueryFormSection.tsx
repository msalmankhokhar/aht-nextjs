import React from 'react'
import BgPattern from '@/components/BgPattern'
import Queryform from '@/components/Queryform'

export default function QueryFormSection() {
    return (
        <div id='query-form-section' className='p-5 min-[415px]:p-7 min-[490px]:p-12 rounded-xl bg-brand-secondary relative'>
            <BgPattern />
            <div className='relative z-[1]'>
                {/* Content */}
                <div className='flex flex-col'>
                    <Queryform />
                </div>
            </div>
        </div>
    )
}
