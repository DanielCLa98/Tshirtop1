const  Product  = require('../models/Products');

const updateProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.productId, 10);
    const { productName, image, size, price, color, description, accessories, productCode, launchDate, brand, productStatus, categoryId } = req.body;

    const product = await Product.findOne({ where: { productId } });

    if (!product) {
      return res.status(404).json({ message: 'Product not found.!' });
    }

    const updatedProduct = await product.update({
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
      categoryId
    });

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating product!!:' });
  }
};

module.exports = { updateProduct };
