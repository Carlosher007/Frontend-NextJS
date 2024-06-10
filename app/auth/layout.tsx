"use client"

import { useUserStore } from "@/app/core/store";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [idUser, isLogged, loading, setLoading] = useUserStore((state) => 
    [state.idUser, state.isLogged, state.loading, state.setLoading]);

  const removeUser = useUserStore(state => state.removeUser);

  const handleButton = () => {
    removeUser();
  }

  return (
    <div>
       {!idUser ? (
          // TODO: Add a spinner here
          children
        ) : idUser ? (
          <div className="p-4 flex flex-col justify-center items-center min-h-screen">
          <p className="font-bold text-2xl"> ImageHub </p>
          <div className="pt-10 max-w-auto justify-center items-center mx-auto text-center">
              <p className="text-4xl font-bold">You already have sign up!</p>
              <p>You must return to the home page or the dashboard</p>
              <p>if you want, you can log out here</p>
              <br/>
              <Button onPress={handleButton} className="text-blue-500">Log out</Button>
              <br/>
              <br/>
              <p className="text-small text-gray-400">Welcome to ImageHub Family!</p>
          </div>
      </div>
        ) : (
        children
        )}
    </div>
  );
}
