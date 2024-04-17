import "@/ui/globals.css";
import { poppins } from "@/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${poppins.className} antialiased`}>
      {children}
    </div>
  );
}
