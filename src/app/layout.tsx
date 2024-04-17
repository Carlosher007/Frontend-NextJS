import { Inter } from "next/font/google";
import "@/ui/globals.css";
import { poppins } from "@/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='dark min-h-screen'>
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
