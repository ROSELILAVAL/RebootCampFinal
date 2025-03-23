
import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useLanguageStore, Language } from '@/i18n';
import { useTranslation } from '@/i18n/translations';

type NavItem = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  items: NavItem[];
};

const MobileMenu: React.FC<MobileMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguageStore();
  const t = useTranslation(language);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleLanguage = () => {
    const nextLanguage: Record<Language, Language> = {
      'fr': 'en',
      'en': 'es',
      'es': 'fr'
    };
    setLanguage(nextLanguage[language]);
  };

  // Language display names
  const languageNames: Record<Language, string> = {
    'fr': 'Français',
    'en': 'English',
    'es': 'Español'
  };

  return (
    <div className="md:hidden flex items-center">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleLanguage}
        aria-label="Change language"
        className="mr-2"
      >
        <Globe className="h-5 w-5" />
      </Button>

      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMenu}
      />

      {/* Mobile menu panel */}
      <div 
        className={cn(
          "fixed top-0 right-0 w-[75%] h-screen bg-white z-50 flex flex-col p-6 transition-transform duration-300 ease-in-out shadow-xl",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="font-bold text-xl">Rebootcamp</span>
          <Button variant="ghost" size="icon" onClick={closeMenu}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <nav className="flex-1">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className="block py-2 text-lg hover:text-reboot-blue transition-colors"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Language selector in mobile menu */}
        <div className="mt-6 pt-4 border-t">
          <p className="text-sm text-gray-500 mb-2">
            {language === 'fr' ? 'Changer de langue' : 
             language === 'es' ? 'Cambiar idioma' : 
             'Change language'}
          </p>
          <div className="flex flex-wrap gap-2">
            {(['fr', 'en', 'es'] as Language[]).map((lang) => (
              <Button
                key={lang}
                variant={language === lang ? 'default' : 'outline'}
                size="sm"
                onClick={() => { 
                  setLanguage(lang);
                  // Don't close the menu when changing language
                }}
                className={cn(
                  "flex items-center",
                  language === lang ? "bg-reboot-blue text-white" : "text-gray-700"
                )}
              >
                {languageNames[lang]}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t">
          <Button asChild className="w-full" size="lg">
            <Link to="/stages" onClick={closeMenu}>
              {t.viewCamps}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
