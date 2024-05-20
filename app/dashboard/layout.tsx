"use client"
import { Navbar } from "@/app/core/ui/components/dashboard/dashboard-header";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/app/core/config/site";
import { useEffect } from "react";
import { useUserStore, useCartStore } from "@/app/core/store";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [idUser, isLogged, loading, setLoading] = useUserStore((state) => [state.idUser, state.isLogged, state.loading, state.setLoading]);

  const [setIdUser, removeIdUser] = useCartStore((state) => [state.setIdUser, state.removeIdUser]);

  useEffect(() => {
    if (idUser !== null) {
      setIdUser(idUser);
    } else {
      removeIdUser();
    }
  }, [idUser]);

  useEffect(() => {
    // Establece el estado de carga a true al inicio de la carga de datos
    setLoading(true);

    // Carga los datos del usuario aquí...

    // Establece el estado de carga a false al final de la carga de datos
    setLoading(false);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        {
          loading ?
            <div>Loading...</div>
            :
            isLogged ?
              children
              :
              <div>
                You must be logged in to access this page
              </div>
        }
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
