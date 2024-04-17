import LandingHeader from '@/ui/landing/Landing-Header'
import LandingLeftSection from '@/ui/landing/Landing-LeftSection';
import LandingRightSection from '@/ui/landing/Landing-RightSection';

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