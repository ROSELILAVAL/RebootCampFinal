
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import LanguageSelector from './LanguageSelector';
import MobileMenu from './MobileMenu';
import { useLanguageStore } from '@/i18n';
import { useTranslation } from '@/i18n/translations';

const Header: React.FC = () => {
  const { language } = useLanguageStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslation(language);

  const navItems = [
    { label: t.navHome, href: '/' },
    { label: t.navCamps, href: '/stages' },
    { label: t.navPricing, href: '/tarifs' },
    { label: t.navCalendar, href: '/calendrier' },
    { label: t.navContact, href: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-30 transition-all duration-300 py-4 backdrop-blur-lg",
        isScrolled ? "bg-white/95 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.href}
              className="text-sm font-medium hover:text-reboot-blue transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-lg font-bold">
            <span className="text-reboot-blue">Reboot</span>
            <span className="text-reboot-dark">camp</span>
          </Link>
        </div>

        {/* CTA and Language */}
        <div className="hidden md:flex items-center space-x-2">
          <Button asChild size="sm">
            <Link to="/stages">
              {t.viewCamps}
            </Link>
          </Button>
          <LanguageSelector />
        </div>

        {/* Mobile Menu */}
        <MobileMenu items={navItems} />
      </div>
    </header>
  );
};

export default Header;
