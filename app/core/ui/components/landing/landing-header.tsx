import Link from 'next/link'
import { ThemeSwitch } from '../dashboard/theme-switch'

export default function LandingHeader() {
  return (
    <header className="w-full flex md:justify-between justify-center py-10 px-20">
      <h1 className="text-2xl uppercase font-bold tracking-wider">Imagehub</h1>
      <ul className="hidden md:flex space-x-10">
        <li>
          <ThemeSwitch />
        </li>
        <li>
          <Link href="/auth/login">
            <span className='uppercase tracking-wider transition-colors duration-500 hover:text-lightHover dark:hover:text-darkHover'>Login</span>
          </Link>
        </li>
        <li>
          <Link
            href="/auth/register"
            className='uppercase tracking-wider transition-colors duration-500 hover:text  hover:text-lightHover dark:hover:text-darkHove'
          >
            Register
          </Link>
        </li>
      </ul>
    </header>
  )
}