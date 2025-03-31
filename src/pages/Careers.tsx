
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguageStore } from '@/i18n';
import { useTranslation } from '@/i18n/translations';
import { Briefcase, GraduationCap, Users, CheckCheck, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Careers = () => {
  const { language } = useLanguageStore();
  const t = useTranslation(language);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.careersTitle}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t.careersSubtitle}
          </p>
        </div>
      </div>
      
      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.careerWhyWorkWithUs}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-reboot-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.careerContinuousLearning}</h3>
              <p className="text-gray-600">{t.careerContinuousLearningDescription}</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-reboot-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.careerCollaborativeCulture}</h3>
              <p className="text-gray-600">{t.careerCollaborativeCultureDescription}</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-reboot-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.careerMeaningfulImpact}</h3>
              <p className="text-gray-600">{t.careerMeaningfulImpactDescription}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.careerOpenPositions}</h2>
          
          <div className="space-y-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="md:flex md:justify-between md:items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-reboot-dark mb-2">{t["careerJob"+ i + "Title"]}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">{t["careerJob"+ i + "department"]}</Badge>
                      <Badge variant="outline">{t["careerJob"+ i + "location"]}</Badge>
                      <Badge>{t["careerJob"+ i + "Type"]}</Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{t["careerJob"+ i + "Description"]}</p>
                  </div>
                  {/* <Button className="mt-4 md:mt-0 whitespace-nowrap">{t.careerApplyNow}</Button> */}
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-reboot-blue flex items-center mb-2">
                      <CheckCheck className="h-5 w-5 mr-2" />
                      {t.careerJobRequirements}
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {[1,2,3,4].map((j) => (
                        <li key={j}>{t["careerJob"+ i + "Requirement"+j]}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-reboot-blue flex items-center mb-2">
                      <CheckCheck className="h-5 w-5 mr-2" />
                      {t.careerJobResponsibilities}
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {[1,2,3,4].map((j) => (
                        <li key={j}>{t["careerJob"+ i + "Responsability" + j]}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.careerApplicationProcess}</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process steps with timeline */}
              <div className="hidden md:block absolute left-[15px] top-0 bottom-0 w-1 bg-gray-200"></div>
              
              <div className="space-y-12">
                <div className="md:flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-reboot-blue text-white font-bold md:mt-0 shrink-0 z-10">1</div>
                  <div className="md:ml-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold mb-2">{t.careerApplicationStep1}</h3>
                    <p className="text-gray-600">{t.careerApplicationStep1Description}</p>
                  </div>
                </div>
                
                <div className="md:flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-reboot-blue text-white font-bold md:mt-0 shrink-0 z-10">2</div>
                  <div className="md:ml-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold mb-2">{t.careerApplicationStep2}</h3>
                    <p className="text-gray-600">{t.careerApplicationStep2Description}</p>
                  </div>
                </div>
                
                <div className="md:flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-reboot-blue text-white font-bold md:mt-0 shrink-0 z-10">3</div>
                  <div className="md:ml-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold mb-2">{t.careerApplicationStep3}</h3>
                    <p className="text-gray-600">{t.careerApplicationStep3Description}</p>
                  </div>
                </div>
                
                <div className="md:flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-reboot-blue text-white font-bold md:mt-0 shrink-0 z-10">4</div>
                  <div className="md:ml-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold mb-2">{t.careerApplicationStep4}</h3>
                    <p className="text-gray-600">{t.careerApplicationStep4Description}</p>
                  </div>
                </div>
                
                <div className="md:flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white font-bold md:mt-0 shrink-0 z-10">✓</div>
                  <div className="md:ml-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold mb-2">{t.careerApplicationStep5}</h3>
                    <p className="text-gray-600">{t.careerApplicationStep5Description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t.careerDontSeeAFit}</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.careerOpenPositionsSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:contact@rebootcamp.fr" className="flex items-center text-reboot-blue hover:text-reboot-dark transition-colors">
              <Mail className="mr-2 h-5 w-5" />
              contact@rebootcamp.fr
            </a>
            <a href="tel:+33604480816" className="flex items-center text-reboot-blue hover:text-reboot-dark transition-colors">
              <Phone className="mr-2 h-5 w-5" />
              +336 04 48 08 16
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Careers;
