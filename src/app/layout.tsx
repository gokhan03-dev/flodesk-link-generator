import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Global Investments Inc Ltd - Link Generator",
  description: "Global Investments Inc Ltd için özel Flodesk linkleri oluşturun. Kampanya parametreleri ile kişisştirilmiş linkler.",
  keywords: ["Global Investments", "Flodesk", "Link Generator", "Campaign", "Marketing"],
  authors: [{ name: "Global Investments Inc Ltd" }],
  icons: {
    icon: "https://globalinvestsinc.com/wp-content/uploads/2025/03/cropped-global-favicon.png",
  },
  openGraph: {
    title: "Global Investments Inc Ltd - Link Generator",
    description: "Global Investments Inc Ltd için özel Flodesk linkleri oluşturun",
    siteName: "Global Investments Inc Ltd",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Investments Inc Ltd - Link Generator",
    description: "Global Investments Inc Ltd için özel Flodesk linkleri oluşturun",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
