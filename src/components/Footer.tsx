
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguageStore, Language } from '@/i18n';
import { useTranslation } from '@/i18n/translations';
import RobotMascot from './RobotMascot';

type FooterProps = {
  language?: Language;
};

const Footer: React.FC<FooterProps> = ({ language: langProp }) => {
  const { language: langStore } = useLanguageStore();
  const language = langProp || langStore;
  const t = useTranslation(language);

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">



          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t.contactUs}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>{t.addressLine1}<br />{t.addressLine2}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-400" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <a href="mailto:contact@rebootcamp.fr" className="hover:text-white transition-colors">
                  contact@rebootcamp.fr
                </a>
              </li>
            </ul>
          </div>


          {/* Robot Mascot (replacing Camps) */}
          <div className="flex flex-col items-center justify-center">
            <div className="animate-spin-slow relative h-40 w-40">
              <RobotMascot className="absolute inset-0" />
            </div>
          </div>



          {/* Company Info */}
          <div className="text-right ml-auto">
            <h3 className="text-white font-semibold text-lg mb-4">{t.company}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors">{t.home}</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">{t.about}</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">{t.careers}</Link></li>
              <li><Link to="/legal" className="hover:text-white transition-colors">{t.legal}</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            {t.copyright}
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
