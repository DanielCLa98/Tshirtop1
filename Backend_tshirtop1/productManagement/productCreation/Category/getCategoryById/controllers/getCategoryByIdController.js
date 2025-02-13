const Category  = require('../models/Category');

const getCategoryById = async (req, res) => {
  try {
    const categoryId =  parseInt(req.params.id, 10);

    if (isNaN(categoryId)) {
      return res.status(400).json({ error: 'Invalid category ID.' });
    }
    console.log(`🔍 Searching for category with ID: ${categoryId}`);
    const category = await Category.findByPk(categoryId); // Find category by primary key
    console.log('✅ Category found:', category);

    if (!category) {
      return res.status(404).json({ error: 'Category not found.' });
    }

    return res.status(200).json(category);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong.' });
  }
};

module.exports = getCategoryById;
