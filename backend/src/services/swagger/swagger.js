const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Documentation API',
    version: '1.0.0',
    description: `This is the documentation of the API for the restaurant L'Escale. It allows you to manage the desserts, drinks, wines, menu discovery, menu escale and reservations. You can create, read and delete all these elements.`,
  },
  host: 'localhost:3000'
};

const outputFile = './swagger.json';
const routes = ['./src/routes/desserts.route.js'];

swaggerAutogen(outputFile, routes, doc);