import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { connectToDatabase } from "./server/config/db.js";
import pokemonRoutes from "./server/routes/pokemonRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, "..", ".env") });

const app = express();
const port = Number(process.env.WEB_PORT) || 7768;

app.use(cors());
app.use(express.json());

// Montar las rutas
app.use("/api/pokemon", pokemonRoutes);

(async () => {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
})();
