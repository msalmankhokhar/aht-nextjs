'use client'
import Link from "next/link";
import { LuMenu as Menu, LuX as X, LuPhone } from "react-icons/lu";
import { useState, useEffect } from "react";
import Logo, { logoForegroundType, logoVarientType } from "./Logo";
import { aht_phone_number } from "@/constants";
import NavDropdown from "./NavDropdown";
import MobileNavDropdown from "./MobileNavDropdown";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  variant?: 'navbar-transparent' | 'navbar-colored',
  className?: string,
}

export default function Navbar({ variant = 'navbar-colored', className }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define styles based on variant
  const navBgClass = variant === 'navbar-transparent' ? 'bg-transparent' : 'bg-brand-secondary shadow-sm';
  const textColorClass = variant === 'navbar-transparent' ? 'text-white' : 'text-brand-secondary-900';
  const mobileMenuBgClass = variant === 'navbar-transparent' ? 'bg-brand-secondary-900' : 'bg-white';
  const mobileMenuTextClass = variant === 'navbar-transparent' ? 'text-white' : 'text-brand-secondary-900';
  const mobileMenuBorderClass = variant === 'navbar-transparent' ? 'border-white/10' : 'border-gray-200';
  const logoForeground: logoForegroundType = variant === 'navbar-colored' ? 'light' : 'dark';
  const logoVariant : logoVarientType = variant === 'navbar-colored' ? 'logo-white' : 'logo';

  // Umrah packages dropdown items
  const packageItems = [
    { name: '3 Star Packages', href: '/3-star-packages' },
    { name: '4 Star Packages', href: '/4-star-packages' },
    { name: '5 Star Packages', href: '/5-star-packages' },
    { name: 'Economy Packages', href: '/economy-packages' },
    { name: 'All Umrah Packages', href: '/all-umrah-packages' },
  ];

  // Monthly packages dropdown items
  const monthlyItems = [
    { name: 'January Umrah Packages', href: '/january-umrah-packages' },
    { name: 'February Umrah Packages', href: '/february-umrah-packages' },
    { name: 'March Umrah Packages', href: '/march-umrah-packages' },
    { name: 'April Umrah Packages', href: '/april-umrah-packages' },
    { name: 'May Umrah Packages', href: '/may-umrah-packages' },
    { name: 'June Umrah Packages', href: '/june-umrah-packages' },
    { name: 'July Umrah Packages', href: '/july-umrah-packages' },
    { name: 'August Umrah Packages', href: '/august-umrah-packages' },
    { name: 'September Umrah Packages', href: '/september-umrah-packages' },
    { name: 'October Umrah Packages', href: '/october-umrah-packages' },
    { name: 'November Umrah Packages', href: '/november-umrah-packages' },
    { name: 'December Umrah Packages', href: '/december-umrah-packages' },
  ];

  return (
    <nav className={`z-[1000] top-0 left-0 right-0 m-3 sm:m-5 rounded-2xl py-2.5 pl-7 pr-7 flex items-center justify-between ${navBgClass} ${textColorClass} ${className}`}>
      <div className="flex items-center gap-8">
        <Logo variant={logoVariant} foreGround={logoForeground} />
      </div>
      
      <div className="hidden lg:flex items-center gap-2">
        {/* Desktop Navigation */}
        <ul className="flex items-center gap-8 mr-5">
          <li><Link href={'/'} className="cursor-pointer text-white font-normal uppercase text-sm">Home</Link></li>
          <li><NavDropdown title="Umrah Packages" items={packageItems} variant={variant} /></li>
          <li><NavDropdown title="Monthly Umrah Packages" items={monthlyItems} variant={variant} /></li>
        </ul>
        <Link href={`tel:${aht_phone_number}`} className={`${variant == 'navbar-transparent' ? `btn-secondary-white` : 'btn-primary'} space-x-2 text-sm`}>
          <LuPhone size={18} />
          <span>Call Now</span>
        </Link>
      </div>

      {/* Mobile menu button */}
      <button 
        className="lg:hidden text-white p-2 focus:outline-none" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-xs z-[1001] ${mobileMenuBgClass} ${mobileMenuTextClass} shadow-xl flex flex-col overflow-y-auto`}
          >
            <div className={`p-4 flex items-center justify-between border-b ${mobileMenuBorderClass}`}>
              <Logo variant={logoVariant} foreGround={logoForeground} />
              <button 
                className="focus:outline-none" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col py-4">
              <Link 
                href={'/'} 
                className={`py-3 px-4 ${mobileMenuTextClass} hover:bg-brand-primary/10`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <MobileNavDropdown 
                title="Umrah Packages" 
                items={packageItems} 
                variant={variant} 
              />
              
              <MobileNavDropdown 
                title="Monthly Umrah Packages" 
                items={monthlyItems} 
                variant={variant} 
              />
            </div>
            
            <div className={`mt-auto p-4 border-t ${mobileMenuBorderClass}`}>
              <Link 
                href={`tel:${aht_phone_number}`} 
                className={`${variant === 'navbar-transparent' ? 'bg-white text-brand-secondary-900' : 'bg-brand-primary text-white'} py-2 px-4 rounded flex items-center justify-center gap-2 w-full`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <LuPhone size={18} />
                <span>Call Now</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-[1000]"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}
