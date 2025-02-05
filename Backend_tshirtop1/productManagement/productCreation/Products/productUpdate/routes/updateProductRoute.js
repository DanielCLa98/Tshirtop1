const express = require('express');
const { updateProduct } = require('../controllers/updateProductController');

const router = express.Router();

/**
 * @swagger
 * /api/products/update/{productId}:
 *   put:
 *     summary: Update a product by ID
 *     description: Updates an existing product in the database using its unique ID.
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the product to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productName:
 *                 type: string
 *                 description: The updated name of the product.
 *                 example: Updated Running Shoes
 *               price:
 *                 type: number
 *                 description: The updated price of the product.
 *                 example: 89.99
 *               description:
 *                 type: string
 *                 description: The updated description of the product.
 *                 example: High-quality running shoes for long-distance runners.
 *               stock:
 *                 type: integer
 *                 description: The updated stock quantity of the product.
 *                 example: 120
 *     responses:
 *       200:
 *         description: Product updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 productId:
 *                   type: integer
 *                   description: The ID of the updated product.
 *                   example: 1
 *                 productName:
 *                   type: string
 *                   description: The updated name of the product.
 *                   example: Updated Running Shoes
 *                 price:
 *                   type: number
 *                   description: The updated price of the product.
 *                   example: 89.99
 *                 description:
 *                   type: string
 *                   description: The updated description of the product.
 *                   example: High-quality running shoes for long-distance runners.
 *                 stock:
 *                   type: integer
 *                   description: The updated stock quantity of the product.
 *                   example: 120
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
router.put('/:productId', updateProduct);

module.exports = router;
