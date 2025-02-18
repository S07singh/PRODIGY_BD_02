const { ValidationError, UniqueConstraintError } = require('sequelize');

const errorHandler = (err, req, res, next) => {
    if (err instanceof ValidationError) {
        return res.status(400).json({
            status: 'error',
            message: err.errors.map(e => e.message)
        });
    }
    
    if (err instanceof UniqueConstraintError) {
        return res.status(400).json({
            status: 'error',
            message: 'Email already exists'
        });
    }

    console.error(err);
    res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
};

module.exports = errorHandler;