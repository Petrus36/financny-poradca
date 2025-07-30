import Link from "next/link";

const navLinks = [
  { href: "/domov", label: "Domov" },
  { href: "/o-mne", label: "O mne" },
  { href: "/sluzby", label: "Služby" },
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
          <li key={link.href} className="flex items-center">
            <Link
              href={link.href}
              className="text-white hover:text-[#5ECAD5] transition-colors px-2 py-1 text-base font-medium"
            >
              {link.label}
            </Link>
            {index < navLinks.length - 1 && (
              <div className="w-px h-4 bg-white/60 mx-2"></div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
} 