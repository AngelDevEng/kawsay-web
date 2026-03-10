import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductSection from '@/components/ProductSection';
import BenefitsSection from '@/components/BenefitsSection';
import TeamSection from '@/components/TeamSection';
import MissionVisionSection from '@/components/MissionVisionSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProductSection />
      <BenefitsSection />
      <TeamSection />
      <MissionVisionSection />
      <Footer />
    </main>
  );
}
