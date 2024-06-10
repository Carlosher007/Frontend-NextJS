'use client';
import { useEffect } from 'react';

import { useUserStore } from '@/app/core/store';
import { Navbar } from '@/app/core/ui/components/dashboard/dashboard-header';
import { Link } from '@nextui-org/link';
import { useSiteConfig } from '@/app/core/config/site';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [idUser, loading, setLoading] = useUserStore((state) => [
    state.idUser,
    state.loading,
    state.setLoading,
  ]);

  const siteConfig = useSiteConfig();

  useEffect(() => {
    setLoading(true);

    // Load you user data here...
    // const getCartApi = async () => {
    //   getCart();
    // }
    // getCartApi()

    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mx-auto max-w-7xl flex-grow px-6 pt-16">
        {loading ? (
          // TODO: Add a spinner here
          <div>Loading...</div>
        ) : idUser ? (
          children
        ) : (
          <div>You must be logged in to access this page</div>
        )}
      </div>
      <footer className="flex w-full items-center justify-center py-3">
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
