const express = require('express');
const cors = require('cors');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const app = express();
const  sequelize  = require('./config/database');
const Category = require('./models/Category');
const PORT = process.env.PORT || 3005;

// Middleware
app.use(cors());
app.use(express.json());

//Synchronize the database to ensure that the Categories table exists
sequelize.sync({ alter: true }).then(() => {
    console.log('✅ Table Categories synchronized');
  });

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
                url: `http://localhost:${PORT}`,
            },
        ],
    },
    apis: ['./routes/*.js'], // Path to files with Swagger annotations
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api/categories', require('./routes/createCategoryRoute'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
