const express = require('express');
const getCategoryById = require('../controllers/getCategoryByIdController');

const router = express.Router();

/**
 * @swagger
 * /api/categories/{id}:
 *   get:
 *     summary: Get a category by ID
 *     description: Fetch a category from the database using its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the category to retrieve.
 *     responses:
 *       200:
 *         description: Category retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 categoryId:
 *                   type: integer
 *                   description: The unique ID of the category.
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: The name of the category.
 *                   example: Electronics
 *       404:
 *         description: Category not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Category not found
 *       500:
 *         description: Server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Something went wrong
 */
router.get('/:id', getCategoryById);

module.exports = router;
