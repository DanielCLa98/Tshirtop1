const User = require('../models/User');
const bcrypt = require('bcrypt');


const registerUser = async(req, res) => {
    try {
        const {user_name, first_name, middle_name, 
                lastname, email, password, role_id} = req.body;
        if (!user_name, !first_name, !lastname, !email,
            !password, !role_id) {
            return res.status(400).json({message: 'The fields user name, first name, last name, email, password, role are mandatory.'});
        }

        const existingUser = await User.findOne({where: {email, user_name}});
        if(existingUser){
            return res.status(400).json({message: 'The email and username are already in use.'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            user_name,
            first_name,
            middle_name,
            lastname,
            email,
            password: hashedPassword,
            role_id,
        });

        res.status(201).json({message: 'User successfully registered.', user: newUser});
    } catch (error) {
        res.status(500).json({message:'Error when registering the user.', error: error.message})
    }
};

module.exports = {
    registerUser
};