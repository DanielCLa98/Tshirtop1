const Role = require('../models/Role');

const getRoleAll = async (req, res) => {
    try {
        const getAllRoles = await Role.findAll();
        res.status(200).json(getAllRoles);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los roles',
            error: error.message,
        });
    }
};

const getRolById = async (req, res) => {
    const { id } = req.params;
    try {
        const getRoleById = await Role.findByPk(id);
        if (!getRoleById) {
            return res.status(404).json({
                message: 'Rol no encontrado'
            });
        }
        res.status(200).json(getRoleById);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener el rol',
            error: error.message,
        });
    }
};

module.exports = {
    getRoleAll,
    getRolById,
};