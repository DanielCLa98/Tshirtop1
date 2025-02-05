const express = require('express');
const { registerUser } = require('../controllers/Register_user_controller');
const routes = express.Router();

/**
 * @swagger
 * /register/user:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_name:
 *                 type: string
 *                 example: usuario123
 *               first_name:
 *                 type: string
 *                 example: Juan
 *               middle_name:
 *                 type: string
 *                 example: David (optional)
 *               lastname:
 *                 type: string
 *                 example: Pérez
 *               email:
 *                 type: string
 *                 example: juan.perez@example.com
 *               password:
 *                 type: string
 *                 example: contraseña123
 *     responses:
 *       201:
 *         description: User successfully registered.
 *       400:
 *         description: Error in input data.
 *       500:
 *         description: Error when registering the user.
 */
routes.post('/user', registerUser);

module.exports = routes;
