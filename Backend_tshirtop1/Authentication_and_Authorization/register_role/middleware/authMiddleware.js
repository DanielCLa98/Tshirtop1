const jwt = require('jsonwebtoken');
const getJwtSecret = require('../config/jwtSecret');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: 'Access denied. Token not provided.' });
  }

  const token = authHeader.split(' ')[1]; // Extract token from "Bearer <token>"
  const jwtSecret = getJwtSecret();

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token.' });
    }
    req.user = decoded;
    next();
  });
};

module.exports = authenticateToken;
