'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface ConditionalLayoutProps {
  children: ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isFormularPage = pathname === '/formular';
  const isAdminPage = pathname === '/admin';

  if (isFormularPage || isAdminPage) {
    // For formular and admin pages, only render the page content (children[1])
    // children[0] = Navbar, children[1] = page content, children[2] = Footer
    const childrenArray = Array.isArray(children) ? children : [children];
    return <>{childrenArray[1]}</>;
  }

  // For all other pages, render everything (Navbar + content + Footer)
  return <>{children}</>;
}
