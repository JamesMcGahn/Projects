const Tour = require('../models/tourModel');

exports.getAllTours = (req, res) => {
    res.status(200).json({
        success: true,
    });
};

exports.createTour = async (req, res) => {
    try {
        const newTour = await Tour.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failure',
            data: {
                message: 'There was a problem creating the tour',
            },
        });
    }

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
