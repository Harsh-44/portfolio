import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  IBM_Plex_Mono,
  Manrope,
  Syne,
} from "next/font/google";
import { SmoothScroll } from "@/app/_components/smooth-scroll";
import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

const displayFont = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

const editorialFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-editorial",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Harsh Hareendran Kallinkeel | Frontend Engineer & UI/UX Designer",
  description:
    "Portfolio website for Harsh Hareendran Kallinkeel, a UI/UX-focused frontend engineer in Singapore building polished, production-ready product experiences.",
  keywords: [
    "Harsh Hareendran Kallinkeel",
    "Frontend Engineer",
    "UI UX Designer",
    "Next.js Portfolio",
    "Singapore",
    "SUTD",
  ],
  openGraph: {
    title: "Harsh Hareendran Kallinkeel",
    description:
      "UI/UX Designer and Frontend Engineer based in Singapore, focused on product thinking, design systems, and polished frontend execution.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Hareendran Kallinkeel",
    description:
      "UI/UX Designer and Frontend Engineer based in Singapore, focused on product thinking and polished frontend execution.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} ${editorialFont.variable} ${monoFont.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full bg-[var(--color-canvas)] text-[var(--color-text)]">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
