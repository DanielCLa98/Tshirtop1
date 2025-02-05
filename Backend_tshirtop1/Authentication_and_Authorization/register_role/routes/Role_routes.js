const express = require('express');
const { createRole } = require('../controllers/Register_Role_Controller');
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Role:
 *       type: object
 *       required:
 *         - role_name
 *         - description
 *         - status
 *       properties:
 *         role_name:
 *           type: string
 *           description: Role name
 *         description:
 *           type: string
 *           description: Role description
 *         status:
 *           type: boolean
 *           description: Role status
 *       example:
 *         role_name: Administrator
 *         description: Full system access
 *         status: true
 *
 * securitySchemes:
 *   bearerAuth:
 *     type: http
 *     scheme: bearer
 *     bearerFormat: JWT
 */

/**
 * @swagger
 * /register/role:
 *   post:
 *     summary: Create a new role (JWT protected route)
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Role'
 *     responses:
 *       201:
 *         description: Role created successfully
 *       400:
 *         description: Invalid data
 *       401:
 *         description: Missing or invalid token
 *       500:
 *         description: Internal server error
 */

router.post('/role', authenticateToken, createRole);

module.exports = router;
