import DashboardHeader from "@/ui/dashboard/dashboard-header";
import { Link } from "@nextui-org/link";
import {siteConfig} from "@/config/site";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="relative flex flex-col h-screen">
        <DashboardHeader />
        <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
          {children}
        </main>
        <footer className="w-full flex items-center justify-center py-3">
          <Link
            isExternal
            className="flex items-center gap-1 text-current"
            href={siteConfig.links.github}
            title="nextui.org homepage"
          >
            <span className="text-default-600">ImageHub by</span>
            <p className="text-primary">Univalle</p>
          </Link>
        </footer>
      </div>
    </div>
  );
}
