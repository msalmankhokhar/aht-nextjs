'use client'
import React from 'react'
import { LuChevronDown, LuChevronUp, LuPlaneTakeoff } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

interface WhatsIncludedItemProps {
    title?: string,
    description?: string,
    icon?: React.ReactNode,
    isOpen: boolean,
    onToggle: () => void,
    onMouseEnter: () => void,
    onMouseLeave: () => void
}

const defaultWhatsIncludedItemProps = {
    title: 'Flights',
    description: 'Round trip flights from your departure city to Jeddah and back.',
    icon: <LuPlaneTakeoff size={24} />
}

export default function WhatsIncludedItem({
    title = defaultWhatsIncludedItemProps.title,
    description = defaultWhatsIncludedItemProps.description,
    icon = defaultWhatsIncludedItemProps.icon,
    isOpen,
    onMouseEnter,
    onMouseLeave
}: WhatsIncludedItemProps) {
    return (
        <div 
            className="flex flex-col w-full rounded-xl bg-brand-secondary text-white overflow-hidden"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div 
                className="flex sm:min-w-fit items-center justify-between gap-10 px-6 py-4 cursor-pointer"
            >
                <div className="flex items-center justify-center gap-2">
                    {icon}
                    <h3 className="text-xl text-nowrap font-semibold">{title}</h3>
                </div>
                {isOpen ? <LuChevronUp size={24} /> : <LuChevronDown size={24} />}
            </div>
            
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-white border-t border-brand-secondary/20 overflow-hidden"
                    >
                        <div className="px-6 py-4">
                            <p className="text-brand-secondary/80">{description}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}