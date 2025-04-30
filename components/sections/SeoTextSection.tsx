import React from 'react'
import ExpandableSection from '../ExpandableSection'

interface SeoTextSectionProps {
    children: React.ReactNode,
    collapsedHeight?: number // px
}

export default function SeoTextSection({ children, collapsedHeight= 200 }: SeoTextSectionProps) {
    return (
        <ExpandableSection collapsedHeight={collapsedHeight} contentWrapperClassName='seo-text-section'>
            {children}
        </ExpandableSection>
    )
}
