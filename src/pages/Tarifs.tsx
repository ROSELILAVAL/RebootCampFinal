import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Award, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import RobotMascot from '@/components/RobotMascot';
import { useLanguageStore } from '@/i18n';
import { useTranslation } from '@/i18n/translations';

const Tarifs: React.FC = () => {
  const { language } = useLanguageStore();
  const t = useTranslation(language);
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation on mount
    setIsVisible(true);
    
    // Observer for scroll animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <Header />
      
      <main className="flex-grow ">
        <section ref={sectionRef} className="container section-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mb-4 inline-block relative">
              <RobotMascot className="w-24 h-24" initialExpression="happy" />
            </div>
            <h1 
              className={cn(
                "text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-reboot-blue to-purple-600 bg-clip-text text-transparent",
                isVisible ? "animate-fade-in" : "opacity-0"
              )}
            >
              {t.tarifPageTitle}
            </h1>
            <p 
              className={cn(
                "text-xl text-gray-700 max-w-2xl mx-auto",
                isVisible ? "animate-fade-in" : "opacity-0"
              )}
            >
              {t.tarifPageSubTitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Morning/Afternoon Option */}
            <div 
              className={cn(
                "relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 card-hover border-2 border-blue-100 group",
                isVisible ? "animate-slide-in-left" : "opacity-0"
              )}
              style={{ maxWidth:'97%', marginBottom: '10px', animationDelay: '0.1s' }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full z-0" />
              
              <div className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-sm font-medium">
                    {t.tarifPageMorningStage} / {t.tarifPageAfternoonStage}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{t.tarifPageMorningOrAfternoon}</h3>
                
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-3xl font-bold text-reboot-blue">{t.tarifPagePriceMorning}</span>
                  <span className="text-gray-500 pb-1">{t.tarifPagePerWeek}</span>
                </div>
                
                <p className="text-gray-600 mb-6">{t.tarifPageFiveHalfDays}</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="text-green-500 mt-1"><Star className="h-4 w-4" /></div>
                    <span className="text-gray-700">{t.tarifPageMaterialInformations}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-green-500 mt-1"><Star className="h-4 w-4" /></div>
                    <span className="text-gray-700">{t.tarifPageSmallGroup}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-green-500 mt-1"><Star className="h-4 w-4" /></div>
                    <span className="text-gray-700">{t.tarifPageCertificate}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-green-500 mt-1"><Star className="h-4 w-4" /></div>
                    <span className="text-gray-700">{t.tarifPageSnack}</span>
                  </li>
                </ul>
                
                <Button asChild size="lg" className="w-full group-hover:scale-105 transition-transform">
                  <Link to="/stages">
                    {t.viewCamps}
                    <ChevronRight className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Full Day Option */}
            <div 
              className={cn(
                "relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 card-hover scale-105 border-2 border-reboot-yellow transform -translate-y-4 group",
                isVisible ? "animate-slide-in-left" : "opacity-0"
              )}
              style={{ maxWidth:'97%', marginBottom: '10px', animationDelay: '0.2s' }}
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-reboot-yellow/30 rounded-full z-0" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-reboot-blue/20 rounded-full z-0" />
              
              <div className="absolute top-0 left-0 right-0 bg-reboot-yellow text-reboot-dark py-1 text-center text-sm font-bold">
                ✨ {t.tarifPagePopular} ✨
              </div>
              
              <div className="p-8 pt-12 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-reboot-yellow/20 text-reboot-dark rounded-full px-3 py-1 text-sm font-medium">
                    {t.tarifPageFullDayStage}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{t.tarifPageFullDay}</h3>
                
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-3xl font-bold text-reboot-blue">{t.tarifPagePriceFullDay}</span>
                  <span className="text-gray-500 pb-1">{t.tarifPagePerWeek}</span>
                </div>
                
                <p className="text-gray-600 mb-6">{t.tarifPageFiveFullDays}</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="text-yellow-500 mt-1"><Award className="h-4 w-4" /></div>
                    <span className="text-gray-700">{t.tarifPageCertificate}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-yellow-500 mt-1"><Award className="h-4 w-4" /></div>
                    <span className="text-gray-700">{t.tarifPageCertificate}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-yellow-500 mt-1"><Award className="h-4 w-4" /></div>
                    <span className="text-gray-700">{t.tarifPageCertificate}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-yellow-500 mt-1"><Award className="h-4 w-4" /></div>
                    <span className="text-gray-700">{t.tarifPageSnack}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-yellow-500 mt-1"><Award className="h-4 w-4" /></div>
                    <span className="font-medium text-gray-800">{t.tarifPageMaisonDeLia}</span>
                  </li>
                </ul>
                
                <Button asChild size="lg" variant="default" className="w-full bg-reboot-yellow text-reboot-dark hover:bg-reboot-yellow/90 group-hover:scale-105 transition-transform">
                  <Link to="/stages">
                    {t.viewCamps}
                    <ChevronRight className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Private Option */}
            <div 
              className={cn(
                "relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 card-hover border-2 border-purple-200 group",
                isVisible ? "animate-slide-in-left" : "opacity-0"
              )}
              style={{ maxWidth:'99%', marginBottom: '10px',animationDelay: '0.3s' }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-bl-full z-0" />
              
              <div className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full px-3 py-1 text-sm font-medium">
                    {t.tarifPagePrivateLesson}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{t.tarifPagePrivate}</h3>
                
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-3xl font-bold text-purple-600">{t.tarifPagePricePrivate}</span>
                  <span className="text-gray-500 pb-1">{t.tarifPagePerWeek}</span>
                </div>
                
                <p className="text-gray-600 mb-6">{t.tarifPagePrivateWeek}</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="text-purple-500 mt-1"><Trophy className="h-4 w-4" /></div>
                    <span className="text-gray-700">{t.tarifPageCertificate}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-purple-500 mt-1"><Trophy className="h-4 w-4" /></div>
                    <span className="text-gray-700">{t.certificate}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-purple-500 mt-1"><Trophy className="h-4 w-4" /></div>
                    <span className="text-gray-700">{t.tarifPageMaisonDeLia}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-purple-500 mt-1"><Trophy className="h-4 w-4" /></div>
                    <span className="font-medium text-gray-800">{t.tarifPageGroupPossibility}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-purple-500 mt-1"><Trophy className="h-4 w-4" /></div>
                    <span className="font-medium text-gray-800">{t.tarifPageCustomizedProgram}</span>
                  </li>
                </ul>
                
                <Button asChild size="lg" className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white group-hover:scale-105 transition-transform">
                  <Link to="/stages">
                    {t.viewCamps}
                    <ChevronRight className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center text-gray-500 italic max-w-2xl mx-auto mt-8">
            {t.tarifPageSpecialNote}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tarifs;
