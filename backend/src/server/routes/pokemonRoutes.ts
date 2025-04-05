import { Router } from "express";
import { getHeaviestPokemon, createPokemon } from "../controllers/pokemonController.js";

const router = Router();

router.get("/", getHeaviestPokemon);
router.post("/", createPokemon);

export default router; 