const User = require('../models/User');

exports.createUser = async (req, res, next) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({
            status: 'success',
            data: user
        });
    } catch (err) {
        next(err);
    }
};

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({
            status: 'success',
         //   results: users.length,
            data: users
        });
    } catch (err) {
        next(err);
    }
};

exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: 'User not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: user
        });
    } catch (err) {
        next(err);
    }
};

exports.updateUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: 'User not found'
            });
        }

        Object.keys(req.body).forEach(update => user[update] = req.body[update]);
        await user.save();

        res.status(200).json({
            status: 'success',
            data: user
        });
    } catch (err) {
        next(err);
    }
};


exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: 'User not found'
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'User deleted successfully'
        });
    } catch (err) {
        next(err);
    }
};
