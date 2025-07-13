import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'Politique de confidentialité | Globibat',
  description: 'Politique de confidentialité et de protection des données personnelles de Globibat, entreprise générale de construction en Suisse romande.',
  keywords: 'politique confidentialité Globibat, protection données personnelles, RGPD, cookies, entreprise construction Suisse romande',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Politique de confidentialité', href: '/politique-confidentialite', isCurrent: true },
        ]}
      />
      
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Politique de confidentialité"
          subtitle="Protection de vos données personnelles"
          centered
        />
        
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              Chez Globibat Sàrl, nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site web www.globibat.ch ou nos services.
            </p>
            <p className="text-gray-600">
              En utilisant notre site web ou nos services, vous acceptez les pratiques décrites dans la présente politique de confidentialité. Nous nous réservons le droit de modifier cette politique à tout moment. Les modifications prendront effet dès leur publication sur notre site web.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Collecte des données personnelles</h2>
            <p className="text-gray-600 mb-4">
              Nous collectons les données personnelles que vous nous fournissez volontairement lorsque vous :
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
              <li>Remplissez un formulaire de contact ou de demande de devis</li>
              <li>Vous inscrivez à notre newsletter</li>
              <li>Utilisez notre calculateur de volume</li>
              <li>Nous contactez par téléphone, email ou courrier</li>
              <li>Passez une commande ou souscrivez à nos services</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Les données personnelles que nous collectons peuvent inclure :
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Vos nom et prénom</li>
              <li>Votre adresse email</li>
              <li>Votre numéro de téléphone</li>
              <li>Votre adresse postale</li>
              <li>Vos préférences de communication</li>
              <li>Toute autre information que vous choisissez de nous fournir</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Utilisation des données personnelles</h2>
            <p className="text-gray-600 mb-4">
              Nous utilisons vos données personnelles pour les finalités suivantes :
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
              <li>Vous fournir les services que vous avez demandés</li>
              <li>Répondre à vos demandes d'information ou de devis</li>
              <li>Vous envoyer des communications marketing si vous y avez consenti</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Respecter nos obligations légales et réglementaires</li>
              <li>Prévenir et détecter les fraudes</li>
            </ul>
            <p className="text-gray-600">
              Nous ne conservons vos données personnelles que pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, sauf si la loi nous oblige à les conserver plus longtemps.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Partage des données personnelles</h2>
            <p className="text-gray-600 mb-4">
              Nous ne vendons, n'échangeons ni ne transférons vos données personnelles à des tiers sans votre consentement, sauf dans les cas suivants :
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
              <li>Avec nos prestataires de services qui nous aident à exploiter notre site web et à fournir nos services (par exemple, hébergement web, services de messagerie, etc.)</li>
              <li>Si la loi l'exige ou dans le cadre d'une procédure judiciaire</li>
              <li>Pour protéger nos droits, notre propriété ou notre sécurité, ou ceux de nos clients ou d'autres personnes</li>
              <li>Dans le cadre d'une fusion, acquisition ou vente d'actifs, auquel cas vous en serez informé par email ou par un avis bien visible sur notre site web</li>
            </ul>
            <p className="text-gray-600">
              Tous nos prestataires de services sont tenus de respecter la confidentialité de vos données et de ne pas les utiliser à d'autres fins que celles pour lesquelles nous les leur communiquons.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies et technologies similaires</h2>
            <p className="text-gray-600 mb-4">
              Notre site web utilise des cookies et des technologies similaires pour améliorer votre expérience de navigation, analyser l'utilisation du site et personnaliser le contenu.
            </p>
            <p className="text-gray-600 mb-4">
              Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez notre site web. Ils nous permettent de reconnaître votre navigateur et de vous offrir une expérience personnalisée.
            </p>
            <p className="text-gray-600 mb-4">
              Vous pouvez configurer votre navigateur pour qu'il refuse tous les cookies ou vous avertisse lorsqu'un cookie est envoyé. Toutefois, certaines fonctionnalités de notre site web peuvent ne pas fonctionner correctement si vous désactivez les cookies.
            </p>
            <p className="text-gray-600">
              Pour plus d'informations sur les cookies que nous utilisons, veuillez consulter notre <a href="/politique-cookies" className="text-blue-600 hover:text-blue-800">Politique de cookies</a>.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Sécurité des données</h2>
            <p className="text-gray-600 mb-4">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre la perte, l'accès non autorisé, la divulgation, l'altération ou la destruction.
            </p>
            <p className="text-gray-600">
              Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée. Par conséquent, bien que nous nous efforcions de protéger vos données personnelles, nous ne pouvons garantir leur sécurité absolue.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Vos droits</h2>
            <p className="text-gray-600 mb-4">
              Conformément à la loi fédérale sur la protection des données (LPD) et au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
              <li><strong>Droit d'accès :</strong> Vous avez le droit de savoir quelles données personnelles nous détenons à votre sujet et d'en obtenir une copie.</li>
              <li><strong>Droit de rectification :</strong> Vous avez le droit de faire corriger vos données personnelles si elles sont inexactes ou incomplètes.</li>
              <li><strong>Droit à l'effacement :</strong> Vous avez le droit de demander la suppression de vos données personnelles dans certaines circonstances.</li>
              <li><strong>Droit à la limitation du traitement :</strong> Vous avez le droit de demander la limitation du traitement de vos données personnelles dans certaines circonstances.</li>
              <li><strong>Droit à la portabilité des données :</strong> Vous avez le droit de recevoir vos données personnelles dans un format structuré, couramment utilisé et lisible par machine, et de les transmettre à un autre responsable du traitement.</li>
              <li><strong>Droit d'opposition :</strong> Vous avez le droit de vous opposer au traitement de vos données personnelles dans certaines circonstances.</li>
              <li><strong>Droit de retirer votre consentement :</strong> Si nous traitons vos données personnelles sur la base de votre consentement, vous avez le droit de retirer ce consentement à tout moment.</li>
            </ul>
            <p className="text-gray-600">
              Pour exercer l'un de ces droits, veuillez nous contacter à l'adresse info@globibat.com ou par courrier à l'adresse suivante : Globibat, Rte des Tattes d'Oie 93, 1260 Nyon, Suisse.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Liens vers des sites tiers</h2>
            <p className="text-gray-600">
              Notre site web peut contenir des liens vers des sites web tiers. Nous n'avons aucun contrôle sur le contenu ou les pratiques de confidentialité de ces sites et déclinons toute responsabilité à cet égard. Nous vous encourageons à lire les politiques de confidentialité de tous les sites web que vous visitez.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Protection des données des enfants</h2>
            <p className="text-gray-600">
              Notre site web n'est pas destiné aux enfants de moins de 16 ans et nous ne collectons pas sciemment de données personnelles auprès d'enfants de moins de 16 ans. Si vous êtes un parent ou un tuteur et que vous pensez que votre enfant nous a fourni des données personnelles, veuillez nous contacter à l'adresse info@globibat.com et nous prendrons les mesures nécessaires pour supprimer ces informations.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact</h2>
            <p className="text-gray-600 mb-4">
              Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité ou le traitement de vos données personnelles, veuillez nous contacter :
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li><strong>Par email :</strong> info@globibat.com</li>
              <li><strong>Par téléphone :</strong> +41 21 505 00 62</li>
              <li><strong>Par courrier :</strong> Globibat, Rte des Tattes d'Oie 93, 1260 Nyon, Suisse</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
} 