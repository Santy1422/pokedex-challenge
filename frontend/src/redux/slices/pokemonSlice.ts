import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Pokemon {
  id: number;
  name: string;
  height: number;
  number: number;
  health: number;
  weight: number;
  url: string;
}

interface PokemonState {
  pokemons: Pokemon[];
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  pokemons: [],
  loading: false,
  error: null
};

export const fetchHeaviestPokemon = createAsyncThunk(
  'pokemon/fetchHeaviest',
  async () => {
    const response = await axios.get('http://localhost:8080/api/pokemon');
    return response.data;
  }
);

export const createNewPokemon = createAsyncThunk(
  'pokemon/create',
  async (pokemonData: Omit<Pokemon, 'id'>, { dispatch }) => {
    const response = await axios.post('http://localhost:8080/api/pokemon', pokemonData);
    await dispatch(fetchHeaviestPokemon());
    return response.data;
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch heaviest Pokemon
      .addCase(fetchHeaviestPokemon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHeaviestPokemon.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemons = action.payload;
      })
      .addCase(fetchHeaviestPokemon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error al cargar los Pokémon';
      })
      // Create new Pokemon
      .addCase(createNewPokemon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewPokemon.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createNewPokemon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error al crear el Pokémon';
      });
  }
});

export default pokemonSlice.reducer; 