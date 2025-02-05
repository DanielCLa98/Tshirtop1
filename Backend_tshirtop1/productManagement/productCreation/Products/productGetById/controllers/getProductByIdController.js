const Product = require('../models/Products');

const getProductById = async (req, res) => {
  try {
    const { id } = req.params; // Extraer ID del producto desde los parámetros
    console.log(`🔍 Searching for product with ID: ${id}`);
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getProductById };
