const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database'); // Database connection
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// Import routes
const categoryByIdRoutes = require('./routes/getCategoryByIdRoute');

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
      description: 'API for managing categories, including fetching by ID',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3007}`,
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to your route files for Swagger annotations
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api/categories', categoryByIdRoutes);

// Sync database
sequelize.sync()
  .then(() => console.log('Database connected'))
  .catch((error) => console.error('Database connection error: ', error));

// Start server
const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
