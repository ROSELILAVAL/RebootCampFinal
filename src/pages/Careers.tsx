
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

  // Sample job openings
  const jobOpenings = [
    {
      title: language === 'fr' ? 'Instructeur de Programmation' : 
             language === 'es' ? 'Instructor de Programación' : 
             'Coding Instructor',
      department: language === 'fr' ? 'Éducation' : 
                  language === 'es' ? 'Educación' : 
                  'Education',
      location: language === 'fr' ? 'Paris, France' : 
                language === 'es' ? 'París, Francia' : 
                'Paris, France',
      type: language === 'fr' ? 'Temps plein' : 
            language === 'es' ? 'Tiempo completo' : 
            'Full-time',
      description: language === 'fr' ? 'Nous recherchons des instructeurs passionnés pour enseigner la programmation aux enfants et adolescents.' :
                   language === 'es' ? 'Buscamos instructores apasionados para enseñar programación a niños y adolescentes.' :
                   'We are looking for passionate coding instructors to teach programming to children and teenagers.',
      requirements: [
        language === 'fr' ? 'Expérience en enseignement ou mentorat' : 
        language === 'es' ? 'Experiencia en enseñanza o mentoría' :
        'Experience in teaching or mentoring',
        
        language === 'fr' ? 'Solides connaissances des langages de programmation (JavaScript, Python)' :
        language === 'es' ? 'Conocimiento sólido de lenguajes de programación (JavaScript, Python)' :
        'Strong knowledge of programming languages (JavaScript, Python)',
        
        language === 'fr' ? 'Excellentes compétences en communication' :
        language === 'es' ? 'Excelentes habilidades de comunicación' :
        'Excellent communication skills',
        
        language === 'fr' ? 'Patience et enthousiasme pour travailler avec les enfants' :
        language === 'es' ? 'Paciencia y entusiasmo para trabajar con niños' :
        'Patience and enthusiasm for working with children',
      ],
      responsibilities: [
        language === 'fr' ? 'Développer et dispenser des programmes de codage' :
        language === 'es' ? 'Desarrollar e impartir currículos de programación' :
        'Develop and deliver coding curriculum',
        
        language === 'fr' ? 'Guider et soutenir les élèves' :
        language === 'es' ? 'Proporcionar orientación y apoyo a los estudiantes' :
        'Provide guidance and support to students',
        
        language === 'fr' ? 'Évaluer les progrès des élèves et fournir des feedbacks' :
        language === 'es' ? 'Evaluar el progreso de los estudiantes y proporcionar retroalimentación' :
        'Evaluate student progress and provide feedback',
        
        language === 'fr' ? 'Créer un environnement d\'apprentissage amusant et engageant' :
        language === 'es' ? 'Crear un ambiente de aprendizaje divertido y atractivo' :
        'Create a fun and engaging learning environment',
      ]
    },
    {
      title: language === 'fr' ? 'Développeur de Programme' : 
             language === 'es' ? 'Desarrollador de Currículo' : 
             'Curriculum Developer',
      department: language === 'fr' ? 'Éducation' : 
                  language === 'es' ? 'Educación' : 
                  'Education',
      location: language === 'fr' ? 'À distance' : 
                language === 'es' ? 'Remoto' : 
                'Remote',
      type: language === 'fr' ? 'Temps plein' : 
            language === 'es' ? 'Tiempo completo' : 
            'Full-time',
      description: language === 'fr' ? 'Aidez-nous à créer des programmes de codage engageants et éducatifs pour nos divers stages tech.' :
                   language === 'es' ? 'Ayúdanos a crear currículos de programación atractivos y educativos para nuestros diversos campamentos tecnológicos.' :
                   'Help us create engaging and educational coding curriculum for our various tech camps.',
      requirements: [
        language === 'fr' ? 'Expérience en développement de programme' : 
        language === 'es' ? 'Experiencia en desarrollo curricular' :
        'Experience in curriculum development',
        
        language === 'fr' ? 'Compréhension approfondie des concepts d\'informatique' :
        language === 'es' ? 'Comprensión profunda de conceptos de informática' :
        'Deep understanding of computer science concepts',
        
        language === 'fr' ? 'Connaissance de la psychologie éducative' :
        language === 'es' ? 'Conocimiento de psicología educativa' :
        'Knowledge of educational psychology',
        
        language === 'fr' ? 'Pensée créative et compétences en résolution de problèmes' :
        language === 'es' ? 'Pensamiento creativo y habilidades de resolución de problemas' :
        'Creative thinking and problem-solving skills',
      ],
      responsibilities: [
        language === 'fr' ? 'Concevoir et développer des matériels de programme' :
        language === 'es' ? 'Diseñar y desarrollar materiales curriculares' :
        'Design and develop curriculum materials',
        
        language === 'fr' ? 'Créer des exercices et projets de codage interactifs' :
        language === 'es' ? 'Crear ejercicios y proyectos de programación interactivos' :
        'Create interactive coding exercises and projects',
        
        language === 'fr' ? 'Collaborer avec les instructeurs pour affiner les méthodes d\'enseignement' :
        language === 'es' ? 'Colaborar con instructores para refinar métodos de enseñanza' :
        'Collaborate with instructors to refine teaching methods',
        
        language === 'fr' ? 'Rester à jour sur les dernières tendances technologiques' :
        language === 'es' ? 'Mantenerse actualizado sobre las últimas tendencias tecnológicas' :
        'Stay updated on latest technology trends',
      ]
    },
    {
      title: language === 'fr' ? 'Coordinateur de Stage' : 
             language === 'es' ? 'Coordinador de Campamento' : 
             'Camp Coordinator',
      department: language === 'fr' ? 'Opérations' : 
                  language === 'es' ? 'Operaciones' : 
                  'Operations',
      location: language === 'fr' ? 'Lyon, France' : 
                language === 'es' ? 'Lyon, Francia' : 
                'Lyon, France',
      type: language === 'fr' ? 'Saisonnier' : 
            language === 'es' ? 'Temporal' : 
            'Seasonal',
      description: language === 'fr' ? 'Coordonnez nos stages d\'été tech et assurez le bon déroulement de toutes les activités.' :
                   language === 'es' ? 'Coordina nuestros campamentos tecnológicos de verano y asegura el buen funcionamiento de todas las actividades.' :
                   'Coordinate our summer tech camps and ensure smooth operation of all activities.',
      requirements: [
        language === 'fr' ? 'Expérience en gestion d\'événements ou en éducation' : 
        language === 'es' ? 'Experiencia en gestión de eventos o educación' :
        'Experience in event management or education',
        
        language === 'fr' ? 'Excellentes compétences organisationnelles' :
        language === 'es' ? 'Excelentes habilidades organizativas' :
        'Excellent organizational skills',
        
        language === 'fr' ? 'Fortes capacités interpersonnelles' :
        language === 'es' ? 'Fuertes habilidades interpersonales' :
        'Strong interpersonal abilities',
        
        language === 'fr' ? 'Esprit de résolution de problèmes' :
        language === 'es' ? 'Mentalidad de resolución de problemas' :
        'Problem-solving mindset',
      ],
      responsibilities: [
        language === 'fr' ? 'Gérer la logistique et les plannings des stages' :
        language === 'es' ? 'Gestionar la logística y los horarios del campamento' :
        'Manage camp logistics and schedules',
        
        language === 'fr' ? 'Coordonner avec les instructeurs et le personnel' :
        language === 'es' ? 'Coordinar con instructores y personal' :
        'Coordinate with instructors and staff',
        
        language === 'fr' ? 'Communiquer avec les parents et les participants' :
        language === 'es' ? 'Comunicarse con padres y participantes' :
        'Communicate with parents and participants',
        
        language === 'fr' ? 'Assurer un environnement sûr et productif' :
        language === 'es' ? 'Garantizar un entorno seguro y productivo' :
        'Ensure a safe and productive environment',
      ]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
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
          <h2 className="text-3xl font-bold text-center mb-12">{t.whyWorkWithUs}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-reboot-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.continuousLearning}</h3>
              <p className="text-gray-600">{t.continuousLearningDescription}</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-reboot-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.collaborativeCulture}</h3>
              <p className="text-gray-600">{t.collaborativeCultureDescription}</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-reboot-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.meaningfulImpact}</h3>
              <p className="text-gray-600">{t.meaningfulImpactDescription}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.openPositions}</h2>
          
          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="md:flex md:justify-between md:items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-reboot-dark mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">{job.department}</Badge>
                      <Badge variant="outline">{job.location}</Badge>
                      <Badge>{job.type}</Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                  </div>
                  <Button className="mt-4 md:mt-0 whitespace-nowrap">{t.applyNow}</Button>
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-reboot-blue flex items-center mb-2">
                      <CheckCheck className="h-5 w-5 mr-2" />
                      {t.jobRequirements}
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {job.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-reboot-blue flex items-center mb-2">
                      <CheckCheck className="h-5 w-5 mr-2" />
                      {t.jobResponsibilities}
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
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
          <h2 className="text-3xl font-bold text-center mb-12">{t.applicationProcess}</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process steps with timeline */}
              <div className="hidden md:block absolute left-[15px] top-0 bottom-0 w-1 bg-gray-200"></div>
              
              <div className="space-y-12">
                <div className="md:flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-reboot-blue text-white font-bold md:mt-0 shrink-0 z-10">1</div>
                  <div className="md:ml-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold mb-2">{t.applicationStep1}</h3>
                    <p className="text-gray-600">{t.applicationStep1Description}</p>
                  </div>
                </div>
                
                <div className="md:flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-reboot-blue text-white font-bold md:mt-0 shrink-0 z-10">2</div>
                  <div className="md:ml-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold mb-2">{t.applicationStep2}</h3>
                    <p className="text-gray-600">{t.applicationStep2Description}</p>
                  </div>
                </div>
                
                <div className="md:flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-reboot-blue text-white font-bold md:mt-0 shrink-0 z-10">3</div>
                  <div className="md:ml-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold mb-2">{t.applicationStep3}</h3>
                    <p className="text-gray-600">{t.applicationStep3Description}</p>
                  </div>
                </div>
                
                <div className="md:flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-reboot-blue text-white font-bold md:mt-0 shrink-0 z-10">4</div>
                  <div className="md:ml-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold mb-2">{t.applicationStep4}</h3>
                    <p className="text-gray-600">{t.applicationStep4Description}</p>
                  </div>
                </div>
                
                <div className="md:flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white font-bold md:mt-0 shrink-0 z-10">✓</div>
                  <div className="md:ml-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold mb-2">{t.applicationStep5}</h3>
                    <p className="text-gray-600">{t.applicationStep5Description}</p>
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
          <h2 className="text-3xl font-bold mb-6">{t.dontSeeAFit}</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.openPositionsSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:careers@rebootcamp.fr" className="flex items-center text-reboot-blue hover:text-reboot-dark transition-colors">
              <Mail className="mr-2 h-5 w-5" />
              careers@rebootcamp.fr
            </a>
            <a href="tel:+33123456789" className="flex items-center text-reboot-blue hover:text-reboot-dark transition-colors">
              <Phone className="mr-2 h-5 w-5" />
              +33 1 23 45 67 89
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Careers;
