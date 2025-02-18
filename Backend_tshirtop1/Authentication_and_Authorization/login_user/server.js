const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/Database');
const protectedLogin = require('./routes/protectes_userLogin');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const cors = require('cors');
//test
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET,POST",
  allowedHeaders: "Content-Type,Authorization"
}));

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/protected', protectedLogin);

sequelize.sync({ force: false }) 
  .then(() => {
    console.log('Tablas creadas o sincronizadas correctamente');
    const PORT = process.env.PORT || 3306;
    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en el puerto ${PORT}`);
      console.log(`Documentación disponible en http://localhost:${PORT}/api-docs`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });
