const express = require('express');
const { getAllProducts } = require('../controllers/getAllProductsController');

const router = express.Router();

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     description: Fetch all products from the database.
 *     responses:
 *       200:
 *         description: A list of all products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   productId:
 *                     type: integer
 *                     description: The unique ID of the product.
 *                     example: 1
 *                   productName:
 *                     type: string
 *                     description: The name of the product.
 *                     example: Nike Air Max
 *                   price:
 *                     type: number
 *                     description: The price of the product.
 *                     example: 120.99
 *                   description:
 *                     type: string
 *                     description: A brief description of the product.
 *                     example: High-quality running shoes
 *                   productStatus:
 *                     type: integer
 *                     description: The availability status of the product.
 *                     example: 1
 *                   categoryId:
 *                     type: integer
 *                     description: The category ID of the product.
 *                     example: 2
 *       500:
 *         description: Server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Failed to fetch products
 */
router.get('/', getAllProducts);

module.exports = router;
