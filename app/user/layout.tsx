import '@/app/core/ui/global.css';
import { poppins } from '@/app/core/config/fonts';

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