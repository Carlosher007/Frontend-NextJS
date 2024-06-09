import { kanit, poppins } from '@/app/core/config/fonts';
import Link from 'next/link';

export default function LandingLeftSection() {
  return (
    <div
      className={`${kanit.className} content max-w-lg overflow-hidden text-center font-medium md:text-start`}
    >
      <h2 className="text-6xl">
        The best place to buy and sell{' '}
        <b className="text-lightHighlightedForeground dark:text-darkHighlightedForeground">
          Images
        </b>
      </h2>
      <p className="dark:text-foregroundSecondary mt-2 text-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
        excepturi iusto facilis porro veritatis soluta.
      </p>
      <div className="mt-6">
        <Link
          href="/auth/login"
          className={`${poppins.className} flex w-64 items-center justify-center bg-lightButtonBackground px-3.5 py-2.5 font-medium  uppercase tracking-wider text-lightButtonForeground transition-all duration-500 ease-in-out hover:tracking-widest dark:bg-darkButtonBackground dark:text-darkButtonForeground`}
        >
          Continue
        </Link>
      </div>
    </div>
  );
}
