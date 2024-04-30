import LandingHeader from '@/app/core/ui/components/landing/landing-header'
import LandingLeftSection from '@/app/core/ui/components/landing/landing-leftSection';
import LandingRightSection from '@/app/core/ui/components/landing/landing-rightSection';


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