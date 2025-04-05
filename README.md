# Pokedex Challenge

Una aplicación web para gestionar una Pokédex, desarrollada con React, Node.js y MySQL.

## Características

- Lista de los 25 Pokémon más pesados
- Creación de nuevos Pokémon
- Interfaz de usuario moderna y responsiva
- Base de datos MySQL con Sequelize
- API RESTful

## Tecnologías utilizadas

- Frontend:
  - React
  - TypeScript
  - Redux
  - Tailwind CSS

- Backend:
  - Node.js
  - Express
  - TypeScript
  - MySQL
  - Sequelize

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/pokedex-challenge.git
```

2. Configurar el backend:
```bash
cd backend
npm install
```

3. Configurar el frontend:
```bash
cd frontend
npm install
```

4. Configurar la base de datos:
- Crear una base de datos MySQL llamada `pokedex`
- Importar el archivo `pokedex.sql`
- Configurar el archivo `.env` en el backend

5. Iniciar los servidores:
```bash
# En una terminal
cd backend
npm run dev

# En otra terminal
cd frontend
npm run dev
```

## Uso

- La aplicación estará disponible en `http://localhost:5173`
- El backend estará disponible en `http://localhost:7768`

## Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir los cambios propuestos.

## Licencia

Este proyecto está bajo la Licencia MIT.

¡Hola joven entrenador!

Llegas pronto, soy el profesor Oak, y como vas a iniciar tu aventura Pokemon tengo que darte un Pokemon para que inicies tu aventura... pero por un motivo que desconozco no puedo ver mi listado de Pokemon, ni tampoco registrar nuevos Pokemon en la Pokedex y ¡tengo que abrir el laboratorio en 2 hora!

¿Cómo dices? ¿Qué sabes React y Node? me viene de perlas, la Pokedex está hecha con React, Node y utiliza una base de datos Mysql, ¡qué suerte!

Primero de todo importa la base de datos pokedex.sql que encontraras en la raiz del repo, después crea un fichero .env en el backend con las siguientes variables:

```
DB_NAME = pokedex
DB_USER = root
DB_PASS = 
DB_HOST = localhost
WEB_PORT = 7768
```

Este fichero es necesario para que el back pueda conectarse con la base de datos, edítalo con los datos de acceso a tu base de datos.

Usando todas las buenas prácticas de programador que conozcas, tienes como primera tarea mostrar un listado de los Pokemon que ya tengo registrados en la base de datos.

Solo muéstrame los 25 más pesados.

Además, me guardarás estos en un "reducer". (redux)

La tabla puede tener el formato que quieras, pero tienes que mostrar todos los datos

Como segunda tarea deberás crear un componente para poder registrar un nuevo Pokemon.

Cuando le des al botón de la esquina derecha superior

tiene que emerger una ventana tipo modal, en la que pueda rellenar los datos del nuevo Pokemon que registraré.

Este modal tiene que tener, aparte de los inputs necesarios para crear un nuevo Pokemon, un botón para cerrarse y otro para guardar los cambios que haya hecho.

Cuando se haya creado el Pokemon se me tiene que notificar. (con un simple alert basta)

También se tiene que actualizar la tabla que has hecho al principio con el nuevo Pokemon.

¡Eso es todo, muchas gracias!

Aquí te dejo unos detalles técnicos:

Verás que el repositorio tiene dos carpetas, backend y frontend.

Para poder realizar la prueba con éxito, debes tocar, tanto frontend, para ver los datos, como backend para obtenerlos.

Recuerda hacer <code>npm i</code> dentro de cada carpeta para que se descarguen todas las dependencias

El backend está implementado con Express y debes recuperar e insertar datos en la base de datos usando Sequelize. La conexión ya está configurada y el modelo implementado, solo debes preocuparte de crear el controlador con las funciones necesarias y los endpoints.

Verás algún ejemplo de rutas y controladores en el backend.

Recuerda que debes utilizar buenas prácticas: No utilizar 'any', estructurar código, tipar correctamente, etc. 

Para ejecutar tanto el front como el back: <code>npm run dev</code> dentro de sus respectivas carpetas.

¡Cualquier problema, no dudes en preguntar!

