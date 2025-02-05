const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'recovery password API',
      version: '1.0.0',
      description: 'PI for password recovery, code validation, and credential reset.',
    },
    servers: [
      {
        url: 'http://localhost:3003',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./routes/*.js', './controllers/*.js'],
};

module.exports = swaggerJsDoc(swaggerOptions);
