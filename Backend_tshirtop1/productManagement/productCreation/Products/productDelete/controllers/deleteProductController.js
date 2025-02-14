const  Product  = require('../models/Products');

const deleteProduct = async (req, res) => {

  try {
    const productId = parseInt(req.params.productId, 10);
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ message: '❌ Product not found.' });
    }

    await product.destroy();
    
    res.status(200).json({ message: 'Product deleted successfully!. });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { deleteProduct };
