import { db } from "../config/db.js";
import init from "../controllers/initController.js";

const importarDatos = async (): Promise<void> => {
  try {
    // Autenticar y sincronizar
    await db.authenticate();
    await db.sync({ force: false });
    await init();
    console.log("Datos importados correctamente");
    process.exit();
  } catch (error) {
    console.log("··········");
    console.log(error);
    process.exit(1);
  }
};

const eliminarDatos = async (): Promise<void> => {
  try {
    await db.sync({ force: true });
    console.log("Datos eliminados correctamente");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-i") {
  importarDatos();
}

if (process.argv[2] === "-e") {
  eliminarDatos();
}
