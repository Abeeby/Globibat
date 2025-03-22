'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaTools, FaBolt, FaLock, FaBuilding, FaBroom, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Définition des types pour les questions
interface Question {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// Définition des types pour les catégories
interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export default function FAQPage() {
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);

  // Fonction pour gérer l'ouverture/fermeture des questions
  const toggleQuestion = (id: string) => {
    if (openQuestionId === id) {
      setOpenQuestionId(null);
    } else {
      setOpenQuestionId(id);
    }
  };

  // Données des catégories
  const categories: Category[] = [
    {
      id: 'general',
      name: 'Questions générales',
      icon: <FaTools className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 'construction',
      name: 'Construction & Rénovation',
      icon: <FaTools className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 'electricite',
      name: 'Électricité & Dépannage',
      icon: <FaBolt className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 'serrurerie',
      name: 'Serrurerie & Dépannage',
      icon: <FaLock className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 'demenagement',
      name: 'Déménagement & Débarras',
      icon: <FaBuilding className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 'nettoyage',
      name: 'Nettoyage & Conciergerie',
      icon: <FaBroom className="h-6 w-6 text-blue-600" />,
    },
  ];

  // Données des questions (à remplacer par des données réelles)
  const questions: Question[] = [
    // Questions générales
    {
      id: 'general-1',
      question: 'Quelles sont les zones géographiques couvertes par Globibat ?',
      answer: 'Globibat intervient principalement en Suisse romande. N\'hésitez pas à nous contacter pour vérifier si votre localité est couverte par nos services.',
      category: 'Questions générales',
    },
    {
      id: 'general-2',
      question: 'Comment obtenir un devis pour mes travaux ?',
      answer: 'Pour obtenir un devis gratuit et sans engagement, vous pouvez nous contacter par téléphone au +41 22 123 45 67, par email à info@globibat.com ou via notre formulaire de contact en ligne. Après avoir recueilli les informations nécessaires sur votre projet, nous organiserons si nécessaire une visite sur place pour évaluer précisément les travaux à réaliser. Vous recevrez ensuite un devis détaillé dans les meilleurs délais.',
      category: 'Questions générales',
    },
    {
      id: 'general-3',
      question: 'Respectez-vous les normes et certifications suisses ?',
      answer: 'Oui, tous nos travaux sont réalisés dans le strict respect des normes suisses en vigueur. Notre équipe est formée et certifiée pour intervenir dans tous les domaines que nous proposons, garantissant ainsi un travail de qualité conforme aux exigences légales et aux standards de la profession.',
      category: 'Questions générales',
    },
    {
      id: 'general-4',
      question: 'Quels sont les modes de paiement acceptés ?',
      answer: 'Nous acceptons plusieurs modes de paiement : virement bancaire, paiement par carte de crédit, et dans certains cas, paiement en espèces (dans les limites légales). Pour les projets importants, nous établissons généralement un échéancier de paiement avec un acompte à la signature du contrat, des paiements intermédiaires selon l\'avancement des travaux, et un solde à la réception des travaux.',
      category: 'Questions générales',
    },
    {
      id: 'general-5',
      question: 'Globibat est-elle une entreprise certifiée ?',
      answer: 'Oui, Globibat dispose de toutes les certifications et autorisations nécessaires pour exercer ses activités dans les différents domaines de la construction et des services. Notre entreprise est inscrite au registre du commerce, dispose des assurances responsabilité civile et professionnelle requises, et nos techniciens sont titulaires des qualifications professionnelles exigées dans leurs domaines respectifs.',
      category: 'Questions générales',
    },

    // Construction & Rénovation
    {
      id: 'construction-1',
      question: 'Quels types de projets de construction et rénovation réalisez-vous ?',
      answer: 'Nous réalisons une large gamme de projets, allant de la rénovation d\'appartements et de maisons individuelles à la construction d\'extensions, en passant par l\'aménagement de locaux commerciaux. Nos services comprennent les travaux de maçonnerie, plâtrerie, peinture, carrelage, menuiserie, plomberie, ainsi que la rénovation de cuisines et salles de bains. Nous pouvons prendre en charge votre projet de A à Z ou intervenir sur des aspects spécifiques selon vos besoins.',
      category: 'Construction & Rénovation',
    },
    {
      id: 'construction-2',
      question: 'Combien de temps dure en moyenne un projet de rénovation ?',
      answer: 'La durée d\'un projet de rénovation dépend de son ampleur et de sa complexité. Une rénovation partielle (par exemple, une salle de bains ou une cuisine) peut prendre de 2 à 4 semaines, tandis qu\'une rénovation complète d\'un appartement peut s\'étendre sur 2 à 4 mois. Lors de l\'établissement du devis, nous vous fournirons un planning détaillé avec une estimation précise de la durée des travaux, que nous nous efforçons toujours de respecter.',
      category: 'Construction & Rénovation',
    },
    {
      id: 'construction-3',
      question: 'Faut-il obtenir des autorisations pour des travaux de rénovation ?',
      answer: 'Cela dépend de la nature et de l\'ampleur des travaux. Certaines rénovations intérieures simples ne nécessitent pas d\'autorisation, tandis que d\'autres travaux (modification de la structure, changement d\'affectation, intervention sur la façade, etc.) requièrent une autorisation de construire. Globibat peut vous conseiller sur les démarches administratives nécessaires et, si vous le souhaitez, prendre en charge les formalités d\'obtention des autorisations auprès des services compétents.',
      category: 'Construction & Rénovation',
    },
    {
      id: 'construction-4',
      question: 'Proposez-vous des conseils en décoration et aménagement intérieur ?',
      answer: 'Oui, notre équipe comprend une architecte d\'intérieur qui peut vous conseiller sur l\'agencement des espaces, le choix des matériaux, des couleurs et des finitions. Nous pouvons également vous proposer des solutions sur mesure pour optimiser l\'espace et créer un intérieur qui correspond à vos goûts et à votre style de vie. Ce service peut être inclus dans votre projet de rénovation ou faire l\'objet d\'une prestation spécifique.',
      category: 'Construction & Rénovation',
    },

    // Électricité & Dépannage
    {
      id: 'electricite-1',
      question: 'Intervenez-vous en urgence pour les pannes électriques ?',
      answer: 'Oui, notre service de dépannage électrique est disponible 7j/7 pour les urgences. En cas de panne, de court-circuit ou de tout autre problème électrique nécessitant une intervention rapide, vous pouvez nous contacter à notre numéro d\'urgence. Nos électriciens qualifiés se déplaceront dans les plus brefs délais pour diagnostiquer et résoudre le problème, assurant ainsi votre sécurité et le rétablissement rapide de votre installation.',
      category: 'Électricité & Dépannage',
    },
    {
      id: 'electricite-2',
      question: 'Réalisez-vous des contrôles périodiques des installations électriques ?',
      answer: 'Oui, conformément à l\'Ordonnance sur les installations à basse tension (OIBT), nous réalisons des contrôles périodiques des installations électriques pour les particuliers et les entreprises. Ces contrôles, obligatoires selon la législation suisse, permettent de vérifier la conformité et la sécurité de vos installations. Nous délivrons les rapports de sécurité nécessaires et pouvons effectuer les travaux de mise en conformité si des défauts sont constatés.',
      category: 'Électricité & Dépannage',
    },
    {
      id: 'electricite-3',
      question: 'Installez-vous des systèmes domotiques ?',
      answer: 'Oui, nous sommes spécialisés dans l\'installation de systèmes domotiques permettant de contrôler l\'éclairage, le chauffage, les volets, la sécurité et d\'autres équipements de votre domicile ou de vos locaux professionnels. Nous travaillons avec différentes technologies (KNX, Zigbee, Z-Wave, etc.) et pouvons vous conseiller sur la solution la plus adaptée à vos besoins et à votre budget. Nos installations sont évolutives et peuvent être complétées par étapes selon vos priorités.',
      category: 'Électricité & Dépannage',
    },

    // Serrurerie & Dépannage
    {
      id: 'serrurerie-1',
      question: 'Que faire en cas de perte de clés ou de claquement de porte ?',
      answer: 'En cas de perte de clés ou de claquement de porte, contactez immédiatement notre service d\'urgence au +41 22 123 45 68. Nos serruriers sont disponibles 24h/24 et 7j/7 pour vous dépanner. Selon la situation, nous procéderons à l\'ouverture de la porte sans endommagement si possible, ou au perçage du cylindre en dernier recours. Pour plus de sécurité, nous vous recommandons ensuite de remplacer votre serrure, surtout en cas de perte de clés.',
      category: 'Serrurerie & Dépannage',
    },
    {
      id: 'serrurerie-2',
      question: 'Quels types de serrures proposez-vous pour sécuriser mon domicile ?',
      answer: 'Nous proposons une large gamme de serrures adaptées à différents niveaux de sécurité : serrures mécaniques à cylindre européen de haute sécurité, serrures multipoints, serrures connectées avec contrôle à distance, etc. Nous travaillons avec des marques reconnues comme Kaba, Mul-T-Lock, ABUS ou DOM. Après une évaluation de vos besoins et des spécificités de votre porte, nous vous conseillerons sur la solution offrant le meilleur rapport sécurité/prix.',
      category: 'Serrurerie & Dépannage',
    },
    {
      id: 'serrurerie-3',
      question: 'Pouvez-vous installer un système de contrôle d\'accès pour un immeuble ?',
      answer: 'Oui, nous installons des systèmes de contrôle d\'accès pour les immeubles résidentiels et les bâtiments professionnels. Ces systèmes peuvent inclure des interphones, visiophones, lecteurs de badges, claviers à code, ou même des solutions biométriques. Nous pouvons également mettre en place des organigrammes de clés permettant de gérer finement les accès aux différentes zones du bâtiment. Nos solutions sont évolutives et peuvent être adaptées aux besoins spécifiques de chaque copropriété ou entreprise.',
      category: 'Serrurerie & Dépannage',
    },

    // Déménagement & Débarras
    {
      id: 'demenagement-1',
      question: 'Quels services proposez-vous pour un déménagement ?',
      answer: 'Nous proposons une gamme complète de services de déménagement : emballage de vos biens, démontage et remontage des meubles, transport, manutention, et déballage. Nous pouvons également fournir le matériel d\'emballage (cartons, papier bulle, etc.), assurer le branchement de vos appareils électroménagers à votre nouvelle adresse, et proposer des solutions de stockage temporaire si nécessaire. Notre offre est modulable et peut être adaptée à vos besoins spécifiques et à votre budget.',
      category: 'Déménagement & Débarras',
    },
    {
      id: 'demenagement-2',
      question: 'Comment estimer le volume de mon déménagement ?',
      answer: 'Pour estimer le volume de votre déménagement, vous pouvez utiliser notre calculateur de volume en ligne, qui vous permet de sélectionner les meubles et objets à déménager pièce par pièce. Pour une estimation plus précise, nous pouvons organiser une visite à votre domicile. Cette évaluation nous permettra de déterminer le volume total, le type de véhicule nécessaire, le nombre de déménageurs requis, et ainsi vous fournir un devis adapté à vos besoins réels.',
      category: 'Déménagement & Débarras',
    },
    {
      id: 'demenagement-3',
      question: 'Proposez-vous des services de débarras d\'appartement ?',
      answer: 'Oui, nous proposons des services de débarras complet ou partiel d\'appartements, maisons, caves, greniers ou locaux commerciaux. Que ce soit suite à une succession, avant une vente immobilière, ou simplement pour vous débarrasser d\'objets encombrants, notre équipe se charge de vider les lieux et d\'évacuer les objets vers les filières de recyclage appropriées ou vers la déchetterie. Nous pouvons également identifier et mettre de côté les objets de valeur si vous le souhaitez.',
      category: 'Déménagement & Débarras',
    },

    // Nettoyage & Conciergerie
    {
      id: 'nettoyage-1',
      question: 'Quels types de nettoyage proposez-vous ?',
      answer: 'Nous proposons plusieurs types de services de nettoyage : nettoyage régulier de bureaux et locaux commerciaux, nettoyage de fin de chantier, nettoyage de fin de bail, nettoyage de vitres, nettoyage en profondeur (moquettes, canapés), et nettoyage après sinistre. Chaque prestation est adaptée aux spécificités du lieu et à vos exigences particulières. Nous utilisons des équipements professionnels et des produits respectueux de l\'environnement pour garantir un résultat impeccable.',
      category: 'Nettoyage & Conciergerie',
    },
    {
      id: 'nettoyage-2',
      question: 'Comment se déroule un nettoyage de fin de bail ?',
      answer: 'Le nettoyage de fin de bail comprend un nettoyage complet et minutieux de l\'ensemble du logement pour le remettre dans l\'état de propreté exigé par les régies immobilières. Notre équipe nettoie en profondeur toutes les pièces : cuisine (four, frigo, plaques, hotte), salle de bains, WC, sols, murs, plafonds, vitres, cadres de fenêtres, radiateurs, prises, interrupteurs, etc. Nous pouvons également nous charger du détartrage des robinetteries et sanitaires, ainsi que du nettoyage des stores et volets. Notre objectif est de vous permettre de récupérer l\'intégralité de votre garantie de loyer.',
      category: 'Nettoyage & Conciergerie',
    },
    {
      id: 'nettoyage-3',
      question: 'Proposez-vous des contrats de conciergerie pour les immeubles ?',
      answer: 'Oui, nous proposons des contrats de conciergerie pour les immeubles résidentiels et les bâtiments commerciaux. Ces contrats peuvent inclure le nettoyage régulier des parties communes (hall d\'entrée, escaliers, ascenseurs, buanderie), l\'entretien des extérieurs (balayage, déneigement), la gestion des poubelles, les petites réparations, et la surveillance générale du bâtiment. Nous établissons un cahier des charges précis en fonction des besoins spécifiques de chaque immeuble et de son règlement de copropriété.',
      category: 'Nettoyage & Conciergerie',
    },
  ];

  // Regrouper les questions par catégorie
  const questionsByCategory: { [key: string]: Question[] } = {};
  
  questions.forEach(question => {
    if (!questionsByCategory[question.category]) {
      questionsByCategory[question.category] = [];
    }
    questionsByCategory[question.category].push(question);
  });

  return (
    <main className="flex-grow">
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: 'FAQ', href: '/faq' },
            ]}
          />
          
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Foire aux questions"
              subtitle="Réponses à vos questions les plus fréquentes"
              alignment="left"
              className="mt-8 mb-12"
            />
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-16">
              <div className="prose prose-blue max-w-none mb-12">
                <p className="text-lg text-gray-700">
                  Vous trouverez ci-dessous les réponses aux questions les plus fréquemment posées sur nos services. 
                  Si vous ne trouvez pas la réponse à votre question, n'hésitez pas à nous contacter directement.
                </p>
              </div>
              
              {/* Navigation par catégorie */}
              <div className="flex flex-wrap gap-4 mb-12">
                {categories.map((category) => (
                  <a 
                    key={category.id}
                    href={`#${category.id}`}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    <span className="mr-2">{category.icon}</span>
                    <span>{category.name}</span>
                  </a>
                ))}
              </div>
              
              {/* Questions par catégorie */}
              <div className="space-y-12">
                {categories.map((category) => (
                  questionsByCategory[category.name] && questionsByCategory[category.name].length > 0 && (
                    <div key={category.id} id={category.id} className="scroll-mt-24">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                          {category.icon}
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                      </div>
                      
                      <div className="space-y-4">
                        {questionsByCategory[category.name].map((question) => (
                          <div 
                            key={question.id} 
                            className="border border-gray-200 rounded-lg overflow-hidden"
                          >
                            <button
                              onClick={() => toggleQuestion(question.id)}
                              className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                              <h3 className="text-lg font-medium text-gray-900">{question.question}</h3>
                              <span className="ml-4 flex-shrink-0">
                                {openQuestionId === question.id ? (
                                  <FaChevronUp className="h-5 w-5 text-blue-600" />
                                ) : (
                                  <FaChevronDown className="h-5 w-5 text-gray-400" />
                                )}
                              </span>
                            </button>
                            
                            {openQuestionId === question.id && (
                              <div className="p-4 bg-gray-50 border-t border-gray-200">
                                <p className="text-gray-700">{question.answer}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
            
            {/* Vous n'avez pas trouvé votre réponse ? */}
            <div className="bg-blue-50 rounded-lg shadow-md p-8 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Vous n'avez pas trouvé votre réponse ?</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Notre équipe est à votre disposition pour répondre à toutes vos questions. 
                  N'hésitez pas à nous contacter par téléphone, email ou via notre formulaire de contact.
                </p>
              </div>
              
              <div className="flex justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Contactez-nous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 