import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConditionalLayout from "@/components/ConditionalLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michal Krásko - Finančný poradca",
  description: "Pomáham klientom dosahovať ich finančné ciele prostredníctvom osobného prístupu a profesionálnych riešení. Kontaktujte ma pre bezplatnú konzultáciu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConditionalLayout>
          <Navbar />
          {children}
          <Footer />
        </ConditionalLayout>
      </body>
    </html>
  );
}
