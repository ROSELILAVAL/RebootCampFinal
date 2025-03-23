
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import CampsPreview from '@/components/CampsPreview';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-4">
        <HeroSection />
        <FeatureSection />
        <CampsPreview />
        <FAQ />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
