
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CampCard from './CampCard';
import { cn } from '@/lib/utils';
import { useLanguageStore } from '@/i18n';
import { useTranslation } from '@/i18n/translations';
import { camps } from '@/data/camps';


const CampsPreview: React.FC = () => {
  const { language } = useLanguageStore();
  const t = useTranslation(language);
  
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Calculate items to show based on viewport
  const getCardsToShow = () => {
    if (viewportWidth < 640) return 1;
    if (viewportWidth < 1024) return 2;
    return 3;
  };
  
  const nextSlide = () => {
    if (!carouselRef.current) return;
    
    const cardWidth = carouselRef.current.offsetWidth / getCardsToShow();
    carouselRef.current.scrollBy({ left: cardWidth + 16, behavior: 'smooth' });
  };
  
  const prevSlide = () => {
    if (!carouselRef.current) return;
    
    const cardWidth = carouselRef.current.offsetWidth / getCardsToShow();
    carouselRef.current.scrollBy({ left: -(cardWidth + 16), behavior: 'smooth' });
  };
  
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;

    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);

  };
  
  const handleMouseUp = () => {
    document.body.style.cursor = 'auto';
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };
  
  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-white relative overflow-hidden"
    >
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array()].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full opacity-30 animate-pulse"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `translateY(0px)`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`
            }}
          />
        ))}
      </div>
      
      <div className="container relative z-10 px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0 bg-gradient-to-r from-reboot-blue to-purple-500 bg-clip-text text-transparent">
            {t.discoverCamps}
          </h2>
          
          <div className="flex space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              aria-label={t.prev}
              className="rounded-full border-reboot-blue/20 hover:bg-reboot-blue/5 hover:border-reboot-blue"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              aria-label={t.next}
              className="rounded-full border-reboot-blue/20 hover:bg-reboot-blue/5 hover:border-reboot-blue"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
            
            <Button asChild variant="ghost" className="hidden md:flex">
              <Link to="/stages">
                {t.seeAllCamps}
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div 
          ref={carouselRef}
          className={cn(
            "flex gap-4 md:gap-6 overflow-x-auto pb-6 hide-scrollbar transition-opacity duration-700 -mx-4 px-4 md:mx-0 md:px-0",
            isVisible ? "opacity-100" : "opacity-0",
          )}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {camps.map((camp, index) => (
            <div 
              key={camp.id}
              className="min-w-[85%] sm:min-w-[45%] md:min-w-[32%] lg:min-w-[30%] flex-shrink-0 snap-start md:snap-center"
            >
              <CampCard 
                camp={camp} 
                language={language}
                className={cn(
                  "transition-all duration-500 h-full transform",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Button asChild>
            <Link to="/stages">
              {t.seeAllCamps}
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Add custom CSS for scrollbar hiding and smoother animation */}
      <style>
        {`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .blob-animation {
          animation: blob 8s ease-in-out infinite;
        }
        
        @keyframes blob {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 40% 60% 30% 70% / 60% 40% 70% 30%; }
          75% { border-radius: 60% 40% 70% 30% / 30% 60% 40% 70%; }
        }
        `}
      </style>
    </section>
  );
};

export default CampsPreview;
