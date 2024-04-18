'use client'
import { Inter } from "next/font/google";
import "@/ui/globals.css";
import { poppins } from "@/ui/fonts";
import { NextUIProvider } from "@nextui-org/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='dark min-h-screen'>
      <body className={`${poppins.className} antialiased`}>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
