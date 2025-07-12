import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaCalendarAlt, FaUser, FaTag, FaCheck, FaClock, FaArrowRight, FaShare, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const metadata = {
  title: 'Comment préparer efficacement son déménagement ? | Globibat',
  description: 'Découvrez nos conseils pour organiser votre déménagement sans stress, de la planification au jour J. Des astuces de professionnels pour un déménagement réussi.',
  keywords: 'déménagement Suisse romande, conseils déménagement, planifier déménagement, organisation déménagement, astuces déménagement, jour J déménagement',
};

export default function BlogPostPage() {
  const post = {
    title: 'Comment préparer efficacement son déménagement ?',
    date: '12 mars 2023',
    author: 'Équipe Globibat',
    category: 'Déménagement',
    image: '/images/realisations/6.png',
    readTime: '8 min',
  };

  return (
    <main className="flex-grow">
      <section className="py-12 md:py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[
            { label: 'Accueil', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.title, href: '/blog/preparer-efficacement-demenagement', isCurrent: true },
          ]} />
          
          <article className="max-w-4xl mx-auto">
            <header className="mb-8">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <FaCalendarAlt className="mr-2" />
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <FaUser className="mr-2" />
                <span>{post.author}</span>
                <span className="mx-2">•</span>
                <FaTag className="mr-2" />
                <span>{post.category}</span>
                <span className="mx-2">•</span>
                <FaClock className="mr-2" />
                <span>{post.readTime} de lecture</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">{post.title}</h1>
              
              <div className="relative h-96 w-full rounded-lg overflow-hidden mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </header>
            
            <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
              <p>Un déménagement est souvent synonyme de stress et d'organisation minutieuse. Que vous déménagiez pour la première fois ou que vous soyez un habitué, une préparation efficace est la clé d'un déménagement réussi. Dans cet article, nous vous partageons nos conseils de professionnels pour vous aider à planifier et exécuter votre déménagement en toute sérénité.</p>
              
              <h2>1. Planifiez votre déménagement à l'avance</h2>
              
              <p>Idéalement, commencez à planifier votre déménagement au moins 2 à 3 mois à l'avance. Cela vous donnera suffisamment de temps pour organiser tous les aspects de votre déménagement sans précipitation.</p>
              
              <ul>
                <li><strong>Établissez un calendrier</strong> : Notez toutes les tâches à accomplir et fixez-vous des délais pour chacune d'entre elles.</li>
                <li><strong>Choisissez la date de déménagement</strong> : Si possible, optez pour un jour de semaine plutôt qu'un week-end ou un jour férié, les services de déménagement étant souvent moins chers en semaine.</li>
                <li><strong>Prévenez votre propriétaire</strong> : Si vous êtes locataire, n'oubliez pas de donner votre préavis dans les délais légaux.</li>
              </ul>
              
              <h2>2. Faites le tri dans vos affaires</h2>
              
              <p>Un déménagement est l'occasion idéale pour faire le tri dans vos affaires et vous débarrasser de ce dont vous n'avez plus besoin.</p>
              
              <ul>
                <li><strong>Triez pièce par pièce</strong> : Commencez par les zones les moins utilisées de votre logement.</li>
                <li><strong>Créez trois catégories</strong> : "À garder", "À donner/vendre" et "À jeter".</li>
                <li><strong>Organisez une vente de garage</strong> ou donnez à des associations les objets en bon état dont vous ne voulez plus.</li>
              </ul>
              
              <h2>3. Rassemblez le matériel d'emballage</h2>
              
              <p>Pour un emballage efficace, assurez-vous d'avoir tout le matériel nécessaire à portée de main :</p>
              
              <ul>
                <li>Cartons de différentes tailles</li>
                <li>Papier bulle et papier journal</li>
                <li>Ruban adhésif de qualité</li>
                <li>Marqueurs permanents pour étiqueter</li>
                <li>Couvertures ou draps pour protéger les meubles</li>
                <li>Sacs en plastique pour la quincaillerie</li>
              </ul>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Astuce de pro</h3>
                <p className="mb-0">Utilisez notre <Link href="/calculateur-volume" className="text-blue-600 dark:text-blue-400 hover:underline">calculateur de volume</Link> gratuit pour estimer précisément la quantité de cartons et la taille du véhicule dont vous aurez besoin pour votre déménagement.</p>
              </div>
              
              <h2>4. Emballez méthodiquement</h2>
              
              <p>Un emballage bien organisé facilitera grandement le déballage dans votre nouveau logement :</p>
              
              <ul>
                <li><strong>Emballez pièce par pièce</strong> et étiquetez chaque carton avec son contenu et la pièce de destination.</li>
                <li><strong>Commencez par les objets les moins utilisés</strong> (livres, décorations, vêtements hors-saison).</li>
                <li><strong>Préparez une valise avec vos effets personnels essentiels</strong> pour les premiers jours dans votre nouveau logement.</li>
                <li><strong>Prenez des photos de vos installations électroniques</strong> avant de les débrancher pour faciliter le remontage.</li>
              </ul>
              
              <h2>5. Organisez les démarches administratives</h2>
              
              <p>N'oubliez pas de prévoir les démarches administratives liées à votre déménagement :</p>
              
              <ul>
                <li>Changement d'adresse auprès des services postaux</li>
                <li>Transfert des contrats d'électricité, d'eau, de gaz et d'internet</li>
                <li>Mise à jour de votre adresse auprès des administrations, banques, assurances, etc.</li>
                <li>Organisation du transfert scolaire si vous avez des enfants</li>
              </ul>
              
              <h2>6. Le jour J : soyez prêt</h2>
              
              <p>Le jour du déménagement, assurez-vous que tout est prêt pour faciliter le travail des déménageurs (ou le vôtre si vous déménagez par vos propres moyens) :</p>
              
              <ul>
                <li>Préparez un accès facile pour le camion de déménagement</li>
                <li>Ayez à portée de main les documents importants (contrat de location, état des lieux, etc.)</li>
                <li>Prévoyez des boissons et collations pour vous et les personnes qui vous aident</li>
                <li>Gardez avec vous vos objets de valeur et documents importants</li>
              </ul>
              
              <h2>Faites appel à des professionnels</h2>
              
              <p>Si vous souhaitez vous épargner le stress et la fatigue d'un déménagement, faire appel à une entreprise de déménagement professionnelle comme Globibat peut être la solution idéale. Nos équipes expérimentées s'occupent de tout, du démontage au remontage de vos meubles, en passant par l'emballage et le transport sécurisé de vos biens.</p>
              
              <p>De plus, nous proposons des services complémentaires comme le débarras, le nettoyage de fin de bail et le garde-meubles pour une solution complète adaptée à vos besoins.</p>
              
              <h2>Conclusion</h2>
              
              <p>Un déménagement bien préparé est un déménagement réussi. En suivant ces conseils et en vous y prenant suffisamment à l'avance, vous pourrez aborder cette étape importante de votre vie avec sérénité et efficacité.</p>
              
              <p>Vous avez des questions sur votre prochain déménagement ? N'hésitez pas à <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">nous contacter</Link> pour obtenir des conseils personnalisés ou un devis gratuit pour nos services de déménagement.</p>
            </div>
            
            <footer className="border-t border-gray-200 dark:border-slate-700 pt-8">
              <div className="flex flex-wrap justify-between items-center mb-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Partager cet article</h3>
                  <div className="flex space-x-3">
                    <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                      <FaFacebook className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200">
                      <FaTwitter className="h-6 w-6" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a href="#" className="text-blue-700 hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-400">
                      <FaLinkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
                
                <div>
                  <Link 
                    href="/blog" 
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <FaArrowRight className="mr-2 h-4 w-4 rotate-180" />
                    Retour aux articles
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Vous planifiez un déménagement ?</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">Faites confiance à notre équipe de professionnels pour un déménagement sans stress. Demandez un devis gratuit et sans engagement dès aujourd'hui.</p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md"
                  >
                    Demander un devis
                  </Link>
                  <Link 
                    href="/debarras-demenagement" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-slate-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 shadow-md"
                  >
                    En savoir plus sur nos services
                  </Link>
                </div>
              </div>
            </footer>
          </article>
        </div>
      </section>
    </main>
  );
} 