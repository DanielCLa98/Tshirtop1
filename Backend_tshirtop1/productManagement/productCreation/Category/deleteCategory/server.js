const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database'); // Database connection
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// Import routes
const deleteCategoryRoutes = require('./routes/deleteCategoryRoute');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Category API',
      version: '1.0.0',
      description: 'API for managing categories, including deletion by ID',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3009}`,
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to files with Swagger annotations
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api/categories', deleteCategoryRoutes);

// Database connection and synchronization
sequelize
  .sync()
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.error('Error syncing database: ', error);
  });

// Start server
const PORT = process.env.PORT || 3009; // Ensure correct port is used
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
