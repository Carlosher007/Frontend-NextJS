import LandingHeader from '@/ui/landing/landing-header'
import LandingLeftSection from '@/ui/landing/landing-leftSection';
import LandingRightSection from '@/ui/landing/landing-rightSection';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="w-screen">
      <LandingHeader />
      <section className="flex flex-col items-center justify-center mt-10 p-24 py-5 gap-24 md:flex-row woverflow-hidden">
        <LandingLeftSection />
        <LandingRightSection />
      </section>
    </div>
  );
}