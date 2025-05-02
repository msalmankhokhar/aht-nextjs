import Image from 'next/image'
import React from 'react'

interface ArrowProps {
    variant?: 'up' | 'down' | 'left' | 'right'
}

// const rotateClasses = {
//     up: 'rotate-90',
//     down: 'rotate-270',
//     left: 'rotate-180',
//     right: 'rotate-0'
// }

export default function Arrow({ variant }: ArrowProps) {
    return (
        <Image
            alt='arrow'
            src={'/assets/vector/arrow.svg'}
            width={50}
            height={10}
            className={`${variant === 'down' ? 'rotate-90' : variant === 'left' ? 'rotate-180' : variant === 'up' ? 'rotate-[270deg]' : 'rotate-0' } transform h-auto`}
        />
    )
}
