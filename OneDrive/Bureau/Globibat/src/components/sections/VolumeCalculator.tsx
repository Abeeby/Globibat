'use client';

import { useState, useEffect } from 'react';
import { FaPlus, FaMinus, FaTruck, FaCalculator, FaArrowRight } from 'react-icons/fa';
import { roomCategories, calculateTotalVolume, recommendTruckSize } from '@/lib/utils/calculator-config';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';

interface SelectedItem {
  itemId: string;
  quantity: number;
  name: string;
  volume: number;
}

export default function VolumeCalculator() {
  const [activeCategory, setActiveCategory] = useState(roomCategories[0].name);
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);
  const [totalVolume, setTotalVolume] = useState(0);
  const [recommendedTruck, setRecommendedTruck] = useState<any>(null);
  
  // Mettre à jour le volume total et la recommandation de camion lorsque les articles sélectionnés changent
  useEffect(() => {
    const volume = calculateTotalVolume(selectedItems);
    setTotalVolume(volume);
    setRecommendedTruck(recommendTruckSize(volume));
  }, [selectedItems]);
  
  // Ajouter un article à la sélection
  const addItem = (categoryName: string, itemId: string) => {
    const category = roomCategories.find(cat => cat.name === categoryName);
    if (!category) return;
    
    const item = category.items.find(item => item.id === itemId);
    if (!item) return;
    
    const existingItem = selectedItems.find(selected => selected.itemId === itemId);
    
    if (existingItem) {
      // Augmenter la quantité si l'article existe déjà
      setSelectedItems(
        selectedItems.map(selected => 
          selected.itemId === itemId 
            ? { ...selected, quantity: selected.quantity + 1 } 
            : selected
        )
      );
    } else {
      // Ajouter un nouvel article
      setSelectedItems([
        ...selectedItems,
        { 
          itemId: item.id, 
          quantity: 1, 
          name: item.name, 
          volume: item.volume 
        }
      ]);
    }
  };
  
  // Diminuer la quantité d'un article
  const decreaseItem = (itemId: string) => {
    const existingItem = selectedItems.find(selected => selected.itemId === itemId);
    
    if (!existingItem) return;
    
    if (existingItem.quantity === 1) {
      // Supprimer l'article si la quantité est 1
      setSelectedItems(selectedItems.filter(selected => selected.itemId !== itemId));
    } else {
      // Diminuer la quantité
      setSelectedItems(
        selectedItems.map(selected => 
          selected.itemId === itemId 
            ? { ...selected, quantity: selected.quantity - 1 } 
            : selected
        )
      );
    }
  };
  
  // Supprimer un article
  const removeItem = (itemId: string) => {
    setSelectedItems(selectedItems.filter(selected => selected.itemId !== itemId));
  };
  
  // Réinitialiser le calculateur
  const resetCalculator = () => {
    setSelectedItems([]);
    setTotalVolume(0);
    setRecommendedTruck(null);
  };
  
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Calculateur de volume"
          description="Estimez le volume de vos biens pour votre déménagement. Sélectionnez les articles que vous souhaitez déménager pour obtenir une estimation du volume total et une recommandation de taille de camion."
          centered
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sélection des articles */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6">Sélectionnez vos articles</h3>
            
            {/* Onglets des catégories */}
            <div className="flex flex-wrap border-b border-gray-200 mb-6">
              {roomCategories.map((category) => (
                <button
                  key={category.name}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeCategory === category.name
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveCategory(category.name)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Liste des articles de la catégorie active */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {roomCategories
                .find(category => category.name === activeCategory)
                ?.items.map((item) => {
                  const selectedItem = selectedItems.find(selected => selected.itemId === item.id);
                  
                  return (
                    <div 
                      key={item.id} 
                      className="flex justify-between items-center p-3 border border-gray-200 rounded-md hover:border-blue-300 transition-colors"
                    >
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.volume} m³</p>
                      </div>
                      
                      <div className="flex items-center">
                        {selectedItem ? (
                          <>
                            <button
                              onClick={() => decreaseItem(item.id)}
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-blue-600 focus:outline-none"
                              aria-label={`Diminuer la quantité de ${item.name}`}
                            >
                              <FaMinus size={12} />
                            </button>
                            <span className="w-8 text-center">{selectedItem.quantity}</span>
                          </>
                        ) : (
                          <span className="w-16 text-center">0</span>
                        )}
                        
                        <button
                          onClick={() => addItem(activeCategory, item.id)}
                          className="w-8 h-8 flex items-center justify-center text-blue-600 hover:text-blue-800 focus:outline-none"
                          aria-label={`Ajouter ${item.name}`}
                        >
                          <FaPlus size={12} />
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          
          {/* Résumé et résultats */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6">Résumé</h3>
            
            {selectedItems.length === 0 ? (
              <p className="text-gray-500 mb-6">Aucun article sélectionné</p>
            ) : (
              <div className="mb-6">
                <div className="max-h-64 overflow-y-auto mb-4">
                  {selectedItems.map((item) => (
                    <div key={item.itemId} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.volume} m³ × {item.quantity}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.itemId)}
                        className="text-red-500 hover:text-red-700 focus:outline-none"
                        aria-label={`Supprimer ${item.name}`}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center py-3 border-t border-gray-200 font-semibold">
                  <span>Volume total:</span>
                  <span>{totalVolume.toFixed(2)} m³</span>
                </div>
                
                {recommendedTruck && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-md">
                    <div className="flex items-center mb-2 text-blue-700">
                      <FaTruck className="mr-2" />
                      <h4 className="font-semibold">Recommandation</h4>
                    </div>
                    <p className="text-blue-800 font-medium">{recommendedTruck.name}</p>
                    <p className="text-sm text-blue-600">{recommendedTruck.description}</p>
                    <p className="text-sm text-blue-600 mt-1">Capacité: {recommendedTruck.capacity} m³</p>
                  </div>
                )}
                
                <button
                  onClick={resetCalculator}
                  className="mt-6 w-full py-2 text-gray-600 hover:text-gray-800 text-sm focus:outline-none"
                >
                  Réinitialiser le calculateur
                </button>
              </div>
            )}
            
            <Link
              href="/contact#devis"
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md flex items-center justify-center font-medium transition-colors"
            >
              Demander un devis <FaArrowRight className="ml-2" size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 