'use client';

import { useUserStore } from '@/app/core/store';
import Link from 'next/link';
import { Button } from '@nextui-org/button';
import { useEffect, useState } from 'react';

export default function Page() {
  const addUser = useUserStore((state) => state.addUser);
  const removeUser = useUserStore((state) => state.removeUser);
  const id = useUserStore((state) => state.idUser);

  const customUser = {
    id: 1,
    username: 'johndoe',
    email: 'john22@gmail.com',
  };

  const handleAddUser = () => {
    addUser(customUser.id);
  };

  const handleRemoveUser = () => {
    removeUser();
  };

  return (
    <div className="flex max-w-96 flex-col gap-10">
      <Link
        href={'/'}
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Login
      </Link>

      <Button onClick={handleAddUser}>Add User</Button>

      <Button onClick={handleRemoveUser}>Remove User</Button>

      <span>Id del usuario: {id ? id : 'No hay usuario'}</span>
    </div>
  );
}
