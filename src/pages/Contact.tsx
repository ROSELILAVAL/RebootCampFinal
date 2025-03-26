
import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { useLanguageStore } from '@/i18n';
import { useTranslation } from '@/i18n/translations';

const Contact = () => {
  const { language } = useLanguageStore();
  const t = useTranslation(language);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sendEmail = async (subject, textContent) => {

    const message = {
      "subject":subject,
      "textPart": textContent,
    }

    const res = await fetch("https://www.jeremy-maisse.com/api/rebootcamp-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const fullSubject = subject + " from " + name + " ( " + email  + " ) ";
    sendEmail(fullSubject, message);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t.formSuccess,
        description: `${name}, ${t.formSuccess.toLowerCase()}`,
      });
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  // Floating particles component for the background
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => {
        const size = 4 + Math.random() * 8;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const animationDuration = 20 + Math.random() * 40;
        const animationDelay = Math.random() * -20;
        const hue = 180 + Math.random() * 60; // Blues to purples
        const opacity = 0.1 + Math.random() * 0.3;
        
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              backgroundColor: `hsla(${hue}, 80%, 70%, ${opacity})`,
              animation: `float ${animationDuration}s infinite linear`,
              animationDelay: `${animationDelay}s`,
            }}
          />
        );
      })}
    </div>
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        <section className="relative py-12 md:py-20 bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-50 overflow-hidden">
          <FloatingParticles />
          
          <div className="container max-w-6xl relative z-10">
            <div className={cn(
              "text-center mb-12 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {t.contactTitle}
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t.contactSubtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Form */}
              <div 
                className={cn(
                  "bg-white rounded-xl shadow-sm p-6 md:p-8 transition-all duration-700 delay-100",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                )}
              >
                <h2 className="text-2xl font-semibold mb-6">{t.formTitle}</h2>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.formName}
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.formNamePlaceholder}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.formEmail}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.formEmailPlaceholder}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.formSubject}
                    </label>
                    <Input
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder={t.formSubjectPlaceholder}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.formMessage}
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.formMessagePlaceholder}
                      required
                      className="w-full min-h-[120px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t.sending}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        {t.formSend}
                      </>
                    )}
                  </Button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div 
                className={cn(
                  "bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-6 md:p-8 transition-all duration-700 delay-200",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                )}
              >
                <h2 className="text-2xl font-semibold mb-6">{t.contactUs}</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{t.address}</h3>
                      <address className="not-italic text-gray-600 mt-1">
                        {t.addressLine1}<br />
                        {t.addressLine2}
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{t.phone}</h3>
                      <p className="text-gray-600 mt-1">+33 6 04 48 08 16</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{t.email}</h3>
                      <a href="mailto:contact@rebootcamp.fr" className="text-blue-600 hover:underline mt-1">
                        contact@rebootcamp.fr
                      </a>
                    </div>
                  </div>
                  
                  {/* <div>
                    <h3 className="font-medium text-gray-900 mb-3">{t.followUs}</h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
