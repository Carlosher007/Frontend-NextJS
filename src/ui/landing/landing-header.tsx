import Link from 'next/link'
import './header.css'

export default function LandingHeader() {
  return (
    <header>
      <h1 className="logo">Imagehub</h1>
      <ul>
        <li><Link href="/auth/login" className='link'>Login</Link></li>
        <li><Link href="/auth/register" className='link'>Register</Link></li>
      </ul>
    </header>
  )
}