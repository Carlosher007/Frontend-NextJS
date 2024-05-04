import { Navbar } from "@/app/core/ui/components/dashboard/dashboard-header";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/app/core/config/site";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        {children}
      </div>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href={siteConfig.links.github}
          title="nextui.org homepage"
        >
          <span className="text-default-600">ImageHub by</span>
          <p>Univalle</p>
        </Link>
      </footer>
    </div>
  );
}
