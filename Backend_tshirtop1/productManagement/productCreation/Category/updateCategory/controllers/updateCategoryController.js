const Category  = require('../models/Category');

const updateCategory = async (req, res) => {
  const categoryId = parseInt(req.params.id, 10); // Extract category ID from URL params
  const { name } = req.body;  // Extract the new category name from request body

  if (isNaN(categoryId)) {
    return res.status(400).json({ error: 'Invalid category ID!.' }); // Validate ID
  }
  // Validate if the name is provided
  if (!name) {
    return res.status(400).json({ error: 'Name is required!.' });
  }

  try {

    console.log(`🔄 Updating category with ID: ${categoryId}`);
    // Find category by ID
    const category = await Category.findByPk(categoryId);
    console.log('✅ Category found:', category);
    if (!category) {
      return res.status(404).json({ error: 'Category not found.!' });
    }

    // Update category name
    category.name = name;

    // Save the updated category
    await category.save();

    // Return the updated category in response
    return res.status(200).json(category);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong.' });
  }
};

module.exports = updateCategory;
