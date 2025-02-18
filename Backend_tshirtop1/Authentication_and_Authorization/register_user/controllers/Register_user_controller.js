const User = require('../models/User');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    try {
        const { user_name, first_name, middle_name, lastname, email, password, id_role } = req.body;

        // Validar si faltan campos
        if (!user_name || !first_name || !lastname || !email || !password || !id_role) {
            return res.status(400).json({ message: 'The fields user name, first name, last name, email, password, role are mandatory.' });
        }

        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ where: { email, user_name } });
        if (existingUser) {
            return res.status(400).json({ message: 'The email and username are already in use.' });
        }

        // Hash del password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear nuevo usuario
        const newUser = await User.create({
            user_name,
            first_name,
            middle_name,
            lastname,
            email,
            password: hashedPassword,
            id_role,
        });

        // Respuesta exitosa
        res.status(201).json({ message: 'User successfully registered.', user: newUser });
    } catch (error) {
        // Error en el servidor
        res.status(500).json({ message: 'Error when registering the user.', error: error.message });
    }
};

module.exports = {
    registerUser
};