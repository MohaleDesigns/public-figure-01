import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thapelo Jonas | Coach TJ - Life Coach, Speaker, Author",
  description:
    "Thapelo Jonas (Coach TJ) is an internationally certified life coach, speaker, author of Made to Win, property investor, and pastor. Empowering you to prosper in life, business, and finances.",
  keywords: [
    "Thapelo Jonas",
    "Coach TJ",
    "Life Coach",
    "Speaker",
    "Author",
    "Made to Win",
    "Property Investor",
    "Pastor",
    "South Africa",
    "Bloemfontein",
    "Personal Development",
    "Money Game",
    "Fitness",
    "Family",
  ],
  openGraph: {
    title: "Thapelo Jonas | Coach TJ",
    description: "Internationally Certified Life Coach | Speaker | Author | Property Investor | Pastor",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
