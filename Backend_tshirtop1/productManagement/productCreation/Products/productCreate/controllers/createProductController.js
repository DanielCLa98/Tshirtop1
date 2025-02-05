const Product = require('../models/Product');

const createProduct = async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const {
      productName,
      image,
      size,
      price,
      color,
      description,
      accessories,
      productCode,
      launchDate,
      brand,
      productStatus,
      categoryId,
    } = req.body;

    // Validación de campos requeridos
    if (!productName || !price || !categoryId) {
      return res.status(400).json({ error: 'Missing required fields: productName, price, and categoryId are required.' });
    }

    // Crear el nuevo producto
    const newProduct = await Product.create({
      productName,
      image,
      size,
      price,
      color,
      description,
      accessories,
      productCode,
      launchDate,
      brand,
      productStatus,
      categoryId,
    });

    // Responder con el producto creado
    return res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { createProduct };
