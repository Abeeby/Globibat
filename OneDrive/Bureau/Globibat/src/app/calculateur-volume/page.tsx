"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import { 
  FaCalculator, FaBoxOpen, FaCouch, FaBed, FaChair, FaUtensils, 
  FaShower, FaDesktop, FaBook, FaTv, FaWarehouse, FaBaby,
  FaGuitar, FaBicycle, FaSnowboarding, FaWineGlassAlt,
  FaChevronLeft, FaChevronRight, FaArrowRight
} from 'react-icons/fa';

// Volumes approximatifs en m³ - Base de données plus complète
const FURNITURE_VOLUMES = {
  // Salon
  canape: 1.5,
  canapeAngle: 2.5,
  fauteuil: 0.7,
  tableBasse: 0.3,
  meubleTv: 0.8,
  bibliotheque: 1.2,
  television: 0.2,
  lampadaire: 0.1,
  tapis: 0.2,
  
  // Chambre principale
  litDouble: 2.0,
  litSimple: 1.0,
  armoire: 2.5,
  commode: 0.8,
  tableChevet: 0.2,
  coiffeuse: 0.7,
  
  // Chambre secondaire
  bureauEtude: 0.8,
  etagere: 0.5,
  litEnfant: 0.8,
  
  // Cuisine
  table: 1.0,
  chaise: 0.2,
  refrigerateur: 1.2,
  congelateur: 0.8,
  laveVaisselle: 0.6,
  microOndes: 0.1,
  fourCuisine: 0.5,
  placardCuisine: 0.7,
  
  // Salle de bain
  meubleSdb: 0.5,
  laveLinge: 0.6,
  secheLinge: 0.6,
  
  // Bureau
  bureauTravail: 1.0,
  fauteuilBureau: 0.4,
  ordinateur: 0.2,
  imprimante: 0.1,
  classeur: 0.3,
  
  // Objets volumineux
  piano: 3.0,
  velo: 0.5,
  equipementSport: 0.7,
  outillage: 0.5,
  valise: 0.3,
  
  // Cartons et divers
  cartonStandard: 0.1,
  cartonLivre: 0.15,
  cartonVetement: 0.2,
  cartonVaisselle: 0.1,
  plantesInterieur: 0.3
};

// Groupes de meubles par pièce
const ROOM_FURNITURE = {
  salon: ['canape', 'canapeAngle', 'fauteuil', 'tableBasse', 'meubleTv', 'bibliotheque', 'television', 'lampadaire', 'tapis'],
  chambrePrincipale: ['litDouble', 'armoire', 'commode', 'tableChevet', 'coiffeuse'],
  chambreSecondaire: ['litSimple', 'bureauEtude', 'etagere', 'litEnfant', 'commode'],
  cuisine: ['table', 'chaise', 'refrigerateur', 'congelateur', 'laveVaisselle', 'microOndes', 'fourCuisine', 'placardCuisine'],
  salleDeBain: ['meubleSdb', 'laveLinge', 'secheLinge'],
  bureau: ['bureauTravail', 'fauteuilBureau', 'ordinateur', 'imprimante', 'classeur'],
  salleAManger: ['table', 'chaise'],
  entree: ['armoire', 'commode'],
  caveGarage: ['velo', 'equipementSport', 'outillage'],
  divers: ['piano', 'cartonStandard', 'cartonLivre', 'cartonVetement', 'cartonVaisselle', 'plantesInterieur', 'valise']
};

// Noms d'affichage pour les meubles
const FURNITURE_LABELS = {
  // Salon
  canape: 'Canapé',
  canapeAngle: 'Canapé d\'angle',
  fauteuil: 'Fauteuil',
  tableBasse: 'Table basse',
  meubleTv: 'Meuble TV',
  bibliotheque: 'Bibliothèque',
  television: 'Télévision',
  lampadaire: 'Lampadaire',
  tapis: 'Tapis',
  
  // Chambre principale
  litDouble: 'Lit double',
  litSimple: 'Lit simple',
  armoire: 'Armoire',
  commode: 'Commode',
  tableChevet: 'Table de chevet',
  coiffeuse: 'Coiffeuse',
  
  // Chambre secondaire
  bureauEtude: 'Bureau d\'étude',
  etagere: 'Étagère',
  litEnfant: 'Lit enfant',
  
  // Cuisine
  table: 'Table',
  chaise: 'Chaise',
  refrigerateur: 'Réfrigérateur',
  congelateur: 'Congélateur',
  laveVaisselle: 'Lave-vaisselle',
  microOndes: 'Micro-ondes',
  fourCuisine: 'Four',
  placardCuisine: 'Placard de cuisine',
  
  // Salle de bain
  meubleSdb: 'Meuble de salle de bain',
  laveLinge: 'Lave-linge',
  secheLinge: 'Sèche-linge',
  
  // Bureau
  bureauTravail: 'Bureau de travail',
  fauteuilBureau: 'Fauteuil de bureau',
  ordinateur: 'Ordinateur',
  imprimante: 'Imprimante',
  classeur: 'Classeur',
  
  // Objets volumineux
  piano: 'Piano',
  velo: 'Vélo',
  equipementSport: 'Équipement de sport',
  outillage: 'Outillage',
  valise: 'Valise',
  
  // Cartons et divers
  cartonStandard: 'Carton standard',
  cartonLivre: 'Carton de livres',
  cartonVetement: 'Carton de vêtements',
  cartonVaisselle: 'Carton de vaisselle',
  plantesInterieur: 'Plantes d\'intérieur'
};

// Icônes pour les meubles
const FURNITURE_ICONS = {
  canape: <FaCouch />,
  canapeAngle: <FaCouch />,
  fauteuil: <FaChair />,
  tableBasse: <FaBoxOpen />,
  meubleTv: <FaTv />,
  bibliotheque: <FaBook />,
  television: <FaTv />,
  lampadaire: <FaBoxOpen />,
  tapis: <FaBoxOpen />,
  litDouble: <FaBed />,
  litSimple: <FaBed />,
  armoire: <FaBoxOpen />,
  commode: <FaBoxOpen />,
  tableChevet: <FaBoxOpen />,
  coiffeuse: <FaBoxOpen />,
  bureauEtude: <FaDesktop />,
  etagere: <FaBook />,
  litEnfant: <FaBaby />,
  table: <FaUtensils />,
  chaise: <FaChair />,
  refrigerateur: <FaBoxOpen />,
  congelateur: <FaBoxOpen />,
  laveVaisselle: <FaBoxOpen />,
  microOndes: <FaBoxOpen />,
  fourCuisine: <FaBoxOpen />,
  placardCuisine: <FaBoxOpen />,
  meubleSdb: <FaShower />,
  laveLinge: <FaBoxOpen />,
  secheLinge: <FaBoxOpen />,
  bureauTravail: <FaDesktop />,
  fauteuilBureau: <FaChair />,
  ordinateur: <FaDesktop />,
  imprimante: <FaBoxOpen />,
  classeur: <FaBoxOpen />,
  piano: <FaGuitar />,
  velo: <FaBicycle />,
  equipementSport: <FaSnowboarding />,
  outillage: <FaBoxOpen />,
  valise: <FaBoxOpen />,
  cartonStandard: <FaBoxOpen />,
  cartonLivre: <FaBook />,
  cartonVetement: <FaBoxOpen />,
  cartonVaisselle: <FaWineGlassAlt />,
  plantesInterieur: <FaBoxOpen />
};

// Noms d'affichage pour les pièces
const ROOM_LABELS = {
  salon: 'Salon',
  chambrePrincipale: 'Chambre principale',
  chambreSecondaire: 'Chambre secondaire',
  cuisine: 'Cuisine',
  salleDeBain: 'Salle de bain',
  bureau: 'Bureau',
  salleAManger: 'Salle à manger',
  entree: 'Entrée',
  caveGarage: 'Cave/Garage',
  divers: 'Divers et cartons'
};

export default function VolumeCalculatorPage() {
  // État pour les pièces sélectionnées
  const [selectedRooms, setSelectedRooms] = useState({
    salon: true,
    cuisine: true,
    chambrePrincipale: true,
    chambreSecondaire: true,
    salleAManger: true,
    bureau: true,
    salleDeBain: true,
    entree: true,
    caveGarage: true,
    divers: true
  });

  // État pour les quantités de meubles - initialiser avec tous les meubles à 0
  const [furniture, setFurniture] = useState<Record<string, number>>(() => {
    const initialState: Record<string, number> = {};
    Object.keys(FURNITURE_VOLUMES).forEach(item => {
      initialState[item] = 0;
    });
    return initialState;
  });

  // État pour les résultats
  const [totalVolume, setTotalVolume] = useState(0);
  const [recommendedTruck, setRecommendedTruck] = useState('-');
  const [estimatedBoxes, setEstimatedBoxes] = useState(0);
  const [volumeByRoom, setVolumeByRoom] = useState<Record<string, number>>({});
  
  // État pour l'onglet actif (pour mobile)
  const [activeRoomTab, setActiveRoomTab] = useState('salon');
  
  // Référence pour le conteneur d'onglets
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  // Mettre à jour les résultats lorsque les quantités changent
  useEffect(() => {
    calculateResults();
  }, [furniture]);
  
  // Faire défiler les onglets lorsque l'onglet actif change
  useEffect(() => {
    if (tabsContainerRef.current) {
      const activeTab = document.getElementById(`room-tab-${activeRoomTab}`);
      if (activeTab) {
        const container = tabsContainerRef.current;
        const scrollLeft = activeTab.offsetLeft - (container.clientWidth / 2) + (activeTab.clientWidth / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeRoomTab]);

  // Fonction pour gérer les changements de pièces
  const handleRoomChange = (room) => {
    setSelectedRooms({
      ...selectedRooms,
      [room]: !selectedRooms[room]
    });
    
    // Si on désélectionne la pièce active, changer l'onglet actif
    if (room === activeRoomTab && !selectedRooms[room]) {
      const selectedRoomKeys = Object.keys(selectedRooms).filter(key => selectedRooms[key] && key !== room);
      if (selectedRoomKeys.length > 0) {
        setActiveRoomTab(selectedRoomKeys[0]);
      }
    }
  };
  
  // Fonction pour changer l'onglet actif
  const handleTabChange = (roomId) => {
    setActiveRoomTab(roomId);
  };
  
  // Fonction pour faire défiler les onglets
  const scrollTabs = (direction) => {
    if (tabsContainerRef.current) {
      const container = tabsContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  // Fonction pour incrémenter la quantité d'un meuble
  const incrementFurniture = (item) => {
    setFurniture({
      ...furniture,
      [item]: furniture[item] + 1
    });
  };

  // Fonction pour décrémenter la quantité d'un meuble
  const decrementFurniture = (item) => {
    if (furniture[item] > 0) {
      setFurniture({
        ...furniture,
        [item]: furniture[item] - 1
      });
    }
  };

  // Fonction pour calculer les résultats
  const calculateResults = () => {
    // Calculer le volume total et par pièce
    let volume = 0;
    const roomVolumes: Record<string, number> = {};
    
    // Calculer le volume par pièce
    Object.keys(ROOM_FURNITURE).forEach(room => {
      let roomVolume = 0;
      ROOM_FURNITURE[room].forEach(item => {
        const itemVolume = FURNITURE_VOLUMES[item] * furniture[item];
        roomVolume += itemVolume;
        volume += itemVolume;
      });
      roomVolumes[room] = roomVolume;
    });
    
    setTotalVolume(volume);
    setVolumeByRoom(roomVolumes);

    // Déterminer la taille de camion recommandée
    if (volume === 0) {
      setRecommendedTruck('-');
    } else if (volume < 10) {
      setRecommendedTruck('Petit (< 10m³)');
    } else if (volume < 30) {
      setRecommendedTruck('Moyen (10-30m³)');
    } else if (volume < 50) {
      setRecommendedTruck('Grand (30-50m³)');
    } else {
      setRecommendedTruck('Très grand (> 50m³)');
    }

    // Estimer le nombre de cartons (approximativement 5 cartons par m³)
    // Ajouter les cartons déjà comptés
    const existingBoxes = 
      (furniture.cartonStandard || 0) + 
      (furniture.cartonLivre || 0) + 
      (furniture.cartonVetement || 0) + 
      (furniture.cartonVaisselle || 0);
    
    // Estimer les cartons supplémentaires nécessaires
    const additionalBoxes = Math.ceil((volume - (existingBoxes * 0.1)) * 5);
    
    // Total des cartons (existants + estimés)
    setEstimatedBoxes(existingBoxes + Math.max(0, additionalBoxes));
  };

  // Fonction pour rendre les éléments de meuble
  const renderFurnitureItems = (roomId) => {
    return ROOM_FURNITURE[roomId].map((item) => (
      <div key={item} className="border border-gray-200 rounded-lg p-4">
        <div className="flex items-center mb-3">
          <span className="text-blue-600 mr-2">{FURNITURE_ICONS[item]}</span>
          <span className="font-medium">{FURNITURE_LABELS[item]}</span>
        </div>
        <div className="flex items-center">
          <button 
            onClick={() => decrementFurniture(item)}
            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
            aria-label={`Diminuer la quantité de ${FURNITURE_LABELS[item]}`}
          >
            -
          </button>
          <span className="mx-4 w-8 text-center">{furniture[item]}</span>
          <button 
            onClick={() => incrementFurniture(item)}
            className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700"
            aria-label={`Augmenter la quantité de ${FURNITURE_LABELS[item]}`}
          >
            +
          </button>
        </div>
      </div>
    ));
  };
  
  // Filtrer les pièces sélectionnées
  const selectedRoomIds = Object.keys(selectedRooms).filter(roomId => selectedRooms[roomId]);

  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Déménagement & Débarras', href: '/services/demenagement-debarras' },
          { label: 'Calculateur de Volume', href: '/calculateur-volume', isCurrent: true },
        ]}
      />
      
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Calculateur de Volume"
          subtitle="Estimez facilement le volume de vos biens pour votre déménagement"
          centered
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi utiliser notre calculateur ?</h2>
            <p className="text-gray-600 mb-4">
              Estimer correctement le volume de vos biens est essentiel pour planifier efficacement votre déménagement. Notre calculateur de volume vous permet d'obtenir une estimation précise du volume total de vos meubles et effets personnels.
            </p>
            <p className="text-gray-600 mb-4">
              Cette estimation vous aidera à :
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-2">
              <li>Déterminer la taille du véhicule nécessaire</li>
              <li>Estimer le nombre de cartons à prévoir</li>
              <li>Évaluer le temps nécessaire pour le déménagement</li>
              <li>Obtenir un devis plus précis auprès de notre équipe</li>
            </ul>
            <p className="text-gray-600">
              Utilisez notre calculateur ci-dessous en sélectionnant les pièces de votre logement et en indiquant les meubles que vous possédez.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">Image du calculateur</span>
            </div>
            {/* Remplacer par une vraie image */}
            {/* <Image 
              src="/images/services/calculateur-volume.jpg" 
              alt="Calculateur de volume pour déménagement" 
              fill 
              className="object-cover"
            /> */}
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            <FaCalculator className="inline-block mr-2 mb-1" />
            Calculateur de Volume
          </h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Sélectionnez vos pièces</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.keys(ROOM_LABELS).map((roomId) => (
                <div key={roomId} className="flex items-center">
                  <input 
                    type="checkbox" 
                    id={`room-${roomId}`}
                    checked={selectedRooms[roomId]}
                    onChange={() => handleRoomChange(roomId)}
                    className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor={`room-${roomId}`} className="ml-2 text-gray-700">
                    {ROOM_LABELS[roomId]}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation par onglets pour mobile */}
          {selectedRoomIds.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <button 
                  onClick={() => scrollTabs('left')}
                  className="md:hidden flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                  aria-label="Défiler vers la gauche"
                >
                  <FaChevronLeft />
                </button>
                
                <div 
                  ref={tabsContainerRef}
                  className="flex overflow-x-auto scrollbar-hide space-x-2 py-2 px-1 flex-grow"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {selectedRoomIds.map((roomId) => (
                    <button
                      key={roomId}
                      id={`room-tab-${roomId}`}
                      onClick={() => handleTabChange(roomId)}
                      className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                        activeRoomTab === roomId
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {ROOM_LABELS[roomId]}
                      {volumeByRoom[roomId] > 0 && (
                        <span className="ml-2 text-xs">
                          ({volumeByRoom[roomId].toFixed(1)} m³)
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                
                <button 
                  onClick={() => scrollTabs('right')}
                  className="md:hidden flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                  aria-label="Défiler vers la droite"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          )}
          
          {/* Affichage des meubles par pièce - version mobile (onglets) */}
          <div className="md:hidden">
            {selectedRoomIds.map((roomId) => (
              <div 
                key={roomId} 
                className={`${activeRoomTab === roomId ? 'block' : 'hidden'} mb-8`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{ROOM_LABELS[roomId]}</h3>
                  {volumeByRoom[roomId] > 0 && (
                    <span className="text-sm font-medium text-blue-600">
                      Volume: {volumeByRoom[roomId].toFixed(1)} m³
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {renderFurnitureItems(roomId)}
                </div>
                
                {/* Navigation entre les pièces (mobile) */}
                <div className="mt-6 flex justify-between">
                  {selectedRoomIds.indexOf(roomId) > 0 && (
                    <button
                      onClick={() => handleTabChange(selectedRoomIds[selectedRoomIds.indexOf(roomId) - 1])}
                      className="flex items-center text-blue-600 font-medium"
                    >
                      <FaChevronLeft className="mr-1" /> Pièce précédente
                    </button>
                  )}
                  {selectedRoomIds.indexOf(roomId) < selectedRoomIds.length - 1 && (
                    <button
                      onClick={() => handleTabChange(selectedRoomIds[selectedRoomIds.indexOf(roomId) + 1])}
                      className="flex items-center text-blue-600 font-medium ml-auto"
                    >
                      Pièce suivante <FaChevronRight className="ml-1" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Affichage des meubles par pièce - version desktop (tout affiché) */}
          <div className="hidden md:block">
            {Object.keys(ROOM_LABELS).map((roomId) => (
              selectedRooms[roomId] && (
                <div key={roomId} className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{ROOM_LABELS[roomId]}</h3>
                    {volumeByRoom[roomId] > 0 && (
                      <span className="text-sm font-medium text-blue-600">
                        Volume: {volumeByRoom[roomId].toFixed(1)} m³
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {renderFurnitureItems(roomId)}
                  </div>
                </div>
              )
            ))}
          </div>
          
          <div className="mt-10 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Résultat</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-600 mb-1">Volume total estimé</p>
                <p className="text-3xl font-bold text-blue-600">{totalVolume.toFixed(1)} m³</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-600 mb-1">Taille de camion recommandée</p>
                <p className="text-xl font-bold text-gray-900">{recommendedTruck}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-600 mb-1">Nombre de cartons estimé</p>
                <p className="text-xl font-bold text-gray-900">{estimatedBoxes}</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">
                Cette estimation est fournie à titre indicatif. Pour un devis précis, contactez notre équipe.
              </p>
              <Link 
                href="/contact#devis" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Comment utiliser notre calculateur de volume ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Instructions</h3>
              <ol className="list-decimal pl-5 space-y-3 text-gray-600">
                <li>Sélectionnez les pièces présentes dans votre logement</li>
                <li>Pour chaque pièce, indiquez le nombre de meubles et objets que vous possédez</li>
                <li>Le calculateur additionne automatiquement les volumes</li>
                <li>Consultez le résultat pour connaître le volume total estimé</li>
                <li>Utilisez cette estimation pour planifier votre déménagement ou demander un devis</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Conseils</h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-600">
                <li>N'oubliez pas les objets rangés dans les placards et les armoires</li>
                <li>Pensez aux objets volumineux comme les instruments de musique, équipements sportifs, etc.</li>
                <li>Prévoyez une marge de 10-15% pour les imprévus</li>
                <li>Pour les objets fragiles, prévoyez plus d'espace pour un emballage protecteur</li>
                <li>N'hésitez pas à ajouter des cartons supplémentaires pour les petits objets</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-lg shadow-md p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Besoin d'aide pour votre déménagement ?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Notre équipe de professionnels est à votre disposition pour vous accompagner dans toutes les étapes de votre déménagement. Contactez-nous dès aujourd'hui pour un service sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/services/demenagement-debarras" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-100"
              >
                Nos services de déménagement
              </Link>
              <Link 
                href="/contact#devis" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 