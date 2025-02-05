const express = require('express');
const { getProductById } = require('../controllers/getProductByIdController');

const router = express.Router();

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     description: Fetch a product from the database using its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the product to retrieve.
 *     responses:
 *       200:
 *         description: Product retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 productId:
 *                   type: integer
 *                   description: The unique ID of the product.
 *                   example: 1
 *                 productName:
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
 *       404:
 *         description: Product not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Product not found
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
router.get('/:id', getProductById);

module.exports = router;
