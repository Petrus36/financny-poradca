"use client";

import Link from "next/link";

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
  { href: "/referencie", label: "Referencie" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  return (
    <nav className="absolute top-4 left-75 z-50">
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
                    {link.subLinks?.map((subLink, subIndex) => (
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
  );
}