const express = require('express');
const {
    requestPasswordReset,
    verifyRecoveryCode,
    resetPassword,
} = require('../controllers/recoveryPasswordController');
const { validateResetRequest, validateCode, validatePasswordReset } = require('../middleware/ValidationMiddleware');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Password Recovery
 *   description: Endpoints for password recovery
 */

/**
 * @swagger
 * /recovery/forgot:
 *   post:
 *     summary: Request a recovery code
 *     tags: [Password Recovery]
 *     description: Sends a recovery code to the user's email.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *     responses:
 *       200:
 *         description: Recovery code sent to email.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Internal server error.
 */
router.post('/forgot', validateResetRequest, requestPasswordReset);

/**
 * @swagger
 * /recovery/verify:
 *   post:
 *     summary: Verify recovery code
 *     tags: [Password Recovery]
 *     description: Verifies if the recovery code is valid.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               code:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Recovery code successfully verified.
 *       400:
 *         description: Invalid or expired code.
 */
router.post('/verify', validateCode, verifyRecoveryCode);

/**
 * @swagger
 * /recovery/reset:
 *   post:
 *     summary: Reset password
 *     tags: [Password Recovery]
 *     description: Allows a user to reset their password using a recovery code.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               code:
 *                 type: string
 *                 example: "123456"
 *               newPassword:
 *                 type: string
 *                 example: "NewSecurePassword123"
 *     responses:
 *       200:
 *         description: Password successfully reset.
 *       400:
 *         description: Invalid or expired recovery code.
 *       500:
 *         description: Internal server error.
 */
router.post('/reset', validatePasswordReset, resetPassword);

module.exports = router;
