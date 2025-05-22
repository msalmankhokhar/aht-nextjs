'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { LuChevronDown, LuChevronRight } from 'react-icons/lu'
import { motion, AnimatePresence } from 'framer-motion'

interface MobileNavDropdownProps {
  title: string
  items: {
    name: string
    href: string
  }[]
  variant?: 'navbar-transparent' | 'navbar-colored'
}

export default function MobileNavDropdown({ title, items, variant = 'navbar-colored' }: MobileNavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const mobileMenuTextClass = variant === 'navbar-transparent' ? 'text-white' : 'text-brand-secondary-900'
  const mobileMenuBgClass = variant === 'navbar-transparent' ? 'bg-brand-secondary-800' : 'bg-gray-100'

  return (
    <div className="w-full">
      <button
        className={`flex w-full items-center justify-between py-3 px-4 ${mobileMenuTextClass}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium uppercase text-sm">{title}</span>
        <LuChevronDown
          size={20}
          className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className={`${mobileMenuBgClass} py-1`}>
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center py-2 px-8 ${mobileMenuTextClass} hover:bg-brand-primary/10`}
                >
                  <LuChevronRight size={16} className="mr-2" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}