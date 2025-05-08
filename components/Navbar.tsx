'use client'
import Link from "next/link";
import { LuSearch as Search, LuMenu as Menu, LuChevronDown as ChevronDown, LuX as X, LuPhone, LuUser } from "react-icons/lu";
import { useState } from "react";
import Logo, { logoForegroundType, logoVarientType } from "./Logo";

interface NavbarProps {
  variant?: 'navbar-transparent' | 'navbar-colored',
  className?: string,
}

export default function Navbar({ variant = 'navbar-colored', className }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Define styles based on variant
  const navBgClass = variant === 'navbar-transparent' ? 'bg-transparent' : 'bg-brand-secondary shadow-sm';
  const textColorClass = variant === 'navbar-transparent' ? 'text-white' : 'text-brand-secondary-900';
  const mobileMenuBgClass = variant === 'navbar-transparent' ? 'bg-brand-secondary-900' : 'bg-white';
  const mobileMenuTextClass = variant === 'navbar-transparent' ? 'text-white' : 'text-brand-secondary-900';
  const mobileMenuBorderClass = variant === 'navbar-transparent' ? 'border-white/10' : 'border-gray-200';
  const logoForeground: logoForegroundType = variant === 'navbar-colored' ? 'light' : 'dark';
  const logoVariant : logoVarientType = variant === 'navbar-colored' ? 'logo-white' : 'logo';

  return (
    <nav className={`z-[1000] left-0 right-0 m-3 sm:m-5 rounded-2xl py-2.5 pl-7 pr-7 flex items-center justify-between ${navBgClass} ${textColorClass} ${className}`}>
      <div className="flex items-center gap-8">
        <Logo variant={logoVariant} foreGround={logoForeground} />
      </div>
      
      <div className="hidden lg:flex items-center gap-2">
        {/* Desktop Navigation */}
        <ul className="flex items-center gap-8 mr-5">
          <li><Link href={'#'} className="cursor-pointer text-white font-normal uppercase text-sm">Home</Link></li>
          <li><Link href={'#'} className="cursor-pointer text-white font-normal uppercase text-sm">Umrah Packages</Link></li>
          <li><Link href={'#'} className="cursor-pointer text-white font-normal uppercase text-sm">Accomodation</Link></li>
          <li><Link href={'#'} className="cursor-pointer text-white font-normal uppercase text-sm">About Us</Link></li>
        </ul>
        <button className={`${variant == 'navbar-transparent' ? `btn-secondary-white` : 'btn-primary'} space-x-2 text-sm`}>
          <LuPhone size={18} />
          <span>Contact Us</span>
        </button>
        <button className={`btn-secondary-mixed space-x-2 text-sm`}>
          <LuUser size={18} />
          <span>Log In</span>
        </button>
      </div>
      
      {/* Mobile menu button */}
      <div className="hidden items-center gap-4">
        <button onClick={() => setSearchOpen(!searchOpen)} className="p-2" aria-label="Search">
          <Search size={20} className={textColorClass} />
        </button>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2" aria-label="Menu">
          {mobileMenuOpen ? <X size={24} className={textColorClass} /> : <Menu size={24} className={textColorClass} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`hidden absolute top-full left-0 right-0 ${mobileMenuBgClass} shadow-lg z-30 px-cont py-4`}>
          <div className="flex flex-col space-y-3">
            <Link href="#" className={`${mobileMenuTextClass} font-semibold py-2 border-b ${mobileMenuBorderClass}`}>Home</Link>
            <div>
              <button className={`${mobileMenuTextClass} font-semibold py-2 flex items-center justify-between w-full border-b ${mobileMenuBorderClass}`}>
                Umrah Packages <ChevronDown size={16} />
              </button>
            </div>
            <Link href="#" className={`${mobileMenuTextClass} font-semibold py-2 border-b ${mobileMenuBorderClass}`}>Hotels</Link>
            <Link href="#" className={`${mobileMenuTextClass} font-semibold py-2 border-b ${mobileMenuBorderClass}`}>Visa</Link>
            <Link href="#" className={`${mobileMenuTextClass} font-semibold py-2 border-b ${mobileMenuBorderClass}`}>Contact Us</Link>
            <div className="flex items-center py-3">
              <button className="px-6 py-3 rounded-sm bg-brand-primary text-white font-bold text-sm w-full" type="button">Sign In</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
