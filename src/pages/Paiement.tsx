import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CheckoutForm from '@/components/CheckoutForm';
import PaymentSummary from '@/components/PaymentSummary';
import { useLanguageStore } from '@/i18n';
import { useTranslation } from '@/i18n/translations';
import { FloatingDots } from '@/components/FloatingDots';

// À remplacer par votre clé publique Stripe
// const stripePromise = loadStripe('pk_test_51O5CyHBjm51cEU4wO7N5FZYK6TV47WMc5cCMIm3GVxYcgaNGR4jnJvkNTLkwGKPl9qRtL4F2W0LJFx8JKQE5y6gB00Baa0ikxp');

const Paiement = () => {
    const { language } = useLanguageStore();
    const t = useTranslation(language);
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  
  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
    setTimeout(() => navigate('/'), 3000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16 ">
        <FloatingDots />
        <section className="py-8 md:py-12 z-10 relative">
        
          <div className={"text-center mb-12 transition-all duration-700 opacity-100 translate-y-0"}>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                          {t.paymentTitle}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                          {t.paymentSubtitle}
                        </p>
                      </div>
          {paymentSuccess ? (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {t.paymentSuccess}
              </h2>
              <p className="text-gray-600 mb-4">
                {t.paymentRedirect}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-6 pb-4 border-b">
                  {t.paymentInformation}
                </h2>
                
                {/* <Elements stripe={stripePromise}>
                  <CheckoutForm 
                    isProcessing={isProcessing}
                    setIsProcessing={setIsProcessing}
                    onPaymentSuccess={handlePaymentSuccess}
                    onPaymentError={setPaymentError}
                  />
                </Elements> */}
                
                {paymentError && (
                  <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md">
                    {paymentError}
                  </div>
                )}
              </div>
              
              <PaymentSummary />
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Paiement;