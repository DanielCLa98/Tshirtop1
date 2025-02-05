const express = require('express');
const router = express.Router();
const { createProduct } = require('../controllers/createProductController');

/**
 * @swagger
 * /api/products/create:
 *   post:
 *     summary: Create a new product
 *     description: Adds a new product to the database with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the product.
 *                 example: Running Shoes
 *               price:
 *                 type: number
 *                 description: The price of the product.
 *                 example: 79.99
 *               description:
 *                 type: string
 *                 description: A brief description of the product.
 *                 example: High-quality running shoes for all terrains.
 *               stock:
 *                 type: integer
 *                 description: The number of items in stock.
 *                 example: 100
 *     responses:
 *       201:
 *         description: Product created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 productId:
 *                   type: integer
 *                   description: The ID of the newly created product.
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: The name of the product.
 *                   example: Running Shoes
 *                 price:
 *                   type: number
 *                   description: The price of the product.
 *                   example: 79.99
 *                 description:
 *                   type: string
 *                   description: A brief description of the product.
 *                   example: High-quality running shoes for all terrains.
 *                 stock:
 *                   type: integer
 *                   description: The stock level of the product.
 *                   example: 100
 *       400:
 *         description: Bad request (e.g., missing required fields).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Missing required fields
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
// POST route to create a new product
router.post('/', createProduct);

module.exports = router;
