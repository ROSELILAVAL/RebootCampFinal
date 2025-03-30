
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguageStore } from '@/i18n';
import { useTranslation } from '@/i18n/translations';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: Record<string, FAQItem[]> = {
  fr: [
    {
      question: "Quels sont les pré-requis pour participer aux stages ?",
      answer: "Aucun prérequis n'est nécessaire pour la plupart de nos stages débutants. Pour les niveaux intermédiaire et avancé, une expérience préalable en programmation est recommandée. Tous nos stages sont adaptés en fonction de l'âge et du niveau des participants."
    },
    {
      question: "Quel matériel est fourni pendant les stages ?",
      answer: "Tout le matériel nécessaire est fourni pendant les stages : ordinateurs, robots, composants électroniques, etc. Les participants n'ont rien à apporter. À la fin du stage, les projets numériques réalisés par les enfants leur sont envoyés par email."
    },
    {
      question: "Puis-je inscrire mon enfant pour plusieurs semaines ?",
      answer: "Absolument ! Beaucoup d'enfants participent à plusieurs stages consécutifs ou reviennent pendant les différentes périodes de vacances. Nous proposons des parcours progressifs pour continuer l'apprentissage étape par étape."
    },
    {
      question: "Comment sont composés les groupes ?",
      answer: "Les groupes sont constitués de maximum 12 enfants, regroupés par tranche d'âge (6-9 ans, 10-12 ans, 13-15 ans, 16-18 ans). Cette organisation permet d'adapter le contenu pédagogique et la progression au niveau de chaque groupe."
    },
    {
      question: "Que se passe-t-il en cas d'absence ?",
      answer: "En cas d'absence, nous essayons de proposer une solution de rattrapage si possible. Pour les absences communiquées au moins 7 jours à l'avance, nous proposons un report sur un autre stage (sous réserve de disponibilité)."
    },
    {
      question: "Les stages sont-ils bilingues ?",
      answer: "Nos stages sont disponibles en français et en anglais. Vous pouvez préciser votre préférence lors de l'inscription. Certains stages spécifiques sont proposés entièrement en anglais pour favoriser l'apprentissage linguistique."
    }
  ],
  en: [
    {
      question: "What are the prerequisites for participating in the camps?",
      answer: "No prerequisites are necessary for most of our beginner camps. For intermediate and advanced levels, previous programming experience is recommended. All our camps are adapted to the age and level of the participants."
    },
    {
      question: "What equipment is provided during the camps?",
      answer: "All necessary equipment is provided during the camps: computers, robots, electronic components, etc. Participants don't need to bring anything. At the end of the camp, the digital projects created by the children are sent to them by email."
    },
    {
      question: "Can I register my child for multiple weeks?",
      answer: "Absolutely! Many children participate in several consecutive camps or come back during different holiday periods. We offer progressive paths to continue learning step by step."
    },
    {
      question: "How are the groups composed?",
      answer: "The groups consist of a maximum of 12 children, grouped by age range (6-9 years, 10-12 years, 13-15 years, 16-18 years). This organization allows us to adapt the educational content and progression to the level of each group."
    },
    {
      question: "What happens in case of absence?",
      answer: "In case of absence, we try to offer a catch-up solution if possible. For absences communicated at least 7 days in advance, we offer a transfer to another camp (subject to availability)."
    },
    {
      question: "Are the camps bilingual?",
      answer: "Our camps are available in French and English. You can specify your preference when registering. Some specific camps are offered entirely in English to promote language learning."
    }
  ],
  es: [
    {
      question: "¿Cuáles son los requisitos previos para participar en los campamentos?",
      answer: "No se necesitan requisitos previos para la mayoría de nuestros campamentos para principiantes. Para niveles intermedios y avanzados, se recomienda experiencia previa en programación. Todos nuestros campamentos están adaptados a la edad y nivel de los participantes."
    },
    {
      question: "¿Qué equipo se proporciona durante los campamentos?",
      answer: "Todo el equipo necesario se proporciona durante los campamentos: computadoras, robots, componentes electrónicos, etc. Los participantes no necesitan traer nada. Al final del campamento, los proyectos digitales creados por los niños se les envían por correo electrónico."
    },
    {
      question: "¿Puedo inscribir a mi hijo para varias semanas?",
      answer: "¡Absolutamente! Muchos niños participan en varios campamentos consecutivos o regresan durante diferentes períodos de vacaciones. Ofrecemos rutas progresivas para continuar aprendiendo paso a paso."
    },
    {
      question: "¿Cómo se componen los grupos?",
      answer: "Los grupos constan de un máximo de 12 niños, agrupados por rango de edad (6-9 años, 10-12 años, 13-15 años, 16-18 años). Esta organización nos permite adaptar el contenido educativo y la progresión al nivel de cada grupo."
    },
    {
      question: "¿Qué ocurre en caso de ausencia?",
      answer: "En caso de ausencia, intentamos ofrecer una solución de recuperación si es posible. Para ausencias comunicadas con al menos 7 días de antelación, ofrecemos una transferencia a otro campamento (sujeto a disponibilidad)."
    },
    {
      question: "¿Son bilingües los campamentos?",
      answer: "Nuestros campamentos están disponibles en francés e inglés. Puede especificar su preferencia al registrarse. Algunos campamentos específicos se ofrecen completamente en inglés para promover el aprendizaje de idiomas."
    }
  ]
};

const FAQ: React.FC = () => {
  const { language } = useLanguageStore();
  const t = useTranslation(language);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = faqItems[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq"
      ref={sectionRef}
      className="py-16 md:py-24 bg-white"
    >
      <div className="container max-w-4xl">
        <div 
          className={cn(
            "text-center mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-reboot-blue via-purple-600 to-reboot-coral bg-clip-text text-transparent">
            {t.faqTitle}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.faqSubtitle}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={cn(
                "border border-gray-200 rounded-lg overflow-hidden transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                openIndex === index ? "shadow-sm" : ""
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 text-gray-500 transition-transform duration-300",
                    openIndex === index ? "transform rotate-180" : ""
                  )} 
                />
              </button>
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-96 py-0" : "max-h-0 py-0"
                )}
              >
                <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
