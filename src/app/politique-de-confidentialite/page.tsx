import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';

export const metadata = {
  title: 'Politique de confidentialité | Globibat - Entreprise générale de construction',
  description: 'Politique de confidentialité de Globibat. Découvrez comment nous protégeons vos données personnelles et respectons votre vie privée.',
  keywords: 'politique confidentialité Globibat, protection données personnelles, RGPD, vie privée, données clients',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-grow">
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: 'Politique de confidentialité', href: '/politique-de-confidentialite', isCurrent: true },
            ]}
          />
          
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Politique de confidentialité"
              subtitle="Protection de vos données personnelles"
              alignment="left"
              className="mt-8 mb-12"
            />
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-16">
              <div className="prose prose-blue max-w-none">
                <p className="lead">
                  Chez Globibat, nous accordons une grande importance à la protection de vos données personnelles. 
                  Cette politique de confidentialité vous explique comment nous collectons, utilisons, partageons 
                  et protégeons vos informations lorsque vous utilisez notre site web ou nos services.
                </p>
                
                <h2>1. Collecte des données personnelles</h2>
                <p>
                  Nous collectons les données personnelles que vous nous fournissez directement, notamment lorsque vous :
                </p>
                <ul>
                  <li>Remplissez un formulaire de contact ou de demande de devis</li>
                  <li>Vous inscrivez à notre newsletter</li>
                  <li>Utilisez notre calculateur de volume</li>
                  <li>Nous contactez par téléphone, email ou courrier</li>
                  <li>Passez une commande ou souscrivez à nos services</li>
                </ul>
                <p>
                  Les types de données personnelles que nous pouvons collecter incluent :
                </p>
                <ul>
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse postale</li>
                  <li>Informations relatives à votre projet (type de service, détails du projet, etc.)</li>
                </ul>
                <p>
                  Nous collectons également automatiquement certaines informations lorsque vous visitez notre site web, 
                  telles que votre adresse IP, le type de navigateur, les pages visitées et le temps passé sur chaque page. 
                  Ces données sont collectées à l'aide de cookies et d'autres technologies similaires.
                </p>
                
                <h2>2. Utilisation des données personnelles</h2>
                <p>
                  Nous utilisons vos données personnelles pour les finalités suivantes :
                </p>
                <ul>
                  <li>Vous fournir les services que vous avez demandés</li>
                  <li>Répondre à vos demandes et questions</li>
                  <li>Vous envoyer des informations sur nos services, offres et promotions (si vous avez consenti à recevoir ces communications)</li>
                  <li>Améliorer notre site web et nos services</li>
                  <li>Analyser l'utilisation de notre site web</li>
                  <li>Prévenir et détecter les fraudes</li>
                  <li>Se conformer à nos obligations légales</li>
                </ul>
                
                <h2>3. Base légale du traitement</h2>
                <p>
                  Nous traitons vos données personnelles sur les bases légales suivantes :
                </p>
                <ul>
                  <li><strong>Exécution d'un contrat :</strong> lorsque le traitement est nécessaire à l'exécution d'un contrat auquel vous êtes partie ou à l'exécution de mesures précontractuelles prises à votre demande.</li>
                  <li><strong>Consentement :</strong> lorsque vous avez donné votre consentement au traitement de vos données personnelles pour une ou plusieurs finalités spécifiques.</li>
                  <li><strong>Intérêts légitimes :</strong> lorsque le traitement est nécessaire aux fins des intérêts légitimes poursuivis par Globibat ou par un tiers, à moins que ne prévalent les intérêts ou les libertés et droits fondamentaux de la personne concernée.</li>
                  <li><strong>Obligation légale :</strong> lorsque le traitement est nécessaire au respect d'une obligation légale à laquelle Globibat est soumise.</li>
                </ul>
                
                <h2>4. Conservation des données</h2>
                <p>
                  Nous conservons vos données personnelles aussi longtemps que nécessaire pour atteindre les finalités 
                  pour lesquelles elles ont été collectées, sauf si la loi exige ou permet une période de conservation plus longue.
                </p>
                <p>
                  Les critères utilisés pour déterminer nos délais de conservation incluent :
                </p>
                <ul>
                  <li>La durée pendant laquelle nous entretenons une relation avec vous</li>
                  <li>Si nous avons une obligation légale de conserver les données</li>
                  <li>Si la conservation est souhaitable compte tenu de notre position juridique (par exemple, en ce qui concerne les délais de prescription applicables, les litiges ou les enquêtes réglementaires)</li>
                </ul>
                
                <h2>5. Partage des données personnelles</h2>
                <p>
                  Nous pouvons partager vos données personnelles avec les catégories de destinataires suivantes :
                </p>
                <ul>
                  <li><strong>Prestataires de services :</strong> nous pouvons partager vos données avec des prestataires de services tiers qui nous aident à exploiter notre site web et à fournir nos services (par exemple, hébergement web, services de paiement, services de marketing).</li>
                  <li><strong>Partenaires commerciaux :</strong> nous pouvons partager vos données avec nos partenaires commerciaux lorsque cela est nécessaire pour vous fournir les services demandés.</li>
                  <li><strong>Autorités légales :</strong> nous pouvons divulguer vos données personnelles si nous sommes tenus de le faire par la loi ou en réponse à des demandes légitimes des autorités publiques.</li>
                </ul>
                <p>
                  Nous ne vendons pas vos données personnelles à des tiers.
                </p>
                
                <h2>6. Transferts internationaux de données</h2>
                <p>
                  Vos données personnelles peuvent être transférées et traitées dans des pays autres que celui dans lequel vous résidez. 
                  Ces pays peuvent avoir des lois sur la protection des données différentes de celles de votre pays.
                </p>
                <p>
                  Lorsque nous transférons vos données personnelles en dehors de la Suisse ou de l'Espace économique européen (EEE), 
                  nous nous assurons qu'un niveau de protection adéquat est garanti en mettant en œuvre des garanties appropriées, 
                  telles que des clauses contractuelles types approuvées par la Commission européenne.
                </p>
                
                <h2>7. Vos droits</h2>
                <p>
                  Conformément à la Loi fédérale sur la protection des données (LPD) et au Règlement général sur la protection 
                  des données (RGPD), vous disposez des droits suivants concernant vos données personnelles :
                </p>
                <ul>
                  <li><strong>Droit d'accès :</strong> vous avez le droit de demander une copie des données personnelles que nous détenons à votre sujet.</li>
                  <li><strong>Droit de rectification :</strong> vous avez le droit de demander la correction de données personnelles inexactes ou incomplètes.</li>
                  <li><strong>Droit à l'effacement :</strong> vous avez le droit de demander l'effacement de vos données personnelles dans certaines circonstances.</li>
                  <li><strong>Droit à la limitation du traitement :</strong> vous avez le droit de demander la limitation du traitement de vos données personnelles dans certaines circonstances.</li>
                  <li><strong>Droit à la portabilité des données :</strong> vous avez le droit de recevoir vos données personnelles dans un format structuré, couramment utilisé et lisible par machine, et de les transmettre à un autre responsable du traitement.</li>
                  <li><strong>Droit d'opposition :</strong> vous avez le droit de vous opposer au traitement de vos données personnelles dans certaines circonstances.</li>
                  <li><strong>Droit de retirer votre consentement :</strong> lorsque le traitement est basé sur votre consentement, vous avez le droit de retirer ce consentement à tout moment.</li>
                </ul>
                <p>
                  Pour exercer ces droits, veuillez nous contacter à l'adresse email suivante : privacy@globibat.com.
                </p>
                <p>
                  Si vous estimez que le traitement de vos données personnelles n'est pas conforme à la législation sur la protection des données, 
                  vous avez également le droit d'introduire une réclamation auprès de l'autorité de contrôle compétente, 
                  à savoir le Préposé fédéral à la protection des données et à la transparence (PFPDT) en Suisse.
                </p>
                
                <h2>8. Sécurité des données</h2>
                <p>
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger 
                  vos données personnelles contre la perte, l'accès non autorisé, la divulgation, l'altération et la destruction.
                </p>
                <p>
                  Ces mesures incluent, sans s'y limiter :
                </p>
                <ul>
                  <li>Le chiffrement des données sensibles</li>
                  <li>Des contrôles d'accès stricts</li>
                  <li>Des pare-feu et des systèmes de détection d'intrusion</li>
                  <li>Des sauvegardes régulières</li>
                  <li>La formation de notre personnel sur les questions de confidentialité et de sécurité</li>
                </ul>
                
                <h2>9. Cookies et technologies similaires</h2>
                <p>
                  Notre site web utilise des cookies et des technologies similaires pour améliorer votre expérience de navigation, 
                  analyser l'utilisation du site et nous aider dans nos efforts de marketing.
                </p>
                <p>
                  Pour plus d'informations sur les cookies que nous utilisons et la manière de les gérer, veuillez consulter 
                  notre <Link href="/politique-de-cookies" className="text-blue-600 hover:underline">Politique de cookies</Link>.
                </p>
                
                <h2>10. Modifications de la politique de confidentialité</h2>
                <p>
                  Nous pouvons mettre à jour cette politique de confidentialité de temps à autre pour refléter les changements 
                  dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires.
                </p>
                <p>
                  Nous vous encourageons à consulter régulièrement cette politique pour rester informé de la manière 
                  dont nous protégeons vos informations.
                </p>
                
                <h2>11. Contact</h2>
                <p>
                  Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité ou 
                  le traitement de vos données personnelles, veuillez nous contacter :
                </p>
                <p className="pl-4">
                  <strong>Email :</strong> privacy@globibat.com<br />
                  <strong>Adresse postale :</strong><br />
                  Globibat<br />
                  Responsable de la protection des données<br />
                  Rte des Tattes d'Oie 93<br />
                  1260 Nyon<br />
                  Suisse
                </p>
                
                <p className="text-sm text-gray-500 mt-8">
                  Dernière mise à jour : 1er mars 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 