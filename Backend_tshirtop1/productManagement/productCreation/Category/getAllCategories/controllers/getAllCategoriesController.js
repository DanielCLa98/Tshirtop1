const Category  = require('../models/Category');

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll(); // Get all categories
    console.log('✅ Categories found:', categories)
    return res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = getAllCategories;
