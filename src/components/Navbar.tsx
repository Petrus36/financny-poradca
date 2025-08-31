
"use client";

import Link from "next/link";
import { useState } from "react";

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
      { href: "/sluzby/poistenia", label: "Poistenia" },
      { href: "/sluzby/dochodok", label: "Dôchodok" },
    ]
  },
  { href: "/spoluprace", label: "Spolupráca" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop/Tablet Navbar */}
      <nav className="absolute top-4 left-75 z-50 hidden md:block">
      <ul className="flex items-center space-x-4">
        {navLinks.map((link, index) => (
          <li 
            key={link.href} 
            className="flex items-center relative"
          >
            {link.hasDropdown ? (
              <div className="relative group">
                <Link
                  href={link.href}
                  className="text-white hover:text-[#5ECAD5] transition-colors px-2 py-1 text-base font-medium flex items-center"
                >
                  {link.label}
                  <svg 
                    className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180"
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl border border-gray-200/50 overflow-hidden">
                    {link.subLinks?.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className="block px-4 py-3 text-[#202325] hover:bg-[#5ECAD5] hover:text-white transition-colors text-sm font-medium border-b border-gray-100 last:border-b-0"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                href={link.href}
                className="text-white hover:text-[#5ECAD5] transition-colors px-2 py-1 text-base font-medium"
              >
                {link.label}
              </Link>
            )}
            {index < navLinks.length - 1 && (
              <div className="w-px h-4 bg-white/60 mx-2"></div>
            )}
          </li>
        ))}
      </ul>
    </nav>

    {/* Mobile Hamburger Button */}
    <div className="absolute top-4 right-4 z-50 md:hidden">
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
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        onClick={closeMobileMenu}
                        className="block py-2 pl-4 pr-2 text-gray-600 hover:text-[#5ECAD5] hover:bg-gray-50/50 rounded-lg transition-colors text-sm"
                      >
                        {subLink.label}
                      </Link>
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
            <p className="text-lg font-semibold text-[#202325]">Michal Kurko</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}