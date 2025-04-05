import { db } from "../config/db.js";
import Pokemon from "../database/models/pokemon.js";
import axios from "axios";

interface PokemonData {
  name: string;
  height: number;
  number: number;
  health: number;
  weight: number;
  url: string;
}

const init = async (): Promise<void> => {
  try {
    console.log("Iniciando importación de datos...");
    for (let i = 1; i <= 25; i++) {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const pokemonData = response.data;

      const pokemon: PokemonData = {
        name: pokemonData.name,
        height: pokemonData.height / 10, // Convertir a metros
        number: pokemonData.id,
        health: Math.floor(Math.random() * 100) + 1, // HP aleatorio entre 1 y 100
        weight: pokemonData.weight / 10, // Convertir a kg
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`,
      };

      await Pokemon.create(pokemon);
      console.log(`Pokémon ${pokemon.name} importado correctamente`);
    }
    console.log("Importación completada");
  } catch (error) {
    console.error("Error al importar datos:", error);
    throw error;
  }
};

export default init;