import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { useLanguageStore } from '@/i18n';
import { toast } from '@/hooks/use-toast';
import { useTranslation } from '@/i18n/translations';

// Styles pour le composant CardElement
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '16px',
      color: '#32325d',
      fontFamily: 'Arial, sans-serif',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

interface CheckoutFormProps {
  isProcessing: boolean;
  setIsProcessing: (isProcessing: boolean) => void;
  onPaymentSuccess: () => void;
  onPaymentError: (error: string) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  isProcessing,
  setIsProcessing,
  onPaymentSuccess,
  onPaymentError,
}) => {
    const { language } = useLanguageStore();
    const t = useTranslation(language);
  // const stripe = useStripe();
  // const elements = useElements();
  const [cardComplete, setCardComplete] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

      // Stripe.js n'a pas encore chargé
    // if (!stripe || !elements) {
    //   return;
    // }

    if (!cardComplete) {
      onPaymentError(t.paymentIncompleteCardDetails);
      return;
    }

    if (!name) {
      onPaymentError(t.paymentNameRequired);
      return;
    }

    if (!email) {
      onPaymentError(t.paymentEmailRequired);
      return;
    }

    setIsProcessing(true);

    // Simulation d'une requête de paiement à Stripe
    // Normalement, vous feriez une requête à votre serveur backend ici
    // pour créer une intention de paiement (PaymentIntent)
    try {
      // Simulation d'un délai de traitement
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // const cardElement = elements.getElement(CardElement);
      
      // if (!cardElement) {
      //   throw new Error(t.cardElementError);
      // }

      // Dans une implémentation réelle, vous utiliseriez cette méthode 
      // avec une PaymentIntent de votre serveur backend
      /*
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name,
          email,
        },
      });

      if (error) {
        throw new Error(error.message);
      }
      */

      // Simulation de succès (dans une application réelle, vérifiez la réponse de l'API Stripe)
      toast({
        title: t.paymentPaymentProcessed,
        description: t.paymentPaymentAmount,
      });

      onPaymentSuccess();
    } catch (error) {
      onPaymentError(error.message || t.paymentGenericPaymentError);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            {t.paymentFullName}
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            {t.email}
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t.paymentCardDetails}
          </label>
          <div className="p-3 border border-gray-300 rounded-md">
            {/* <CardElement 
              options={CARD_ELEMENT_OPTIONS} 
              onChange={(e) => setCardComplete(e.complete)}
            /> */}
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full py-3 mt-4" 
          // disabled={!stripe || isProcessing}
        >
          {isProcessing ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {t.paymentProcessing}
            </span>
          ) : (
            t.paymentPayNow
          )}
        </Button>
      </div>
    </form>
  );
};

export default CheckoutForm;