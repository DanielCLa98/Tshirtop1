const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./config/database');
const deleteProductRoute = require('./routes/deleteProductRoute');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware
app.use(express.json());

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product API',
      version: '1.0.0',
      description: 'API for managing products, including deletion',
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
app.use('/api/products', deleteProductRoute);

// Test database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('✅ Database connected successfully');
  })
  .catch((error) => {
    console.error('❌ Unable to connect to the database:', error);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📄 Swagger docs available at http://localhost:${PORT}/api-docs`);
});
