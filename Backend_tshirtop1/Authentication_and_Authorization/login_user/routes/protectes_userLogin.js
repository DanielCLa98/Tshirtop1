const express = require('express');
const axios = require('axios');
const { loginUser } = require('../controllers/User_login_controller');
const { authenticateToken, authRole } = require('../middleware/loginMiddleware');
const router = express.Router();

/**
 * @swagger
 * /protected/login:
 *   post:
 *     summary: User login
 *     description: Allows users to log in and obtain a JWT token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "admin@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Successful login with JWT token.
 *       400:
 *         description: All fields are required.
 *       401:
 *         description: Incorrect password.
 *       404:
 *         description: User email not found.
 */
router.post('/login', loginUser);

/**
 * @swagger
 * /protected/admin:
 *   get:
 *     summary: Admin access and external service request
 *     description: Verifies admin role and then makes a request to the role registration service.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Response from the external service.
 *       403:
 *         description: You do not have access to this route.
 *       500:
 *         description: Error connecting to the external service.
 */
router.get('/admin', authenticateToken, authRole('admin'), async (req, res) => {
    try {
        const token = req.headers['authorization'];

        const response = await axios.get('http://localhost:3000/register/role', {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });

        res.json({
            message: 'Access granted, data retrieved from the external service:',
            data: response.data
        });

    } catch (error) {
        console.error('Error connecting to the external service:', error.message);
        res.status(500).json({ message: 'Error connecting to the external service.', error: error.message });
    }
});

module.exports = router;
