'use client'
// import React, { useState } from 'react'
import { LuX } from 'react-icons/lu'

interface ModalProps {
    open: boolean,
    children: React.ReactNode
    onClose?: () => void
}


export default function Modal({ open = true, children, onClose }: ModalProps) {
    // const [openState, setOpenState] = useState(open);
    return (
        <>
            <div className={`fixed z-[1000] top-0 right-0 w-full h-full bg-black/10 ${open ? 'flex' : 'hidden'} items-center justify-center`}>
                <div className='border border-gray-300 p-6 rounded-xl bg-white relative'>
                    {children}
                    <button onClick={onClose} className='bg-gray-100 cursor-pointer rounded-full absolute top-4 right-4 size-[30px] flex items-center justify-center'>
                        <LuX size={18} />
                    </button>
                </div>
            </div>
        </>
    )
}
