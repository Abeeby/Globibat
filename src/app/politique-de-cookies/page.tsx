import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';

export const metadata = {
  title: 'Politique de cookies | Globibat',
  description: 'Politique de cookies de Globibat. Découvrez comment nous utilisons les cookies sur notre site web pour améliorer votre expérience.',
  keywords: 'politique cookies Globibat, cookies site web, gestion cookies, confidentialité navigation',
};

export default function CookiePolicyPage() {
  return (
    <main className="flex-grow">
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: 'Politique de cookies', href: '/politique-de-cookies', isCurrent: true },
            ]}
          />
          
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Politique de cookies"
              subtitle="Comment nous utilisons les cookies sur notre site"
              alignment="left"
              className="mt-8 mb-12"
            />
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-16">
              <div className="prose prose-blue max-w-none">
                <p className="lead">
                  Cette politique de cookies explique ce que sont les cookies, comment Globibat les utilise, 
                  et quelles sont vos options concernant leur utilisation. Nous vous recommandons de lire 
                  cette politique pour comprendre quels types de cookies nous utilisons et comment vous pouvez 
                  gérer leur utilisation.
                </p>
                
                <h2>1. Qu'est-ce qu'un cookie ?</h2>
                <p>
                  Les cookies sont de petits fichiers texte qui sont stockés sur votre ordinateur ou appareil mobile 
                  lorsque vous visitez un site web. Ils sont largement utilisés pour faire fonctionner les sites web 
                  ou les rendre plus efficaces, ainsi que pour fournir des informations aux propriétaires du site.
                </p>
                <p>
                  Les cookies permettent à un site web de reconnaître votre appareil et de mémoriser des informations 
                  sur votre visite, comme vos préférences de langue, la taille de la police, et d'autres paramètres 
                  d'affichage. Cela signifie que vous n'avez pas besoin de saisir à nouveau ces informations chaque 
                  fois que vous revenez sur le site ou naviguez d'une page à l'autre.
                </p>
                
                <h2>2. Types de cookies que nous utilisons</h2>
                <p>
                  Sur le site web de Globibat, nous utilisons différents types de cookies pour diverses raisons :
                </p>
                
                <h3>2.1 Cookies essentiels</h3>
                <p>
                  Ces cookies sont nécessaires au fonctionnement de notre site web. Ils vous permettent de naviguer 
                  sur notre site et d'utiliser ses fonctionnalités, comme l'accès aux zones sécurisées. Sans ces cookies, 
                  certains services que vous avez demandés ne peuvent pas être fournis.
                </p>
                <p>
                  Exemples : cookies de session pour gérer l'authentification, cookies de sécurité pour prévenir les attaques.
                </p>
                
                <h3>2.2 Cookies de performance</h3>
                <p>
                  Ces cookies collectent des informations sur la façon dont les visiteurs utilisent notre site web, 
                  par exemple quelles pages ils visitent le plus souvent et s'ils reçoivent des messages d'erreur. 
                  Ces cookies ne collectent pas d'informations qui identifient un visiteur. Toutes les informations 
                  que ces cookies collectent sont agrégées et donc anonymes. Elles sont uniquement utilisées pour 
                  améliorer le fonctionnement de notre site.
                </p>
                <p>
                  Exemples : Google Analytics, qui nous aide à comprendre comment les visiteurs interagissent avec notre site.
                </p>
                
                <h3>2.3 Cookies de fonctionnalité</h3>
                <p>
                  Ces cookies permettent à notre site web de se souvenir des choix que vous faites (comme votre nom 
                  d'utilisateur, votre langue ou la région dans laquelle vous vous trouvez) et fournissent des 
                  fonctionnalités améliorées et plus personnelles. Ces cookies peuvent également être utilisés pour 
                  mémoriser les changements que vous avez apportés à la taille du texte, aux polices et à d'autres 
                  parties des pages web que vous pouvez personnaliser.
                </p>
                <p>
                  Exemples : cookies qui mémorisent vos préférences de langue ou d'affichage.
                </p>
                
                <h3>2.4 Cookies de ciblage ou publicitaires</h3>
                <p>
                  Ces cookies sont utilisés pour diffuser des publicités plus pertinentes pour vous et vos intérêts. 
                  Ils sont également utilisés pour limiter le nombre de fois que vous voyez une publicité ainsi que 
                  pour aider à mesurer l'efficacité des campagnes publicitaires. Ils sont généralement placés par 
                  des réseaux publicitaires avec notre permission. Ils mémorisent que vous avez visité un site et 
                  cette information est partagée avec d'autres organisations telles que les annonceurs.
                </p>
                <p>
                  Exemples : cookies utilisés par les réseaux sociaux ou les plateformes publicitaires comme Google Ads.
                </p>
                
                <h2>3. Cookies tiers</h2>
                <p>
                  En plus de nos propres cookies (cookies propriétaires), nous pouvons également utiliser divers 
                  cookies tiers pour signaler les statistiques d'utilisation du site, diffuser des publicités, etc.
                </p>
                <p>
                  Ces cookies tiers peuvent inclure :
                </p>
                <ul>
                  <li>Google Analytics (cookies de performance)</li>
                  <li>Google Ads (cookies publicitaires)</li>
                  <li>Facebook Pixel (cookies publicitaires)</li>
                  <li>LinkedIn Insight (cookies publicitaires)</li>
                </ul>
                
                <h2>4. Durée de conservation des cookies</h2>
                <p>
                  Les cookies peuvent être conservés sur votre appareil pendant différentes périodes de temps :
                </p>
                <ul>
                  <li>
                    <strong>Cookies de session :</strong> Ces cookies sont temporaires et expirent lorsque vous 
                    fermez votre navigateur ou quittez le site.
                  </li>
                  <li>
                    <strong>Cookies persistants :</strong> Ces cookies restent sur votre appareil jusqu'à ce qu'ils 
                    expirent ou jusqu'à ce que vous les supprimiez manuellement. La durée pendant laquelle ces cookies 
                    restent sur votre appareil varie d'un cookie à l'autre.
                  </li>
                </ul>
                
                <h2>5. Comment gérer les cookies</h2>
                <p>
                  Vous pouvez contrôler et gérer les cookies de plusieurs façons. Veuillez garder à l'esprit que 
                  la suppression ou le blocage des cookies peut avoir un impact sur votre expérience utilisateur 
                  et certaines parties de notre site pourraient ne plus être entièrement accessibles.
                </p>
                
                <h3>5.1 Paramètres du navigateur</h3>
                <p>
                  La plupart des navigateurs web vous permettent de contrôler la plupart des cookies via leurs 
                  paramètres. Pour en savoir plus sur la façon de gérer les cookies avec votre navigateur, veuillez 
                  consulter les liens suivants :
                </p>
                <ul>
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox-ordinateur" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Microsoft Edge</a></li>
                </ul>
                
                <h3>5.2 Outils de gestion des cookies tiers</h3>
                <p>
                  Vous pouvez également gérer certains cookies tiers en utilisant des plateformes de gestion des préférences, telles que :
                </p>
                <ul>
                  <li><a href="https://www.youronlinechoices.com/fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Your Online Choices</a></li>
                  <li><a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Network Advertising Initiative</a></li>
                  <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics Opt-out</a></li>
                </ul>
                
                <h2>6. Consentement aux cookies</h2>
                <p>
                  Lorsque vous visitez notre site web pour la première fois, nous vous informons de l'utilisation 
                  des cookies via une bannière de notification. En continuant à naviguer sur notre site après 
                  l'affichage de cette bannière, vous consentez à notre utilisation des cookies comme décrit 
                  dans cette politique.
                </p>
                <p>
                  Si vous ne souhaitez pas accepter les cookies, vous pouvez les refuser en ajustant les paramètres 
                  de votre navigateur. Cependant, veuillez noter que certaines fonctionnalités de notre site peuvent 
                  ne pas fonctionner correctement sans cookies.
                </p>
                
                <h2>7. Modifications de notre politique de cookies</h2>
                <p>
                  Nous pouvons mettre à jour cette politique de cookies de temps à autre pour refléter, par exemple, 
                  des changements dans les cookies que nous utilisons ou pour d'autres raisons opérationnelles, 
                  légales ou réglementaires. Nous vous encourageons donc à consulter régulièrement cette politique 
                  pour rester informé de notre utilisation des cookies et des technologies connexes.
                </p>
                <p>
                  La date en bas de cette page indique quand cette politique de cookies a été mise à jour pour la dernière fois.
                </p>
                
                <h2>8. Contact</h2>
                <p>
                  Si vous avez des questions concernant notre utilisation des cookies ou d'autres technologies, 
                  veuillez nous contacter à :
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