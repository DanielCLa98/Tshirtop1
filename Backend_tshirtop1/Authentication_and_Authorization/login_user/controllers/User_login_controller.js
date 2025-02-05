const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const getJwtSecret = require('../config/jwtSecret');

const jwtSecret = getJwtSecret();

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'User email not found.' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Incorrect password.' });
        }

        const token = jwt.sign(
            { user_id: user.user_id, role_id: user.role_id },
            jwtSecret,
            { expiresIn: '1h' }
        );
        res.status(200).json({ message: 'Successful login', token });

    } catch (error) {
        res.status(500).json({ message: 'Error logging in.', error: error.message });
    }
};

module.exports = {
    loginUser
};
