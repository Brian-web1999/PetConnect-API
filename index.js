import express from "express"; // Importamos express
import dotenv from "dotenv";
import routerAPI from "./routes/index.js"; // Importamos las rutas
import mongoose from "mongoose";

dotenv.config();
const port = process.env.PORT || 3000; // Creamos el puerto
const app = express(); // Creamos la aplicación
const uri_db = process.env.URI_DB; // Conexión a la base de datos

// Conexión con la base de datos MongoDB
mongoose.connect(uri_db);
const db = mongoose.connection;

db.on('error', (error) => {
    console.error('Error en la conexión con la base de datos');
    console.error({error});
});

db.once('open', () => {
    console.info('Conexión con la base de datos establecida correctamente');
});

// Middleware (Soporte para JSON)
app.use(express.json());

// Directorio de acceso público para archivos estáticos (si es necesario)
app.use(express.static('public'));

// Ruta principal (Home)
app.get('/', (request, response) => {
    response.send('<h1>Bienvenido a la API de Mascotas y Dueños</h1>');
});

// Llamamos a routerAPI para las rutas de la API
routerAPI(app);

// Iniciamos el servidor en el puerto configurado
app.listen(port, () => {
    console.info(`Servidor en el puerto ${port}`);
});
