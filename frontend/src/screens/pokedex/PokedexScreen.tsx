import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchHeaviestPokemon } from '../../redux/slices/pokemonSlice';
import AddPokemonModal from '../../components/AddPokemonModal/AddPokemonModal';
import ViewPokemonModal from '../../components/ViewPokemonModal/ViewPokemonModal';

const PokedexScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pokemons, loading, error } = useSelector((state: RootState) => state.pokemon);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<{
    name: string;
    url: string;
    number: number;
  } | null>(null);

  useEffect(() => {
    dispatch(fetchHeaviestPokemon());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-pokemon">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-pokemon p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="font-pokemon-solid text-3xl text-pokemon-blue tracking-wider">Pokédex</h1>
            <button
              onClick={() => setIsModalOpen(true)}
              type="button"
              className="flex items-center gap-1.5 bg-pokemon-red/90 hover:bg-pokemon-red text-white text-sm px-3 py-1.5 rounded-lg transition-all transform hover:scale-102 shadow-sm"
            >
              <div className="relative w-4 h-4">
                <img 
                  src="/assets/images/add_btn.png" 
                  alt="Add" 
                  className="absolute inset-0 m-auto max-w-[14px] max-h-[14px] w-auto h-auto object-contain"
                  loading="lazy"
                />
              </div>
              <span>Agregar Pokémon</span>
            </button>
          </div>

          {loading && (
            <div className="flex justify-center items-center p-4">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-pokemon-blue"></div>
            </div>
          )}

          {error && (
            <div className="text-red-500 text-center p-3 bg-red-50 rounded-lg">
              {error}
            </div>
          )}

          {!loading && !error && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-2 text-left text-sm font-semibold text-pokemon-blue">#</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-pokemon-blue">Número</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-pokemon-blue">Nombre</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-pokemon-blue">Altura</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-pokemon-blue">Peso</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-pokemon-blue">HP</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-pokemon-blue">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {pokemons.map((pokemon, index) => (
                    <tr key={pokemon.id} className="hover:bg-pokemon-gray/50 transition-colors">
                      <td className="px-4 py-2 font-mono text-sm text-gray-600">{index + 1}</td>
                      <td className="px-4 py-2 font-mono text-sm text-gray-600">
                        #{pokemon.number.toString().padStart(4, '0')}
                      </td>
                      <td className="px-4 py-2 font-medium">{pokemon.name}</td>
                      <td className="px-4 py-2 text-gray-600">{pokemon.height} m</td>
                      <td className="px-4 py-2 text-gray-600">{pokemon.weight} kg</td>
                      <td className="px-4 py-2">
                        <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">
                          {pokemon.health} HP
                        </span>
                      </td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => setSelectedPokemon({
                            name: pokemon.name,
                            url: pokemon.url,
                            number: pokemon.number
                          })}
                          className="text-sm text-pokemon-blue hover:text-pokemon-red transition-colors"
                        >
                          Ver Pokémon
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <AddPokemonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ViewPokemonModal 
        isOpen={!!selectedPokemon} 
        onClose={() => setSelectedPokemon(null)} 
        pokemon={selectedPokemon!} 
      />
    </div>
  );
};

export default PokedexScreen;