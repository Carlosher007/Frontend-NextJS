"use client"

import Link from 'next/link'
import { ThemeSwitch } from '../dashboard/theme-switch'
import { useUserStore } from "@/app/core/store";

export default function LandingHeader() {
  const id = useUserStore(state => state.idUser);
  const username = useUserStore(state => state.username);
  
  return (
    <header className="w-full flex md:justify-between justify-center py-10 px-20">
      <h1 className="text-2xl uppercase font-bold tracking-wider">Imagehub</h1>
      <ul className="hidden md:flex space-x-10">
        <li>
          <ThemeSwitch />
        </li>
        <li>
          {!username && <Link href="/auth/login">
            <span className='uppercase tracking-wider transition-colors duration-500 hover:text-lightHover dark:hover:text-darkHover'>Login</span>
          </Link>}
        </li>
        <li>
          {!username && <Link
            href="/auth/register"
            className='uppercase tracking-wider transition-colors duration-500 hover:text  hover:text-lightHover dark:hover:text-darkHove'
          >
            Register
          </Link>}
        </li>
        <li>
          {username && <p>Welcome, {username}</p>}
        </li>
      </ul>
    </header>
  )
}