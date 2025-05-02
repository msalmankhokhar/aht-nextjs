import React from 'react'

interface SeoTextSectionProps {
    children: React.ReactNode,
    height?: number // px
}

export default function SeoTextSection({ children, height= 300 }: SeoTextSectionProps) {
    return (
        <>
        <section className='seo-text-section' style={{maxHeight: `${height}px`}}>
            <div className='seo-text-section__content'>
                {children}
            </div>
            {/* <div className="bg-black h-[70px] sticky w-full bottom-0 right-0 left-0"></div> */}
            <div className="sticky bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </section>
        </>
    )
}
