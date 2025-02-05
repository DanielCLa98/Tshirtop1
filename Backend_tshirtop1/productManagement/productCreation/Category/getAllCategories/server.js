const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database'); // Database connection
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// Import routes
const categoryRoutes = require('./routes/getAllCategoriesRoute'); // Ensure the route is correct

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
            description: 'API for managing categories',
        },
        servers: [
            {
                url: 'http://localhost:3006', // Base URL of your API
            },
        ],
    },
    apis: ['./routes/*.js'], // Path to files with Swagger annotations
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Swagger route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api/categories', categoryRoutes);

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
const PORT = process.env.PORT || 3006; // Ensure the port is 3001 as mentioned earlier
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
