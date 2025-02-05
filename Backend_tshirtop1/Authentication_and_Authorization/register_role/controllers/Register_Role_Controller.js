const jwt = require('jsonwebtoken');
const getJwtSecret = require('../config/jwtSecret');
const Role = require('../models/Role');

const validateRoleData = (roleData) => {
  const { role_name, description, status } = roleData;
  if (!role_name || !description || status === undefined) {
    throw new Error('Role name, description, and status are required.');
  }
};

const createRole = async (req, res) => {
  try {
    validateRoleData(req.body);

    const { role_name, description, status } = req.body;

    const existingRole = await Role.findOne({where: {role_name}});
        if(existingRole){
            return res.status(400).json({message: 'The role are already in use.'});
        }

    const newRole = await Role.create({ role_name, description, status });

    const jwtSecret = getJwtSecret();
    const token = jwt.sign(
      { id_role: newRole.id_role, role_name: newRole.role_name },
      jwtSecret,
      { expiresIn: '1h' }
    );

    return res.status(201).json({
      message: 'Role created successfully.',
      role: newRole,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error creating role.',
      error: error.message,
    });
  }
};

module.exports = { createRole };
