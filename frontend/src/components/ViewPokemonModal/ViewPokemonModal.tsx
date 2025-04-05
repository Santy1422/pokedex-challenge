import React from 'react';

interface ViewPokemonModalProps {
  isOpen: boolean;
  onClose: () => void;
  pokemon: {
    name: string;
    url: string;
    number: number;
  };
}

const ViewPokemonModal: React.FC<ViewPokemonModalProps> = ({ isOpen, onClose, pokemon }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg w-full max-w-md shadow-xl">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 bg-pokemon-gray/30 rounded-xl">
                  <img 
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" 
                    alt="Pokeball" 
                    className="absolute inset-0 m-auto max-w-[24px] max-h-[24px] w-auto h-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{pokemon.name}</h2>
              </div>
              <button 
                onClick={onClose}
                type="button"
                className="text-gray-400 hover:text-gray-500 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-48 h-48 bg-pokemon-gray/20 rounded-2xl p-4 shadow-sm">
                <img
                  src={pokemon.url}
                  alt={pokemon.name}
                  className="absolute inset-0 m-auto max-w-[180px] max-h-[180px] w-auto h-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Número: #{pokemon.number.toString().padStart(4, '0')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPokemonModal; 