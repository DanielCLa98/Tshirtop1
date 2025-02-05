const recoveryCodes = new Map();

const generateRecoveryCode = () => Math.floor(100000 + Math.random() * 900000).toString();

const storeRecoveryCode = (email, code) => {
    const expirationTime = Date.now() + 10 * 60 * 1000;
    recoveryCodes.set(email, { code, expiresAt: expirationTime });
};

const validateCodeExpiration = (email, code) => {
    if (!recoveryCodes.has(email)) return false;

    const storedData = recoveryCodes.get(email);
    if (storedData.expiresAt < Date.now()) {
        recoveryCodes.delete(email);
        return false;
    }

    return storedData.code === code;
};

const removeRecoveryCode = (email) => recoveryCodes.delete(email);

module.exports = { generateRecoveryCode, storeRecoveryCode, validateCodeExpiration, removeRecoveryCode };
