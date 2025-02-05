const validateResetRequest = (req, res, next) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email is required.' });
    next();
};

const validateCode = (req, res, next) => {
    const { email, code } = req.body;
    if (!email || !code) return res.status(400).json({ message: 'Email and code are required.' });
    next();
};

const validatePasswordReset = (req, res, next) => {
    const { email, code, newPassword } = req.body;
    if (!email || !code || !newPassword) return res.status(400).json({ message: 'All fields are required.' });
    next();
};

module.exports = { validateResetRequest, validateCode, validatePasswordReset };
