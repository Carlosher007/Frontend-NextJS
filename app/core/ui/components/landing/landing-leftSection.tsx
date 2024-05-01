// import './left-section.css'
import { kanit, poppins } from '@/app/core/config/fonts'
import Link from 'next/link'

export default function LandingLeftSection() {
  return (
    <div className={`${kanit.className} content max-w-lg text-center md:text-start font-medium overflow-hidden`}>
      <h2 className="text-6xl">
        The best place to buy and sell <b className="text-foregroundTertiary">Images</b>
      </h2>
      <p className="text-foregroundSecondary text-lg mt-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque excepturi iusto facilis porro veritatis soluta.
      </p>
      <div className='mt-6'>
        <Link href="/auth/login" className={`${poppins.className} px-3.5 py-2.5 bg-primary text-primaryForeground uppercase font-medium tracking-wider transition-all duration-500 ease-in-out w-64 flex items-center justify-center hover:tracking-widest`}>Continue</Link>
      </div>
    </div>
  )
}
