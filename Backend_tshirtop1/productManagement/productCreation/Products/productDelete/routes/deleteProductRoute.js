const express = require('express');
const { deleteProduct } = require('../controllers/deleteProductController');

const router = express.Router();

/**
 * @swagger
 * /api/products/delete/{productId}:
 *   delete:
 *     summary: Delete a product by ID
 *     description: Deletes a product from the database using its unique ID.
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the product to delete.
 *     responses:
 *       200:
 *         description: Product deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product deleted successfully
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
router.delete('/:productId', deleteProduct);

module.exports = router;
