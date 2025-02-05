const express = require('express');
const router = express.Router();
const createCategory = require('../controllers/createCategory');

/**
 * @swagger
 * /api/categories/create:
 *   post:
 *     summary: Create a new category
 *     description: Creates a new category. If the name already exists, it appends a number to make it unique.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the category to create.
 *                 example: running
 *     responses:
 *       201:
 *         description: Category created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 categoryId:
 *                   type: integer
 *                   description: The ID of the newly created category.
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: The unique name of the category.
 *                   example: Electronics
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
router.post('/', createCategory);

module.exports = router;
