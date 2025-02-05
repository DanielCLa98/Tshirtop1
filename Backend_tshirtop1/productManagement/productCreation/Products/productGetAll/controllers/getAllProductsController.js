const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: ['productId', 'productName', 'price', 'description', 'image', 'productStatus', 'categoryId'] // 🔥 Asegúrate de incluir 'image'
    });

    return res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return res.status(500).json({ error: 'Failed to fetch products' });
  }
};

module.exports = { getAllProducts };
