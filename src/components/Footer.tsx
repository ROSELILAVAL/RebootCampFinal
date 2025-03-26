import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguageStore, Language } from '@/i18n';
import { useTranslation } from '@/i18n/translations';
import RobotMascot from './RobotMascot';

const Footer = () => {
  const { language } = useLanguageStore();
  const t = useTranslation(language);

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">

          {/* Contact */}
          <div className="text-center mx-auto md:text-left md:mx-0 ml-auto">
            <h3 className="text-white font-semibold text-lg mb-4">{t.contactUs}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>{t.addressLine1}<br />{t.addressLine2}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-400" />
                <span>+33 6 04 48 08 16</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <a href="mailto:contact@rebootcamp.fr" className="hover:text-white transition-colors">
                  contact@rebootcamp.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Robot Mascot (visible only on screens wider than 766px) */}
          <div className="hidden md:flex flex-col items-center justify-center">
            <div className="animate-spin-slow relative h-40 w-40">
              <RobotMascot className="absolute inset-0" isBouncing={false} />
            </div>
          </div>

          {/* Company Info */}
          <div className="text-center mx-auto md:text-right md:mx-0 ml-auto">
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
          {/* <div className="flex space-x-4">
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
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
