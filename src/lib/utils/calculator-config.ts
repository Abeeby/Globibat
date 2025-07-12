// Configuration pour le calculateur de volume
// Volumes approximatifs en mètres cubes (m³)

export interface ItemCategory {
  name: string;
  items: Item[];
}

export interface Item {
  id: string;
  name: string;
  volume: number; // en m³
  image?: string;
}

export const roomCategories: ItemCategory[] = [
  {
    name: 'Salon',
    items: [
      { id: 'sofa-2p', name: 'Canapé 2 places', volume: 1.5 },
      { id: 'sofa-3p', name: 'Canapé 3 places', volume: 2.0 },
      { id: 'armchair', name: 'Fauteuil', volume: 0.8 },
      { id: 'coffee-table', name: 'Table basse', volume: 0.3 },
      { id: 'tv-stand', name: 'Meuble TV', volume: 0.5 },
      { id: 'bookshelf', name: 'Bibliothèque', volume: 1.0 },
      { id: 'tv', name: 'Télévision', volume: 0.2 },
      { id: 'carpet', name: 'Tapis', volume: 0.1 },
    ],
  },
  {
    name: 'Salle à manger',
    items: [
      { id: 'dining-table', name: 'Table à manger', volume: 1.0 },
      { id: 'dining-chair', name: 'Chaise', volume: 0.2 },
      { id: 'sideboard', name: 'Buffet', volume: 1.2 },
      { id: 'china-cabinet', name: 'Vaisselier', volume: 1.5 },
    ],
  },
  {
    name: 'Chambre',
    items: [
      { id: 'bed-single', name: 'Lit simple', volume: 1.0 },
      { id: 'bed-double', name: 'Lit double', volume: 2.0 },
      { id: 'bed-queen', name: 'Lit queen', volume: 2.5 },
      { id: 'bed-king', name: 'Lit king', volume: 3.0 },
      { id: 'wardrobe', name: 'Armoire', volume: 1.5 },
      { id: 'dresser', name: 'Commode', volume: 0.8 },
      { id: 'nightstand', name: 'Table de nuit', volume: 0.2 },
      { id: 'desk', name: 'Bureau', volume: 0.7 },
    ],
  },
  {
    name: 'Cuisine',
    items: [
      { id: 'refrigerator', name: 'Réfrigérateur', volume: 1.0 },
      { id: 'stove', name: 'Cuisinière', volume: 0.8 },
      { id: 'dishwasher', name: 'Lave-vaisselle', volume: 0.6 },
      { id: 'microwave', name: 'Micro-ondes', volume: 0.1 },
      { id: 'kitchen-table', name: 'Table de cuisine', volume: 0.8 },
      { id: 'kitchen-chair', name: 'Chaise de cuisine', volume: 0.2 },
    ],
  },
  {
    name: 'Salle de bain',
    items: [
      { id: 'washing-machine', name: 'Machine à laver', volume: 0.6 },
      { id: 'dryer', name: 'Sèche-linge', volume: 0.6 },
      { id: 'bathroom-cabinet', name: 'Meuble de salle de bain', volume: 0.5 },
    ],
  },
  {
    name: 'Divers',
    items: [
      { id: 'box-small', name: 'Petite boîte', volume: 0.03 },
      { id: 'box-medium', name: 'Boîte moyenne', volume: 0.06 },
      { id: 'box-large', name: 'Grande boîte', volume: 0.1 },
      { id: 'bicycle', name: 'Vélo', volume: 0.5 },
      { id: 'plant', name: 'Plante', volume: 0.2 },
      { id: 'vacuum', name: 'Aspirateur', volume: 0.2 },
      { id: 'ironing-board', name: 'Planche à repasser', volume: 0.1 },
    ],
  },
];

// Tailles de camions disponibles
export const truckSizes = [
  { id: 'small', name: 'Petit camion', capacity: 10, description: 'Idéal pour un studio ou un petit appartement' },
  { id: 'medium', name: 'Camion moyen', capacity: 20, description: 'Parfait pour un appartement de 2-3 pièces' },
  { id: 'large', name: 'Grand camion', capacity: 30, description: 'Adapté pour un appartement de 4-5 pièces' },
  { id: 'xlarge', name: 'Très grand camion', capacity: 50, description: 'Pour une maison ou un grand appartement' },
];

// Calculer le volume total des articles sélectionnés
export function calculateTotalVolume(selectedItems: { itemId: string; quantity: number }[]): number {
  let totalVolume = 0;
  
  selectedItems.forEach(({ itemId, quantity }) => {
    // Trouver l'article dans toutes les catégories
    for (const category of roomCategories) {
      const item = category.items.find(item => item.id === itemId);
      if (item) {
        totalVolume += item.volume * quantity;
        break;
      }
    }
  });
  
  return totalVolume;
}

// Recommander une taille de camion en fonction du volume total
export function recommendTruckSize(totalVolume: number): typeof truckSizes[0] | null {
  // Ajouter 10% de marge pour être sûr
  const volumeWithMargin = totalVolume * 1.1;
  
  // Trouver le plus petit camion qui peut contenir le volume
  for (const truck of truckSizes) {
    if (truck.capacity >= volumeWithMargin) {
      return truck;
    }
  }
  
  // Si aucun camion n'est assez grand, retourner le plus grand
  return truckSizes[truckSizes.length - 1];
} 