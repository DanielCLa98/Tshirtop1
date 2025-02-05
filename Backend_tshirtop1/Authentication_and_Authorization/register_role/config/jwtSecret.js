require('dotenv').config();

const getJwtSecret = () => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined in the environment variables.");
    }
    return process.env.JWT_SECRET;
};

module.exports = getJwtSecret;
