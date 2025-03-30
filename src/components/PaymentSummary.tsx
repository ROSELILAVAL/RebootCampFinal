import React from 'react';
import { useLanguageStore } from '@/i18n';
import { useTranslation } from '@/i18n/translations';

const PaymentSummary: React.FC = () => {
    const { language } = useLanguageStore();
    const t = useTranslation(language);
  
  // Données fictives pour le résumé du paiement
  const orderSummary = {
    title: "Stage de Robotique - Été 2023",
    price: 299.99,
    discount: 50,
    tax: 39.99,
    total: 289.98
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6 pb-4 border-b">
        {t.paymentOrderSummary}
      </h2>

      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-md mb-4">
          <h3 className="font-semibold text-blue-700">{orderSummary.title}</h3>
          <p className="text-sm text-blue-600 mt-1">
            {t.paymentAvailability}
          </p>
        </div>

        <div className="flex justify-between py-2">
          <span className="text-gray-600">{t.paymentPrice}</span>
          <span className="font-medium">{orderSummary.price.toFixed(2)} €</span>
        </div>

        <div className="flex justify-between py-2">
          <span className="text-gray-600">{t.paymentDiscount}</span>
          <span className="font-medium text-green-600">-{orderSummary.discount.toFixed(2)} €</span>
        </div>

        <div className="flex justify-between py-2">
          <span className="text-gray-600">{t.paymentTax}</span>
          <span className="font-medium">{orderSummary.tax.toFixed(2)} €</span>
        </div>

        <div className="border-t pt-4 mt-2">
          <div className="flex justify-between font-semibold">
            <span>{t.paymentTotal}</span>
            <span className="text-lg">{orderSummary.total.toFixed(2)} €</span>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-500">
          <p>{t.paymentSecurePayment}</p>
          <div className="flex items-center space-x-2 mt-2">
            <svg className="w-8 h-6" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="24" rx="3" fill="#252525"/>
              <path d="M11.764 8H20.236V16H11.764V8Z" fill="#FF5F00"/>
              <path d="M12.2652 12.0002C12.2652 10.3193 13.0148 8.8273 14.1935 7.8176C13.3414 7.1848 12.2844 6.8155 11.1361 6.8155C8.30525 6.8155 6 9.149 6 12.0002C6 14.8514 8.30525 17.1849 11.1361 17.1849C12.2844 17.1849 13.3414 16.8156 14.1935 16.1828C13.0148 15.1731 12.2652 13.6811 12.2652 12.0002Z" fill="#EB001B"/>
              <path d="M26 12.0002C26 14.8514 23.6948 17.1849 20.8639 17.1849C19.7156 17.1849 18.6586 16.8156 17.8065 16.1828C18.9852 15.1731 19.7348 13.6811 19.7348 12.0002C19.7348 10.3193 18.9852 8.8273 17.8065 7.8176C18.6586 7.1848 19.7156 6.8155 20.8639 6.8155C23.6948 6.8155 26 9.149 26 12.0002Z" fill="#F79E1B"/>
            </svg>
            <svg className="w-8 h-6" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="24" rx="3" fill="#1434CB"/>
              <path d="M13.3686 15.7407H10.9214L12.4878 8.25928H14.935L13.3686 15.7407Z" fill="white"/>
              <path d="M20.1929 8.40663C19.7104 8.22302 18.9575 8.01855 18.0288 8.01855C15.9627 8.01855 14.5 9.01941 14.5 10.4344C14.5 11.482 15.5236 12.0422 16.3239 12.3908C17.1393 12.7454 17.3931 12.9749 17.3931 13.2937C17.3931 13.7836 16.7748 14.0104 16.2001 14.0104C15.3998 14.0104 14.9698 13.8627 14.3288 13.5378L14.0675 13.4018L13.7837 15.483C14.3514 15.7192 15.3851 15.9252 16.4489 15.9252C18.6448 15.9252 20.0727 14.9403 20.0727 13.4158C20.0727 12.5879 19.3699 11.9081 18.1602 11.3997C17.3997 11.0589 16.9471 10.8433 16.9471 10.5105C16.9471 10.2057 17.3015 9.90008 18.1095 9.90008C18.7949 9.88532 19.2992 10.0688 19.6741 10.2534L19.8568 10.3534L20.1929 8.40663Z" fill="white"/>
              <path d="M23.0971 8.25928H21.2244L19 15.7407H20.8616L21.1672 14.7926H23.7324L23.9226 15.7407H26L23.0971 8.25928ZM21.7197 13.1328C21.7939 12.9153 22.4339 11.0759 22.4339 11.0759C22.4267 11.0903 22.6022 10.6025 22.6977 10.2999L22.8179 10.9972C22.8179 10.9972 23.2185 12.9757 23.2541 13.1328H21.7197Z" fill="white"/>
              <path d="M9.66937 8.25928L7.93262 13.2526L7.73497 12.2732C7.38287 11.0181 6.26709 9.65941 5 9.00407L6.60465 15.7339H8.487L11.5462 8.25928H9.66937Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;