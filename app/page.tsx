import LandingHeader from '@/app/core/ui/components/landing/landing-header';
import LandingLeftSection from '@/app/core/ui/components/landing/landing-leftSection';
import LandingRightSection from '@/app/core/ui/components/landing/landing-rightSection';

export default function Page() {
  return (
    <div className="w-screen">
      <LandingHeader />
      <section className="woverflow-hidden mt-10 flex flex-col items-center justify-center gap-24 p-24 py-5 md:flex-row">
        <LandingLeftSection />
        <LandingRightSection />
      </section>
    </div>
  );
}
