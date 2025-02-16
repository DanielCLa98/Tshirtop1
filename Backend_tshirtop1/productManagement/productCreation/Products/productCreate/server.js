const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/database');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
//test
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product API',
      version: '1.0.0',
      description: 'API for managing products, including creation',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['./routes/*.js'], // Define path to route files for Swagger annotations
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
const createProductRoute = require('./routes/createProductRoute');
app.use('/api/products', createProductRoute);

// Database connection
const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully');

    // Synchronize tables with Sequelize models
    await sequelize.sync({ alter: true });
    console.log('✅ Tables synced successfully');
  } catch (error) {
    console.error('❌ Unable to connect to the database or sync tables:', error);
  }
};

// Start server
app.listen(port, () => {
  connectToDatabase();
  console.log(`Server running on port ${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
