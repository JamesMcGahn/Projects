const Tour = require('../models/tourModel');

exports.checkBody = (req, res, next) => {
    if (!req.body || !req.body.name || !req.body.price) {
        return res.status(400).json({
            status: 'fail',
            message: 'Missing name or price',
        });
    }
    next();
};

exports.getAllTours = (req, res) => {
    res.status(200).json({
        success: true,
    });
};

exports.createTour = (req, res) => {
    res.status(201).json({
        status: 'success',
        data: {},
    });
};

exports.getTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {},
    });
};

exports.updateTour = (req, res) => {
    res.status(200).json({
        status: 'success',
    });
};

exports.deleteTour = (req, res) => {
    res.status(200).json({
        status: 'success',
    });
};
