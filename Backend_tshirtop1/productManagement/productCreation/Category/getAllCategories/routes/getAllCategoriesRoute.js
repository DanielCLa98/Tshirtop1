const express = require('express');
const getAllCategories = require('../controllers/getAllCategoriesController');

const router = express.Router();

/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Retrieve all categories
 *     description: Retrieve a list of all categories from the database.
 *     responses:
 *       200:
 *         description: A list of categories.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   categoryId:
 *                     type: integer
 *                     description: The unique ID of the category.
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: The name of the category.
 *                     example: running
 */
router.get('/search', getAllCategories);

module.exports = router;
