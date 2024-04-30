import "@/app/ui/globals.css";
import { poppins } from "@/config/fonts";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${poppins.className} antialiased p-10`}>
            {children}
        </div>
    );
}