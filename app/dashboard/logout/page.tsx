"use client"
import { Button } from '@nextui-org/button';

export default function Page() {

  const handleLogout = async () => {
    console.log("Llamar a la API para cerrar sesión");
  }

  return (
    <div className="">

      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}