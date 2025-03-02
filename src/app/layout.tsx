import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "@/providers/Providers";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Second Deal || SecondHand 🛒 - Marketplace for Buying & Selling Used Items",
  description:
    "SecondHand is a platform that connects buyers and sellers of used items. Discover great deals and give new life to pre-loved products.",
  keywords:
    "secondhand, marketplace, buy used items, sell used items, sustainable shopping, pre-loved products, online marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} `} suppressHydrationWarning>
        <Providers>{children}</Providers>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
