const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/Database');
const roleRoutes = require('./routes/Role_routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./config/swagger');

const app = express();

// Middlewares
app.use(bodyParser.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/register', roleRoutes);

// Database synchronization and server start
const startServer = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database synchronized successfully');

    const PORT = process.env.PORT || 3016;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
    });
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
};

startServer();
