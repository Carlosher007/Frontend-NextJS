import './left-section.css'
import { kanit, poppins } from '../fonts'
import Link from 'next/link'

export default function LandingLeftSection() {
  return (
    <div className={`${kanit.className} content`}>
      <h2>The best place to buy and sell <b>Images</b></h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque excepturi iusto facilis porro veritatis soluta.</p>
      <Link href="/auth/login" className={`${poppins.className} btn flex items-center justify-center`}>Continue</Link>
    </div>
  )
}