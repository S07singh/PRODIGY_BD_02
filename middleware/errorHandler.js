const errorHandler = (err, req, res, next) => {
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            status: 'error',
            message: Object.values(err.errors).map(error => error.message)
        });
    }
    
    if (err.code === 11000) {
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