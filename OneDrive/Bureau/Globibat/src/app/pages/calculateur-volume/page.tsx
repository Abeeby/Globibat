import VolumeCalculator from '@/components/sections/VolumeCalculator';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'Calculateur de volume pour déménagement | Globibat',
  description: 'Estimez facilement le volume de vos biens pour votre déménagement avec notre calculateur en ligne gratuit. Obtenez une recommandation de taille de camion adaptée à vos besoins.',
  keywords: 'calculateur volume, déménagement, estimation volume, camion déménagement, Suisse, Lausanne, Genève',
};

export default function CalculateurVolumePage() {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <Breadcrumb
          items={[
            { label: 'Calculateur de volume', href: '/calculateur-volume', isCurrent: true },
          ]}
          className="mb-8"
        />
        
        <SectionHeading
          title="Calculateur de volume pour déménagement"
          description="Notre calculateur de volume vous aide à estimer précisément l'espace nécessaire pour votre déménagement. Sélectionnez les articles que vous souhaitez déménager et obtenez une estimation du volume total ainsi qu'une recommandation de taille de camion."
        />
        
        <div className="my-8 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">Comment utiliser le calculateur ?</h2>
          <ol className="list-decimal pl-5 space-y-2 text-blue-700">
            <li>Parcourez les différentes catégories d'articles (salon, chambre, cuisine, etc.)</li>
            <li>Sélectionnez les articles que vous souhaitez déménager en ajustant les quantités</li>
            <li>Consultez le résumé pour voir le volume total et la recommandation de taille de camion</li>
            <li>Demandez un devis personnalisé pour votre déménagement</li>
          </ol>
        </div>
      </div>
      
      <VolumeCalculator />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Pourquoi utiliser notre calculateur de volume ?</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Estimation précise du volume de vos biens</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Recommandation personnalisée de taille de camion</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Évitez les mauvaises surprises le jour du déménagement</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Planifiez votre déménagement en toute sérénité</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Obtenez un devis personnalisé basé sur vos besoins réels</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Nos services de déménagement</h2>
            <p className="mb-4">
              Globibat vous propose des services de déménagement complets et sur mesure pour répondre à tous vos besoins :
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Déménagement complet (emballage, transport, déballage)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Déménagement partiel (transport uniquement)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Fourniture de matériel d'emballage</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Montage et démontage de meubles</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Services de débarras et nettoyage</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 