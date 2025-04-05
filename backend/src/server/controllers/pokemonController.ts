import { Request, Response } from "express";
import Pokemon from "../database/models/pokemon.js";

export const getHeaviestPokemon = async (req: Request, res: Response): Promise<void> => {
  try {
    const pokemons = await Pokemon.findAll({
      order: [["weight", "DESC"]],
      limit: 25,
    });
    res.json(pokemons);
  } catch (error) {
    console.error("Error fetching pokemons:", error);
    res.status(500).json({ error: "Error fetching pokemons" });
  }
};

export const createPokemon = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, height, number, health, weight, url } = req.body;
    const pokemon = await Pokemon.create({
      name,
      height,
      number,
      health,
      weight,
      url,
    });
    res.status(201).json(pokemon);
  } catch (error) {
    console.error("Error creating pokemon:", error);
    res.status(500).json({ error: "Error creating pokemon" });
  }
}; 