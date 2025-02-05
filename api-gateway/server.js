const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080; // API Gateway en el puerto 8080

app.use(cors());
app.use(express.json());

// 📌 Definir los microservicios
const services = {
  createProduct: 'http://localhost:3000',
  getAllProducts: 'http://localhost:3004',
  getProductById: 'http://localhost:3001',
  updateProduct: 'http://localhost:3011',
  deleteProduct: 'http://localhost:3003',

  createCategory: 'http://localhost:3005',
  getAllCategories: 'http://localhost:3006',
  getCategoryById: 'http://localhost:3007',
  updateCategory: 'http://localhost:3008',
  deleteCategory: 'http://localhost:3009',

  graphql: 'http://localhost:3010',
};

// 📌 Función para crear rutas dinámicas en el API Gateway
const setupProxy = (route, target) => {
  app.use(route, createProxyMiddleware({ target, changeOrigin: true }));
};

// 📌 Configurar las rutas del API Gateway
setupProxy('/api/products/create', services.createProduct);
setupProxy('/api/products', `${services.getAllProducts}/api/products`);
setupProxy('/api/products/:id', services.getProductById);
setupProxy('/api/products/update/:id', services.updateProduct);
setupProxy('/api/products/delete/:id', services.deleteProduct);

setupProxy('/api/categories/create', services.createCategory);
setupProxy('/api/categories/search', services.getAllCategories);
setupProxy('/api/categories/:id', services.getCategoryById);
setupProxy('/api/categories/update/:id', services.updateCategory);
setupProxy('/api/categories/delete/:id', services.deleteCategory);

setupProxy('/graphql', services.graphql);

// 📌 Iniciar el API Gateway
app.listen(PORT, () => {
  console.log(`🚀 API Gateway corriendo en http://localhost:${PORT}`);
});
