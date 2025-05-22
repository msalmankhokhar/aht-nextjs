'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { LuChevronDown, LuChevronUp } from 'react-icons/lu'
import { motion, AnimatePresence } from 'framer-motion'

interface NavDropdownProps {
  title: string
  items: {
    name: string
    href: string
  }[]
  variant?: 'navbar-transparent' | 'navbar-colored'
}

export default function NavDropdown({ title, items, variant = 'navbar-colored' }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const textColorClass = variant === 'navbar-transparent' ? 'text-white' : 'text-white'
  const dropdownBgClass = variant === 'navbar-transparent' ? 'bg-brand-secondary-900' : 'bg-brand-secondary'

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`flex items-center gap-1 cursor-pointer ${textColorClass} font-normal uppercase text-sm`}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        <span>{title}</span>
        {isOpen ? <LuChevronUp size={16} /> : <LuChevronDown size={16} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full left-0 mt-2 w-64 rounded-lg shadow-lg ${dropdownBgClass} z-50`}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="py-2">
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`block px-4 py-2 hover:bg-white/10 ${textColorClass}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}