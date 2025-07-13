import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'Mentions légales | Globibat',
  description: 'Mentions légales et conditions générales de Globibat, entreprise générale de construction à Genève.',
  keywords: 'mentions légales Globibat, conditions générales, politique de confidentialité, entreprise construction Genève',
};

export default function LegalPage() {
  return (
    <main className="flex-grow">
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: 'Mentions légales', href: '/mentions-legales' },
            ]}
          />
          
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Mentions légales"
              subtitle="Informations juridiques concernant notre site web et notre entreprise"
              alignment="left"
              className="mt-8 mb-12"
            />
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-16">
              <div className="prose prose-blue max-w-none">
                <h2>1. Informations légales</h2>
                <p>
                  Le site web www.globibat.com est édité par Globibat, 
                  dont le siège social est situé en Suisse romande.
                </p>
                <p className="pl-4">
                  Globibat<br />
                  Suisse romande
                </p>
                <p>
                  <strong>Téléphone :</strong> +41 21 505 00 62<br />
                  <strong>Email :</strong> info@globibat.com
                </p>
                <p>
                  <strong>Directeur de la publication :</strong> Globibat
                </p>
                
                <h2>2. Hébergement</h2>
                <p>
                  Le site www.globibat.com est hébergé par la société Infomaniak Network SA, 
                  dont le siège social est situé à l'adresse suivante :
                </p>
                <p className="pl-4">
                  Infomaniak Network SA<br />
                  Rue Eugène-Marziano 25<br />
                  1227 Les Acacias (Genève)<br />
                  Suisse
                </p>
                
                <h2>3. Propriété intellectuelle</h2>
                <p>
                  L'ensemble du contenu du site www.globibat.com (structure, textes, logos, images, photographies, vidéos, sons, etc.) 
                  est la propriété exclusive de Globibat Sàrl ou de ses partenaires et est protégé par les lois suisses et internationales 
                  relatives à la propriété intellectuelle.
                </p>
                <p>
                  Toute reproduction totale ou partielle de ce contenu est strictement interdite sans autorisation préalable écrite 
                  de Globibat Sàrl.
                </p>
                
                <h2>4. Protection des données personnelles</h2>
                <p>
                  Conformément à la Loi fédérale sur la protection des données (LPD) et au Règlement général sur la protection 
                  des données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux 
                  données personnelles vous concernant.
                </p>
                <p>
                  Pour exercer ces droits ou pour toute question relative à la protection de vos données personnelles, 
                  vous pouvez nous contacter à l'adresse email suivante : privacy@globibat.com.
                </p>
                <p>
                  Pour plus d'informations sur la manière dont nous traitons vos données personnelles, veuillez consulter 
                  notre <a href="/politique-de-confidentialite" className="text-blue-600 hover:underline">Politique de confidentialité</a>.
                </p>
                
                <h2>5. Cookies</h2>
                <p>
                  Le site www.globibat.com utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
                  En naviguant sur notre site, vous acceptez l'utilisation de ces cookies.
                </p>
                <p>
                  Pour plus d'informations sur les cookies que nous utilisons et la manière de les gérer, veuillez consulter 
                  notre <a href="/politique-de-cookies" className="text-blue-600 hover:underline">Politique de cookies</a>.
                </p>
                
                <h2>6. Limitation de responsabilité</h2>
                <p>
                  Globibat Sàrl s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur son site web. 
                  Toutefois, Globibat Sàrl ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises 
                  à disposition sur son site.
                </p>
                <p>
                  En conséquence, Globibat Sàrl décline toute responsabilité :
                </p>
                <ul>
                  <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site ;</li>
                  <li>Pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur le site ;</li>
                  <li>Et plus généralement, pour tous dommages, directs ou indirects, qu'elles qu'en soient les causes, origines, natures ou conséquences, provoqués en raison de l'accès de quiconque au site ou de l'impossibilité d'y accéder, de même que l'utilisation du site et/ou du crédit accordé à une quelconque information provenant directement ou indirectement de ce dernier.</li>
                </ul>
                
                <h2>7. Liens hypertextes</h2>
                <p>
                  Le site www.globibat.com peut contenir des liens hypertextes vers d'autres sites internet. 
                  Globibat Sàrl n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                </p>
                
                <h2>8. Droit applicable et juridiction compétente</h2>
                <p>
                  Les présentes mentions légales sont soumises au droit suisse. En cas de litige, les tribunaux de Genève 
                  seront seuls compétents.
                </p>
                
                <h2>9. Modifications</h2>
                <p>
                  Globibat Sàrl se réserve le droit de modifier les présentes mentions légales à tout moment. 
                  Les utilisateurs du site www.globibat.com sont donc invités à les consulter régulièrement.
                </p>
                
                <p className="text-sm text-gray-500 mt-8">
                  Dernière mise à jour : 1er juin 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 