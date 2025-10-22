import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConditionalLayout from "@/components/ConditionalLayout";
import CookieConsent from "@/components/CookieConsent";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Prevent invisible text while loading
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Michal Kurka - Finančný poradca",
  description: "Pomáham klientom dosahovať ich finančné ciele prostredníctvom osobného prístupu a profesionálnych riešení. Kontaktujte ma pre bezplatnú konzultáciu.",
  keywords: ["finančný poradca", "investovanie", "poistenie", "hypotéky", "dôchodok", "Slovensko"],
  authors: [{ name: "Michal Kurka" }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConditionalLayout>
          <Navbar />
          {children}
          <Footer />
          <CookieConsent />
        </ConditionalLayout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
