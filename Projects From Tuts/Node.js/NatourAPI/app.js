const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.json());


const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

const getAllTours = (req, res) => {
    res.status(200).json({
        success: true,
        results: tours.length,
        data: {
            tours: tours
        }
    })
}

const createTours = (req, res) => {
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body)
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        })
    })
}

const getTour = (req, res) => {
    const id = req.params.id * 1
    const tour = tours.find(el => el.id === id)
    res.status(200).json({
        status: 'success',
        data: {
            tour: tour
        }
    })
}

const updateTour = (req, res) => {
    res.status(200).json({
        status: 'success'
    })
}

const deleteTour = (req, res) => {
    res.status(200).json({
        status: 'success'
    })
}

app.route('/api/v1/tours')
    .get(getAllTours)
    .post(createTours)

app.route('/api/v1/tours/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour)

const port = 3000;
app.listen(port, () => {
    console.log(`app firing on ${port}`);
})

