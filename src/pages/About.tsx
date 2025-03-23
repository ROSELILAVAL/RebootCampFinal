
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguageStore } from '@/i18n';
import { useTranslation } from '@/i18n/translations';
import { Users, GraduationCap, Award, Heart, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const About = () => {
  const { language } = useLanguageStore();
  const t = useTranslation(language);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.aboutTitle}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t.aboutSubtitle}
          </p>
        </div>
      </div>
      
      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={cn(
            "max-w-4xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h2 className="text-3xl font-bold text-center mb-8">{t.ourMission}</h2>
            <p className="text-xl text-gray-600 text-center mb-8">
              {t.ourMissionDescription}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.education}</h3>
                <p className="text-gray-600">
                  {t.educationDescription}
                </p>
              </div>
              
              <div className="bg-purple-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.passion}</h3>
                <p className="text-gray-600">
                  {t.passionDescription}
                </p>
              </div>
              
              <div className="bg-green-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.community}</h3>
                <p className="text-gray-600">
                  {t.communityDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={cn(
            "max-w-4xl mx-auto transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h2 className="text-3xl font-bold text-center mb-8">{t.ourStory}</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                {t.ourStoryParagraph1}
              </p>
              <p className="text-gray-600 mb-4">
                {t.ourStoryParagraph2}
              </p>
              <p className="text-gray-600">
                {t.ourStoryParagraph3}
              </p>
              
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-blue-600">{t.studentsCount}</p>
                  <p className="text-sm text-gray-500">{t.studentsLabel}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">{t.campsCount}</p>
                  <p className="text-sm text-gray-500">{t.campsLabel}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">{t.instructorsCount}</p>
                  <p className="text-sm text-gray-500">{t.instructorsLabel}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">{t.citiesCount}</p>
                  <p className="text-sm text-gray-500">{t.citiesLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={cn(
            "max-w-4xl mx-auto transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h2 className="text-3xl font-bold text-center mb-8">{t.ourTeam}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                    alt={t.teamMember1Name} 
                    className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold">{t.teamMember1Name}</h3>
                <p className="text-blue-600 mb-2">{t.teamMember1Role}</p>
                <p className="text-sm text-gray-600">
                  {t.teamMember1Description}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                    alt={t.teamMember2Name} 
                    className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold">{t.teamMember2Name}</h3>
                <p className="text-blue-600 mb-2">{t.teamMember2Role}</p>
                <p className="text-sm text-gray-600">
                  {t.teamMember2Description}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                    alt={t.teamMember3Name} 
                    className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold">{t.teamMember3Name}</h3>
                <p className="text-blue-600 mb-2">{t.teamMember3Role}</p>
                <p className="text-sm text-gray-600">
                  {t.teamMember3Description}
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link to="/careers">
                  {t.joinOurTeam}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className={cn(
            "max-w-4xl mx-auto transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h2 className="text-3xl font-bold text-center mb-8">{t.ourValues}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{t.excellenceTitle}</h3>
                </div>
                <p className="text-gray-600">
                  {t.excellenceDescription}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{t.inclusionTitle}</h3>
                </div>
                <p className="text-gray-600">
                  {t.inclusionDescription}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <GraduationCap className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{t.practicalLearningTitle}</h3>
                </div>
                <p className="text-gray-600">
                  {t.practicalLearningDescription}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                    <Heart className="h-5 w-5 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{t.caringTitle}</h3>
                </div>
                <p className="text-gray-600">
                  {t.caringDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t.questionTitle}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t.questionSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="secondary">
              <Link to="/contact">
                {t.contactUsButton}
              </Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-white/20">
              <Link to="/calendrier">
                {t.viewAvailableCamps}
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
