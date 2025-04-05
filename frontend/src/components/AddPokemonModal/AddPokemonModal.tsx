import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewPokemon } from '../../redux/slices/pokemonSlice';
import { AppDispatch, RootState } from '../../redux/store';

interface AddPokemonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddPokemonModal: React.FC<AddPokemonModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { pokemons } = useSelector((state: RootState) => state.pokemon);
  const [formData, setFormData] = useState({
    name: '',
    height: '',
    number: '',
    health: '',
    weight: '',
    url: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar el error cuando el usuario modifica el número
    if (name === 'number') {
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const number = parseInt(formData.number);
    
    // Verificar si el número ya existe
    const numberExists = pokemons.some(pokemon => pokemon.number === number);
    if (numberExists) {
      setError('Ya existe un Pokémon con este número');
      return;
    }

    try {
      await dispatch(createNewPokemon({
        ...formData,
        height: parseFloat(formData.height),
        number: number,
        health: parseInt(formData.health),
        weight: parseFloat(formData.weight)
      })).unwrap();
      alert('¡Pokémon creado exitosamente!');
      setFormData({
        name: '',
        height: '',
        number: '',
        health: '',
        weight: '',
        url: ''
      });
      setError('');
      onClose();
    } catch (error) {
      alert('Error al crear el Pokémon');
    }
  };

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
                <h2 className="text-xl font-semibold text-gray-800">Nuevo Pokémon</h2>
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
          
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {error && (
              <div className="text-red-500 text-sm bg-red-50 p-2 rounded-lg">
                {error}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <input
                type="text"
                name="name"
                placeholder="Ej: Pikachu"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pokemon-red focus:bg-white transition-colors"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Altura (m)</label>
                <input
                  type="number"
                  name="height"
                  placeholder="Ej: 0.4"
                  value={formData.height}
                  onChange={handleChange}
                  required
                  step="0.1"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pokemon-red focus:bg-white transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Número</label>
                <input
                  type="number"
                  name="number"
                  placeholder="Ej: 25"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 bg-gray-50 border ${error ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-pokemon-red focus:bg-white transition-colors`}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Salud (HP)</label>
                <input
                  type="number"
                  name="health"
                  placeholder="Ej: 35"
                  value={formData.health}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pokemon-red focus:bg-white transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Peso (kg)</label>
                <input
                  type="number"
                  name="weight"
                  placeholder="Ej: 6.0"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                  step="0.1"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pokemon-red focus:bg-white transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">URL de la imagen</label>
              <input
                type="text"
                name="url"
                placeholder="Ej: https://..."
                value={formData.url}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pokemon-red focus:bg-white transition-colors"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full mt-6 px-4 py-2 bg-pokemon-red text-white font-medium rounded-lg hover:bg-pokemon-red/90 focus:outline-none focus:ring-2 focus:ring-pokemon-red focus:ring-offset-2 transition-colors"
            >
              Crear Pokémon
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPokemonModal; 