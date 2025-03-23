
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top with animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 md:bottom-8 md:right-8 rounded-full shadow-md bg-reboot-blue text-white hover:bg-reboot-blue/90 z-50 transition-all duration-300 border-none w-12 h-12 md:w-14 md:h-14",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <ChevronUp className="h-6 w-6 md:h-7 md:w-7" />
    </Button>
  );
};

export default ScrollToTopButton;
