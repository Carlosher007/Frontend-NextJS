import LandingHeader from '@/ui/landing/landing-header'
import LandingLeftSection from '@/ui/landing/landing-leftSection';
import LandingRightSection from '@/ui/landing/landing-rightSection';

export default function Page() {
  return (
    <>
      <LandingHeader />
      <section className="flex items-center justify-between min-h-screen p-24 gap-24">    
        <LandingLeftSection />
        <LandingRightSection />
      </section>
    </>
  );
}