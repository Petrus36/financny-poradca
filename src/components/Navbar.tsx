
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/domov", label: "Domov" },
  { href: "/o-mne", label: "O mne" },
  { 
    href: "/sluzby", 
    label: "Služby",
    hasDropdown: true,
    subLinks: [
      { href: "/sluzby/investovanie", label: "Investovanie" },
      { href: "/sluzby/hypoteky", label: "Hypotéky" },
      { 
        href: "/sluzby/poistenia", 
        label: "Poistenia",
        hasDropdown: true,
        subLinks: [
          { href: "/sluzby/poistenia/zivotne", label: "Životné poistenie" },
          { href: "/sluzby/poistenia/nezivotne", label: "Neživotné poistenie" },
        ]
      },
      { href: "/sluzby/dochodok", label: "Renta a dôchodok" },
    ]
  },
  { href: "/spoluprace", label: "Spolupráca" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleDropdown = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === href ? null : href);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    // Clear dropdown state on resize to ensure proper behavior across breakpoints
    const handleResize = () => {
      setActiveDropdown(null);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Desktop/Tablet Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 hidden md:block">
        <div className="w-full bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center py-4 md:py-6 lg:py-4">
              {/* Logo on the left */}
              <Link href="/domov" className="flex-shrink-0 absolute left-0">
                <Image
                  src="/MK_logo_cierne_rozsirene.png"
                  alt="Michal Kurka Logo"
                  width={150}
                  height={50}
                  className="h-10 md:h-8 lg:h-14 w-auto"
                  priority
                />
              </Link>
              
              {/* Navigation items centered */}
              <ul className="flex items-center justify-center md:justify-end md:pr-8 lg:justify-center lg:pr-0 space-x-1 md:space-x-2 lg:space-x-4 w-full">
              {navLinks.map((link, index) => (
                <li 
                  key={link.href} 
                  className="flex items-center relative"
                >
                  {link.hasDropdown ? (
                    <div 
                      className="relative group dropdown-container flex items-center lg:py-2 lg:px-1"
                      onMouseEnter={() => setHoveredDropdown(link.href)}
                      onMouseLeave={() => setHoveredDropdown(null)}
                    >
                      {/* Main link to Služby page */}
                      <Link
                        href={link.href}
                        className="text-white hover:text-[#5ECAD5] transition-colors px-2 md:px-3 lg:px-2 py-1 md:py-2 lg:py-1 text-sm md:text-base lg:text-base font-medium"
                      >
                        {link.label}
                      </Link>
                      
                      {/* Dropdown toggle button for tablet/touch devices */}
                      <button
                        onClick={(e) => toggleDropdown(link.href, e)}
                        className="text-white hover:text-[#5ECAD5] transition-colors px-1 py-1 ml-1 hidden md:block lg:hidden"
                        aria-label="Toggle dropdown"
                      >
                        <svg 
                          className={`w-3 h-3 transition-transform duration-200 ${
                            activeDropdown === link.href ? 'rotate-180' : ''
                          }`}
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      
                      {/* Arrow for desktop hover */}
                      <svg 
                        className="w-3 h-3 md:w-4 md:h-4 lg:w-4 lg:h-4 ml-1 transition-transform duration-200 group-hover:rotate-180 text-white hidden lg:block"
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      
                      {/* Dropdown Menu - Tablet (click-based) */}
                      <div className={`absolute top-full left-0 pt-1 transition-all duration-200 z-50 md:block lg:hidden ${
                        activeDropdown === link.href 
                          ? 'opacity-100 visible' 
                          : 'opacity-0 invisible'
                      }`}>
                        <div className="w-40 md:w-44 bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl border border-gray-200/50 overflow-hidden">
                          {link.subLinks?.map((subLink) => (
                            <div key={subLink.href} className="relative">
                              {subLink.hasDropdown ? (
                                <div className="relative">
                                  <div className="flex items-center justify-between px-3 md:px-4 py-2.5 md:py-3 text-[#202325] hover:bg-[#5ECAD5] hover:text-white transition-colors text-xs md:text-sm font-medium border-b border-gray-100 cursor-pointer">
                                    <Link
                                      href={subLink.href}
                                      onClick={closeDropdown}
                                      className="flex-1"
                                    >
                                      {subLink.label}
                                    </Link>
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  href={subLink.href}
                                  onClick={closeDropdown}
                                  className="block px-3 md:px-4 py-2.5 md:py-3 text-[#202325] hover:bg-[#5ECAD5] hover:text-white transition-colors text-xs md:text-sm font-medium border-b border-gray-100 last:border-b-0"
                                >
                                  {subLink.label}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Dropdown Menu - Desktop/Laptop (hover-based) */}
                      <div className={`absolute top-full left-0 pt-1 transition-all duration-200 z-50 hidden lg:block ${
                        hoveredDropdown === link.href 
                          ? 'opacity-100 visible' 
                          : 'opacity-0 invisible'
                      }`}>
                        <div className="w-40 md:w-44 lg:w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl border border-gray-200/50 overflow-hidden">
                          {link.subLinks?.map((subLink) => (
                            <div key={subLink.href} className="relative">
                              {subLink.hasDropdown ? (
                                <div className="group/poistenia relative">
                                  <div className="flex items-center justify-between px-3 md:px-4 lg:px-4 py-2.5 md:py-3 lg:py-3 text-[#202325] hover:bg-[#5ECAD5] hover:text-white transition-colors text-xs md:text-sm lg:text-sm font-medium border-b border-gray-100 cursor-pointer">
                                    <Link
                                      href={subLink.href}
                                      onClick={closeDropdown}
                                      className="flex-1"
                                    >
                                      {subLink.label}
                                    </Link>
                                  </div>
                                  {/* Sub-dropdown with simple CSS hover */}
                                  <div className="absolute left-full top-0 ml-1 opacity-0 invisible group-hover/poistenia:opacity-100 group-hover/poistenia:visible transition-all duration-300 z-[60]">
                                    <div className="w-44 bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl border border-gray-200/50 overflow-hidden">
                                      {subLink.subLinks?.map((subSubLink) => (
                                        <Link
                                          key={subSubLink.href}
                                          href={subSubLink.href}
                                          onClick={closeDropdown}
                                          className="block px-4 py-3 text-[#202325] hover:bg-[#5ECAD5] hover:text-white transition-colors text-sm font-medium border-b border-gray-100 last:border-b-0"
                                        >
                                          {subSubLink.label}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  href={subLink.href}
                                  onClick={closeDropdown}
                                  className="block px-3 md:px-4 lg:px-4 py-2.5 md:py-3 lg:py-3 text-[#202325] hover:bg-[#5ECAD5] hover:text-white transition-colors text-xs md:text-sm lg:text-sm font-medium border-b border-gray-100 last:border-b-0"
                                >
                                  {subLink.label}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white hover:text-[#5ECAD5] transition-colors px-2 md:px-3 lg:px-2 py-1 md:py-2 lg:py-1 text-sm md:text-base lg:text-base font-medium"
                    >
                      {link.label}
                    </Link>
                  )}
                  {index < navLinks.length - 1 && (
                    <div className="w-px h-3 md:h-4 lg:h-4 bg-white/60 mx-1 md:mx-1.5 lg:mx-2"></div>
                  )}
                </li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

    {/* Mobile Logo and Hamburger Button */}
    <div className="absolute top-0 left-0 right-0 z-50 md:hidden">
      <div className="flex items-center justify-between px-4 py-4">
        {/* Logo on the left - only show on home page */}
        <Link href="/domov" className="flex-shrink-0">
          <Image
            src="/MK_logo_cierne_rozsirene.png"
            alt="Michal Kurka Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>
        
        {/* Hamburger button on the right */}
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-lg bg-black/20 backdrop-blur-sm border border-white/20 text-white hover:bg-black/30 transition-all duration-200"
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Menu Overlay */}
    {isMobileMenuOpen && (
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        onClick={closeMobileMenu}
      />
    )}

    {/* Mobile Slide-out Menu */}
    <div className={`fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
      isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
          <h2 className="text-xl font-semibold text-[#202325]">Menu</h2>
          <button
            onClick={closeMobileMenu}
            className="p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-[#202325]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 py-6">
          {navLinks.map((link) => (
            <div key={link.href} className="px-6 py-2">
              {link.hasDropdown ? (
                <div>
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between py-3 text-[#202325] hover:text-[#5ECAD5] transition-colors font-medium"
                  >
                    {link.label}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  {/* Submenu */}
                  <div className="ml-4 mt-2 space-y-1">
                    {link.subLinks?.map((subLink) => (
                      <div key={subLink.href}>
                        <Link
                          href={subLink.href}
                          onClick={closeMobileMenu}
                          className="block py-2 pl-4 pr-2 text-gray-600 hover:text-[#5ECAD5] hover:bg-gray-50/50 rounded-lg transition-colors text-sm"
                        >
                          {subLink.label}
                        </Link>
                        {/* Sub-submenu for nested dropdowns */}
                        {subLink.hasDropdown && subLink.subLinks && (
                          <div className="ml-4 mt-1 space-y-1">
                            {subLink.subLinks.map((subSubLink) => (
                              <Link
                                key={subSubLink.href}
                                href={subSubLink.href}
                                onClick={closeMobileMenu}
                                className="block py-1.5 pl-4 pr-2 text-gray-500 hover:text-[#5ECAD5] hover:bg-gray-50/50 rounded-lg transition-colors text-xs"
                              >
                                {subSubLink.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="block py-3 text-[#202325] hover:text-[#5ECAD5] transition-colors font-medium"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200/50">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Finančný poradca</p>
            <p className="text-lg font-semibold text-[#202325]">Michal Kurka</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}