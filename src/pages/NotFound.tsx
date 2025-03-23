
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RobotMascot from '@/components/RobotMascot';
import { useLanguageStore } from '@/i18n';
import { useTranslation } from '@/i18n/translations';

const NotFound = () => {
  const { language } = useLanguageStore();
  const t = useTranslation(language);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container max-w-lg text-center">
          <div className="flex justify-center mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/30 via-purple-300/20 to-blue-300/30 rounded-full blur-xl" aria-hidden="true"></div>
            <RobotMascot className="w-40 h-40 relative z-10" initialExpression="curious" />
          </div>
          
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-reboot-blue via-purple-500 to-reboot-coral bg-clip-text text-transparent">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            {t.notFoundMessage}
          </p>
          
          <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-reboot-blue to-purple-600 hover:from-reboot-blue/90 hover:to-purple-700 shadow-lg">
            <Link to="/" className="flex items-center">
              <Home className="mr-2 h-5 w-5" />
              {t.returnToHome}
              <Sparkles className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          
          {/* Fun animated dots */}
          <div className="flex justify-center mt-12 space-x-2">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer language="fr" />
    </div>
  );
};

export default NotFound;
