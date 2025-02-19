const express = require('express');
const cors = require('cors');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
//test
const app = express();
const PORT = process.env.PORT || 3002;
//test
// Middleware
app.use(cors());
app.use(express.json());

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product API',
      version: '1.0.0',
      description: 'API for managing products, including fetching by ID',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to route files for Swagger annotations
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api/products', require('./routes/getProductByIdRoute'));

// Start server
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  console.log(`Swagger disponible en http://localhost:${PORT}/api-docs`);
});
