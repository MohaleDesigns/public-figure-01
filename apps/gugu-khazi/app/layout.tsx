import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gugu Khazi | Career Coach, Author & International Speaker",
  description:
    "Gugu Khazi is an author, talent consultant, career coach, and international speaker specialising in personal career management and leadership development. 20+ years of senior HR leadership.",
  keywords: [
    "Gugu Khazi",
    "Career Coach",
    "Executive Coach",
    "Author",
    "Speaker",
    "Passion to Careers",
    "Master Your Career",
    "Leadership Development",
    "Talent Management",
    "London",
    "South Africa",
  ],
  openGraph: {
    title: "Gugu Khazi | Career Coach, Author & International Speaker",
    description: "Connecting you with careers aligned to your passion. 20+ years of HR leadership excellence.",
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
