
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles } from 'lucide-react';
import RobotMascot from './RobotMascot';
import { cn } from '@/lib/utils';
import { useLanguageStore } from '@/i18n';
import { useTranslation } from '@/i18n/translations';

const TopLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguageStore();
  const t = useTranslation(language);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50">
      {/* Decorative elements */}
      <div 
        className="absolute -top-40 right-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-pulse" 
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/4 left-10 w-20 h-20 bg-pink-300/30 rounded-full blur-xl animate-float"
        style={{ animationDelay: '1s' }}
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-1/4 right-10 w-24 h-24 bg-green-300/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      />
      
      {/* Playful SVG pattern background */}
      <div className="absolute inset-0 opacity-5 bg-bubbles" aria-hidden="true" />

      <div className="max-w-[1250px!important] container relative z-10 flex flex-col-reverse md:flex-row items-center">
        {/* Content */}
        <div 
          className={cn(
            "w-full md:w-3/5 mt-8 md:mt-0 md:pr-6 transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance bg-gradient-to-br from-reboot-blue via-purple-600 to-reboot-coral bg-clip-text text-transparent">
            {t.landingTitle}
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 max-w-2xl text-balance">
            {t.landingSubtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="rounded-full font-medium text-base bg-gradient-to-r from-reboot-blue to-purple-600 hover:from-reboot-blue/90 hover:to-purple-700 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all">
              <Link to="/stages" className="flex items-center">
                <Sparkles className="mr-2 h-5 w-5" />
                {t.landingCta}
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="rounded-full border-reboot-blue/30 hover:bg-reboot-blue/5 transition-all duration-300">
              <Link to="/about">
                {t.landingSecondaryCta}
              </Link>
            </Button>
          </div>
          
          {/* Decorative dots */}
          <div className="hidden md:flex mt-12 space-x-1.5">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-80 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
        
        {/* Robot Mascot */}
        <div 
          className={cn(
            "w-full md:w-2/5 flex justify-center md:justify-end transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="relative">
            <div className="absolute -z-10 inset-0 w-64 h-64 bg-gradient-to-br from-yellow-300/50 via-pink-300/30 to-blue-300/40 rounded-full blur-2xl opacity-80 blob-animation" aria-hidden="true"></div>
            <RobotMascot className="w-52 h-52 md:w-72 md:h-72 relative z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopLanding;
