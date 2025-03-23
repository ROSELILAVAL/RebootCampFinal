
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, PartyPopper } from 'lucide-react';
import RobotMascot from './RobotMascot';
import { cn } from '@/lib/utils';
import { useLanguageStore, Language } from '@/i18n';
import { useTranslation } from '@/i18n/translations';

type CTASectionProps = {
  language?: Language;
};

const CTASection: React.FC<CTASectionProps> = ({ language: langProp }) => {
  const { language: langStore } = useLanguageStore();
  const language = langProp || langStore;
  const t = useTranslation(language);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-reboot-blue via-purple-600 to-blue-700" aria-hidden="true"></div>
      
      {/* Fun patterns */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl" aria-hidden="true"></div>
      
      {/* Animated stars/particles */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.6 + Math.random() * 0.4,
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 2}s`
          }}
          aria-hidden="true"
        />
      ))}
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div 
            className={cn(
              "w-full md:w-2/3 text-white mb-10 md:mb-0 transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              {t.ctaTitle}
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl text-balance">
              {t.ctaDescription}
            </p>
            
            <div className="flex justify-center md:justify-start">
              <Button asChild size="lg" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-reboot-dark hover:from-yellow-500 hover:to-yellow-600 rounded-full shadow-lg shadow-yellow-600/20 hover:shadow-yellow-500/40 transition-all">
                <Link to="/stages" className="flex items-center">
                  <PartyPopper className="mr-2 h-5 w-5" />
                  {t.heroCta}
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div 
            className={cn(
              "relative transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-white/30 via-blue-300/20 to-purple-300/30 rounded-full blur-md animate-pulse opacity-70" aria-hidden="true"></div>
            <RobotMascot 
              className="w-32 h-32 md:w-52 md:h-52 animate-bounce"
              initialExpression="excited"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
