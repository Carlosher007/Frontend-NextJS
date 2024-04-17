import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/ui/globals.css";
import { poppins } from "@/ui/fonts";
import Avatar from "@/ui/components/avatar";
import SideMenu from "@/ui/side-menu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='dark min-h-screen'>
      <body className={`${poppins.className} antialiased`}>
        <div className='border-b'>
          <div className='flex h-16 items-center px-4'>
            IMAGE-HUB
            <div className='ml-auto flex items-center space-x-4'>
              <Avatar />
            </div>
          </div>
        </div>

        <div className="flex">
          <SideMenu />
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
