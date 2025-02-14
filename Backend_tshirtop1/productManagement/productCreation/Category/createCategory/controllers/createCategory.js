const Category  = require('../models/Category');

const createCategory = async (req, res) => {
  try {
    let { name } = req.body;
    let newName = name;

    let existingCategory = await Category.findOne({ where: { name } });
    if (existingCategory) {
      return res.status(400).json({ error: 'Category already exists' });
    }

    const category = await Category.create({ name: newName });
    console.log('Category created:', category.dataValues);
    return res.status(201).json(category);

  } catch (error) {
    console.error('Error creating category:', error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = createCategory;
