
import React from 'react';
import Header from '@/components/Header';
import TopLanding from '@/components/TopLanding';
import FeatureSection from '@/components/FeatureSection';
import CampsPreview from '@/components/CampsPreview';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-4">
        <TopLanding />
        <FeatureSection />
        <CampsPreview />
        <FAQ />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Landing;
