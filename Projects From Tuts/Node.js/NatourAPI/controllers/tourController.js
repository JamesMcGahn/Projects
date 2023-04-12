const Tour = require('../models/toursModel');

exports.getAllTours = async (req, res) => {
  // query build
  const queryObject = { ...req.query };
  const excludedFields = ['page', 'sort', 'limit', 'fields'];
  excludedFields.forEach((field) => delete queryObject[field]);
  // Filter query
  let queryString = JSON.stringify(queryObject);
  queryString = queryString.replace(
    /\b(gte|gt|lte|lt)\b/g,
    (match) => `$${match}`,
  );

  let query = Tour.find(JSON.parse(queryString));

  // Sort Query
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');

    query = query.sort(sortBy);
  } else {
    query = query.sort('-createAt');
  }

  // Field Limitings
  if (req.query.fields) {
    const fields = req.query.fields.split(',').join(' ');
    query = query.select(fields);
  } else {
    query = query.select('-__v');
  }

  // execute query
  const tours = await query;

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      tours,
    },
  });
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (e) {
    res.status(404).json({
      status: 'failure',
      message: e,
    });
  }
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
  } catch (e) {
    res.status(400).json({
      status: 'failure',
      message: e,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      status: 'success',
      data: {
        tour: updatedTour,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: 'failure',
      message: e,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (e) {
    res.status(400).json({
      status: 'failure',
      message: e,
    });
  }
};
