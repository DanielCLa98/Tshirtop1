const { generateRecoveryCode, storeRecoveryCode, validateCodeExpiration, removeRecoveryCode } = require('../services/recoveryService');
const { sendRecoveryEmail } = require('../services/EmailService');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const requestPasswordReset = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) return res.status(404).json({ message: 'User not found.' });

        const recoveryCode = generateRecoveryCode();
        storeRecoveryCode(email, recoveryCode);

        await sendRecoveryEmail(email, recoveryCode);
        res.json({ message: 'Recovery code sent to email.' });

    } catch (error) {
        res.status(500).json({ message: 'Error requesting password reset.', error: error.message });
    }
};

const verifyRecoveryCode = (req, res) => {
    const { email, code } = req.body;
    const isValid = validateCodeExpiration(email, code);

    if (!isValid) {
        return res.status(400).json({ message: 'Invalid or expired recovery code.' });
    }

    res.json({ message: 'Recovery code verified. You can now reset your password' });
};

const resetPassword = async (req, res) => {
    try {
        const { email, code, newPassword } = req.body;

        if (!validateCodeExpiration(email, code)) {
            return res.status(400).json({ message: 'Invalid or expired recovery code' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await User.update({ password: hashedPassword }, { where: { email } });

        removeRecoveryCode(email);
        res.json({ message: 'Password successfully reset' });

    } catch (error) {
        res.status(500).json({ message: 'Error resetting password', error: error.message });
    }
};

module.exports = { requestPasswordReset, verifyRecoveryCode, resetPassword };
