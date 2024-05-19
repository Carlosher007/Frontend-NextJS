"use client"

import { useUserStore } from "@/app/core/store";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";

export default function Page() {
  const addUser = useUserStore(state => state.addUser);
  const removeUser = useUserStore(state => state.removeUser);
  const id = useUserStore(state => state.id);

  const [idS, setIdS] = useState("")

  useEffect(() => {
    console.log("id del user storage"+id)
    console.log(id)
    setIdS(id)
  },[id])

  const customUser = {
    id: '1',
    username: 'johndoe',
    email: 'john22@gmail.com'
  };

  const handleAddUser = () => {
    addUser(customUser);
  }

  const handleRemoveUser = () => {
    removeUser();
  }

  return (
    <div className="flex flex-col gap-10 max-w-96">
      <Link href={"/"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Login
      </Link>

      <Button onClick={handleAddUser}>
        Add User
      </Button>

      <Button onClick={handleRemoveUser}>
        Remove User
      </Button>

      <span>
        Id del usuario: {id ? id : 'No hay usuario'}
      </span>
    </div>
  )
}