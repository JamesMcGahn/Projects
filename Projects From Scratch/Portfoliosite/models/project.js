import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Add a Title'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Add a Description'],
        trim: true,
    },
    stack: [{ type: String, required: true }],
    imageUrl: {
        type: String,
        required: [true, 'Add a Image Url'],
        trim: true,
    },
    gitUrl: {
        type: String,
        required: [true, 'Add a Image Url'],
        trim: true,
    },
    liveUrl: {
        type: String,
        required: [true, 'Add a Image Url'],
        trim: true,
    },
})

module.exports = mongoose.models.Project ? mongoose.models.Project : mongoose.model('Project', ProjectSchema)