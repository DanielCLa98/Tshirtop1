const Category = require('../models/Category');

const deleteCategory = async (req, res) => {
  try {
    const categoryId = parseInt(req.params.id, 10);

    if (isNaN(categoryId)) {
      return res.status(400).json({ error: 'Invalid category ID' }); 
    }

    console.log(`🗑 Deleting category with ID: ${categoryId}`);

    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    await category.destroy();

    return res.status(200).json({ message: 'Category deleted successfully' }); 
  } catch (error) {
    console.error('🔥 Error deleting category:', error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports =  deleteCategory ;
