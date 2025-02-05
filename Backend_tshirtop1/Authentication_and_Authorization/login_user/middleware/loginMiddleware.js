const jwt = require('jsonwebtoken');
const getJwtSecret = require('../config/jwtSecret');
const User = require('../models/User');
const Role = require('../models/Role');

async function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied.' });
    }

    try {
        const JWT_SECRET = getJwtSecret();
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log('Decoded token:', decoded);

        const user = await User.findByPk(decoded.user_id, { 
            include: { model: Role, as: 'role' } 
        });

        if (!user) {
            return res.status(403).json({ message: 'User not found.' });
        }

        req.user = user; 
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        res.status(403).json({ message: 'Invalid or expired token.' });
    }
}

function authRole(...allowedRoles) {
    return (req, res, next) => {
        if (!req.user || !allowedRoles.includes(req.user.role.role_name)) {
            console.log('Role not allowed:', req.user?.role?.role_name);
            return res.status(403).json({ message: 'You do not have access to this route.' });
        }
        next();
    };
}

module.exports = {
    authenticateToken,
    authRole
};
