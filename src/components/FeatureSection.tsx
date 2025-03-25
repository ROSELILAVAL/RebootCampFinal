
import React, { useRef, useEffect, useState } from 'react';
import { Users, Code, Gamepad2, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguageStore, Language } from '@/i18n';
import { useTranslation } from '@/i18n/translations';

type FeatureSectionProps = {
  language?: Language;
};

const FeatureSection: React.FC<FeatureSectionProps> = ({ language: langProp }) => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      title: t.feature1Title,
      description: t.feature1Description,
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-reboot-blue" />
    },
    {
      title: t.feature2Title,
      description: t.feature2Description,
      icon: <Code className="h-6 w-6 sm:h-8 sm:w-8 text-reboot-blue" />
    },
    {
      title: t.feature3Title,
      description: t.feature3Description,
      icon: <Gamepad2 className="h-6 w-6 sm:h-8 sm:w-8 text-reboot-blue" />
    },
    {
      title: t.feature4Title,
      description: t.feature4Description,
      icon: <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-reboot-blue" />
    }
  ];

  return (
    <section 
      id="why-rebootcamp"
      ref={sectionRef}
      className="py-12 md:py-16 lg:py-24 bg-white"
    >
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-balance bg-gradient-to-br from-reboot-blue via-purple-600 to-reboot-coral bg-clip-text text-transparent">
          {t.featureTitle}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "p-4 sm:p-6 md:p-8 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm transition-all card-hover",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                isVisible && `transition-delay-${index * 100}`
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-2 sm:p-3 bg-blue-50 rounded-lg w-fit mb-3 sm:mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-reboot-dark">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
