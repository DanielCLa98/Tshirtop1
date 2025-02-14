const { Sequelize } = require('sequelize');
require('dotenv').config();  // Cargar variables de entorno desde el archivo .env

// Configuración de Sequelize para la base de datos PostgreSQL
const sequelize = new Sequelize(
    process.env.DB_NAME,        // Nombre de la base de datos (e.g., 'userbd')
    process.env.DB_USER,        // Usuario de la base de datos (e.g., 'admin')
    process.env.DB_PASSWORD,    // Contraseña del usuario de la base de datos
    {
        host: process.env.DB_HOST,      // Dirección del contenedor (si usas Docker, será 'localhost')
        dialect: process.env.DB_DIALECT, // 'postgres' (para PostgreSQL)
        logging: false,                  // Si no quieres ver todos los logs de las consultas SQL
    }
);

// Intentar conectar a la base de datos
sequelize.authenticate()
    .then(() => {
        console.log('Conexión exitosa a la base de datos.');
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos:', err);
    });

// Sincronizar los modelos con la base de datos
sequelize.sync({ force: false })  // Si force: true, elimina las tablas existentes antes de crearlas
    .then(() => {
        console.log('Tablas creadas o sincronizadas correctamente');
    })
    .catch(err => {
        console.error('Error al sincronizar las tablas:', err);
    });

module.exports = sequelize;
