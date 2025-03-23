
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, FileText, Info, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Legal = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gray-100 pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Mentions Légales</h1>
        </div>
      </div>
      
      {/* Legal Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Company Information */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Info className="h-6 w-6 text-reboot-blue" />
              <h2 className="text-2xl font-bold">Information sur la société</h2>
            </div>
            <Separator className="mb-6" />
            
            <div className="space-y-4 text-gray-700">
              <p><strong>Raison sociale :</strong> Rebootcamp SAS</p>
              <p><strong>Capital social :</strong> 1 000 €</p>
              <p><strong>SIRET :</strong> 931 633 028 00010</p>
              <p><strong>RCS :</strong> 931 633 028 R.C.S. Nice</p>
              <p><strong>Téléphone :</strong> +33 6 04 48 08 16</p>
              <p><strong>Email :</strong> contact@rebootcamp.fr</p>
            </div>
          </section>
          
          {/* Hosting Information */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-reboot-blue" />
              <h2 className="text-2xl font-bold">Hébergement</h2>
            </div>
            <Separator className="mb-6" />
            
            <div className="space-y-4 text-gray-700">
              <p><strong>Hébergeur :</strong> OVHcloud</p>
              <p><strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France</p>
              <p><strong>Téléphone :</strong> +33 9 72 10 10 07</p>
              <p><strong>Site web :</strong> <a href="https://www.ovhcloud.com" className="text-reboot-blue hover:underline">www.ovhcloud.com</a></p>
            </div>
          </section>
          
          {/* Privacy Policy */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-6 w-6 text-reboot-blue" />
              <h2 className="text-2xl font-bold">Politique de confidentialité</h2>
            </div>
            <Separator className="mb-6" />
            
            <div className="space-y-4 text-gray-700">
              <h3 className="text-xl font-semibold">Collecte des données personnelles</h3>
              <p>
                Rebootcamp collecte et traite certaines données personnelles vous concernant lorsque vous utilisez notre site web ou nos services.
                Ces données peuvent inclure :
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale</li>
                <li>Données de connexion et de navigation sur notre site</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6">Utilisation des données</h3>
              <p>
                Les données collectées sont utilisées pour :
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Gérer vos inscriptions à nos stages et activités</li>
                <li>Vous envoyer des communications relatives à nos services</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Répondre à vos demandes d'information</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6">Conservation des données</h3>
              <p>
                Vos données personnelles sont conservées pour la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées,
                augmentée de la durée de conservation imposée par les règles applicables en matière de prescription légale.
              </p>
              
              <h3 className="text-xl font-semibold mt-6">Droits des utilisateurs</h3>
              <p>
                Conformément à la réglementation applicable en matière de protection des données personnelles, notamment le Règlement (UE) 2016/679 du Parlement européen 
                et du Conseil du 27 avril 2016 (RGPD) et la Loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification de vos données</li>
                <li>Droit à l'effacement de vos données</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit d'opposition au traitement</li>
                <li>Droit à la portabilité de vos données</li>
              </ul>
              
              <p className="mt-4">
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:contact@rebootcamp.fr" className="text-reboot-blue hover:underline">contact@rebootcamp.fr</a>
              </p>
            </div>
          </section>
          
          {/* Cookies */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-6 w-6 text-reboot-blue" />
              <h2 className="text-2xl font-bold">Utilisation des cookies</h2>
            </div>
            <Separator className="mb-6" />
            
            <div className="space-y-4 text-gray-700">
              <p>
                Notre site utilise des cookies pour améliorer votre expérience de navigation et nous permettre d'analyser l'utilisation du site.
                Un cookie est un petit fichier texte stocké par votre navigateur qui nous permet de reconnaître votre appareil lors de visites ultérieures.
              </p>
              
              <h3 className="text-xl font-semibold mt-4">Types de cookies utilisés</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Cookies techniques :</strong> nécessaires au bon fonctionnement du site</li>
                {/* <li><strong>Cookies analytiques :</strong> permettent de mesurer l'audience du site</li> */}
              </ul>
              
              <h3 className="text-xl font-semibold mt-4">Gestion des cookies</h3>
              <p>
                Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté lorsque des cookies sont envoyés.
                Veuillez noter que si vous désactivez les cookies, certaines fonctionnalités du site pourraient ne pas être disponibles.
              </p>
            </div>
          </section>
          
          {/* Intellectual Property */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-reboot-blue" />
              <h2 className="text-2xl font-bold">Propriété intellectuelle</h2>
            </div>
            <Separator className="mb-6" />
            
            <div className="space-y-4 text-gray-700">
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est protégé par le droit d'auteur et est la propriété exclusive de Rebootcamp 
                ou de ses partenaires. Toute reproduction, représentation, modification, publication, adaptation, totale ou partielle du site 
                ou de son contenu, par quelque procédé que ce soit, sans autorisation préalable écrite de Rebootcamp, est interdite et constituerait une contrefaçon.
              </p>
              
              <p>
                Les marques et logos figurant sur ce site sont des marques déposées. Leur mention ne confère en aucune manière une licence ou un droit d'utilisation de ces marques, 
                qui ne peuvent être utilisées sans le consentement préalable et écrit de leur propriétaire.
              </p>
            </div>
          </section>
          
          {/* Applicable Law */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-reboot-blue" />
              <h2 className="text-2xl font-bold">Loi applicable</h2>
            </div>
            <Separator className="mb-6" />
            
            <div className="space-y-4 text-gray-700">
              <p>
                Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
              
              <p>
                Dernière mise à jour : 1er mars 2025
              </p>
            </div>
          </section>
          
          {/* Contact for Legal Issues */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-6 w-6 text-reboot-blue" />
              <h2 className="text-xl font-bold">Contact pour questions juridiques</h2>
            </div>
            
            <p className="text-gray-700">
              Pour toute question concernant ces mentions légales, veuillez nous contacter à <a href="mailto:contact@rebootcamp.fr" className="text-reboot-blue hover:underline">contact@rebootcamp.fr</a>
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Legal;
